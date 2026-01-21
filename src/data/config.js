// Configuracion general del FitZone Algorithm
// Textos, mensajes, secciones y configuracion de UI

// ============================================================================
// BRAND CONFIGURATION - Configuracion de marca FitZone
// ============================================================================
export const BRAND_CONFIG = {
  name: 'FitZone Algorithm',
  tagline: 'Inteligencia de Mercado Fitness',
  subtitle: 'Optimizacion automatica de inversion digital en adquisicion de miembros',
  product: 'Membresias y Servicios 2026',
  market: 'Lima Metropolitana (12 sedes)',
  client: 'FitZone Peru',
  version: '1.0.0',
  slogan: 'Tu Espacio, Tu Ritmo',
  founded: 2019,
};

// ============================================================================
// LAYER TITLES - Titulos y descripciones de las 4 capas
// ============================================================================
export const LAYER_CONFIG = {
  data: {
    id: 'data',
    name: 'Captura de Senales',
    subtitle: 'Monitoreo en tiempo real del ecosistema digital fitness',
    description: 'Busqueda, Tendencia, Intencion, Engagement',
    icon: 'Search',
    color: 'from-fitzone-orange to-fitzone-darkOrange',
  },
  decision: {
    id: 'decision',
    name: 'Inteligencia de Mercado',
    subtitle: 'Insights automaticos para optimizar inversion en adquisicion',
    description: 'Analisis y definicion de estrategia',
    icon: 'Target',
    color: 'from-fitzone-darkOrange to-fitzone-electric',
  },
  execution: {
    id: 'execution',
    name: 'Activacion Estrategica',
    subtitle: 'Distribucion inteligente de presupuesto y contenidos',
    description: 'Implementacion en tiempo real',
    icon: 'Zap',
    color: 'from-fitzone-electric to-fitzone-lime',
  },
  optimization: {
    id: 'optimization',
    name: 'Performance & Optimizacion',
    subtitle: 'Resultados en tiempo real y ajustes automaticos',
    description: 'Evaluacion y redistribucion',
    icon: 'TrendingUp',
    color: 'from-fitzone-lime to-fitzone-orange',
  },
};

// ============================================================================
// KEY MESSAGES - Mensajes clave de comunicacion FitZone
// ============================================================================
export const KEY_MESSAGES = {
  espacio: {
    title: 'Tu Espacio, Tu Ritmo',
    message: 'Horarios flexibles 5am-11pm, sin permanencia obligatoria',
    description: 'Entrena a tu manera, cuando quieras',
  },
  tecnologia: {
    title: 'Tecnologia que te Impulsa',
    message: 'App con tracking de progreso y maquinas conectadas',
    description: 'Planes personalizados por IA',
  },
  comunidad: {
    title: 'Comunidad que Motiva',
    message: 'Clases grupales energeticas y eventos mensuales',
    description: 'Retos y challenges que te mantienen activo',
  },
  resultados: {
    title: 'Resultados Garantizados',
    message: 'Asesoria nutricional incluida y mediciones mensuales',
    description: 'Personal trainers certificados',
  },
  precio: {
    title: 'Precio Justo, Calidad Premium',
    message: 'Mejor relacion precio-valor del mercado',
    description: 'Sin costos ocultos, congelamiento gratis',
  },
};

// ============================================================================
// DATA SOURCES - Configuracion de fuentes de datos
// ============================================================================
export const DATA_SOURCES_CONFIG = {
  googleTrends: {
    enabled: true,
    name: 'Google Trends',
    description: 'Tendencias de busqueda fitness en tiempo real',
    icon: 'TrendingUp',
    color: 'text-fitzone-electric',
    bgColor: 'bg-fitzone-slate',
    region: 'PE',
    category: 'Health & Fitness',
    interval: 'hourly',
    status: 'active',
    geo: ['Lima'],
  },
  tiktok: {
    enabled: true,
    name: 'TikTok',
    description: 'Contenido viral fitness y hashtags trending',
    icon: 'Video',
    color: 'text-fitzone-lime',
    bgColor: 'bg-fitzone-slate',
    scraping: 'public',
    status: 'active',
  },
  meta: {
    enabled: true,
    name: 'Meta Platforms',
    description: 'Facebook e Instagram insights fitness',
    icon: 'Share2',
    color: 'text-fitzone-electric',
    bgColor: 'bg-fitzone-slate',
    platforms: ['Facebook', 'Instagram'],
    status: 'active',
  },
  youtube: {
    enabled: true,
    name: 'YouTube',
    description: 'Videos de transformaciones y entrenamientos',
    icon: 'Youtube',
    color: 'text-fitzone-orange',
    bgColor: 'bg-fitzone-slate',
    status: 'active',
  },
  fitness: {
    enabled: true,
    name: 'Portales Fitness',
    description: 'MercadoFitness, AGP, Portales especializados',
    icon: 'Globe',
    color: 'text-fitzone-lime',
    bgColor: 'bg-fitzone-slate',
    sources: ['Mercado Fitness', 'AGP', 'Impronta Research'],
    status: 'active',
  },
  ga4: {
    enabled: false,
    name: 'Google Analytics 4',
    description: 'Trafico web y conversiones',
    icon: 'BarChart3',
    color: 'text-fitzone-orange',
    bgColor: 'bg-fitzone-slate',
    mock_data: true,
    status: 'active',
  },
};

