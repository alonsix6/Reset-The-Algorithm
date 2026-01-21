import { useState, useEffect } from 'react';
import { Search, TrendingUp, Video, Share2, Dumbbell, RefreshCw, ChevronDown, ChevronUp, BarChart3, Info, Music, Target, DollarSign, Layers, Lightbulb, Users, Globe, MapPin } from 'lucide-react';

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

  // Generate fitness insights
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
        text: '"gimnasio lima" lidera busquedas con 82/100 de interes. Busquedas de "gimnasio enero" aumentaron +85% esta semana - pico estacional de propositos.',
      },
      {
        source: 'TikTok',
        IconComponent: Video,
        text: '#gymtok alcanza 2.5B views globales. Contenido de transformacion tiene engagement 3x superior. FitZone tiene oportunidad de capitalizar trend.',
      },
      {
        source: 'Meta',
        IconComponent: Share2,
        text: '"Fitness Peru" genera 45K menciones/semana con engagement 8.5/10. Smart Fit domina awareness, oportunidad en segmento mid-premium.',
      },
      {
        source: 'GA4',
        IconComponent: BarChart3,
        text: '68,500 sesiones generaron 1,850 trials (2.7% conversion). Pagina "/membresias" es la mas efectiva con 4:12 de tiempo promedio.',
      },
      {
        source: 'Conexion Multi-fuente',
        IconComponent: Layers,
        text: 'Las 4 fuentes confirman alta demanda estacional (Enero). Oportunidad de capturar usuarios insatisfechos con masificacion de Smart Fit.',
      }
    ];
  };

  const insights = generateInsights();

  return (
    <div className="space-y-6">
      {/* Header & Score Summary */}
      <div className="bg-gradient-to-br from-fitzone-charcoal to-fitzone-slate rounded-2xl shadow-fitzone-lg p-8 text-white border border-fitzone-orange/20">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-fitzone rounded-xl flex items-center justify-center shadow-fitzone-glow">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">
                  Capa de Data - Captura de Senales
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
              <p className="text-3xl font-bold text-fitzone-orange">{scores.overall}</p>
              <p className="text-xs text-fitzone-textGray">de 10.0</p>
            </div>
            <button
              onClick={loadData}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 bg-fitzone-orange/20 text-fitzone-orange rounded-lg hover:bg-fitzone-orange/30 transition disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
          </div>
        </div>

        {/* Data Sources Status */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-fitzone-charcoal/60 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-fitzone-lime rounded-full"></div>
            <span className="text-xs text-fitzone-textGray">Google Trends Activo</span>
          </div>
          <div className="flex items-center gap-2 bg-fitzone-charcoal/60 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-fitzone-lime rounded-full"></div>
            <span className="text-xs text-fitzone-textGray">TikTok Activo</span>
          </div>
          <div className="flex items-center gap-2 bg-fitzone-charcoal/60 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-fitzone-lime rounded-full"></div>
            <span className="text-xs text-fitzone-textGray">Meta Activo</span>
          </div>
          <div className="flex items-center gap-2 bg-fitzone-charcoal/60 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-fitzone-lime rounded-full"></div>
            <span className="text-xs text-fitzone-textGray">GA4 Activo</span>
          </div>
          {lastRefresh && (
            <div className="flex items-center gap-2 bg-fitzone-charcoal/60 rounded-lg px-3 py-2 ml-auto">
              <span className="text-xs text-fitzone-textGray">
                Actualizado: {lastRefresh.toLocaleTimeString('es-PE')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Insights Clave del Mercado */}
      <div className="bg-fitzone-slate rounded-2xl shadow-fitzone-lg p-8 border border-fitzone-orange/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-fitzone rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Insights Clave del Mercado Fitness</h3>
            <p className="text-sm text-fitzone-textGray">Analisis automatico multi-fuente</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, idx) => {
            const colorScheme =
              insight.source === 'Google Trends' ? { gradient: 'from-fitzone-electric to-fitzone-cyan', bg: 'bg-fitzone-electric/10', text: 'text-fitzone-electric', badge: 'bg-fitzone-electric/20 text-fitzone-electric' } :
              insight.source === 'TikTok' ? { gradient: 'from-fitzone-lime to-fitzone-green', bg: 'bg-fitzone-lime/10', text: 'text-fitzone-lime', badge: 'bg-fitzone-lime/20 text-fitzone-lime' } :
              insight.source === 'Meta' ? { gradient: 'from-fitzone-orange to-fitzone-darkOrange', bg: 'bg-fitzone-orange/10', text: 'text-fitzone-orange', badge: 'bg-fitzone-orange/20 text-fitzone-orange' } :
              insight.source === 'GA4' ? { gradient: 'from-amber-500 to-orange-500', bg: 'bg-amber-500/10', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-400' } :
              { gradient: 'from-fitzone-electric to-fitzone-lime', bg: 'bg-fitzone-electric/10', text: 'text-fitzone-electric', badge: 'bg-fitzone-electric/20 text-fitzone-electric' };

            const sourceScore =
              insight.source === 'Google Trends' ? scores.search :
              insight.source === 'TikTok' ? scores.trend :
              insight.source === 'Meta' ? scores.social :
              insight.source === 'GA4' ? scores.intent : null;

            const isMultiSource = insight.source === 'Conexion Multi-fuente';
            const InsightIcon = insight.IconComponent || Lightbulb;

            return (
              <div key={idx} className={`relative ${colorScheme.bg} rounded-xl p-5 border border-fitzone-slate hover:border-fitzone-orange/30 transition-all duration-300 hover:shadow-lg group ${isMultiSource ? 'md:col-span-2' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorScheme.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
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
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${colorScheme.gradient} rounded-l-xl`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Google Trends Section */}
      <div className="bg-fitzone-slate rounded-xl shadow-lg overflow-hidden border border-fitzone-orange/10">
        <button
          onClick={() => toggleSection('trends')}
          className="w-full bg-gradient-to-r from-fitzone-electric to-fitzone-cyan text-white p-4 flex items-center justify-between hover:brightness-110 transition"
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
            <div className="bg-fitzone-electric/10 border border-fitzone-electric/30 rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-fitzone-electric flex-shrink-0 mt-0.5" />
              <div className="text-sm text-fitzone-lightGray">
                <p className="font-semibold mb-1 text-fitzone-electric">Como se calcula el score:</p>
                <p>Promedio del "interes de busqueda" (0-100) de keywords fitness monitoreadas en Peru. Score alto indica fuerte demanda de gimnasios y membresias.</p>
                <p className="mt-2 text-xs text-fitzone-textGray">
                  <strong>Fuente:</strong> Google Trends API (Peru) - <strong>Actualizacion:</strong> Semanal - <strong>Categoria:</strong> Health & Fitness
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-fitzone-slate border-b border-fitzone-orange/20">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Keyword</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Interes</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Crecimiento</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Tendencia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-fitzone-slate">
                  {[
                    { keyword: 'gimnasio lima', interest: 82, growth: '+18%', trend: 'rising' },
                    { keyword: 'gym cerca de mi', interest: 78, growth: '+25%', trend: 'rising' },
                    { keyword: 'membresia gimnasio', interest: 65, growth: '+32%', trend: 'rising' },
                    { keyword: 'gimnasio miraflores', interest: 58, growth: '+12%', trend: 'stable' },
                    { keyword: 'crossfit lima', interest: 52, growth: '+8%', trend: 'stable' },
                    { keyword: 'personal trainer lima', interest: 45, growth: '+15%', trend: 'rising' },
                  ].map((kw, idx) => (
                    <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                      <td className="px-4 py-3 text-sm font-medium text-white">{kw.keyword}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-fitzone-electric">{kw.interest}/100</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-fitzone-lime">{kw.growth}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          kw.trend === 'rising' ? 'bg-fitzone-lime/20 text-fitzone-lime' : 'bg-fitzone-slate text-fitzone-textGray'
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
      <div className="bg-fitzone-slate rounded-xl shadow-lg overflow-hidden border border-fitzone-orange/10">
        <button
          onClick={() => toggleSection('tiktok')}
          className="w-full bg-gradient-to-r from-fitzone-lime to-fitzone-green text-fitzone-charcoal p-4 flex items-center justify-between hover:brightness-110 transition"
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
          <div className="p-6 space-y-4 bg-fitzone-charcoal">
            <div className="bg-fitzone-lime/10 border border-fitzone-lime/30 rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-fitzone-lime flex-shrink-0 mt-0.5" />
              <div className="text-sm text-fitzone-lightGray">
                <p className="font-semibold mb-1 text-fitzone-lime">Como se calcula el score:</p>
                <p>Promedio del "relevance score" (0-100) de hashtags fitness virales. Score alto indica alto potencial de viralidad para contenido de FitZone.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-fitzone-slate border-b border-fitzone-orange/20">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Hashtag</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Views</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Crecimiento</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Region</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-fitzone-slate">
                  {[
                    { hashtag: '#gymtok', views: '2.5B', growth: '+45%', region: 'Global' },
                    { hashtag: '#transformacion', views: '890M', growth: '+62%', region: 'LATAM' },
                    { hashtag: '#fitnessperu', views: '125M', growth: '+38%', region: 'Peru' },
                    { hashtag: '#legday', views: '1.2B', growth: '+28%', region: 'Global' },
                    { hashtag: '#gymmotivation', views: '950M', growth: '+35%', region: 'Global' },
                  ].map((tag, idx) => (
                    <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                      <td className="px-4 py-3 text-sm font-medium text-white">{tag.hashtag}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-fitzone-lime">{tag.views}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-fitzone-lime">{tag.growth}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${
                          tag.region === 'Peru' ? 'bg-fitzone-lime/20 text-fitzone-lime' :
                          tag.region === 'LATAM' ? 'bg-fitzone-orange/20 text-fitzone-orange' :
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

            {/* Trending Sounds */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-5 h-5 text-fitzone-lime" />
                <h4 className="text-sm font-semibold text-white">Sonidos Trending Gym</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'NEFFEX - Grateful', type: 'Motivation', usage: '2.1M' },
                  { name: 'Tevvez - Legend', type: 'Epic', usage: '1.8M' },
                  { name: 'Bad Bunny - Monaco', type: 'Reggaeton', usage: '3.2M' },
                ].map((sound, idx) => (
                  <div key={idx} className="bg-fitzone-slate/50 rounded-xl p-4 border border-fitzone-lime/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-fitzone-lime to-fitzone-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <Music className="w-5 h-5 text-fitzone-charcoal" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-semibold text-white truncate">{sound.name}</h5>
                        <p className="text-xs text-fitzone-textGray">{sound.type}</p>
                        <span className="text-xs font-medium text-fitzone-lime">{sound.usage} usos</span>
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
      <div className="bg-fitzone-slate rounded-xl shadow-lg overflow-hidden border border-fitzone-orange/10">
        <button
          onClick={() => toggleSection('meta')}
          className="w-full bg-gradient-fitzone text-white p-4 flex items-center justify-between hover:brightness-110 transition"
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
          <div className="p-6 space-y-4 bg-fitzone-charcoal">
            <div className="bg-fitzone-orange/10 border border-fitzone-orange/30 rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-fitzone-orange flex-shrink-0 mt-0.5" />
              <div className="text-sm text-fitzone-lightGray">
                <p className="font-semibold mb-1 text-fitzone-orange">Como se calcula el score:</p>
                <p>Promedio del "engagement score" (0-10) de temas fitness mas discutidos en Facebook e Instagram. Score alto indica fuerte conversacion social.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-fitzone-slate border-b border-fitzone-orange/20">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Tema</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Menciones</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-fitzone-textGray uppercase">Engagement</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-fitzone-textGray uppercase">Marcas Top</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-fitzone-slate">
                  {[
                    { topic: 'Gimnasios Lima', mentions: 45000, engagement: 8.5, brands: 'Smart Fit, b2' },
                    { topic: 'Transformaciones', mentions: 32000, engagement: 9.2, brands: 'KO Urban, CrossFit' },
                    { topic: 'Clases Grupales', mentions: 28000, engagement: 7.8, brands: 'b2, Sportlife' },
                    { topic: 'Personal Training', mentions: 18000, engagement: 8.0, brands: 'Independientes' },
                  ].map((topic, idx) => (
                    <tr key={idx} className="hover:bg-fitzone-slate/50 transition">
                      <td className="px-4 py-3 text-sm font-medium text-white">{topic.topic}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-fitzone-orange">{topic.mentions.toLocaleString()}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-white">{topic.engagement}/10</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-fitzone-textGray">{topic.brands}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* GA4 Section */}
      <div className="bg-fitzone-slate rounded-xl shadow-lg overflow-hidden border border-fitzone-orange/10">
        <button
          onClick={() => toggleSection('ga4')}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 flex items-center justify-between hover:brightness-110 transition"
        >
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6" />
            <div className="text-left">
              <h3 className="text-base font-bold">Google Analytics 4</h3>
              <p className="text-xs text-white/80">Conversion e intencion de membresia - Score: {scores.intent}/10</p>
            </div>
          </div>
          {expandedSections.ga4 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expandedSections.ga4 && (
          <div className="p-6 space-y-4 bg-fitzone-charcoal">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-fitzone-slate rounded-lg p-4">
                <p className="text-xs text-fitzone-textGray mb-1">Total Usuarios</p>
                <p className="text-xl font-bold text-white">68,500</p>
              </div>
              <div className="bg-fitzone-slate rounded-lg p-4">
                <p className="text-xs text-fitzone-textGray mb-1">Sesiones</p>
                <p className="text-xl font-bold text-white">85,200</p>
              </div>
              <div className="bg-fitzone-slate rounded-lg p-4">
                <p className="text-xs text-fitzone-textGray mb-1">Trials (Leads)</p>
                <p className="text-xl font-bold text-fitzone-orange">1,850</p>
              </div>
              <div className="bg-fitzone-slate rounded-lg p-4">
                <p className="text-xs text-fitzone-textGray mb-1">Tasa Conversion</p>
                <p className="text-xl font-bold text-fitzone-lime">2.7%</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Keywords Reference */}
      <div className="bg-gradient-to-br from-fitzone-orange to-fitzone-darkOrange rounded-xl p-6 text-white">
        <h3 className="text-base font-bold mb-4 flex items-center gap-2">
          <Dumbbell className="w-6 h-6" />
          Keywords Monitoreadas - FitZone Peru
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-white/70 mb-2 font-semibold">Marca FitZone:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">FitZone</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">FitZone Peru</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-white/70 mb-2 font-semibold">Mercado Fitness:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Gimnasio Lima</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Membresia gym</span>
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
