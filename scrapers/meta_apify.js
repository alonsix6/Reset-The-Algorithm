#!/usr/bin/env node
/**
 * Meta/Facebook Scraper - Apify
 *
 * Obtiene posts y engagement de páginas públicas de Facebook via Apify.
 * Actor: apify/facebook-posts-scraper
 *
 * Uso:
 *   node meta_apify.js --client=ucsp
 */

import { ApifyClient } from 'apify-client';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = 'apify/facebook-posts-scraper';

// ============================================================================
// ARGUMENTOS
// ============================================================================
function parseArgs() {
  const args = process.argv.slice(2);
  const options = { client: 'ucsp' };
  args.forEach(arg => {
    if (arg.startsWith('--client=')) options.client = arg.split('=')[1];
  });
  return options;
}

// ============================================================================
// CARGAR CONFIG
// ============================================================================
async function loadClientConfig(clientName) {
  const configPath = path.join(__dirname, 'config', `${clientName}.json`);
  try {
    const content = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Config no encontrada: ${configPath}`);
    process.exit(1);
  }
}

// ============================================================================
// SCRAPER PRINCIPAL
// ============================================================================
async function scrapeMetaPosts(clientConfig) {
  console.log(`\n📘 Meta/Facebook Scraper - ${clientConfig.client}`);
  console.log('='.repeat(50));

  if (!APIFY_TOKEN) {
    console.error('\n❌ ERROR: APIFY_TOKEN no configurado');
    process.exit(1);
  }

  // Páginas a scrapear (configurables por cliente)
  const facebookPages = clientConfig.facebook_pages || [
    'https://www.facebook.com/ucaborequipa',  // UCSP oficial (si existe)
  ];

  if (facebookPages.length === 0) {
    console.log('⚠️ No hay páginas de Facebook configuradas');
    console.log('   Agrega "facebook_pages" al config del cliente');

    // Guardar datos vacíos
    const emptyData = createEmptyData(clientConfig);
    await saveResults(emptyData);
    return emptyData;
  }

  console.log(`📍 Páginas a analizar: ${facebookPages.length}`);
  facebookPages.forEach(p => console.log(`   - ${p}`));

  const client = new ApifyClient({ token: APIFY_TOKEN });

  const input = {
    startUrls: facebookPages.map(url => ({ url })),
    maxPosts: 30,  // Posts por página
    maxComments: 10,  // Comentarios por post
    commentsMode: 'RANKED_UNFILTERED'
  };

  console.log(`\n📤 Input para Apify:`);
  console.log(JSON.stringify(input, null, 2));

  try {
    console.log('\n🚀 Iniciando actor de Apify...');
    const run = await client.actor(ACTOR_ID).start(input);
    console.log(`   Run ID: ${run.id}`);

    console.log('\n⏳ Esperando que termine (máx 5 min)...');
    const finishedRun = await client.run(run.id).waitForFinish({
      waitSecs: 300
    });

    if (finishedRun.status !== 'SUCCEEDED') {
      throw new Error(`Actor terminó con estado: ${finishedRun.status}`);
    }

    console.log(`\n✅ Actor completado`);

    const { items } = await client.dataset(finishedRun.defaultDatasetId).listItems();
    console.log(`📊 Posts obtenidos: ${items.length}`);

    const data = transformData(items, clientConfig);
    await saveResults(data);

    return data;

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    throw error;
  }
}

// ============================================================================
// TRANSFORMAR DATOS
// ============================================================================
function transformData(items, clientConfig) {
  console.log('\n🔄 Transformando datos...');

  const pages = [];
  const topicCounts = {};

  // Agrupar por página
  const postsByPage = {};

  items.forEach(post => {
    const pageName = post.pageName || post.authorName || 'Unknown Page';

    if (!postsByPage[pageName]) {
      postsByPage[pageName] = [];
    }
    postsByPage[pageName].push(post);

    // Extraer topics de los textos
    const text = (post.text || post.message || '').toLowerCase();
    const topics = extractTopics(text);
    topics.forEach(topic => {
      topicCounts[topic] = (topicCounts[topic] || 0) + 1;
    });
  });

  // Construir datos por página
  Object.entries(postsByPage).forEach(([pageName, posts]) => {
    const totalReactions = posts.reduce((sum, p) => sum + (p.reactions || p.likesCount || 0), 0);
    const totalComments = posts.reduce((sum, p) => sum + (p.comments || p.commentsCount || 0), 0);
    const totalShares = posts.reduce((sum, p) => sum + (p.shares || p.sharesCount || 0), 0);

    pages.push({
      name: pageName,
      source: 'Facebook Public Page',
      posts_analyzed: posts.length,
      total_reactions: totalReactions,
      total_comments: totalComments,
      total_shares: totalShares,
      avg_engagement: posts.length > 0 ? Math.round((totalReactions + totalComments + totalShares) / posts.length) : 0,
      top_posts: posts.slice(0, 3).map(p => ({
        text: (p.text || p.message || '').substring(0, 100) + '...',
        reactions: p.reactions || p.likesCount || 0,
        comments: p.comments || p.commentsCount || 0,
        date: p.time || p.timestamp || 'Unknown'
      }))
    });
  });

  // Top topics agregados
  const aggregatedTopics = Object.entries(topicCounts)
    .map(([topic, count]) => ({
      topic,
      mentions: count,
      engagement_score: Math.min(10, count / 2),
      growth: '+0%',
      sentiment: 'positive'
    }))
    .sort((a, b) => b.mentions - a.mentions)
    .slice(0, 10);

  console.log(`   ✅ Páginas: ${pages.length}`);
  console.log(`   ✅ Topics: ${aggregatedTopics.length}`);

  return {
    timestamp: new Date().toISOString(),
    source: 'Meta/Facebook via Apify',
    region: clientConfig.region,
    category: 'Education',
    client: `${clientConfig.client} - ${clientConfig.clientFullName}`,
    pages,
    aggregatedTopics,
    metadata: {
      method: 'Apify apify/facebook-posts-scraper',
      note: 'Datos reales de páginas públicas de Facebook',
      timeframe: 'Last 30 days',
      posts_fetched: items.length
    }
  };
}

function extractTopics(text) {
  const topics = [];
  const keywords = [
    'admisión', 'admision', 'becas', 'carreras', 'ingeniería', 'ingenieria',
    'medicina', 'derecho', 'examen', 'postulantes', 'universidad', 'ucsp',
    'matricula', 'matrícula', 'pregrado', 'posgrado', 'diplomado'
  ];

  keywords.forEach(kw => {
    if (text.includes(kw)) {
      topics.push(kw.charAt(0).toUpperCase() + kw.slice(1));
    }
  });

  return topics;
}

function createEmptyData(clientConfig) {
  return {
    timestamp: new Date().toISOString(),
    source: 'Meta/Facebook via Apify',
    region: clientConfig.region,
    category: 'Education',
    client: `${clientConfig.client} - ${clientConfig.clientFullName}`,
    pages: [],
    aggregatedTopics: [],
    metadata: {
      method: 'Apify apify/facebook-posts-scraper',
      note: 'No hay páginas de Facebook configuradas. Agrega facebook_pages al config.',
      posts_fetched: 0
    }
  };
}

// ============================================================================
// GUARDAR RESULTADOS
// ============================================================================
async function saveResults(data) {
  const dataDir = path.join(__dirname, '../data/meta');
  const publicDir = path.join(__dirname, '../public/data/meta');

  await fs.mkdir(dataDir, { recursive: true });
  await fs.mkdir(publicDir, { recursive: true });

  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const jsonData = JSON.stringify(data, null, 2);

  await fs.writeFile(path.join(dataDir, `meta_${timestamp}.json`), jsonData);
  await fs.writeFile(path.join(dataDir, 'latest.json'), jsonData);
  await fs.writeFile(path.join(publicDir, 'latest.json'), jsonData);

  console.log('\n💾 Archivos guardados:');
  console.log(`   📁 data/meta/meta_${timestamp}.json`);
  console.log(`   📁 data/meta/latest.json`);
  console.log(`   📁 public/data/meta/latest.json`);

  if (data.aggregatedTopics.length > 0) {
    console.log('\n🔥 Top Topics:');
    data.aggregatedTopics.slice(0, 5).forEach((t, i) => {
      console.log(`   ${i + 1}. ${t.topic}: ${t.mentions} menciones`);
    });
  }
}

// ============================================================================
// MAIN
// ============================================================================
async function main() {
  const options = parseArgs();

  console.log('📘 Meta/Facebook Scraper (Apify)');
  console.log(`   Cliente: ${options.client}`);

  try {
    const clientConfig = await loadClientConfig(options.client);
    await scrapeMetaPosts(clientConfig);
    console.log('\n✅ Scraping completado');
    process.exit(0);
  } catch (error) {
    console.error(`\n❌ Error fatal: ${error.message}`);
    process.exit(1);
  }
}

main();