// ============================================================================
// CHANNELS - Canales de activacion
// ============================================================================
export const CHANNELS_CONFIG = {
  meta_ads: {
    name: 'Meta Ads',
    icon: 'Share2',
    color: 'text-fitzone-electric',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'Leads + Awareness',
    description: 'Instagram y Facebook Ads',
    subchannels: ['Lead Ads', 'Conversaciones WhatsApp', 'Visitas Landing'],
  },
  google_search: {
    name: 'Google Search',
    icon: 'Search',
    color: 'text-fitzone-lime',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'Intencion de compra',
    description: 'Campanas Brand, Generic, Competitor',
  },
  google_display: {
    name: 'Google Display',
    icon: 'Monitor',
    color: 'text-fitzone-orange',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'Remarketing + Awareness',
    description: 'Red de display de Google',
  },
  tiktok_ads: {
    name: 'TikTok Ads',
    icon: 'Video',
    color: 'text-fitzone-lime',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'Jovenes 18-25',
    description: 'In-Feed y TopView ads',
  },
  influencers: {
    name: 'Influencers',
    icon: 'Users',
    color: 'text-fitzone-orange',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'UGC + Credibilidad',
    description: 'Micro y macro influencers fitness',
  },
};

// ============================================================================
// SEDES - Ubicaciones FitZone
// ============================================================================
export const SEDES_CONFIG = [
  { id: 1, name: 'FitZone Miraflores', distrito: 'Miraflores', nse: 'A/B', size: '1,200 m2', type: 'Flagship' },
  { id: 2, name: 'FitZone San Isidro', distrito: 'San Isidro', nse: 'A', size: '1,000 m2', type: 'Ejecutivos' },
  { id: 3, name: 'FitZone Surco', distrito: 'Surco', nse: 'A/B', size: '1,100 m2', type: 'Familias' },
  { id: 4, name: 'FitZone La Molina', distrito: 'La Molina', nse: 'A/B', size: '900 m2', type: 'Premium' },
  { id: 5, name: 'FitZone San Borja', distrito: 'San Borja', nse: 'B', size: '800 m2', type: 'Funcional' },
  { id: 6, name: 'FitZone Magdalena', distrito: 'Magdalena', nse: 'B/C', size: '750 m2', type: 'Jovenes' },
  { id: 7, name: 'FitZone Jesus Maria', distrito: 'Jesus Maria', nse: 'B/C', size: '700 m2', type: 'Oficinistas' },
  { id: 8, name: 'FitZone Lince', distrito: 'Lince', nse: 'B/C', size: '650 m2', type: 'Economico' },
  { id: 9, name: 'FitZone San Miguel', distrito: 'San Miguel', nse: 'B/C', size: '800 m2', type: 'Mall' },
  { id: 10, name: 'FitZone Independencia', distrito: 'Independencia', nse: 'C/D', size: '600 m2', type: 'Lima Norte' },
  { id: 11, name: 'FitZone Los Olivos', distrito: 'Los Olivos', nse: 'C', size: '700 m2', type: 'Expansion' },
  { id: 12, name: 'FitZone Ate', distrito: 'Ate', nse: 'C/D', size: '650 m2', type: 'Lima Este' },
];

