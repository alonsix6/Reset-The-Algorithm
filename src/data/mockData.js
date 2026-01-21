// Mock Data para FitZone - Dashboard Demo Comercial
// Datos simulados realistas para cadena de gimnasios en Lima, Peru

// ============================================================================
// MOCK GA4 DATA - Google Analytics 4 simulado
// ============================================================================
export const MOCK_GA4_DATA = {
  sessions: {
    total: 68500,
    new_users: 42800,
    returning: 25700,
    avg_session_duration: '3:45',
    pages_per_session: 4.2,
    bounce_rate: 38.5,
  },

  top_pages: [
    {
      page: '/membresias',
      title: 'Membresias FitZone',
      views: 18500,
      bounce_rate: 28,
      avg_time: '4:12',
    },
    {
      page: '/sedes/miraflores',
      title: 'FitZone Miraflores',
      views: 12200,
      bounce_rate: 32,
      avg_time: '3:45',
    },
    {
      page: '/clases',
      title: 'Clases Grupales',
      views: 9800,
      bounce_rate: 35,
      avg_time: '3:22',
    },
    {
      page: '/promociones',
      title: 'Promociones Enero',
      views: 15600,
      bounce_rate: 25,
      avg_time: '2:58',
    },
    {
      page: '/personal-training',
      title: 'Personal Training',
      views: 7200,
      bounce_rate: 38,
      avg_time: '4:05',
    },
  ],

  conversions: {
    trial_signups: 1850,
    membership_purchases: 476,
    class_bookings: 3200,
    whatsapp_clicks: 4500,
    phone_calls: 890,
    newsletter_signups: 1250,
  },

  traffic_sources: {
    organic_search: { percentage: 28, sessions: 19180, label: 'Busqueda Organica' },
    paid_search: { percentage: 25, sessions: 17125, label: 'Google Ads' },
    social_media: { percentage: 35, sessions: 23975, label: 'Meta Ads' },
    direct: { percentage: 8, sessions: 5480, label: 'Directo' },
    referral: { percentage: 4, sessions: 2740, label: 'Referencias' },
  },

  devices: {
    mobile: { percentage: 78, sessions: 53430, label: 'Mobile' },
    desktop: { percentage: 18, sessions: 12330, label: 'Desktop' },
    tablet: { percentage: 4, sessions: 2740, label: 'Tablet' },
  },

  locations: [
    { distrito: 'Miraflores', sessions: 15070, conversions: 125, percentage: 22 },
    { distrito: 'San Isidro', sessions: 10275, conversions: 95, percentage: 15 },
    { distrito: 'Surco', sessions: 8905, conversions: 72, percentage: 13 },
    { distrito: 'La Molina', sessions: 6850, conversions: 58, percentage: 10 },
    { distrito: 'San Borja', sessions: 5480, conversions: 45, percentage: 8 },
    { distrito: 'Magdalena', sessions: 4795, conversions: 38, percentage: 7 },
    { distrito: 'Los Olivos', sessions: 4110, conversions: 32, percentage: 6 },
    { distrito: 'Otros', sessions: 13015, conversions: 98, percentage: 19 },
  ],
};

// ============================================================================
// PERFORMANCE KPIs - Metricas principales del dashboard
// ============================================================================
export const PERFORMANCE_KPIS = {
  nuevos_miembros: {
    current: 476,
    previous: 398,
    change: '+19.6',
    trend: 'up',
    label: 'Nuevos Miembros',
    description: 'Miembros activos adquiridos este mes',
  },

  leads: {
    qualified: 1850,
    total: 2475,
    qualification_rate: 74.7,
    cost_per_lead: 11.20,
    trend: '+22.4%',
    trend_value: 22.4,
  },

  alcance: {
    current: 2500000,
    previous: 1950000,
    change: '+28.2',
    trend: 'up',
    label: 'Alcance Total',
    description: 'Usuarios unicos impactados',
  },

  reach: {
    unique_reach: 2500000,
    impressions: 8500000,
    frequency: 3.4,
    trend: '+28.2%',
    trend_value: 28.2,
  },

  engagement: {
    total_interactions: 245000,
    engagement_rate: 9.8,
    shares: 28500,
    trend: '+15.3%',
    trend_value: 15.3,
  },

  budget: {
    total_budget: 25000,
    total_spent: 23200,
    spent_percentage: 92.8,
    cost_per_click: 0.58,
    trend: 'on-track',
  },

  cpl: {
    current: 11.20,
    previous: 13.50,
    change: '-17.0',
    trend: 'down',
    label: 'Costo por Lead',
    description: 'Costo promedio por lead calificado',
    currency: '$',
  },

  trials: {
    current: 866,
    previous: 720,
    change: '+20.3',
    trend: 'up',
    label: 'Trials Activos',
    description: 'Pruebas gratuitas en curso',
  },

  whatsapp: {
    current: 4500,
    previous: 3200,
    change: '+40.6',
    trend: 'up',
    label: 'Conversaciones WhatsApp',
    description: 'Conversaciones iniciadas via Meta Ads',
  },

  retention: {
    current: 78.5,
    previous: 74.2,
    change: '+4.3',
    trend: 'up',
    label: 'Retencion Mensual',
    description: 'Porcentaje de miembros que renuevan',
  },
};

