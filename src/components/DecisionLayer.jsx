import { Target, Users, MessageSquare, TrendingUp, Lightbulb, Zap, AlertCircle, Dumbbell, Flame, BarChart3, CheckCircle, FlaskConical } from 'lucide-react';
import { OPPORTUNITY_SCORE } from '../data/mockData';
import { LAYER_CONFIG, KEY_MESSAGES, TARGET_AUDIENCES } from '../data/config';

export default function DecisionLayer() {
  const recommendations = [
    {
      priority: 'high',
      category: 'Meta Ads',
      action: 'Aumentar budget TikTok 25% - CPL 12% debajo del objetivo, audiencia joven con engagement excepcional',
      impact: '+150 leads/mes estimados de jovenes 18-25',
      confidence: 94
    },
    {
      priority: 'high',
      category: 'Campana',
      action: 'Lanzar "Proposito 2026" - Enero es pico maximo de demanda (+85% busquedas)',
      impact: '+280 trials estimados primera quincena',
      confidence: 92
    },
    {
      priority: 'medium',
      category: 'Influencers',
      action: 'Activar micro-influencers fitness (10-50K) - UGC de transformaciones tiene 3x engagement',
      impact: '+420K alcance organico estimado',
      confidence: 88
    },
    {
      priority: 'medium',
      category: 'Promocion',
      action: 'Promocion "Sin Matricula" primera quincena - Competir con oferta agresiva de Smart Fit',
      impact: 'Capturar usuarios sensibles al precio',
      confidence: 85
    },
    {
      priority: 'low',
      category: 'Lima Norte',
      action: 'Aumentar budget 15% para Los Olivos/Independencia - CPL $8.50 vs promedio $11.20',
      impact: '+95 leads adicionales/mes en expansion',
      confidence: 78
    }
  ];

  const audiences = TARGET_AUDIENCES.map(aud => ({
    name: aud.name,
    size: aud.size,
    engagement: `${aud.engagement_rate}%`,
    status: 'active',
    description: aud.description + ` - ${aud.interests.slice(0, 3).join(', ')}`,
    message: aud.message,
    age_range: aud.age_range,
    cpl_target: aud.cpl_target
  }));

  const getScoreGrade = (score) => {
    if (score >= 85) return 'A+';
    if (score >= 75) return 'A';
    if (score >= 65) return 'B+';
    if (score >= 55) return 'B';
    return 'C';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-fitzone-slate rounded-2xl shadow-lg p-6 border border-fitzone-orange/10">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">
              {LAYER_CONFIG.decision.name}
            </h2>
            <p className="text-fitzone-textGray">
              {LAYER_CONFIG.decision.subtitle}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-fitzone-orange text-white rounded-full text-sm font-medium">
              IA Activa
            </span>
          </div>
        </div>
      </div>

      {/* FitZone Opportunity Score */}
      <div className="bg-gradient-to-br from-fitzone-orange to-fitzone-darkOrange text-white rounded-2xl shadow-fitzone-lg p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Zap className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold">FitZone Opportunity Score</h3>
              <p className="text-white/90 mt-1 text-sm">Indice de oportunidad para inversion en adquisicion de miembros</p>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold">{OPPORTUNITY_SCORE.current_score}</span>
              <span className="text-xl text-white/80">/100</span>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-3 mt-2">
              <span className={`px-4 py-2 rounded-lg text-base font-bold ${
                OPPORTUNITY_SCORE.current_score >= 75 ? 'bg-fitzone-lime text-fitzone-charcoal' :
                OPPORTUNITY_SCORE.current_score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                Grado {getScoreGrade(OPPORTUNITY_SCORE.current_score)}
              </span>
              <span className="text-fitzone-lime font-semibold text-sm">
                {OPPORTUNITY_SCORE.trend} vs periodo anterior
              </span>
            </div>
          </div>
        </div>

        {/* Score Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(OPPORTUNITY_SCORE.components).map(([key, component]) => (
            <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-sm text-white/80">
                  {key === 'search_interest' ? 'Interes Busqueda' :
                   key === 'social_engagement' ? 'Engagement Social' :
                   key === 'competitor_gap' ? 'Gap Competitivo' :
                   key === 'seasonal_index' ? 'Indice Estacional' :
                   key === 'conversion_efficiency' ? 'Eficiencia Conversion' : key}
                </h4>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                  {(component.weight * 100).toFixed(0)}% peso
                </span>
              </div>
              <div className="text-2xl font-bold mb-2">{component.score}</div>
              <div className="text-xs text-white/70">
                {component.insight}
              </div>
            </div>
          ))}
        </div>

        {/* Main Recommendation */}
        <div className="mt-6 p-5 bg-white/20 backdrop-blur-sm rounded-xl border-2 border-white/30">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-2 text-sm">Recomendacion automatica:</p>
              <p className="text-base">{OPPORTUNITY_SCORE.recommendation.message}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {OPPORTUNITY_SCORE.recommendation.actions.map((action, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/20 rounded-lg text-xs font-medium">
                    {action}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/80 mt-3">
                Confianza: {OPPORTUNITY_SCORE.recommendation.confidence} |
                Prioridad: {OPPORTUNITY_SCORE.recommendation.priority.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-fitzone-slate rounded-2xl shadow-lg p-6 border border-fitzone-orange/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-fitzone rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Recomendaciones Estrategicas</h3>
            <p className="text-sm text-fitzone-textGray">Acciones prioritarias basadas en senales del mercado fitness</p>
          </div>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec, idx) => (
            <div key={idx} className={`p-5 rounded-xl border-2 ${
              rec.priority === 'high'
                ? 'bg-fitzone-orange/10 border-fitzone-orange/30'
                : rec.priority === 'medium'
                ? 'bg-yellow-500/10 border-yellow-500/30'
                : 'bg-fitzone-electric/10 border-fitzone-electric/30'
            }`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                    rec.priority === 'high'
                      ? 'bg-fitzone-orange/30 text-fitzone-orange'
                      : rec.priority === 'medium'
                      ? 'bg-yellow-500/30 text-yellow-400'
                      : 'bg-fitzone-electric/30 text-fitzone-electric'
                  }`}>
                    {rec.priority === 'high' ? <><Flame className="w-3 h-3" /> ALTA</> :
                     rec.priority === 'medium' ? <><Zap className="w-3 h-3" /> MEDIA</> : <><BarChart3 className="w-3 h-3" /> BAJA</>}
                  </span>
                  <span className="text-xs font-semibold text-fitzone-textGray uppercase">{rec.category}</span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-fitzone-textGray">Confianza</p>
                  <p className="text-base font-bold text-white">{rec.confidence}%</p>
                </div>
              </div>

              <p className="text-white font-medium mb-2">{rec.action}</p>
              <p className="text-sm text-fitzone-lime font-semibold flex items-center gap-1">
                <Target className="w-4 h-4" />
                {rec.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audiences */}
      <div className="bg-fitzone-slate rounded-2xl shadow-lg p-6 border border-fitzone-orange/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-fitzone-electric to-fitzone-cyan rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Audiencias Objetivo FitZone</h3>
            <p className="text-sm text-fitzone-textGray">Segmentacion inteligente para adquisicion de miembros 2026</p>
          </div>
        </div>

        <div className="grid gap-4">
          {audiences.map((aud, idx) => (
            <div key={idx} className="p-5 bg-fitzone-charcoal/60 rounded-xl border border-fitzone-slate hover:border-fitzone-orange/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-white text-base">{aud.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                      aud.status === 'active' ? 'bg-fitzone-lime/20 text-fitzone-lime' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {aud.status === 'active' ? <><CheckCircle className="w-3 h-3" /> ACTIVA</> : <><FlaskConical className="w-3 h-3" /> TESTING</>}
                    </span>
                  </div>
                  <p className="text-sm text-fitzone-textGray">{aud.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mt-4 pb-4 border-b border-fitzone-slate">
                <div>
                  <p className="text-xs text-fitzone-textGray">Tamano Potencial</p>
                  <p className="text-xl font-bold text-white">{aud.size}</p>
                </div>
                <div>
                  <p className="text-xs text-fitzone-textGray">Engagement Rate</p>
                  <p className="text-xl font-bold text-fitzone-electric">{aud.engagement}</p>
                </div>
                <div>
                  <p className="text-xs text-fitzone-textGray">CPL Target</p>
                  <p className="text-xl font-bold text-fitzone-orange">${aud.cpl_target}</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-fitzone-slate/50 rounded-lg">
                <p className="text-xs text-fitzone-textGray mb-1">Mensaje recomendado:</p>
                <p className="text-sm font-semibold text-white">{aud.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Pillars */}
      <div className="bg-gradient-to-br from-fitzone-charcoal to-fitzone-slate text-white rounded-2xl shadow-lg p-8 border border-fitzone-orange/20">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-8 h-8 text-fitzone-orange" />
          <h3 className="text-lg font-bold">Pilares de Contenido Sugeridos</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-fitzone-slate/50 backdrop-blur-sm rounded-xl p-5 border border-fitzone-orange/20">
            <div className="flex items-center gap-2 mb-3">
              <Dumbbell className="w-5 h-5 text-fitzone-orange" />
              <p className="text-fitzone-textGray text-sm font-semibold">Pilar 1: {KEY_MESSAGES.espacio.title}</p>
            </div>
            <p className="text-base font-bold mb-2">"{KEY_MESSAGES.espacio.message}"</p>
            <p className="text-fitzone-textGray text-sm mb-3">{KEY_MESSAGES.espacio.description}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">Horarios flexibles</span>
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">Libertad</span>
            </div>
          </div>

          <div className="bg-fitzone-slate/50 backdrop-blur-sm rounded-xl p-5 border border-fitzone-orange/20">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-fitzone-orange" />
              <p className="text-fitzone-textGray text-sm font-semibold">Pilar 2: {KEY_MESSAGES.tecnologia.title}</p>
            </div>
            <p className="text-base font-bold mb-2">"{KEY_MESSAGES.tecnologia.message}"</p>
            <p className="text-fitzone-textGray text-sm mb-3">{KEY_MESSAGES.tecnologia.description}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">App</span>
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">IA</span>
            </div>
          </div>

          <div className="bg-fitzone-slate/50 backdrop-blur-sm rounded-xl p-5 border border-fitzone-orange/20">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-fitzone-orange" />
              <p className="text-fitzone-textGray text-sm font-semibold">Pilar 3: {KEY_MESSAGES.comunidad.title}</p>
            </div>
            <p className="text-base font-bold mb-2">"{KEY_MESSAGES.comunidad.message}"</p>
            <p className="text-fitzone-textGray text-sm mb-3">{KEY_MESSAGES.comunidad.description}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">Clases grupales</span>
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">Challenges</span>
            </div>
          </div>

          <div className="bg-fitzone-slate/50 backdrop-blur-sm rounded-xl p-5 border border-fitzone-orange/20">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-fitzone-orange" />
              <p className="text-fitzone-textGray text-sm font-semibold">Pilar 4: {KEY_MESSAGES.resultados.title}</p>
            </div>
            <p className="text-base font-bold mb-2">"{KEY_MESSAGES.resultados.message}"</p>
            <p className="text-fitzone-textGray text-sm mb-3">{KEY_MESSAGES.resultados.description}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">Transformaciones</span>
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">Nutricion</span>
            </div>
          </div>

          <div className="bg-fitzone-slate/50 backdrop-blur-sm rounded-xl p-5 border border-fitzone-orange/20 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-fitzone-orange" />
              <p className="text-fitzone-textGray text-sm font-semibold">Pilar 5: {KEY_MESSAGES.precio.title}</p>
            </div>
            <p className="text-base font-bold mb-2">"{KEY_MESSAGES.precio.message}"</p>
            <p className="text-fitzone-textGray text-sm mb-3">{KEY_MESSAGES.precio.description}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">Precio justo</span>
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">Sin costos ocultos</span>
              <span className="px-2 py-1 bg-fitzone-orange/20 rounded text-xs">Congelamiento gratis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
