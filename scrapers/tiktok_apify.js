#!/usr/bin/env node
/**
 * TikTok Trends Scraper - Apify
 *
 * Obtiene tendencias reales de TikTok via Apify.
 * Actor: clockworks/tiktok-trends-scraper
 *
 * Uso:
 *   node tiktok_apify.js --client=ucsp
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
const ACTOR_ID = 'clockworks/tiktok-trends-scraper';

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
async function scrapeTikTokTrends(clientConfig) {
  console.log(`\n🎵 TikTok Trends Scraper - ${clientConfig.client}`);
  console.log('='.repeat(50));
  console.log(`📍 Región: ${clientConfig.region}`);
  console.log('='.repeat(50));

  if (!APIFY_TOKEN) {
    console.error('\n❌ ERROR: APIFY_TOKEN no configurado');
    process.exit(1);
  }

  const client = new ApifyClient({ token: APIFY_TOKEN });

  // Input para TikTok Trends Scraper
  const input = {
    country: clientConfig.region || 'PE',  // Peru
    hashtags: true,      // Obtener hashtags trending
    songs: true,         // Obtener canciones trending
    creators: true,      // Obtener creadores trending
    videos: false,       // No necesitamos videos individuales
    maxItems: 50
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
    console.log(`📊 Items obtenidos: ${items.length}`);

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

  const trends = {
    hashtags: [],
    sounds: [],
    creators: []
  };

  items.forEach(item => {
    // Hashtags
    if (item.type === 'hashtag' || item.hashtag || item.challengeId) {
      trends.hashtags.push({
        hashtag: item.hashtag || item.title || item.name || 'Unknown',
        views: formatNumber(item.views || item.videoCount || 0),
        posts: formatNumber(item.postsCount || item.videoCount || 0),
        growth: item.growth || '+0%',
        relevanceScore: item.rank ? 100 - item.rank : 85,
        region: clientConfig.region,
        category: item.category || 'General'
      });
    }

    // Sonidos/Música
    if (item.type === 'song' || item.music || item.soundId) {
      trends.sounds.push({
        soundName: item.title || item.musicTitle || item.name || 'Unknown',
        author: item.author || item.musicAuthor || 'Unknown',
        usage: formatNumber(item.videoCount || item.usage || 0),
        growth: item.growth || '+0%',
        category: 'Music'
      });
    }

    // Creadores
    if (item.type === 'creator' || item.uniqueId || item.creatorId) {
      trends.creators.push({
        username: item.uniqueId || item.username || item.name || 'Unknown',
        followers: formatNumber(item.followers || item.followerCount || 0),
        engagement: item.engagementRate || '0%',
        category: item.category || 'General'
      });
    }
  });

  // Si no se categorizaron los items, intentar extraer de estructura genérica
  if (trends.hashtags.length === 0 && items.length > 0) {
    // Asumir que son hashtags si tienen ciertos campos
    items.forEach((item, idx) => {
      if (item.title || item.name) {
        trends.hashtags.push({
          hashtag: `#${(item.title || item.name).replace(/^#/, '')}`,
          views: formatNumber(item.views || item.viewCount || 0),
          posts: formatNumber(item.videoCount || item.postCount || 0),
          growth: '+0%',
          relevanceScore: 100 - idx,
          region: clientConfig.region,
          category: 'Trending'
        });
      }
    });
  }

  console.log(`   ✅ Hashtags: ${trends.hashtags.length}`);
  console.log(`   ✅ Sounds: ${trends.sounds.length}`);
  console.log(`   ✅ Creators: ${trends.creators.length}`);

  return {
    timestamp: new Date().toISOString(),
    source: 'TikTok Trends via Apify',
    region: clientConfig.region,
    category: 'Education',
    client: `${clientConfig.client} - ${clientConfig.clientFullName}`,
    trends,
    metadata: {
      method: 'Apify clockworks/tiktok-trends-scraper',
      note: 'Datos reales de TikTok Trends Discovery',
      timeframe: 'Last 30 days',
      items_fetched: items.length
    }
  };
}

function formatNumber(num) {
  if (!num) return '0';
  if (typeof num === 'string') return num;

  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toString();
}

// ============================================================================
// GUARDAR RESULTADOS
// ============================================================================
async function saveResults(data) {
  const dataDir = path.join(__dirname, '../data/tiktok');
  const publicDir = path.join(__dirname, '../public/data/tiktok');

  await fs.mkdir(dataDir, { recursive: true });
  await fs.mkdir(publicDir, { recursive: true });

  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const jsonData = JSON.stringify(data, null, 2);

  await fs.writeFile(path.join(dataDir, `tiktok_${timestamp}.json`), jsonData);
  await fs.writeFile(path.join(dataDir, 'latest.json'), jsonData);
  await fs.writeFile(path.join(publicDir, 'latest.json'), jsonData);

  console.log('\n💾 Archivos guardados:');
  console.log(`   📁 data/tiktok/tiktok_${timestamp}.json`);
  console.log(`   📁 data/tiktok/latest.json`);
  console.log(`   📁 public/data/tiktok/latest.json`);

  // Top hashtags
  if (data.trends.hashtags.length > 0) {
    console.log('\n🔥 Top Hashtags:');
    data.trends.hashtags.slice(0, 5).forEach((h, i) => {
      console.log(`   ${i + 1}. ${h.hashtag}: ${h.views} views`);
    });
  }
}

// ============================================================================
// MAIN
// ============================================================================
async function main() {
  const options = parseArgs();

  console.log('🎵 TikTok Trends Scraper (Apify)');
  console.log(`   Cliente: ${options.client}`);

  try {
    const clientConfig = await loadClientConfig(options.client);
    await scrapeTikTokTrends(clientConfig);
    console.log('\n✅ Scraping completado');
    process.exit(0);
  } catch (error) {
    console.error(`\n❌ Error fatal: ${error.message}`);
    process.exit(1);
  }
}

main();
