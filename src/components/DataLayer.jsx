import { useState, useEffect } from 'react';
import { Search, TrendingUp, Video, Share2, Dumbbell, RefreshCw, ChevronDown, ChevronUp, BarChart3, Info, Music, Target, DollarSign, Layers, Lightbulb, Users, Globe, MapPin, Eye, Clock, MousePointer, Smartphone, Monitor, ExternalLink } from 'lucide-react';

export default function DataLayer() {
  const [trendsData, setTrendsData] = useState(null);
  const [tiktokData, setTiktokData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [ga4Data, setGA4Data] = useState(null);
  const [mlData, setMLData] = useState(null);
  const [mlInsights, setMLInsights] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(null);

  const [expandedSections, setExpandedSections] = useState({
    trends: false,
    tiktok: false,
    meta: false,
    ga4: false
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsRefreshing(true);
    try {
      const basePath = `/data`;
      const [trends, tiktok, meta, ga4, mlPredictions, mlInsightsData] = await Promise.all([
        fetch(`${basePath}/trends/latest.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/tiktok/latest.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/meta/latest.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/mock/ga4_data.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/ml/predictions.json`).then(r => r.json()).catch(() => null),
        fetch(`${basePath}/ml/insights.json`).then(r => r.json()).catch(() => null)
      ]);

      setTrendsData(trends);
      setTiktokData(tiktok);
      setMetaData(meta);
      setGA4Data(ga4);
      setMLData(mlPredictions);
      setMLInsights(mlInsightsData);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getInsightIcon = (type) => {
    const iconMap = {
      trend: TrendingUp,
      social: Users,
      tiktok: Video,
      intent: Target,
      budget: DollarSign,
      multi_source: Layers
    };
    return iconMap[type] || Lightbulb;
  };

  // Calculate scores for fitness metrics
  const calculateScores = () => {
    if (mlData?.scores?.individual) {
      return {
        overall: mlData.scores.overall?.toFixed(1) || '8.2',
        search: mlData.scores.individual.search?.final?.toFixed(1) || '8.5',
        trend: mlData.scores.individual.trend?.final?.toFixed(1) || '7.8',
        social: mlData.scores.individual.social?.final?.toFixed(1) || '8.0',
        intent: mlData.scores.individual.intent?.final?.toFixed(1) || '8.8',
        isML: true,
        weights: mlData.scores.weights
      };
    }

    // Mock fitness scores
    return {
      overall: '8.2',
      search: '8.5',
      trend: '7.8',
      social: '8.0',
      intent: '8.8',
      isML: false
    };
  };

  const scores = calculateScores();

  // Generate fitness insights - separate regular insights from multi-source
  const generateInsights = () => {
    if (mlInsights?.insights?.length > 0) {
      return mlInsights.insights.slice(0, 5).map(insight => ({
        source: insight.source || 'ML Analysis',
        IconComponent: getInsightIcon(insight.type),
        text: `${insight.title}. ${insight.description}`,
        priority: insight.priority,
        action: insight.action,
        isML: true
      }));
    }

    // Fallback fitness insights
    return [
      {
        source: 'Google Trends',
        IconComponent: Search,
        text: '"Gimnasio Lima" lidera búsquedas con 82/100 de interés. Búsquedas de "gimnasio enero" aumentaron +85% esta semana - pico estacional de propósitos.',
      },
      {
        source: 'TikTok',
        IconComponent: Video,
        text: '#gymtok alcanza 2.5B views globales. Contenido de transformación tiene engagement 3x superior. FitZone tiene oportunidad de capitalizar trend.',
      },
      {
        source: 'Meta',
        IconComponent: Share2,
        text: '"Fitness Perú" genera 45K menciones/semana con engagement 8.5/10. Smart Fit domina awareness, oportunidad en segmento mid-premium.',
      },
      {
        source: 'GA4',
        IconComponent: BarChart3,
        text: '68,500 sesiones generaron 1,850 trials (2.7% conversión). Página "/membresías" es la más efectiva con 4:12 de tiempo promedio.',
      },
    ];
  };

  // Multi-source insight (separate)
  const multiSourceInsight = {
    source: 'Análisis Multi-Fuente',
    IconComponent: Layers,
    text: 'Las 4 fuentes confirman alta demanda estacional (Enero). La combinación de búsquedas rising (+85%), engagement social alto (8.5/10), contenido viral en TikTok y conversiones web en aumento indica momento óptimo para inversión. Oportunidad de capturar usuarios insatisfechos con masificación de Smart Fit mediante posicionamiento mid-premium.',
    recommendation: 'Recomendación: Incrementar presupuesto Meta Ads 20% y lanzar campaña "Propósito 2026" con influencers micro.'
  };

  const insights = generateInsights();

  // Expanded GA4 pages data
  const ga4Pages = [
    { page: '/membresías', title: 'Membresías FitZone', views: 18500, sessions: 15200, avgTime: '4:12', bounceRate: 28, conversions: 425, convRate: 2.80 },
    { page: '/promociones', title: 'Promociones Enero 2026', views: 15600, sessions: 12800, avgTime: '2:58', bounceRate: 25, conversions: 380, convRate: 2.97 },
    { page: '/sedes/miraflores', title: 'FitZone Miraflores', views: 12200, sessions: 9800, avgTime: '3:45', bounceRate: 32, conversions: 185, convRate: 1.89 },
    { page: '/trial-gratis', title: 'Prueba Gratis 7 Días', views: 11200, sessions: 9500, avgTime: '3:38', bounceRate: 22, conversions: 520, convRate: 5.47 },
    { page: '/clases', title: 'Clases Grupales', views: 9800, sessions: 8200, avgTime: '3:22', bounceRate: 35, conversions: 142, convRate: 1.73 },
    { page: '/horarios', title: 'Horarios por Sede', views: 8900, sessions: 7500, avgTime: '2:15', bounceRate: 42, conversions: 85, convRate: 1.13 },
    { page: '/personal-training', title: 'Personal Training', views: 7200, sessions: 5800, avgTime: '4:05', bounceRate: 38, conversions: 68, convRate: 1.17 },
    { page: '/nutrición', title: 'Asesoría Nutricional', views: 5400, sessions: 4200, avgTime: '4:25', bounceRate: 35, conversions: 45, convRate: 1.07 },
    { page: '/blog/transformaciones', title: 'Blog: Transformaciones', views: 4800, sessions: 4100, avgTime: '5:32', bounceRate: 28, conversions: 32, convRate: 0.78 },
    { page: '/app', title: 'App FitZone', views: 3200, sessions: 2800, avgTime: '2:45', bounceRate: 45, conversions: 28, convRate: 1.00 },
  ];

  // Expanded TikTok hashtags data
  const tiktokHashtags = [
    { hashtag: '#gymtok', views: '2.5B', posts: '4.2M', growth: '+45%', region: 'Global', engagement: 8.5 },
    { hashtag: '#transformación', views: '890M', posts: '1.8M', growth: '+62%', region: 'LATAM', engagement: 9.2 },
    { hashtag: '#fitnessperu', views: '125M', posts: '280K', growth: '+38%', region: 'Perú', engagement: 7.8 },
    { hashtag: '#legday', views: '1.2B', posts: '2.8M', growth: '+28%', region: 'Global', engagement: 8.0 },
    { hashtag: '#gymmotivation', views: '950M', posts: '2.1M', growth: '+35%', region: 'Global', engagement: 8.3 },
    { hashtag: '#propósito2026', views: '45M', posts: '95K', growth: '+180%', region: 'LATAM', engagement: 9.5 },
    { hashtag: '#antesdespués', views: '320M', posts: '680K', growth: '+52%', region: 'LATAM', engagement: 9.0 },
    { hashtag: '#gimnasiolima', views: '28M', posts: '62K', growth: '+42%', region: 'Perú', engagement: 7.5 },
  ];

  // Expanded TikTok sounds
  const tiktokSounds = [
    { name: 'NEFFEX - Grateful', type: 'Motivación', usage: '2.1M', trend: '+85%' },
    { name: 'Tevvez - Legend', type: 'Épico', usage: '1.8M', trend: '+72%' },
    { name: 'Bad Bunny - Monaco', type: 'Reggaetón', usage: '3.2M', trend: '+45%' },
    { name: 'Eminem - Lose Yourself', type: 'Hip Hop', usage: '980K', trend: '+38%' },
    { name: 'Phonk - Murder in My Mind', type: 'Phonk', usage: '1.5M', trend: '+95%' },
    { name: 'Grupo 5 - Mix Gym', type: 'Cumbia', usage: '420K', trend: '+120%' },
  ];

  // Expanded Meta topics data
  const metaTopics = [
    { topic: 'Gimnasios Lima', mentions: 45000, engagement: 8.5, sentiment: 72, growth: '+18%', brands: 'Smart Fit, b2, FitZone' },
    { topic: 'Transformaciones Fitness', mentions: 32000, engagement: 9.2, sentiment: 92, growth: '+45%', brands: 'KO Urban, CrossFit' },
    { topic: 'Clases Grupales', mentions: 28000, engagement: 7.8, sentiment: 78, growth: '+12%', brands: 'b2, Sportlife' },
    { topic: 'Personal Training', mentions: 18000, engagement: 8.0, sentiment: 85, growth: '+22%', brands: 'Independientes' },
    { topic: 'Propósitos Año Nuevo', mentions: 52000, engagement: 8.8, sentiment: 88, growth: '+185%', brands: 'Todas' },
    { topic: 'Nutrición Deportiva', mentions: 15000, engagement: 7.5, sentiment: 75, growth: '+15%', brands: 'GNC, Herbalife' },
  ];

  // Meta ad performance
  const metaAdPerformance = [
    { campaign: 'Propósito 2026 - Jóvenes', platform: 'Instagram', reach: 850000, clicks: 12500, ctr: 1.47, cpl: 10.80, status: 'Activo' },
    { campaign: 'Membresía Premium', platform: 'Facebook', reach: 420000, clicks: 5800, ctr: 1.38, cpl: 18.20, status: 'Activo' },
    { campaign: 'Trial Gratis', platform: 'Instagram', reach: 680000, clicks: 15200, ctr: 2.24, cpl: 8.50, status: 'Activo' },
    { campaign: 'Plan Familiar', platform: 'Facebook', reach: 280000, clicks: 3200, ctr: 1.14, cpl: 22.10, status: 'Pausado' },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Score Summary */}
      <div className="bg-fitzone-charcoal rounded-2xl shadow-fitzone-lg p-8 text-white border border-fitzone-purple/20">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-fitzone-purple rounded-xl flex items-center justify-center">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">
                  Capa de Data - Captura de Señales
                </h2>
                <p className="text-fitzone-textGray text-base">
                  Monitoreo en tiempo real del ecosistema digital fitness en Lima
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-fitzone-textGray text-xs uppercase font-semibold mb-1">Score Global</p>
              <p className="text-3xl font-bold text-fitzone-purple">{scores.overall}</p>
              <p className="text-xs text-fitzone-textGray">de 10.0</p>
            </div>
            <button
              onClick={loadData}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 bg-fitzone-purple/20 text-fitzone-purple rounded-lg hover:bg-fitzone-purple/30 transition disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
          </div>
        </div>

        {/* Data Sources Status */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-fitzone-slate rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-fitzone-emerald rounded-full"></div>
            <span className="text-xs text-fitzone-textGray">Google Trends Activo</span>
          </div>
          <div className="flex items-center gap-2 bg-fitzone-slate rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-fitzone-emerald rounded-full"></div>
            <span className="text-xs text-fitzone-textGray">TikTok Activo</span>
          </div>
          <div className="flex items-center gap-2 bg-fitzone-slate rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-fitzone-emerald rounded-full"></div>
            <span className="text-xs text-fitzone-textGray">Meta Activo</span>
          </div>
          <div className="flex items-center gap-2 bg-fitzone-slate rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-fitzone-emerald rounded-full"></div>
            <span className="text-xs text-fitzone-textGray">GA4 Activo</span>
          </div>
          {lastRefresh && (
            <div className="flex items-center gap-2 bg-fitzone-slate rounded-lg px-3 py-2 ml-auto">
              <span className="text-xs text-fitzone-textGray">
                Actualizado: {lastRefresh.toLocaleTimeString('es-PE')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Insights Clave del Mercado */}
      <div className="bg-fitzone-slate rounded-2xl shadow-fitzone-lg p-8 border border-fitzone-purple/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-fitzone-purple rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Insights Clave del Mercado Fitness</h3>
            <p className="text-sm text-fitzone-textGray">Análisis automático multi-fuente</p>
          </div>
        </div>

        {/* Individual Source Insights - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {insights.map((insight, idx) => {
            const colorScheme =
              insight.source === 'Google Trends' ? { bg: 'bg-fitzone-cyan/10', text: 'text-fitzone-cyan', icon: 'bg-fitzone-cyan', badge: 'bg-fitzone-cyan/20 text-fitzone-cyan' } :
              insight.source === 'TikTok' ? { bg: 'bg-fitzone-emerald/10', text: 'text-fitzone-emerald', icon: 'bg-fitzone-emerald', badge: 'bg-fitzone-emerald/20 text-fitzone-charcoal' } :
              insight.source === 'Meta' ? { bg: 'bg-fitzone-purple/10', text: 'text-fitzone-lightPurple', icon: 'bg-fitzone-purple', badge: 'bg-fitzone-purple/20 text-fitzone-lightPurple' } :
              insight.source === 'GA4' ? { bg: 'bg-fitzone-amber/10', text: 'text-fitzone-amber', icon: 'bg-fitzone-amber', badge: 'bg-fitzone-amber/20 text-fitzone-amber' } :
              { bg: 'bg-fitzone-cyan/10', text: 'text-fitzone-cyan', icon: 'bg-fitzone-cyan', badge: 'bg-fitzone-cyan/20 text-fitzone-cyan' };

            const sourceScore =
              insight.source === 'Google Trends' ? scores.search :
              insight.source === 'TikTok' ? scores.trend :
              insight.source === 'Meta' ? scores.social :
              insight.source === 'GA4' ? scores.intent : null;

            const InsightIcon = insight.IconComponent || Lightbulb;

            return (
              <div key={idx} className={`relative ${colorScheme.bg} rounded-xl p-5 border border-fitzone-slate hover:border-fitzone-purple/30 transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${colorScheme.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <InsightIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className={`text-xs font-bold ${colorScheme.text} uppercase tracking-wider`}>{insight.source}</p>
                      {sourceScore && (
                        <span className={`${colorScheme.badge} px-2 py-0.5 rounded-full text-xs font-bold`}>
                          {sourceScore}/10
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-fitzone-lightGray leading-relaxed font-medium">{insight.text}</p>
                  </div>
                </div>
                <div className={`absolute top-0 left-0 w-1 h-full ${colorScheme.icon} rounded-l-xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Multi-Source Analysis - Full Width at Bottom */}
        <div className="relative bg-gradient-to-r from-fitzone-purple/20 to-fitzone-cyan/20 rounded-xl p-6 border border-fitzone-purple/30">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-fitzone-purple to-fitzone-cyan rounded-xl flex items-center justify-center flex-shrink-0">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <p className="text-sm font-bold text-fitzone-lightPurple uppercase tracking-wider">{multiSourceInsight.source}</p>
                <span className="bg-fitzone-purple/30 text-fitzone-lightPurple px-3 py-1 rounded-full text-xs font-bold">
                  Consolidado
                </span>
              </div>
              <p className="text-sm text-fitzone-lightGray leading-relaxed mb-3">{multiSourceInsight.text}</p>
              <div className="bg-fitzone-charcoal/50 rounded-lg p-3 border border-fitzone-purple/20">
                <p className="text-sm text-fitzone-emerald font-semibold flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  {multiSourceInsight.recommendation}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-fitzone-purple to-fitzone-cyan rounded-l-xl"></div>
        </div>
      </div>

      {/* Google Trends Section */}
      <div className="bg-fitzone-slate rounded-xl shadow-lg overflow-hidden border border-fitzone-purple/10">
        <button
          onClick={() => toggleSection('trends')}
          className="w-full bg-fitzone-cyan text-white p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6" />
            <div className="text-left">
              <h3 className="text-base font-bold">Google Trends</h3>
              <p className="text-xs text-white/80">Keywords fitness en tendencia - Score: {scores.search}/10</p>
            </div>
          </div>
          {expandedSections.trends ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expandedSections.trends && (
          <div className="p-6 space-y-4 bg-fitzone-charcoal">
            <div className="bg-fitzone-cyan/10 border border-fitzone-cyan/30 rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-fitzone-cyan flex-shrink-0 mt-0.5" />
              <div className="text-sm text-fitzone-lightGray">
                <p className="font-semibold mb-1 text-fitzone-cyan">Cómo se calcula el score:</p>
                <p>Promedio del "interés de búsqueda" (0-100) de keywords fitness monitoreadas en Perú. Score alto indica fuerte demanda de gimnasios y membresías.</p>
                <p className="mt-2 text-xs text-fitzone-textGray">
                  <strong>Fuente:</strong> Google Trends API (Perú) - <strong>Actualización:</strong> Semanal - <strong>Categoría:</strong> Health & Fitness
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Keyword</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Interés</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Crecimiento</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Tendencia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-fitzone-slate">
                  {[
                    { keyword: 'gimnasio lima', interest: 82, growth: '+18%', trend: 'rising' },
                    { keyword: 'gym cerca de mí', interest: 78, growth: '+25%', trend: 'rising' },
                    { keyword: 'membresía gimnasio', interest: 65, growth: '+32%', trend: 'rising' },
                    { keyword: 'gimnasio miraflores', interest: 58, growth: '+12%', trend: 'stable' },
                    { keyword: 'crossfit lima', interest: 52, growth: '+8%', trend: 'stable' },
                    { keyword: 'personal trainer lima', interest: 45, growth: '+15%', trend: 'rising' },
                    { keyword: 'gimnasio surco', interest: 42, growth: '+22%', trend: 'rising' },
                    { keyword: 'clases de spinning', interest: 38, growth: '+10%', trend: 'stable' },
                  ].map((kw, idx) => (
                    <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                      <td className="px-4 py-3 text-sm font-medium text-white">{kw.keyword}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-fitzone-cyan">{kw.interest}/100</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-fitzone-emerald">{kw.growth}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          kw.trend === 'rising' ? 'bg-fitzone-emerald/20 text-fitzone-emerald' : 'bg-fitzone-slate text-fitzone-textGray'
                        }`}>
                          {kw.trend === 'rising' ? 'Subiendo' : 'Estable'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* TikTok Section */}
      <div className="bg-fitzone-slate rounded-xl shadow-lg overflow-hidden border border-fitzone-purple/10">
        <button
          onClick={() => toggleSection('tiktok')}
          className="w-full bg-fitzone-emerald text-fitzone-charcoal p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-3">
            <Video className="w-6 h-6" />
            <div className="text-left">
              <h3 className="text-base font-bold">TikTok Creative Center</h3>
              <p className="text-xs text-fitzone-charcoal/80">Hashtags fitness virales - Score: {scores.trend}/10</p>
            </div>
          </div>
          {expandedSections.tiktok ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expandedSections.tiktok && (
          <div className="p-6 space-y-6 bg-fitzone-charcoal">
            <div className="bg-fitzone-emerald/10 border border-fitzone-emerald/30 rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-fitzone-emerald flex-shrink-0 mt-0.5" />
              <div className="text-sm text-fitzone-lightGray">
                <p className="font-semibold mb-1 text-fitzone-emerald">Cómo se calcula el score:</p>
                <p>Promedio del "relevance score" (0-100) de hashtags fitness virales. Score alto indica alto potencial de viralidad para contenido de FitZone.</p>
              </div>
            </div>

            {/* Hashtags Table */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-fitzone-emerald" />
                Hashtags Trending Fitness
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Hashtag</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Views</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Posts</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Crecimiento</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Región</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fitzone-slate">
                    {tiktokHashtags.map((tag, idx) => (
                      <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                        <td className="px-4 py-3 text-sm font-medium text-white">{tag.hashtag}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm font-bold text-fitzone-emerald">{tag.views}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm text-fitzone-textGray">{tag.posts}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm font-bold text-fitzone-emerald">{tag.growth}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${
                            tag.region === 'Perú' ? 'bg-fitzone-emerald/20 text-fitzone-emerald' :
                            tag.region === 'LATAM' ? 'bg-fitzone-purple/20 text-fitzone-lightPurple' :
                            'bg-fitzone-slate text-fitzone-textGray'
                          }`}>
                            <Globe className="w-3 h-3" />
                            {tag.region}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Trending Sounds */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Music className="w-4 h-4 text-fitzone-emerald" />
                Sonidos Trending para Gym Content
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tiktokSounds.map((sound, idx) => (
                  <div key={idx} className="bg-fitzone-slate rounded-xl p-4 border border-fitzone-emerald/20 hover:border-fitzone-emerald/40 transition">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-fitzone-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                        <Music className="w-5 h-5 text-fitzone-charcoal" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-semibold text-white truncate">{sound.name}</h5>
                        <p className="text-xs text-fitzone-textGray">{sound.type}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-medium text-fitzone-emerald">{sound.usage} usos</span>
                          <span className="text-xs text-fitzone-purple">{sound.trend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Meta Section */}
      <div className="bg-fitzone-slate rounded-xl shadow-lg overflow-hidden border border-fitzone-purple/10">
        <button
          onClick={() => toggleSection('meta')}
          className="w-full bg-fitzone-purple text-white p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-3">
            <Share2 className="w-6 h-6" />
            <div className="text-left">
              <h3 className="text-base font-bold">Meta/Facebook Trends</h3>
              <p className="text-xs text-white/80">Tendencias fitness en redes sociales - Score: {scores.social}/10</p>
            </div>
          </div>
          {expandedSections.meta ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expandedSections.meta && (
          <div className="p-6 space-y-6 bg-fitzone-charcoal">
            <div className="bg-fitzone-purple/10 border border-fitzone-purple/30 rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-fitzone-lightPurple flex-shrink-0 mt-0.5" />
              <div className="text-sm text-fitzone-lightGray">
                <p className="font-semibold mb-1 text-fitzone-lightPurple">Cómo se calcula el score:</p>
                <p>Promedio del "engagement score" (0-10) de temas fitness más discutidos en Facebook e Instagram. Score alto indica fuerte conversación social.</p>
              </div>
            </div>

            {/* Topics Table */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-fitzone-lightPurple" />
                Temas Trending en Redes Sociales
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Tema</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Menciones</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Engagement</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Sentimiento</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Crecimiento</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Marcas Top</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fitzone-slate">
                    {metaTopics.map((topic, idx) => (
                      <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                        <td className="px-4 py-3 text-sm font-medium text-white">{topic.topic}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm font-bold text-fitzone-lightPurple">{topic.mentions.toLocaleString()}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm font-bold text-white">{topic.engagement}/10</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            topic.sentiment >= 80 ? 'bg-fitzone-emerald/20 text-fitzone-emerald' :
                            topic.sentiment >= 60 ? 'bg-fitzone-amber/20 text-fitzone-amber' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {topic.sentiment}% positivo
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm font-bold text-fitzone-emerald">{topic.growth}</span>
                        </td>
                        <td className="px-4 py-3 text-sm text-fitzone-textGray">{topic.brands}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ad Performance */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-fitzone-lightPurple" />
                Rendimiento de Campañas Meta Ads
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Campaña</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Plataforma</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Alcance</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Clicks</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">CTR</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">CPL</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fitzone-slate">
                    {metaAdPerformance.map((ad, idx) => (
                      <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                        <td className="px-4 py-3 text-sm font-medium text-white">{ad.campaign}</td>
                        <td className="px-4 py-3 text-center text-sm text-fitzone-textGray">{ad.platform}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm text-white">{(ad.reach / 1000).toFixed(0)}K</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm text-white">{ad.clicks.toLocaleString()}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`text-sm font-bold ${ad.ctr >= 1.5 ? 'text-fitzone-emerald' : 'text-fitzone-amber'}`}>{ad.ctr}%</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`text-sm font-bold ${ad.cpl <= 12 ? 'text-fitzone-emerald' : ad.cpl <= 18 ? 'text-fitzone-amber' : 'text-red-400'}`}>${ad.cpl}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            ad.status === 'Activo' ? 'bg-fitzone-emerald/20 text-fitzone-emerald' : 'bg-fitzone-slate text-fitzone-textGray'
                          }`}>
                            {ad.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* GA4 Section */}
      <div className="bg-fitzone-slate rounded-xl shadow-lg overflow-hidden border border-fitzone-purple/10">
        <button
          onClick={() => toggleSection('ga4')}
          className="w-full bg-fitzone-amber text-white p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6" />
            <div className="text-left">
              <h3 className="text-base font-bold">Google Analytics 4</h3>
              <p className="text-xs text-white/80">Conversión e intención de membresía - Score: {scores.intent}/10</p>
            </div>
          </div>
          {expandedSections.ga4 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expandedSections.ga4 && (
          <div className="p-6 space-y-6 bg-fitzone-charcoal">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-fitzone-slate rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-fitzone-textGray" />
                  <p className="text-xs text-fitzone-textGray">Total Usuarios</p>
                </div>
                <p className="text-xl font-bold text-white">68,500</p>
                <p className="text-xs text-fitzone-emerald">+28% vs mes anterior</p>
              </div>
              <div className="bg-fitzone-slate rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-fitzone-textGray" />
                  <p className="text-xs text-fitzone-textGray">Sesiones</p>
                </div>
                <p className="text-xl font-bold text-white">85,200</p>
                <p className="text-xs text-fitzone-emerald">+32% vs mes anterior</p>
              </div>
              <div className="bg-fitzone-slate rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-fitzone-textGray" />
                  <p className="text-xs text-fitzone-textGray">Trials (Leads)</p>
                </div>
                <p className="text-xl font-bold text-fitzone-purple">1,850</p>
                <p className="text-xs text-fitzone-emerald">+45% vs mes anterior</p>
              </div>
              <div className="bg-fitzone-slate rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-fitzone-textGray" />
                  <p className="text-xs text-fitzone-textGray">Tasa Conversión</p>
                </div>
                <p className="text-xl font-bold text-fitzone-emerald">2.7%</p>
                <p className="text-xs text-fitzone-textGray">Meta: 2.5%</p>
              </div>
            </div>

            {/* Device & Traffic Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-fitzone-slate rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-fitzone-amber" />
                  Dispositivos
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fitzone-textGray">Mobile</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-fitzone-charcoal rounded-full overflow-hidden">
                        <div className="h-full bg-fitzone-purple rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-sm font-bold text-white">78%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fitzone-textGray">Desktop</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-fitzone-charcoal rounded-full overflow-hidden">
                        <div className="h-full bg-fitzone-cyan rounded-full" style={{ width: '18%' }}></div>
                      </div>
                      <span className="text-sm font-bold text-white">18%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fitzone-textGray">Tablet</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-fitzone-charcoal rounded-full overflow-hidden">
                        <div className="h-full bg-fitzone-emerald rounded-full" style={{ width: '4%' }}></div>
                      </div>
                      <span className="text-sm font-bold text-white">4%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-fitzone-slate rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-fitzone-amber" />
                  Fuentes de Tráfico
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fitzone-textGray">Social Media</span>
                    <span className="text-sm font-bold text-fitzone-purple">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fitzone-textGray">Búsqueda Orgánica</span>
                    <span className="text-sm font-bold text-white">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fitzone-textGray">Paid Search</span>
                    <span className="text-sm font-bold text-white">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fitzone-textGray">Directo</span>
                    <span className="text-sm font-bold text-white">8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fitzone-textGray">Referencia</span>
                    <span className="text-sm font-bold text-white">4%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pages Table */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-fitzone-amber" />
                Páginas del Sitio Web FitZone
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Página</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Vistas</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Sesiones</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Tiempo Prom.</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Rebote</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Conversiones</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Tasa Conv.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fitzone-slate">
                    {ga4Pages.map((page, idx) => (
                      <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm font-medium text-white">{page.title}</p>
                            <p className="text-xs text-fitzone-textGray">{page.page}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm text-white">{page.views.toLocaleString()}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm text-fitzone-textGray">{page.sessions.toLocaleString()}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm text-white">{page.avgTime}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`text-sm ${page.bounceRate <= 30 ? 'text-fitzone-emerald' : page.bounceRate <= 40 ? 'text-fitzone-amber' : 'text-red-400'}`}>{page.bounceRate}%</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-sm font-bold text-fitzone-purple">{page.conversions}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`text-sm font-bold ${page.convRate >= 2.5 ? 'text-fitzone-emerald' : 'text-white'}`}>{page.convRate}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Keywords Reference */}
      <div className="bg-fitzone-purple rounded-xl p-6 text-white">
        <h3 className="text-base font-bold mb-4 flex items-center gap-2">
          <Dumbbell className="w-6 h-6" />
          Keywords Monitoreadas - FitZone Perú
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-white/70 mb-2 font-semibold">Marca FitZone:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">FitZone</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">FitZone Perú</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-white/70 mb-2 font-semibold">Mercado Fitness:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Gimnasio Lima</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Membresía gym</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-white/70 mb-2 font-semibold">Competencia:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Smart Fit</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">b2 gimnasio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