// ============================================================================
// AUDIENCES - Audiencias objetivo
// ============================================================================
export const TARGET_AUDIENCES = [
  {
    id: 'jovenes_activos',
    name: 'Jovenes Activos',
    description: '18-30 anos, estudiantes y primeros trabajos',
    size: '~85,000',
    age_range: '18-30',
    priority: 'high',
    segments: [
      {
        name: 'Universitarios',
        size: '~45,000',
        age: '18-24',
        characteristics: ['Alto engagement redes', 'Sensibles al precio', 'Influenciados por tendencias'],
      },
      {
        name: 'Jovenes Profesionales',
        size: '~40,000',
        age: '25-30',
        characteristics: ['Primer sueldo', 'Buscan comunidad', 'Orientados a resultados'],
      },
    ],
    interests: ['Verse bien', 'Socializar', 'Tendencias TikTok', 'Transformaciones'],
    message: 'Tu transformacion empieza hoy: resultados visibles en 8 semanas',
    channels: {
      'Meta Ads': 35,
      'TikTok Ads': 25,
      'Google Search': 25,
      'Influencers': 15,
    },
    engagement_rate: 14.5,
    cpl_target: 10,
    conversion_funnel: {
      alcance: 1200000,
      visitas_landing: 18000,
      formularios: 2160,
      trials: 756,
      miembros: 416,
    },
  },
  {
    id: 'profesionales_wellness',
    name: 'Profesionales Wellness',
    description: '30-45 anos, ejecutivos y profesionales',
    size: '~35,000',
    age_range: '30-45',
    priority: 'medium',
    segments: [
      {
        name: 'Ejecutivos',
        size: '~20,000',
        age: '30-40',
        characteristics: ['Manejo del estres', 'Horarios flexibles', 'Buscan calidad'],
      },
      {
        name: 'Profesionales Senior',
        size: '~15,000',
        age: '40-45',
        characteristics: ['Salud preventiva', 'Dispuestos a pagar mas', 'Valoran asesoria'],
      },
    ],
    interests: ['Salud', 'Manejo estres', 'Calidad de vida', 'Personal training'],
    message: 'Invierte en tu salud: bienestar integral para profesionales exigentes',
    channels: {
      'Google Search': 40,
      'Meta Ads': 35,
      'Google Display': 15,
      'LinkedIn': 10,
    },
    engagement_rate: 9.2,
    cpl_target: 18,
    conversion_funnel: {
      alcance: 450000,
      visitas_landing: 6750,
      formularios: 810,
      trials: 284,
      miembros: 156,
    },
  },
  {
    id: 'familias_activas',
    name: 'Familias Activas',
    description: '35-50 anos, padres con hijos',
    size: '~20,000',
    age_range: '35-50',
    priority: 'tertiary',
    segments: [
      {
        name: 'Padres Jovenes',
        size: '~12,000',
        age: '35-42',
        characteristics: ['Ejemplo para hijos', 'Buscan actividad conjunta', 'Valoran kids zone'],
      },
      {
        name: 'Padres Establecidos',
        size: '~8,000',
        age: '43-50',
        characteristics: ['Natacion familiar', 'Clases grupales', 'Plan familiar'],
      },
    ],
    interests: ['Actividad en familia', 'Natacion', 'Clases kids', 'Planes familiares'],
    message: 'Fitness en familia: comparte habitos saludables con los que mas quieres',
    channels: {
      'Facebook': 45,
      'Google Search': 30,
      'WhatsApp': 15,
      'Referidos': 10,
    },
    engagement_rate: 7.8,
    cpl_target: 22,
    conversion_funnel: {
      alcance: 280000,
      visitas_landing: 4200,
      formularios: 504,
      trials: 177,
      miembros: 97,
    },
  },
];

// ============================================================================
// TIMING - Mejores momentos para pauta
// ============================================================================
export const OPTIMAL_TIMING = {
  dayparts: [
    { name: 'Early Morning', hours: '5:00 - 8:00', performance: 'high', multiplier: 1.4, audience: 'Profesionales' },
    { name: 'Mediodia', hours: '12:00 - 14:00', performance: 'medium', multiplier: 1.1, audience: 'Oficinistas' },
    { name: 'After Work', hours: '18:00 - 21:00', performance: 'very_high', multiplier: 1.6, audience: 'Todos' },
    { name: 'Noche', hours: '21:00 - 23:00', performance: 'medium', multiplier: 1.0, audience: 'Jovenes' },
  ],
  weekdays: [
    { name: 'Lunes', performance: 'very_high', recommended: true, note: 'Propositos de semana' },
    { name: 'Martes', performance: 'high', recommended: true, note: 'Momentum de lunes' },
    { name: 'Miercoles', performance: 'medium', recommended: true, note: 'Mitad de semana' },
    { name: 'Jueves', performance: 'high', recommended: true, note: 'Pre-fin de semana' },
    { name: 'Viernes', performance: 'low', recommended: false, note: 'Planes sociales' },
    { name: 'Sabado', performance: 'medium', recommended: true, note: 'Clases grupales AM' },
    { name: 'Domingo', performance: 'low', recommended: false, note: 'Descanso' },
  ],
  seasonality: [
    { month: 'Enero', demand: 'very_high', note: 'Propositos de Ano Nuevo' },
    { month: 'Febrero', demand: 'high', note: 'Verano, playas' },
    { month: 'Marzo', demand: 'high', note: 'Post-verano, rutina' },
    { month: 'Abril-Mayo', demand: 'medium', note: 'Estabilizacion' },
    { month: 'Junio-Agosto', demand: 'high', note: 'Invierno, indoor' },
    { month: 'Sept-Nov', demand: 'high', note: 'Pre-verano' },
    { month: 'Diciembre', demand: 'low', note: 'Fiestas' },
  ],
};