// ============================================================================
// FITZONE OPPORTUNITY SCORE - Indice de oportunidad fitness
// ============================================================================
export const OPPORTUNITY_SCORE = {
  current_score: 78,
  trend: '+4.8%',
  components: {
    search_interest: {
      score: 82,
      weight: 0.25,
      contribution: 20.5,
      insight: 'Busquedas de "gimnasio lima" +18% vs mes anterior',
    },
    social_engagement: {
      score: 75,
      weight: 0.20,
      contribution: 15.0,
      insight: '#gymtok Peru trending, +85K menciones/semana',
    },
    competitor_gap: {
      score: 85,
      weight: 0.20,
      contribution: 17.0,
      insight: 'Smart Fit saturando low-cost, oportunidad en mid-premium',
    },
    seasonal_index: {
      score: 92,
      weight: 0.15,
      contribution: 13.8,
      insight: 'Enero = pico maximo de demanda, propositos de ano nuevo',
    },
    conversion_efficiency: {
      score: 76,
      weight: 0.20,
      contribution: 15.2,
      insight: 'CPL actual $11.20, debajo del target $12',
    },
  },
  recommendation: {
    message: 'Momento optimo para aumentar inversion en Meta Ads. Audiencia joven mostrando alto engagement con contenido de transformacion. Aprovechar pico estacional de Enero.',
    confidence: '92%',
    priority: 'high',
    actions: [
      'Incrementar budget TikTok 25%',
      'Lanzar campana "Proposito 2026"',
      'Activar influencers micro (10-50K)',
      'Promocion sin matricula primera quincena',
    ],
  },
};

// ============================================================================
// SERVICIOS PERFORMANCE - Rendimiento por servicio/producto
// ============================================================================
export const SERVICIOS_PERFORMANCE = [
  {
    id: 1,
    nombre: 'Membresia Basica',
    demanda: 'Alta',
    leads: 520,
    conversiones: 42,
    conversion_rate: '8.1%',
    cpl: 9.80,
    revenue: 25200,
    trend: '+12%',
    precio: 'S/100-150',
    leadAds: { formularios: 680, conversion_rate: 32, cpl: 7.50 },
    whatsapp: { conversaciones: 285, respondidas: 228, tasa_respuesta: 80 },
  },
  {
    id: 2,
    nombre: 'Membresia Premium',
    demanda: 'Alta',
    leads: 340,
    conversiones: 22,
    conversion_rate: '6.5%',
    cpl: 14.50,
    revenue: 39600,
    trend: '+8%',
    precio: 'S/180-250',
    leadAds: { formularios: 445, conversion_rate: 28, cpl: 11.20 },
    whatsapp: { conversaciones: 186, respondidas: 142, tasa_respuesta: 76 },
  },
  {
    id: 3,
    nombre: 'Plan Familiar',
    demanda: 'Media',
    leads: 180,
    conversiones: 9,
    conversion_rate: '5.0%',
    cpl: 21.00,
    revenue: 21600,
    trend: '+5%',
    precio: 'S/200-300',
    leadAds: { formularios: 235, conversion_rate: 22, cpl: 16.80 },
    whatsapp: { conversaciones: 98, respondidas: 71, tasa_respuesta: 72 },
  },
  {
    id: 4,
    nombre: 'Personal Training',
    demanda: 'Media-Alta',
    leads: 95,
    conversiones: 4,
    conversion_rate: '4.2%',
    cpl: 26.50,
    revenue: 16800,
    trend: '+3%',
    precio: 'S/250-400',
    leadAds: { formularios: 124, conversion_rate: 18, cpl: 21.50 },
    whatsapp: { conversaciones: 52, respondidas: 38, tasa_respuesta: 73 },
  },
  {
    id: 5,
    nombre: 'Clases Especializadas',
    demanda: 'Alta',
    leads: 210,
    conversiones: 15,
    conversion_rate: '7.1%',
    cpl: 11.80,
    revenue: 9000,
    trend: '+18%',
    precio: 'S/80-120',
    leadAds: { formularios: 275, conversion_rate: 30, cpl: 9.20 },
    whatsapp: { conversaciones: 115, respondidas: 95, tasa_respuesta: 83 },
  },
  {
    id: 6,
    nombre: 'Nutricion/Suplementos',
    demanda: 'Media',
    leads: 130,
    conversiones: 13,
    conversion_rate: '10.0%',
    cpl: 8.50,
    revenue: 5200,
    trend: '+22%',
    precio: 'S/50-150',
    leadAds: { formularios: 170, conversion_rate: 35, cpl: 6.80 },
    whatsapp: { conversaciones: 72, respondidas: 62, tasa_respuesta: 86 },
  },
];

