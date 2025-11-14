// Configuración general del Honda Algorithm
// Textos, mensajes, secciones y configuración de UI

// ============================================================================
// BRAND CONFIGURATION - Configuración de marca
// ============================================================================
export const BRAND_CONFIG = {
  name: 'Honda Algorithm',
  tagline: 'Social Intelligence para Honda Perú',
  subtitle: 'Optimización automática de inversión digital',
  product: 'Honda CR-V & HR-V 2025/2026',
  market: 'Perú',
  client: 'Reset - Agencia de Medios',
  version: '1.0.0',
};

// ============================================================================
// PRODUCT MODES - Configuración Autos/Motos
// ============================================================================
export const PRODUCT_MODES = {
  autos: {
    id: 'autos',
    name: 'Honda Autos',
    icon: '🚗',
    products: 'CR-V & HR-V 2025/2026',
    description: 'SUVs híbridas y familiares',
    market_share: '14%',
    competitors: ['Toyota', 'Hyundai', 'Mazda', 'Nissan'],
  },
  motos: {
    id: 'motos',
    name: 'Honda Motos',
    icon: '🏍️',
    products: 'Scooters, Urbanas & Deportivas',
    description: 'Motocicletas para ciudad y aventura',
    market_share: '24%',
    competitors: ['Bajaj', 'Yamaha', 'Lifan', 'Zongshen'],
  },
};

// ============================================================================
// LAYER TITLES - Títulos y descripciones de las 4 capas
// ============================================================================
export const LAYER_CONFIG = {
  data: {
    id: 'data',
    name: 'Captura de Señales',
    subtitle: 'Monitoreo en tiempo real del ecosistema digital automotriz',
    description: 'Búsqueda, Tendencia, Intención, Emoción',
    icon: 'Search',
    color: 'from-honda-red to-honda-red',
  },
  decision: {
    id: 'decision',
    name: 'Inteligencia de Mercado',
    subtitle: 'Insights automáticos para optimizar inversión',
    description: 'Análisis y definición de estrategia',
    icon: 'Target',
    color: 'from-honda-red via-honda-darkRed to-honda-gray',
  },
  execution: {
    id: 'execution',
    name: 'Activación Estratégica',
    subtitle: 'Distribución inteligente de presupuesto y contenidos',
    description: 'Implementación en tiempo real',
    icon: 'Zap',
    color: 'from-honda-gray to-honda-black',
  },
  optimization: {
    id: 'optimization',
    name: 'Performance & Optimización',
    subtitle: 'Resultados en tiempo real y ajustes automáticos',
    description: 'Evaluación y redistribución',
    icon: 'TrendingUp',
    color: 'from-honda-black to-honda-black',
  },
};

// ============================================================================
// KEY MESSAGES - Mensajes clave de comunicación Honda
// ============================================================================
export const KEY_MESSAGES = {
  hybrid: {
    title: 'Tecnología e:HEV',
    message: 'Híbrido sin enchufar, 70% del tiempo en modo eléctrico',
    description: 'Ahorra hasta 40% en combustible sin complicaciones',
  },
  family: {
    title: 'Seguridad Honda Sensing',
    message: 'Tecnología que protege lo que más importa',
    description: 'Sistema de asistencia al conductor en 8 de 10 modelos',
  },
  adventure: {
    title: 'Versatilidad SUV',
    message: 'Desde la ciudad hasta la aventura, sin límites',
    description: 'CR-V con AWD y HR-V con Magic Seats',
  },
  sustainability: {
    title: 'Movilidad Inteligente',
    message: 'Eficiencia real para el tráfico de Lima',
    description: 'Hasta 22 km/litro en modo económico',
  },
  technology: {
    title: 'Innovación Honda',
    message: '82% de reconocimiento por confiabilidad',
    description: 'Honda Sensing y tecnología e:HEV',
  },
};

// ============================================================================
// DATA SOURCES - Configuración de fuentes de datos
// ============================================================================
export const DATA_SOURCES_CONFIG = {
  googleTrends: {
    enabled: true,
    name: 'Google Trends',
    description: 'Tendencias de búsqueda en tiempo real',
    icon: 'TrendingUp',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    region: 'PE',
    category: 'Autos & Vehicles',
    interval: 'hourly',
    status: 'active',
  },
  tiktok: {
    enabled: true,
    name: 'TikTok Creative Center',
    description: 'Hashtags y contenido viral',
    icon: 'Video',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
    scraping: 'public',
    status: 'active',
  },
  meta: {
    enabled: true,
    name: 'Meta Platforms',
    description: 'Facebook e Instagram insights',
    icon: 'Share2',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    platforms: ['Facebook', 'Instagram'],
    status: 'active',
  },
  youtube: {
    enabled: true,
    name: 'YouTube',
    description: 'Videos y reviews automotrices',
    icon: 'Youtube',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    status: 'active',
  },
  automotive: {
    enabled: true,
    name: 'Portales Automotrices',
    description: 'Neoauto, Autocosmos, Motor1',
    icon: 'Globe',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    sources: ['Neoauto', 'Autocosmos', 'Motor1'],
    status: 'active',
  },
  ga4: {
    enabled: false,
    name: 'Google Analytics 4',
    description: 'Tráfico web y conversiones',
    icon: 'BarChart3',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    mock_data: true,
    status: 'active',
  },
};

