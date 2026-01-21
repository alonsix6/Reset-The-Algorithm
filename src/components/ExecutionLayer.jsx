import { useState } from 'react';
import { DollarSign, TrendingUp, Target, Zap, Calendar, PlayCircle, AlertTriangle, Dumbbell, ChevronDown, ChevronUp, MessageCircle, Rocket, CheckCircle, ArrowRight, AlertCircle, FileText, Globe, Star, Lightbulb } from 'lucide-react';
import { BUDGET_ALLOCATION, SERVICIOS_PERFORMANCE, SEDES_PERFORMANCE } from '../data/mockData';
import { LAYER_CONFIG } from '../data/config';

export default function ExecutionLayer() {
  const [showAllServicios, setShowAllServicios] = useState(false);

  const getStatusColor = (status) => {
    if (status === 'overperforming') return { bg: 'bg-fitzone-lime/10', border: 'border-fitzone-lime/30', text: 'text-fitzone-lime', badge: 'bg-fitzone-lime/20' };
    if (status === 'performing') return { bg: 'bg-fitzone-electric/10', border: 'border-fitzone-electric/30', text: 'text-fitzone-electric', badge: 'bg-fitzone-electric/20' };
    if (status === 'ontrack') return { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', badge: 'bg-yellow-500/20' };
    return { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', badge: 'bg-red-500/20' };
  };

  const getStatusIcon = (status) => {
    if (status === 'overperforming') return <Rocket className="w-3 h-3" />;
    if (status === 'performing') return <CheckCircle className="w-3 h-3" />;
    if (status === 'ontrack') return <ArrowRight className="w-3 h-3" />;
    return <AlertCircle className="w-3 h-3" />;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-fitzone-slate rounded-2xl shadow-lg p-6 border border-fitzone-orange/10">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">
              {LAYER_CONFIG.execution.name}
            </h2>
            <p className="text-fitzone-textGray">
              {LAYER_CONFIG.execution.subtitle}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-fitzone-lime text-fitzone-charcoal rounded-full text-sm font-medium flex items-center gap-1">
              <PlayCircle className="w-4 h-4" />
              Live
            </span>
          </div>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="bg-gradient-to-br from-fitzone-orange to-fitzone-darkOrange text-white rounded-2xl shadow-fitzone-lg p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <DollarSign className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Presupuesto Mensual FitZone</h3>
              <p className="text-white/90 mt-1 text-sm">Distribucion inteligente por canal digital</p>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <div className="flex items-baseline gap-2">
              <span className="text-xl text-white/80">$</span>
              <span className="text-4xl font-bold">{(BUDGET_ALLOCATION.total_budget / 1000).toFixed(0)}K</span>
            </div>
            <p className="text-white/80 mt-2">Total presupuesto mensual</p>
          </div>
        </div>

        {/* Budget Progress */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium">Ejecucion del mes</span>
            <span className="text-xl font-bold">
              ${(Object.values(BUDGET_ALLOCATION.distribution).reduce((sum, ch) => sum + ch.amount, 0)).toLocaleString()}
            </span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
          </div>
          <p className="text-xs text-white/70 mt-2">100% del presupuesto asignado</p>
        </div>
      </div>

      {/* Budget Allocation by Channel */}
      <div className="bg-fitzone-slate rounded-2xl shadow-lg p-6 border border-fitzone-orange/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-fitzone-electric to-fitzone-cyan rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Distribucion por Canal Digital</h3>
            <p className="text-sm text-fitzone-textGray">Performance y asignacion para adquisicion de miembros</p>
          </div>
        </div>

        <div className="grid gap-4">
          {Object.entries(BUDGET_ALLOCATION.distribution).map(([key, channel]) => {
            const colors = getStatusColor(channel.status);
            return (
              <div key={key} className={`p-5 rounded-xl border-2 ${colors.bg} ${colors.border}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-white text-base">
                        {key === 'meta_ads' ? 'Meta Ads (FB + IG)' :
                         key === 'google_search' ? 'Google Search' :
                         key === 'tiktok_ads' ? 'TikTok Ads' :
                         key === 'google_display' ? 'Google Display' :
                         key === 'influencers' ? 'Influencers' : key}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${colors.badge} ${colors.text}`}>
                        {getStatusIcon(channel.status)} {channel.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-fitzone-textGray mb-3">
                      <strong>KPI Principal:</strong> {channel.kpi}
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-fitzone-textGray">Target</p>
                        <p className="font-semibold text-white">{channel.target}</p>
                      </div>
                      <div>
                        <p className="text-fitzone-textGray">Performance Actual</p>
                        <p className={`font-semibold ${colors.text}`}>{channel.current_performance}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center lg:text-right lg:min-w-[200px]">
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-white">{channel.percentage}%</span>
                    </div>
                    <div className="text-xl font-bold text-fitzone-orange mb-1">
                      ${channel.amount.toLocaleString()}
                    </div>
                    <p className="text-xs text-fitzone-textGray">del presupuesto total</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="w-full h-2 bg-fitzone-charcoal rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        channel.status === 'overperforming' ? 'bg-fitzone-lime' :
                        channel.status === 'performing' ? 'bg-fitzone-electric' :
                        channel.status === 'ontrack' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${channel.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Optimization Recommendations */}
      <div className="bg-fitzone-slate rounded-2xl shadow-lg p-6 border border-fitzone-orange/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Recomendaciones de Optimizacion</h3>
            <p className="text-sm text-fitzone-textGray">Ajustes sugeridos basados en performance</p>
          </div>
        </div>

        <div className="space-y-4">
          {BUDGET_ALLOCATION.recommendations.map((rec, idx) => (
            <div key={idx} className={`p-5 rounded-xl border-2 ${
              rec.type === 'increase' ? 'bg-fitzone-lime/10 border-fitzone-lime/30' :
              rec.type === 'decrease' ? 'bg-red-500/10 border-red-500/30' :
              'bg-fitzone-electric/10 border-fitzone-electric/30'
            }`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    rec.type === 'increase' ? 'bg-fitzone-lime/30 text-fitzone-lime' :
                    rec.type === 'decrease' ? 'bg-red-500/30 text-red-400' :
                    'bg-fitzone-electric/30 text-fitzone-electric'
                  }`}>
                    {rec.type === 'increase' ? 'AUMENTAR' :
                     rec.type === 'decrease' ? 'REDUCIR' : 'MANTENER'}
                  </span>
                  <span className="text-sm font-semibold text-white uppercase">
                    {rec.channel === 'tiktok_ads' ? 'TikTok Ads' :
                     rec.channel === 'meta_ads' ? 'Meta Ads' :
                     rec.channel === 'google_display' ? 'Google Display' : rec.channel}
                  </span>
                </div>
                {rec.from && rec.to && (
                  <div className="text-right">
                    <span className="text-xs text-fitzone-textGray">Cambio</span>
                    <p className="font-bold text-white">{rec.from}% → {rec.to}%</p>
                  </div>
                )}
              </div>

              <p className="text-white font-medium mb-2">{rec.reason}</p>
              {rec.impact && (
                <p className="text-sm text-fitzone-lime font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Impacto: {rec.impact}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Servicios Performance */}
      <div className="bg-fitzone-slate rounded-2xl shadow-lg p-6 border border-fitzone-orange/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-fitzone rounded-xl flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Performance por Servicio</h3>
              <p className="text-sm text-fitzone-textGray">Rendimiento de campana por tipo de membresia</p>
            </div>
          </div>
          <button
            onClick={() => setShowAllServicios(!showAllServicios)}
            className="flex items-center gap-2 px-4 py-2 bg-fitzone-orange text-white rounded-lg hover:bg-fitzone-darkOrange transition-colors text-sm font-medium"
          >
            {showAllServicios ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Mostrar top 4
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Mostrar todos ({SERVICIOS_PERFORMANCE.length})
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICIOS_PERFORMANCE
            .slice(0, showAllServicios ? SERVICIOS_PERFORMANCE.length : 4)
            .map((servicio, idx) => {
            return (
              <div key={servicio.id} className={`p-5 rounded-xl border-2 ${
                idx < 2 ? 'bg-fitzone-orange/5 border-fitzone-orange/30' : 'bg-fitzone-charcoal/60 border-fitzone-slate'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-white text-base">{servicio.nombre}</h4>
                  {idx < 2 && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-fitzone-orange/20 text-fitzone-orange flex items-center gap-1">
                      <Star className="w-3 h-3" /> TOP
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-fitzone-textGray">Leads</span>
                    <span className="font-semibold text-white">{servicio.leads}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-fitzone-textGray">Conversiones</span>
                    <span className="font-semibold text-fitzone-lime">{servicio.conversiones}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-fitzone-textGray">CPL</span>
                    <span className="font-semibold text-fitzone-orange">${servicio.cpl}</span>
                  </div>
                </div>

                {/* Lead Ads Metrics */}
                <div className="pt-3 border-t border-fitzone-slate mb-3">
                  <p className="text-xs font-semibold text-fitzone-textGray mb-2 flex items-center gap-1">
                    <FileText className="w-3 h-3" /> Lead Ads (Meta)
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-fitzone-textGray">Formularios</p>
                      <p className="font-semibold text-white">{servicio.leadAds.formularios}</p>
                    </div>
                    <div>
                      <p className="text-fitzone-textGray">Conv. Rate</p>
                      <p className="font-semibold text-fitzone-lime">{servicio.leadAds.conversion_rate}%</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Metrics */}
                <div className="pt-3 border-t border-fitzone-slate">
                  <p className="text-xs font-semibold text-fitzone-textGray mb-2 flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-fitzone-lime" />
                    WhatsApp
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-fitzone-textGray">Conversaciones</p>
                      <p className="font-semibold text-white">{servicio.whatsapp.conversaciones}</p>
                    </div>
                    <div>
                      <p className="text-fitzone-textGray">Tasa Respuesta</p>
                      <p className="font-semibold text-fitzone-lime">{servicio.whatsapp.tasa_respuesta}%</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timing Recommendations */}
      <div className="bg-gradient-to-br from-fitzone-electric to-fitzone-cyan text-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-8 h-8" />
          <h3 className="text-lg font-bold">Timing Optimo de Campana</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <h4 className="font-bold text-base mb-3">Mejores horarios del dia</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white/90">5:00 - 8:00 AM (Early birds)</span>
                <span className="px-2 py-1 bg-white/20 rounded text-sm font-bold">+40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">12:00 - 2:00 PM (Lunch)</span>
                <span className="px-2 py-1 bg-white/20 rounded text-sm font-bold">+10%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">6:00 - 9:00 PM (After work)</span>
                <span className="px-2 py-1 bg-fitzone-lime/30 rounded text-sm font-bold">+60%</span>
              </div>
            </div>
            <p className="text-xs text-white/70 mt-3">Pico maximo: 6-9 PM post-trabajo</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <h4 className="font-bold text-base mb-3">Mejores dias de la semana</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white/90">Lunes</span>
                <span className="px-2 py-1 bg-fitzone-lime/30 rounded text-sm font-bold">Muy Alta</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Martes</span>
                <span className="px-2 py-1 bg-white/20 rounded text-sm font-bold">Alta</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Sabado AM</span>
                <span className="px-2 py-1 bg-white/20 rounded text-sm font-bold">Media</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
          <p className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> Estacionalidad FitZone:
          </p>
          <p className="text-sm">Enero (pico maximo - propositos), Feb-Mar (verano), Sep-Nov (pre-verano). Diciembre es el mes mas bajo - reducir budget 20%.</p>
        </div>
      </div>
    </div>
  );
}