// ============================================================================
// SEDES PERFORMANCE - Rendimiento por sede
// ============================================================================
export const SEDES_PERFORMANCE = [
  { id: 1, nombre: 'FitZone Miraflores', miembros: 2850, nuevos: 68, ocupacion: 82, revenue: 285000, trend: 'up' },
  { id: 2, nombre: 'FitZone San Isidro', miembros: 2200, nuevos: 52, ocupacion: 78, revenue: 264000, trend: 'up' },
  { id: 3, nombre: 'FitZone Surco', miembros: 2450, nuevos: 58, ocupacion: 75, revenue: 245000, trend: 'stable' },
  { id: 4, nombre: 'FitZone La Molina', miembros: 1850, nuevos: 42, ocupacion: 72, revenue: 222000, trend: 'up' },
  { id: 5, nombre: 'FitZone San Borja', miembros: 1650, nuevos: 38, ocupacion: 80, revenue: 165000, trend: 'stable' },
  { id: 6, nombre: 'FitZone Magdalena', miembros: 1420, nuevos: 35, ocupacion: 85, revenue: 127800, trend: 'up' },
  { id: 7, nombre: 'FitZone Jesus Maria', miembros: 1280, nuevos: 32, ocupacion: 88, revenue: 115200, trend: 'stable' },
  { id: 8, nombre: 'FitZone Lince', miembros: 1150, nuevos: 28, ocupacion: 90, revenue: 92000, trend: 'up' },
  { id: 9, nombre: 'FitZone San Miguel', miembros: 1580, nuevos: 38, ocupacion: 78, revenue: 142200, trend: 'stable' },
  { id: 10, nombre: 'FitZone Independencia', miembros: 980, nuevos: 25, ocupacion: 82, revenue: 78400, trend: 'up' },
  { id: 11, nombre: 'FitZone Los Olivos', miembros: 1120, nuevos: 32, ocupacion: 80, revenue: 89600, trend: 'up' },
  { id: 12, nombre: 'FitZone Ate', miembros: 920, nuevos: 28, ocupacion: 85, revenue: 73600, trend: 'stable' },
];