// ============================================================================
// SERVICIOS - Productos/Servicios monitoreados
// ============================================================================
export const SERVICIOS_CONFIG = [
  { id: 1, nombre: 'Membresia Basica', revenue_pct: 35, cpl_target: 10, conversion: 8 },
  { id: 2, nombre: 'Membresia Premium', revenue_pct: 25, cpl_target: 15, conversion: 6 },
  { id: 3, nombre: 'Plan Familiar', revenue_pct: 15, cpl_target: 22, conversion: 5 },
  { id: 4, nombre: 'Personal Training', revenue_pct: 12, cpl_target: 28, conversion: 4 },
  { id: 5, nombre: 'Clases Especializadas', revenue_pct: 8, cpl_target: 12, conversion: 7 },
  { id: 6, nombre: 'Nutricion/Suplementos', revenue_pct: 5, cpl_target: 8, conversion: 10 },
];

// ============================================================================
// METRIC CARDS - Configuracion de tarjetas metricas principales
// ============================================================================
export const METRIC_CARDS_CONFIG = [
  {
    id: 'nuevos_miembros',
    title: 'Nuevos Miembros',
    description: 'Miembros activos adquiridos este mes',
    icon: 'Users',
    color: 'fitzone-orange',
    gradient: 'from-fitzone-orange to-fitzone-darkOrange',
  },
  {
    id: 'reach',
    title: 'Alcance Total',
    description: 'Usuarios unicos impactados en Lima',
    icon: 'Eye',
    color: 'fitzone-electric',
    gradient: 'from-fitzone-electric to-fitzone-cyan',
  },
  {
    id: 'engagement',
    title: 'Interacciones',
    description: 'Likes, shares, comentarios, saves',
    icon: 'Heart',
    color: 'fitzone-lime',
    gradient: 'from-fitzone-lime to-fitzone-green',
  },
  {
    id: 'opportunity',
    title: 'FitZone Opportunity Score',
    description: 'Indice de oportunidad de inversion fitness',
    icon: 'Zap',
    color: 'fitzone-orange',
    gradient: 'from-fitzone-orange to-fitzone-lime',
  },
];

// ============================================================================
// CRM INTEGRATION - Configuracion de alertas CPL
// ============================================================================
export const CRM_CONFIG = {
  enabled: false,
  api_key: null,
  cpl_thresholds: {
    jovenes_activos: {
      cpl_target: 10,
      cpl_alert: 12,
      cpl_pause: 15,
      max_cpl: 13,
    },
    profesionales_wellness: {
      cpl_target: 18,
      cpl_alert: 22,
      cpl_pause: 28,
      max_cpl: 25,
    },
    familias_activas: {
      cpl_target: 20,
      cpl_alert: 25,
      cpl_pause: 32,
      max_cpl: 28,
    },
  },
  conversion_tracking: {
    lead_ads: true,
    whatsapp_conversations: true,
    landing_page_visits: true,
    trial_signups: true,
    membership_conversions: true,
  },
  alerts: {
    email: true,
    webhook: false,
    dashboard: true,
  },
};

// ============================================================================
// UI TEXT - Textos de interfaz
// ============================================================================
export const UI_TEXT = {
  loading: 'Cargando FitZone Algorithm...',
  lastUpdate: 'Ultima actualizacion',
  systemActive: 'Sistema activo',
  noData: 'No hay datos disponibles',
  error: 'Error al cargar datos',
  retry: 'Reintentar',

  footer: {
    copyright: '2026 FitZone Algorithm - Tu Espacio, Tu Ritmo',
    version: 'v1.0.0',
  },

  buttons: {
    viewDetails: 'Ver detalles',
    export: 'Exportar',
    refresh: 'Actualizar',
    filter: 'Filtrar',
    expandAll: 'Mostrar todos los servicios',
    collapseAll: 'Mostrar solo top 5',
  },
};

// ============================================================================
// EXPORT ALL
// ============================================================================
export default {
  BRAND_CONFIG,
  LAYER_CONFIG,
  KEY_MESSAGES,
  DATA_SOURCES_CONFIG,
  CHANNELS_CONFIG,
  SEDES_CONFIG,
  TARGET_AUDIENCES,
  OPTIMAL_TIMING,
  SERVICIOS_CONFIG,
  METRIC_CARDS_CONFIG,
  CRM_CONFIG,
  UI_TEXT,
};
