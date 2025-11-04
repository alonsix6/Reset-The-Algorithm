import { useState, useEffect } from 'react';
import {
  Search, TrendingUp, TrendingDown, ChevronDown, ChevronUp,
  Database, Clock, MapPin, AlertCircle, CheckCircle, Globe,
  Video, Share2, Youtube, BarChart3, Zap, Car, Target
} from 'lucide-react';
import { KEYWORDS_TOYOTA, ALL_HASHTAGS, GOOGLE_TRENDS_CONFIG, DATA_SOURCES_CONFIG } from '../data/keywords';
import { LAYER_CONFIG } from '../data/config';

export default function DataLayer() {
  const [trendsData, setTrendsData] = useState(null);
  const [tiktokData, setTiktokData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(null);

  // Todas las secciones expandidas por defecto para presentación
  const [expandedSections, setExpandedSections] = useState({
    trends: true,
    tiktok: true,
    meta: true,
    sources: true
  });

  useEffect(() => {
    loadData();

    // Auto-refresh cada 24 horas
    const autoRefreshInterval = setInterval(() => {
      loadData();
    }, 86400000);

    return () => clearInterval(autoRefreshInterval);
  }, []);

  const loadData = async () => {
    setIsRefreshing(true);
    try {
      const [trends, tiktok, meta] = await Promise.all([
        fetch('/data/trends/latest.json').then(r => r.json()).catch(() => null),
        fetch('/data/tiktok/latest.json').then(r => r.json()).catch(() => null),
        fetch('/data/meta/latest.json').then(r => r.json()).catch(() => null)
      ]);

      setTrendsData(trends);
      setTiktokData(tiktok);
      setMetaData(meta);
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

  // Calcular puntajes dinámicamente
  const calculateScores = () => {
    let searchScore = 7.5;
    let trendScore = 8.2;
    let intentScore = 8.7;
    let emotionScore = 7.8;

    if (trendsData?.keywords?.length > 0) {
      const avgInterest = trendsData.keywords.reduce((sum, kw) => sum + (kw.average_interest || 0), 0) / trendsData.keywords.length;
      searchScore = (avgInterest / 10).toFixed(1);
    }

    if (tiktokData?.trends?.hashtags?.length > 0) {
      const avgRelevance = tiktokData.trends.hashtags.reduce((sum, tag) => sum + (tag.relevanceScore || 0), 0) / tiktokData.trends.hashtags.length;
      trendScore = (avgRelevance / 10).toFixed(1);
    }

    if (metaData?.aggregatedTopics?.length > 0) {
      const avgEngagement = metaData.aggregatedTopics.reduce((sum, topic) => sum + (topic.engagement_score || 0), 0) / metaData.aggregatedTopics.length;
      emotionScore = avgEngagement.toFixed(1);
    }

    const overallScore = ((parseFloat(searchScore) + parseFloat(trendScore) + parseFloat(intentScore) + parseFloat(emotionScore)) / 4).toFixed(1);

    return {
      overall: overallScore,
      search: searchScore,
      trend: trendScore,
      intent: intentScore,
      emotion: emotionScore
    };
  };

  const scores = calculateScores();

  // Insights automotrices
  const generateInsights = () => {
    const insights = [];

    // Google Trends insight
    if (trendsData?.keywords?.length > 0) {
      const topKeyword = trendsData.keywords.reduce((max, kw) =>
        (kw.average_interest > (max?.average_interest || 0)) ? kw : max
      , null);
      if (topKeyword) {
        insights.push({
          source: 'Google Trends',
          icon: '🔍',
          color: 'from-toyota-red to-toyota-darkRed',
          insight: `"${topKeyword.keyword}" lidera búsquedas automotrices con ${topKeyword.average_interest}/100 de interés`,
          action: 'Aumentar inversión en Google Search Ads',
          priority: 'high'
        });
      }
    }

    // TikTok insight
    if (tiktokData?.trends?.hashtags?.length > 0) {
      const topHashtag = tiktokData.trends.hashtags.reduce((max, tag) =>
        (tag.relevanceScore > (max?.relevanceScore || 0)) ? tag : max
      , null);
      if (topHashtag) {
        insights.push({
          source: 'TikTok Creative Center',
          icon: '🎵',
          color: 'from-toyota-gray to-toyota-black',
          insight: `${topHashtag.hashtag} alcanzó ${topHashtag.views} views en contenido automotriz`,
          action: 'Crear videos RAV4 con este hashtag',
          priority: 'medium'
        });
      }
    }

    // Meta insight
    if (metaData?.aggregatedTopics?.length > 0) {
      const topTopic = metaData.aggregatedTopics.reduce((max, topic) =>
        (topic.engagement_score > (max?.engagement_score || 0)) ? topic : max
      , null);
      if (topTopic) {
        insights.push({
          source: 'Meta Platforms',
          icon: '💙',
          color: 'from-toyota-green to-success',
          insight: `"${topTopic.topic}" genera ${topTopic.engagement_score}/10 de engagement`,
          action: 'Expandir contenido híbrido en Facebook/Instagram',
          priority: 'high'
        });
      }
    }

    return insights;
  };

  const insights = generateInsights();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-toyota-red to-toyota-darkRed rounded-2xl p-6 sm:p-8 text-white shadow-toyota-lg">
        <div className="flex items-center gap-3 mb-4">
          <Database className="w-8 h-8" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">{LAYER_CONFIG.data.name}</h2>
            <p className="text-white/90 text-sm sm:text-base mt-1">{LAYER_CONFIG.data.subtitle}</p>
          </div>
        </div>

        {/* Scores Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-5 h-5" />
              <span className="text-sm font-medium">Búsqueda</span>
            </div>
            <p className="text-3xl font-bold">{scores.search}<span className="text-lg">/10</span></p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Tendencia</span>
            </div>
            <p className="text-3xl font-bold">{scores.trend}<span className="text-lg">/10</span></p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5" />
              <span className="text-sm font-medium">Intención</span>
            </div>
            <p className="text-3xl font-bold">{scores.intent}<span className="text-lg">/10</span></p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Engagement</span>
            </div>
            <p className="text-3xl font-bold">{scores.emotion}<span className="text-lg">/10</span></p>
          </div>
        </div>

        {/* Last Refresh */}
        {lastRefresh && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Clock className="w-4 h-4" />
              <span>Última actualización: {lastRefresh.toLocaleString('es-PE', {
                day: '2-digit',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit'
              })}</span>
            </div>
            <button
              onClick={loadData}
              disabled={isRefreshing}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
            >
              {isRefreshing ? 'Actualizando...' : 'Actualizar'}
            </button>
          </div>
        )}
      </div>

      {/* Insights Dinámicos */}
      {insights.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-toyota-red" />
            Insights Automáticos
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {insights.map((insight, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${insight.color} rounded-xl p-5 text-white`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{insight.icon}</span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    insight.priority === 'high' ? 'bg-white/30' : 'bg-white/20'
                  }`}>
                    {insight.priority === 'high' ? 'Alta prioridad' : 'Media prioridad'}
                  </span>
                </div>
                <p className="text-sm font-medium mb-2">{insight.source}</p>
                <p className="text-sm mb-3">{insight.insight}</p>
                <div className="pt-3 border-t border-white/30">
                  <p className="text-xs font-semibold">Acción recomendada:</p>
                  <p className="text-xs mt-1">{insight.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fuentes de Datos */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('sources')}
          className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-toyota-red" />
            <h3 className="text-xl font-bold text-gray-900">Fuentes de Datos Activas</h3>
          </div>
          {expandedSections.sources ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expandedSections.sources && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Google Trends */}
            <div className="border-2 border-blue-100 rounded-xl p-5 bg-blue-50/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Google Trends</h4>
                  <p className="text-xs text-gray-600">Búsquedas en tiempo real</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Región:</span>
                  <span className="font-semibold text-gray-900">Perú (PE)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoría:</span>
                  <span className="font-semibold text-gray-900">Autos & Vehicles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Keywords:</span>
                  <span className="font-semibold text-gray-900">{KEYWORDS_TOYOTA.principal.length}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-blue-200">
                  <span className="text-xs text-gray-600">Estado:</span>
                  <span className="flex items-center gap-1 text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Activo
                  </span>
                </div>
              </div>
            </div>

            {/* TikTok */}
            <div className="border-2 border-gray-100 rounded-xl p-5 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">TikTok</h4>
                  <p className="text-xs text-gray-600">Creative Center</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hashtags:</span>
                  <span className="font-semibold text-gray-900">{ALL_HASHTAGS.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Métricas:</span>
                  <span className="font-semibold text-gray-900">Views, Likes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Scraping:</span>
                  <span className="font-semibold text-gray-900">Público</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="text-xs text-gray-600">Estado:</span>
                  <span className="flex items-center gap-1 text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Activo
                  </span>
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="border-2 border-blue-100 rounded-xl p-5 bg-blue-50/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Meta Platforms</h4>
                  <p className="text-xs text-gray-600">Facebook + Instagram</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plataformas:</span>
                  <span className="font-semibold text-gray-900">FB + IG</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Topics:</span>
                  <span className="font-semibold text-gray-900">SUV, Híbridos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipo:</span>
                  <span className="font-semibold text-gray-900">Scraping público</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-blue-200">
                  <span className="text-xs text-gray-600">Estado:</span>
                  <span className="flex items-center gap-1 text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Activo
                  </span>
                </div>
              </div>
            </div>

            {/* YouTube */}
            <div className="border-2 border-red-100 rounded-xl p-5 bg-red-50/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">YouTube</h4>
                  <p className="text-xs text-gray-600">Videos y reviews</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Keywords:</span>
                  <span className="font-semibold text-gray-900">RAV4 review</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Canales:</span>
                  <span className="font-semibold text-gray-900">Toyota Perú</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Métricas:</span>
                  <span className="font-semibold text-gray-900">Views, Likes</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-red-200">
                  <span className="text-xs text-gray-600">Estado:</span>
                  <span className="flex items-center gap-1 text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Activo
                  </span>
                </div>
              </div>
            </div>

            {/* Portales Automotrices */}
            <div className="border-2 border-green-100 rounded-xl p-5 bg-green-50/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Portales Auto</h4>
                  <p className="text-xs text-gray-600">Neoauto, Autocosmos</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Fuentes:</span>
                  <span className="font-semibold text-gray-900">3 portales</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Data:</span>
                  <span className="font-semibold text-gray-900">Reviews + Precios</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Región:</span>
                  <span className="font-semibold text-gray-900">Perú</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-green-200">
                  <span className="text-xs text-gray-600">Estado:</span>
                  <span className="flex items-center gap-1 text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Activo
                  </span>
                </div>
              </div>
            </div>

            {/* GA4 Mock */}
            <div className="border-2 border-orange-100 rounded-xl p-5 bg-orange-50/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Google Analytics 4</h4>
                  <p className="text-xs text-gray-600">Tráfico web (mock)</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sesiones:</span>
                  <span className="font-semibold text-gray-900">89.2K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conversiones:</span>
                  <span className="font-semibold text-gray-900">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipo:</span>
                  <span className="font-semibold text-gray-900">Mock data</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-orange-200">
                  <span className="text-xs text-gray-600">Estado:</span>
                  <span className="flex items-center gap-1 text-yellow-600 font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    Demo
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Google Trends Data */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('trends')}
          className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900">Google Trends - Perú</h3>
              <p className="text-sm text-gray-600">Tendencias de búsqueda automotriz</p>
            </div>
          </div>
          {expandedSections.trends ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expandedSections.trends && trendsData && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {trendsData.keywords?.slice(0, 8).map((kw, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{kw.keyword}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        Perú - Categoría: Autos
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">{kw.average_interest}</div>
                      <div className="text-xs text-gray-500">Interés promedio</div>
                    </div>
                  </div>

                  {kw.growth_3m && (
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                      kw.growth_3m.includes('+') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {kw.growth_3m.includes('+') ?
                        <TrendingUp className="w-4 h-4" /> :
                        <TrendingDown className="w-4 h-4" />
                      }
                      <span className="text-sm font-semibold">Tendencia 3M: {kw.growth_3m}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* TikTok Data */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('tiktok')}
          className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Video className="w-6 h-6 text-black" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900">TikTok Creative Center</h3>
              <p className="text-sm text-gray-600">Hashtags virales automotrices</p>
            </div>
          </div>
          {expandedSections.tiktok ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expandedSections.tiktok && tiktokData && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tiktokData.trends?.hashtags?.slice(0, 9).map((tag, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900 mb-2">{tag.hashtag}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Views:</span>
                      <span className="font-bold text-gray-900">{tag.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Relevancia:</span>
                      <span className="font-bold text-gray-900">{tag.relevanceScore}/100</span>
                    </div>
                    {tag.posts && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Posts:</span>
                        <span className="font-bold text-gray-900">{tag.posts}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Meta Data */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <button
          onClick={() => toggleSection('meta')}
          className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Share2 className="w-6 h-6 text-blue-500" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900">Meta Platforms</h3>
              <p className="text-sm text-gray-600">Facebook + Instagram Insights</p>
            </div>
          </div>
          {expandedSections.meta ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {expandedSections.meta && metaData && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {metaData.aggregatedTopics?.slice(0, 6).map((topic, idx) => (
                <div key={idx} className="border-2 border-blue-100 rounded-lg p-5 bg-blue-50/50">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-900 text-lg flex-1">{topic.topic}</h4>
                    <div className="text-right ml-3">
                      <div className="text-2xl font-bold text-blue-600">{topic.engagement_score}</div>
                      <div className="text-xs text-gray-600">Engagement</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    {topic.mentions && (
                      <div className="flex justify-between items-center py-2 border-t border-blue-200">
                        <span className="text-gray-600">Menciones:</span>
                        <span className="font-semibold text-gray-900">{topic.mentions.toLocaleString()}</span>
                      </div>
                    )}
                    {topic.sentiment && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Sentimiento:</span>
                        <span className={`font-semibold ${
                          topic.sentiment === 'very positive' ? 'text-green-600' :
                          topic.sentiment === 'positive' ? 'text-green-600' :
                          topic.sentiment === 'neutral' ? 'text-gray-600' : 'text-yellow-600'
                        }`}>
                          {topic.sentiment === 'very positive' ? 'Muy Positivo' :
                           topic.sentiment === 'positive' ? 'Positivo' :
                           topic.sentiment === 'neutral' ? 'Neutral' :
                           topic.sentiment === 'negative' ? 'Negativo' : topic.sentiment}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Keywords Toyota Referencia */}
      <div className="bg-gradient-to-br from-toyota-red to-toyota-darkRed rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Car className="w-6 h-6" />
          Keywords Monitoreadas - Toyota RAV4 Híbrida
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-white/90">Principal</h4>
            <div className="flex flex-wrap gap-2">
              {KEYWORDS_TOYOTA.principal.slice(0, 4).map((kw, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-xs">
                  {kw}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white/90">Intención de Compra</h4>
            <div className="flex flex-wrap gap-2">
              {KEYWORDS_TOYOTA.compra.slice(0, 4).map((kw, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-xs">
                  {kw}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white/90">Tecnología</h4>
            <div className="flex flex-wrap gap-2">
              {KEYWORDS_TOYOTA.hibrido.slice(0, 4).map((kw, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-xs">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