// ============================================================================
// COMPETENCIA - Gimnasios competidores
// ============================================================================
export const COMPETENCIA = [
  {
    name: 'Smart Fit',
    full_name: 'Smart Fit Peru',
    market_share: 45,
    sedes: 95,
    rank: 1,
    type: 'Low-cost',
    precio: 'S/79-109',
    fortalezas: ['Precio bajo', 'Muchas sedes', 'Sin permanencia'],
    debilidades: ['Masificacion', 'Sin clases grupales', 'Atencion basica'],
  },
  {
    name: 'b2',
    full_name: 'b2 Gimnasios',
    market_share: 15,
    sedes: 10,
    rank: 2,
    type: 'Full-service',
    precio: 'S/180-280',
    fortalezas: ['30 disciplinas', 'Buen ambiente', 'Ejecutivos'],
    debilidades: ['Pocas sedes', 'Solo Lima'],
  },
  {
    name: 'Bio Ritmo',
    full_name: 'Bio Ritmo (Grupo Smart Fit)',
    market_share: 5,
    sedes: 2,
    rank: 3,
    type: 'Premium',
    precio: 'S/300+',
    fortalezas: ['Ultra premium', 'Experiencia completa', 'Tecnologia'],
    debilidades: ['Muy caro', 'Solo 2 sedes'],
  },
  {
    name: 'Sportlife',
    full_name: 'Sportlife Fitness Club',
    market_share: 8,
    sedes: 5,
    rank: 4,
    type: 'Club',
    precio: 'S/200-350',
    fortalezas: ['Piscinas', 'Familias', 'Natacion'],
    debilidades: ['Pocas sedes', 'Infraestructura variable'],
  },
  {
    name: 'KO Urban',
    full_name: 'KO Urban Detox Center',
    market_share: 4,
    sedes: 7,
    rank: 5,
    type: 'Boutique',
    precio: 'S/250-400',
    fortalezas: ['Wellness integral', 'Comunidad', 'Box/Funcional'],
    debilidades: ['Nicho especifico', 'Precio alto'],
  },
  {
    name: 'FitZone',
    full_name: 'FitZone Peru',
    market_share: 12,
    sedes: 12,
    rank: 3,
    type: 'Full-service Premium',
    precio: 'S/100-250',
    fortalezas: ['Relacion precio-valor', 'Tecnologia', 'Comunidad activa'],
    debilidades: ['En expansion', 'Menor awareness'],
  },
];

// ============================================================================
// CRM MOCKUP - Datos simulados de campanas
// ============================================================================
export const CRM_MOCKUP = {
  campaigns: [
    {
      id: 'camp_001',
      name: 'Proposito 2026 - Jovenes',
      status: 'active',
      budget: 10000,
      spent: 8500,
      leads: 720,
      cpl: 11.80,
      alert_status: 'normal',
      platform: 'Meta Ads',
      audience: 'Jovenes Activos',
    },
    {
      id: 'camp_002',
      name: 'Membresia Premium - Ejecutivos',
      status: 'active',
      budget: 7500,
      spent: 6200,
      leads: 340,
      cpl: 18.24,
      alert_status: 'normal',
      platform: 'Google Ads',
      audience: 'Profesionales Wellness',
    },
    {
      id: 'camp_003',
      name: 'TikTok Transformaciones',
      status: 'active',
      budget: 3750,
      spent: 3100,
      leads: 285,
      cpl: 10.88,
      alert_status: 'normal',
      platform: 'TikTok Ads',
      audience: 'Jovenes Activos',
    },
    {
      id: 'camp_004',
      name: 'Plan Familiar - Facebook',
      status: 'active',
      budget: 2500,
      spent: 2100,
      leads: 95,
      cpl: 22.10,
      alert_status: 'warning',
      platform: 'Meta Ads',
      audience: 'Familias Activas',
    },
  ],
  alerts: [
    {
      type: 'success',
      message: 'Campana "TikTok Transformaciones" superando objetivos: CPL $10.88 vs target $12',
      campaign_id: 'camp_003',
      timestamp: '2026-01-20T14:30:00',
    },
    {
      type: 'warning',
      message: 'Campana "Plan Familiar" con CPL de $22.10, cerca del limite de $25',
      campaign_id: 'camp_004',
      timestamp: '2026-01-20T13:15:00',
    },
  ],
  lead_quality: {
    avg_score: 74,
    distribution: {
      hot: 32,
      warm: 45,
      cold: 23,
    },
  },
};

// ============================================================================
// BUDGET ALLOCATION - Distribucion de presupuesto por canal
// ============================================================================
export const BUDGET_ALLOCATION = {
  total_budget: 25000,
  currency: 'USD',
  period: 'monthly',
  distribution: {
    meta_ads: {
      amount: 10000,
      percentage: 40,
      status: 'overperforming',
      kpi: 'CPL (Costo por Lead)',
      target: '$12 o menos',
      current_performance: '$10.50',
      platforms: ['Instagram', 'Facebook'],
    },
    google_search: {
      amount: 7500,
      percentage: 30,
      status: 'performing',
      kpi: 'CPL (Costo por Lead)',
      target: '$15 o menos',
      current_performance: '$14.20',
    },
    tiktok_ads: {
      amount: 3750,
      percentage: 15,
      status: 'overperforming',
      kpi: 'CPL Jovenes',
      target: '$10 o menos',
      current_performance: '$8.80',
    },
    google_display: {
      amount: 2500,
      percentage: 10,
      status: 'ontrack',
      kpi: 'CPM (Costo por Mil)',
      target: '$4 o menos',
      current_performance: '$3.85',
    },
    influencers: {
      amount: 1250,
      percentage: 5,
      status: 'performing',
      kpi: 'Engagement Rate',
      target: '8% o mas',
      current_performance: '12.5%',
    },
  },
  recommendations: [
    {
      type: 'increase',
      channel: 'tiktok_ads',
      from: 15,
      to: 20,
      reason: 'CPL 12% por debajo del objetivo, excelente engagement con audiencia joven',
      impact: '+150 leads/mes estimados',
    },
    {
      type: 'maintain',
      channel: 'meta_ads',
      reason: 'Meta Ads con buen performance en Lead Ads, WhatsApp con 78% de respuesta',
      impact: 'Mantener volumen actual',
    },
    {
      type: 'decrease',
      channel: 'google_display',
      from: 10,
      to: 5,
      reason: 'Display con conversion rate bajo, redirigir a TikTok',
      impact: 'Redistribucion mas eficiente',
    },
  ],
};

