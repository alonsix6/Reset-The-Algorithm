import { useState, useEffect } from 'react';
import { Search, TrendingUp, Video, Share2, Dumbbell, RefreshCw, ChevronDown, ChevronUp, BarChart3, Info, Music, Target, DollarSign, Layers, Lightbulb, Users, Globe, MapPin, Eye, Clock, MousePointer, Smartphone, Monitor, ExternalLink, Calendar } from 'lucide-react';

export default function DataLayer() {
  // Helper function to get current week info
  const getWeekPeriod = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);

    // Get Monday of current week
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

    // Get Sunday of current week
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const formatDate = (date) => date.getDate();
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    return {
      weekNumber,
      range: `${formatDate(monday)}-${formatDate(sunday)} ${month} ${year}`
    };
  };

  const weekPeriod = getWeekPeriod();

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

  // Generate fitness insights - exactly 4 sources: Google Trends, TikTok, Meta, GA4
  const generateInsights = () => {
    // Always return exactly 4 insights, one per source
    return [
      {
        source: 'Google Trends',
        IconComponent: Search,
        text: '"Gimnasio Lima" lidera búsquedas con 92/100 de interés y +85% de crecimiento. 5 keywords en tendencia explosiva en los últimos 3 meses.',
      },
      {
        source: 'TikTok',
        IconComponent: Video,
        text: '#gymtok alcanza 2.5B views globales. #propósito2026 crece +180% en LATAM. Contenido de transformación tiene engagement 9.2/10.',
      },
      {
        source: 'Meta',
        IconComponent: Share2,
        text: 'Sentimiento social muy positivo. 60% de los topics tienen sentimiento positivo. "Propósitos Año Nuevo" genera 52K menciones.',
      },
      {
        source: 'GA4',
        IconComponent: BarChart3,
        text: '68,500 usuarios generaron 1,850 trials (2.7% conversión). Página "/trial-gratis" lidera con 5.47% de tasa de conversión.',
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
    <div className="space-y-4 sm:space-y-6">
      {/* Header & Score Summary */}
      <div className="bg-fitzone-charcoal rounded-2xl shadow-fitzone-lg p-4 sm:p-6 lg:p-8 text-white border border-fitzone-purple/20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-fitzone-purple rounded-xl flex items-center justify-center flex-shrink-0">
                <Dumbbell className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-xl font-bold mb-1">
                  Capa de Data - Captura de Señales
                </h2>
                <p className="text-fitzone-textGray text-xs sm:text-base">
                  Monitoreo en tiempo real del ecosistema digital fitness en Lima
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-fitzone-cyan/20 text-fitzone-cyan px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Sem {weekPeriod.weekNumber}</span>
              <span className="text-[10px] sm:text-xs opacity-80 hidden xs:inline">| {weekPeriod.range}</span>
            </div>
            <div className="text-right">
              <p className="text-fitzone-textGray text-[10px] sm:text-xs uppercase font-semibold mb-0.5 sm:mb-1">Score Global</p>
              <p className="text-2xl sm:text-3xl font-bold text-fitzone-purple">{scores.overall}</p>
              <p className="text-[10px] sm:text-xs text-fitzone-textGray">de 10.0</p>
            </div>
            <button
              onClick={loadData}
              disabled={isRefreshing}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-fitzone-purple/20 text-fitzone-purple rounded-lg hover:bg-fitzone-purple/30 transition disabled:opacity-50 text-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Actualizar</span>
            </button>
          </div>
        </div>

        {/* Data Sources Status */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-fitzone-slate rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fitzone-emerald rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-fitzone-textGray">Trends</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-fitzone-slate rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fitzone-emerald rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-fitzone-textGray">TikTok</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-fitzone-slate rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fitzone-emerald rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-fitzone-textGray">Meta</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-fitzone-slate rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fitzone-emerald rounded-full"></div>
            <span className="text-[10px] sm:text-xs text-fitzone-textGray">GA4</span>
          </div>
          {lastRefresh && (
            <div className="flex items-center gap-1.5 sm:gap-2 bg-fitzone-slate rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 ml-auto">
              <span className="text-[10px] sm:text-xs text-fitzone-textGray">
                {lastRefresh.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Insights Clave del Mercado */}
      <div className="bg-fitzone-slate rounded-2xl shadow-fitzone-lg p-4 sm:p-6 lg:p-8 border border-fitzone-purple/10">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-fitzone-purple rounded-xl flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm sm:text-lg font-bold text-white">Insights Clave del Mercado Fitness</h3>
            <p className="text-xs sm:text-sm text-fitzone-textGray">Análisis automático multi-fuente</p>
          </div>
        </div>

        {/* Individual Source Insights - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
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
              <div key={idx} className={`relative ${colorScheme.bg} rounded-xl p-3 sm:p-5 border border-fitzone-slate hover:border-fitzone-purple/30 transition-all duration-300`}>
                <div className="flex items-start gap-2 sm:gap-4">
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 ${colorScheme.icon} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <InsightIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <p className={`text-[10px] sm:text-xs font-bold ${colorScheme.text} uppercase tracking-wider`}>{insight.source}</p>
                      {sourceScore && (
                        <span className={`${colorScheme.badge} px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold`}>
                          {sourceScore}/10
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-fitzone-lightGray leading-relaxed font-medium">{insight.text}</p>
                  </div>
                </div>
                <div className={`absolute top-0 left-0 w-1 h-full ${colorScheme.icon} rounded-l-xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Multi-Source Analysis - Full Width at Bottom */}
        <div className="relative bg-gradient-to-r from-fitzone-purple/20 to-fitzone-cyan/20 rounded-xl p-3 sm:p-6 border border-fitzone-purple/30">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-fitzone-purple to-fitzone-cyan rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <p className="text-xs sm:text-sm font-bold text-fitzone-lightPurple uppercase tracking-wider">{multiSourceInsight.source}</p>
                <span className="bg-fitzone-purple/30 text-fitzone-lightPurple px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
                  Consolidado
                </span>
              </div>
              <p className="text-xs sm:text-sm text-fitzone-lightGray leading-relaxed mb-2 sm:mb-3">{multiSourceInsight.text}</p>
              <div className="bg-fitzone-charcoal/50 rounded-lg p-2 sm:p-3 border border-fitzone-purple/20">
                <p className="text-xs sm:text-sm text-fitzone-emerald font-semibold flex items-start sm:items-center gap-1.5 sm:gap-2">
                  <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>{multiSourceInsight.recommendation}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-gradient-to-b from-fitzone-purple to-fitzone-cyan rounded-l-xl"></div>
        </div>
      </div>

      {/* Google Trends Section */}
      <div className="bg-fitzone-slate rounded-xl shadow-lg overflow-hidden border border-fitzone-purple/10">
        <button
          onClick={() => toggleSection('trends')}
          className="w-full bg-fitzone-cyan text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Search className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">Google Trends</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Keywords fitness - Score: {scores.search}/10</p>
            </div>
          </div>
          {expandedSections.trends ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.trends && (
          <div className="p-3 sm:p-6 space-y-3 sm:space-y-4 bg-fitzone-charcoal">
            <div className="bg-fitzone-cyan/10 border border-fitzone-cyan/30 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-fitzone-cyan flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-fitzone-lightGray">
                <p className="font-semibold mb-1 text-fitzone-cyan">Cómo se calcula el score:</p>
                <p>Promedio del "interés de búsqueda" (0-100) de keywords fitness monitoreadas en Perú.</p>
                <p className="mt-2 text-[10px] sm:text-xs text-fitzone-textGray hidden sm:block">
                  <strong>Fuente:</strong> Google Trends API (Perú) - <strong>Actualización:</strong> Semanal
                </p>
              </div>
            </div>

            <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
              <table className="w-full min-w-[400px]">
                <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Keyword</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Interés</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Crec.</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Trend</th>
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
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white">{kw.keyword}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        <span className="text-xs sm:text-sm font-bold text-fitzone-cyan">{kw.interest}/100</span>
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        <span className="text-xs sm:text-sm font-bold text-fitzone-emerald">{kw.growth}</span>
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                          kw.trend === 'rising' ? 'bg-fitzone-emerald/20 text-fitzone-emerald' : 'bg-fitzone-slate text-fitzone-textGray'
                        }`}>
                          {kw.trend === 'rising' ? '↑' : '—'}
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
          className="w-full bg-fitzone-emerald text-fitzone-charcoal p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Video className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">TikTok Creative Center</h3>
              <p className="text-[10px] sm:text-xs text-fitzone-charcoal/80">Hashtags virales - Score: {scores.trend}/10</p>
            </div>
          </div>
          {expandedSections.tiktok ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.tiktok && (
          <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 bg-fitzone-charcoal">
            <div className="bg-fitzone-emerald/10 border border-fitzone-emerald/30 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-fitzone-emerald flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-fitzone-lightGray">
                <p className="font-semibold mb-1 text-fitzone-emerald">Cómo se calcula el score:</p>
                <p>Promedio del "relevance score" (0-100) de hashtags fitness virales.</p>
              </div>
            </div>

            {/* Hashtags Table */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-emerald" />
                Hashtags Trending Fitness
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[450px]">
                  <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Hashtag</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Views</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase hidden sm:table-cell">Posts</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Crec.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Región</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fitzone-slate">
                    {tiktokHashtags.map((tag, idx) => (
                      <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white">{tag.hashtag}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-fitzone-emerald">{tag.views}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden sm:table-cell">
                          <span className="text-xs sm:text-sm text-fitzone-textGray">{tag.posts}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-fitzone-emerald">{tag.growth}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                            tag.region === 'Perú' ? 'bg-fitzone-emerald/20 text-fitzone-emerald' :
                            tag.region === 'LATAM' ? 'bg-fitzone-purple/20 text-fitzone-lightPurple' :
                            'bg-fitzone-slate text-fitzone-textGray'
                          }`}>
                            <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="hidden sm:inline">{tag.region}</span>
                            <span className="sm:hidden">{tag.region === 'Global' ? 'GL' : tag.region === 'LATAM' ? 'LA' : 'PE'}</span>
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
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-emerald" />
                Sonidos Trending para Gym Content
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                {tiktokSounds.map((sound, idx) => (
                  <div key={idx} className="bg-fitzone-slate rounded-xl p-3 sm:p-4 border border-fitzone-emerald/20 hover:border-fitzone-emerald/40 transition">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-fitzone-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                        <Music className="w-4 h-4 sm:w-5 sm:h-5 text-fitzone-charcoal" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs sm:text-sm font-semibold text-white truncate">{sound.name}</h5>
                        <p className="text-[10px] sm:text-xs text-fitzone-textGray">{sound.type}</p>
                        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                          <span className="text-[10px] sm:text-xs font-medium text-fitzone-emerald">{sound.usage}</span>
                          <span className="text-[10px] sm:text-xs text-fitzone-purple">{sound.trend}</span>
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
          className="w-full bg-fitzone-purple text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">Meta/Facebook Trends</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Redes sociales - Score: {scores.social}/10</p>
            </div>
          </div>
          {expandedSections.meta ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.meta && (
          <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 bg-fitzone-charcoal">
            <div className="bg-fitzone-purple/10 border border-fitzone-purple/30 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-fitzone-lightPurple flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-fitzone-lightGray">
                <p className="font-semibold mb-1 text-fitzone-lightPurple">Cómo se calcula el score:</p>
                <p>Promedio del "engagement score" (0-10) de temas fitness en Facebook e Instagram.</p>
              </div>
            </div>

            {/* Topics Table */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-lightPurple" />
                Temas Trending en Redes Sociales
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Tema</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Menc.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Eng.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Sent.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Crec.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase hidden lg:table-cell">Marcas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fitzone-slate">
                    {metaTopics.map((topic, idx) => (
                      <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white">{topic.topic}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-fitzone-lightPurple">{(topic.mentions / 1000).toFixed(0)}K</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">{topic.engagement}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                            topic.sentiment >= 80 ? 'bg-fitzone-emerald/20 text-fitzone-emerald' :
                            topic.sentiment >= 60 ? 'bg-fitzone-amber/20 text-fitzone-amber' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {topic.sentiment}%
                          </span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-fitzone-emerald">{topic.growth}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-fitzone-textGray hidden lg:table-cell">{topic.brands}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ad Performance */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-lightPurple" />
                Rendimiento de Campañas Meta Ads
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Campaña</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase hidden sm:table-cell">Platf.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Alcance</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase hidden sm:table-cell">Clicks</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">CTR</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">CPL</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fitzone-slate">
                    {metaAdPerformance.map((ad, idx) => (
                      <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white">{ad.campaign}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm text-fitzone-textGray hidden sm:table-cell">{ad.platform}</td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm text-white">{(ad.reach / 1000).toFixed(0)}K</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden sm:table-cell">
                          <span className="text-xs sm:text-sm text-white">{ad.clicks.toLocaleString()}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`text-xs sm:text-sm font-bold ${ad.ctr >= 1.5 ? 'text-fitzone-emerald' : 'text-fitzone-amber'}`}>{ad.ctr}%</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`text-xs sm:text-sm font-bold ${ad.cpl <= 12 ? 'text-fitzone-emerald' : ad.cpl <= 18 ? 'text-fitzone-amber' : 'text-red-400'}`}>${ad.cpl}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${
                            ad.status === 'Activo' ? 'bg-fitzone-emerald/20 text-fitzone-emerald' : 'bg-fitzone-slate text-fitzone-textGray'
                          }`}>
                            {ad.status === 'Activo' ? '●' : '○'}
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
          className="w-full bg-fitzone-amber text-white p-3 sm:p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="text-left min-w-0">
              <h3 className="text-sm sm:text-base font-bold">Google Analytics 4</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Conversión - Score: {scores.intent}/10</p>
            </div>
          </div>
          {expandedSections.ga4 ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
        </button>

        {expandedSections.ga4 && (
          <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 bg-fitzone-charcoal">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-fitzone-slate rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-textGray" />
                  <p className="text-[10px] sm:text-xs text-fitzone-textGray">Usuarios</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-white">68.5K</p>
                <p className="text-[10px] sm:text-xs text-fitzone-emerald">+28%</p>
              </div>
              <div className="bg-fitzone-slate rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-textGray" />
                  <p className="text-[10px] sm:text-xs text-fitzone-textGray">Sesiones</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-white">85.2K</p>
                <p className="text-[10px] sm:text-xs text-fitzone-emerald">+32%</p>
              </div>
              <div className="bg-fitzone-slate rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-textGray" />
                  <p className="text-[10px] sm:text-xs text-fitzone-textGray">Trials</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-fitzone-purple">1,850</p>
                <p className="text-[10px] sm:text-xs text-fitzone-emerald">+45%</p>
              </div>
              <div className="bg-fitzone-slate rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-textGray" />
                  <p className="text-[10px] sm:text-xs text-fitzone-textGray">Conv.</p>
                </div>
                <p className="text-lg sm:text-xl font-bold text-fitzone-emerald">2.7%</p>
                <p className="text-[10px] sm:text-xs text-fitzone-textGray">Meta: 2.5%</p>
              </div>
            </div>

            {/* Device & Traffic Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-fitzone-slate rounded-lg p-3 sm:p-4">
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-amber" />
                  Dispositivos
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-fitzone-textGray">Mobile</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-fitzone-charcoal rounded-full overflow-hidden">
                        <div className="h-full bg-fitzone-purple rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white w-8 text-right">78%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-fitzone-textGray">Desktop</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-fitzone-charcoal rounded-full overflow-hidden">
                        <div className="h-full bg-fitzone-cyan rounded-full" style={{ width: '18%' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white w-8 text-right">18%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-fitzone-textGray">Tablet</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-fitzone-charcoal rounded-full overflow-hidden">
                        <div className="h-full bg-fitzone-emerald rounded-full" style={{ width: '4%' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white w-8 text-right">4%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-fitzone-slate rounded-lg p-3 sm:p-4">
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-amber" />
                  Fuentes de Tráfico
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-fitzone-textGray">Social Media</span>
                    <span className="text-xs sm:text-sm font-bold text-fitzone-purple">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-fitzone-textGray">Orgánico</span>
                    <span className="text-xs sm:text-sm font-bold text-white">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-fitzone-textGray">Paid</span>
                    <span className="text-xs sm:text-sm font-bold text-white">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-fitzone-textGray">Directo</span>
                    <span className="text-xs sm:text-sm font-bold text-white">8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-fitzone-textGray">Referencia</span>
                    <span className="text-xs sm:text-sm font-bold text-white">4%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pages Table */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fitzone-amber" />
                Páginas del Sitio Web FitZone
              </h4>
              <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[550px]">
                  <thead className="bg-fitzone-slate border-b border-fitzone-purple/20">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Página</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Vistas</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase hidden sm:table-cell">Tiempo</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase hidden lg:table-cell">Rebote</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Conv.</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-fitzone-textGray uppercase">Tasa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fitzone-slate">
                    {ga4Pages.slice(0, 6).map((page, idx) => (
                      <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                        <td className="px-2 sm:px-4 py-2 sm:py-3">
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-white truncate max-w-[120px] sm:max-w-none">{page.title}</p>
                            <p className="text-[10px] sm:text-xs text-fitzone-textGray hidden sm:block">{page.page}</p>
                          </div>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm text-white">{(page.views / 1000).toFixed(1)}K</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden sm:table-cell">
                          <span className="text-xs sm:text-sm text-white">{page.avgTime}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center hidden lg:table-cell">
                          <span className={`text-xs sm:text-sm ${page.bounceRate <= 30 ? 'text-fitzone-emerald' : page.bounceRate <= 40 ? 'text-fitzone-amber' : 'text-red-400'}`}>{page.bounceRate}%</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className="text-xs sm:text-sm font-bold text-fitzone-purple">{page.conversions}</span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                          <span className={`text-xs sm:text-sm font-bold ${page.convRate >= 2.5 ? 'text-fitzone-emerald' : 'text-white'}`}>{page.convRate}%</span>
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
      <div className="bg-fitzone-purple rounded-xl p-4 sm:p-6 text-white">
        <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 flex items-center gap-2">
          <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6" />
          Keywords Monitoreadas - FitZone Perú
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2 font-semibold">Marca FitZone:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">FitZone</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">FitZone Perú</span>
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2 font-semibold">Mercado Fitness:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Gimnasio Lima</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Membresía gym</span>
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2 font-semibold">Competencia:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">Smart Fit</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-xs sm:text-sm">b2 gimnasio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