// ============================================================================
// CHANNELS - Canales de activación
// ============================================================================
export const CHANNELS_CONFIG = {
  google_search: {
    name: 'Google Search',
    icon: 'Search',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    primary_kpi: 'Leads calificados',
    description: 'Intención de compra alta',
  },
  social_media: {
    name: 'Meta Ads',
    icon: 'Share2',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    primary_kpi: 'Alcance + Engagement',
    description: 'Facebook e Instagram',
  },
  youtube: {
    name: 'YouTube',
    icon: 'Youtube',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    primary_kpi: 'View-through rate',
    description: 'Video pre-roll y discovery',
  },
  display: {
    name: 'Display Network',
    icon: 'Monitor',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    primary_kpi: 'Brand Awareness',
    description: 'Red de display de Google',
  },
  tiktok: {
    name: 'TikTok Ads',
    icon: 'Video',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
    primary_kpi: 'Testing formatos',
    description: 'Nuevas audiencias',
  },
};

// ============================================================================
// AUDIENCES - Audiencias objetivo
// ============================================================================
export const TARGET_AUDIENCES = [
  {
    id: 'young-families',
    name: 'Familias Profesionales',
    description: '35-50 años, con hijos',
    size: '~420K',
    priority: 'high',
    interests: ['Honda Sensing', 'Espacio', 'Confiabilidad'],
    message: KEY_MESSAGES.family.message,
  },
  {
    id: 'eco-conscious',
    name: 'Eco-conscious Premium',
    description: '30-45 años, ejecutivos',
    size: '~310K',
    priority: 'high',
    interests: ['e:HEV', 'Eficiencia', 'Tecnología'],
    message: KEY_MESSAGES.hybrid.message,
  },
  {
    id: 'urban-millennials',
    name: 'Millennials Urbanos',
    description: '25-35 años, primera SUV',
    size: '~380K',
    priority: 'high',
    interests: ['Tecnología', 'Precio accesible', 'Magic Seats'],
    message: 'Tu primera SUV Honda a precio accesible',
  },
  {
    id: 'pragmatic-buyers',
    name: 'Compradores Pragmáticos',
    description: '30-50 años, eficiencia',
    size: '~250K',
    priority: 'medium',
    interests: ['Ahorro combustible', 'Confiabilidad', 'Servicio'],
    message: KEY_MESSAGES.sustainability.message,
  },
];

// ============================================================================
// TIMING - Mejores momentos para pauta
// ============================================================================
export const OPTIMAL_TIMING = {
  dayparts: [
    { name: 'Mañana', hours: '7:00 - 9:00', performance: 'high', multiplier: 1.2 },
    { name: 'Mediodía', hours: '12:00 - 14:00', performance: 'medium', multiplier: 1.0 },
    { name: 'Tarde', hours: '18:00 - 21:00', performance: 'high', multiplier: 1.3 },
  ],
  weekdays: [
    { name: 'Lunes', performance: 'high', recommended: true },
    { name: 'Martes', performance: 'medium', recommended: false },
    { name: 'Miércoles', performance: 'high', recommended: true },
    { name: 'Jueves', performance: 'high', recommended: true },
    { name: 'Viernes', performance: 'low', recommended: false },
    { name: 'Sábado', performance: 'medium', recommended: false },
    { name: 'Domingo', performance: 'low', recommended: false },
  ],
  events: [
    'Fin de semana largo',
    'Temporada de bonos (Jul-Dic)',
    'Fiestas Patrias',
    'Navidad',
  ],
};

// ============================================================================
// METRIC CARDS - Configuración de tarjetas métricas principales
// ============================================================================
export const METRIC_CARDS_CONFIG = [
  {
    id: 'leads',
    title: 'Leads Calificados',
    description: 'Formularios completos con interés real',
    icon: 'Target',
    color: 'honda-red',
    gradient: 'from-honda-red to-honda-darkRed',
  },
  {
    id: 'reach',
    title: 'Alcance Total',
    description: 'Usuarios únicos impactados',
    icon: 'Users',
    color: 'honda-gray',
    gradient: 'from-honda-gray to-honda-black',
  },
  {
    id: 'engagement',
    title: 'Interacciones',
    description: 'Likes, shares, comentarios, saves',
    icon: 'Heart',
    color: 'honda-gray',
    gradient: 'from-honda-gray to-honda-black',
  },
  {
    id: 'opportunity',
    title: 'Opportunity Score',
    description: 'Índice de oportunidad de inversión',
    icon: 'Zap',
    color: 'honda-red',
    gradient: 'from-honda-red to-honda-black',
  },
];

// ============================================================================
// UI TEXT - Textos de interfaz
// ============================================================================
export const UI_TEXT = {
  loading: 'Cargando Honda Algorithm...',
  lastUpdate: 'Última actualización',
  systemActive: 'Sistema activo',
  noData: 'No hay datos disponibles',
  error: 'Error al cargar datos',
  retry: 'Reintentar',

  // Footer
  footer: {
    copyright: '© 2025 Honda Algorithm - Powered by Reset',
    version: 'v1.0.0',
  },

  // Buttons
  buttons: {
    viewDetails: 'Ver detalles',
    export: 'Exportar',
    refresh: 'Actualizar',
    filter: 'Filtrar',
  },
};

// ============================================================================
// EXPORT ALL
// ============================================================================
export default {
  BRAND_CONFIG,
  PRODUCT_MODES,
  LAYER_CONFIG,
  KEY_MESSAGES,
  DATA_SOURCES_CONFIG,
  CHANNELS_CONFIG,
  TARGET_AUDIENCES,
  OPTIMAL_TIMING,
  METRIC_CARDS_CONFIG,
  UI_TEXT,
};