// ============================================================================
// CONTENT PILLARS - Pilares de contenido FitZone
// ============================================================================
export const CONTENT_PILLARS = [
  {
    id: 1,
    title: 'Transformaciones Reales',
    description: 'Historias de exito y antes/despues de miembros',
    status: 'overperforming',
    performance: {
      engagement_rate: 18.5,
      reach: 520000,
      conversions: 285,
    },
    recommended_budget: 0.30,
    formats: ['Reels', 'TikTok', 'Stories', 'Testimoniales'],
  },
  {
    id: 2,
    title: 'Rutinas y Tips',
    description: 'Contenido educativo de entrenamientos y nutricion',
    status: 'performing',
    performance: {
      engagement_rate: 12.8,
      reach: 380000,
      conversions: 198,
    },
    recommended_budget: 0.25,
    formats: ['Videos cortos', 'Infografias', 'Lives'],
  },
  {
    id: 3,
    title: 'Comunidad FitZone',
    description: 'Eventos, challenges y vida en el gimnasio',
    status: 'performing',
    performance: {
      engagement_rate: 14.2,
      reach: 290000,
      conversions: 165,
    },
    recommended_budget: 0.20,
    formats: ['UGC', 'Eventos', 'Behind scenes'],
  },
  {
    id: 4,
    title: 'Promociones y Ofertas',
    description: 'Campanas de adquisicion y ofertas especiales',
    status: 'ontrack',
    performance: {
      engagement_rate: 8.5,
      reach: 450000,
      conversions: 320,
    },
    recommended_budget: 0.15,
    formats: ['Ads', 'Landing pages', 'Email'],
  },
  {
    id: 5,
    title: 'Tecnologia e Innovacion',
    description: 'App, maquinas conectadas, IA para planes',
    status: 'performing',
    performance: {
      engagement_rate: 10.2,
      reach: 180000,
      conversions: 95,
    },
    recommended_budget: 0.10,
    formats: ['Demos', 'Tours virtuales', 'Tech features'],
  },
];

// ============================================================================
// ALERTS - Alertas automaticas del sistema
// ============================================================================
export const ALERTS = [
  {
    id: 1,
    severity: 'high',
    title: 'Pico de demanda detectado',
    message: 'Busquedas de "gimnasio enero" aumentaron 85% esta semana. Momento optimo para push de campanas.',
    action: 'Aumentar budget 20% en Meta y TikTok para capturar demanda',
    timestamp: '2026-01-20T09:00:00',
  },
  {
    id: 2,
    severity: 'medium',
    title: 'Competidor con promocion agresiva',
    message: 'Smart Fit lanzo promocion "Sin matricula + 1 mes gratis". Detectado en redes sociales.',
    action: 'Evaluar respuesta competitiva, destacar diferenciadores de calidad',
    timestamp: '2026-01-19T15:30:00',
  },
  {
    id: 3,
    severity: 'low',
    title: 'Oportunidad en Los Olivos',
    message: 'Trafico desde Lima Norte crecio +35% esta semana con CPL de $8.50',
    action: 'Considerar aumentar budget 15% para Lima Norte',
    timestamp: '2026-01-19T11:45:00',
  },
  {
    id: 4,
    severity: 'high',
    title: 'Contenido viral detectado',
    message: 'Video de transformacion de miembro alcanzo 500K views en TikTok organicamente',
    action: 'Amplificar con paid, contactar a miembro para colaboracion',
    timestamp: '2026-01-18T18:00:00',
  },
];

// ============================================================================
// COMPETITOR INSIGHTS - Analisis de competencia fitness
// ============================================================================
export const COMPETITOR_INSIGHTS = [
  {
    brand: 'Smart Fit',
    full_name: 'Smart Fit Peru',
    location: 'Lima + Provincias',
    share_of_voice: 42,
    sentiment: 65,
    threat_level: 'high',
    trending_topics: ['precio bajo', 'muchas sedes', 'maquinas ocupadas', 'sin clases'],
    description: 'Lider absoluto por precio, saturando mercado low-cost',
    opportunity: 'Capturar usuarios insatisfechos con masificacion y falta de clases',
  },
  {
    brand: 'b2',
    full_name: 'b2 Gimnasios',
    location: 'Lima',
    share_of_voice: 18,
    sentiment: 78,
    threat_level: 'high',
    trending_topics: ['variedad clases', 'buen ambiente', 'precio alto', 'pocas sedes'],
    description: 'Principal competidor en segmento full-service',
    opportunity: 'Competir en precio manteniendo calidad similar',
  },
  {
    brand: 'Bio Ritmo',
    full_name: 'Bio Ritmo (Grupo Smart Fit)',
    location: 'Lima (Surco, Miraflores)',
    share_of_voice: 8,
    sentiment: 82,
    threat_level: 'medium',
    trending_topics: ['nuevo', 'premium', 'experiencia', 'muy caro'],
    description: 'Nuevo entrante ultra-premium',
    opportunity: 'Posicionarse como alternativa accesible a premium',
  },
  {
    brand: 'Sportlife',
    full_name: 'Sportlife Fitness Club',
    location: 'Lima',
    share_of_voice: 10,
    sentiment: 70,
    threat_level: 'medium',
    trending_topics: ['piscina', 'familias', 'natacion', 'infraestructura'],
    description: 'Diferenciado por piscinas y enfoque familiar',
    opportunity: 'Considerar piscina en sedes selectas (La Molina, Surco)',
  },
  {
    brand: 'KO Urban',
    full_name: 'KO Urban Detox Center',
    location: 'Lima',
    share_of_voice: 12,
    sentiment: 85,
    threat_level: 'low',
    trending_topics: ['wellness', 'comunidad', 'box', 'experiencia', 'caro'],
    description: 'Nicho boutique con alta fidelizacion',
    opportunity: 'Incorporar elementos wellness/detox en experiencia FitZone',
  },
  {
    brand: 'FitZone',
    full_name: 'FitZone Peru',
    location: 'Lima',
    share_of_voice: 15,
    sentiment: 80,
    threat_level: null,
    trending_topics: ['precio justo', 'buenas clases', 'app', 'comunidad', 'nuevo'],
    description: 'Posicionamiento mid-premium con tecnologia',
    opportunity: 'Aumentar awareness y consolidar diferenciadores',
  },
];

// ============================================================================
// TRENDING SOUNDS - Sonidos trending para contenido
// ============================================================================
export const TRENDING_SOUNDS = [
  { name: 'NEFFEX - Grateful', type: 'Motivation', usage: 'Transformaciones', popularity: 95 },
  { name: 'Tevvez - Legend', type: 'Epic', usage: 'PRs y logros', popularity: 88 },
  { name: 'Bad Bunny - Monaco', type: 'Reggaeton', usage: 'Cardio/HIIT', popularity: 92 },
  { name: 'Eminem - Lose Yourself Remix', type: 'Hip Hop', usage: 'Heavy lifting', popularity: 85 },
  { name: 'Phonk - Murder in My Mind', type: 'Phonk', usage: 'Powerlifting', popularity: 78 },
  { name: 'Grupo 5 - Mix Gym', type: 'Cumbia', usage: 'Fun workouts', popularity: 72 },
];

// ============================================================================
// EXPORTS
// ============================================================================
export default {
  MOCK_GA4_DATA,
  PERFORMANCE_KPIS,
  OPPORTUNITY_SCORE,
  SERVICIOS_PERFORMANCE,
  SEDES_PERFORMANCE,
  COMPETENCIA,
  CRM_MOCKUP,
  BUDGET_ALLOCATION,
  CONTENT_PILLARS,
  ALERTS,
  COMPETITOR_INSIGHTS,
  TRENDING_SOUNDS,
};
