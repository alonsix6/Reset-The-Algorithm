// Keywords y hashtags para Honda - Perú (Autos y Motos)
// Configuración completa para búsquedas y monitoreo social

export const KEYWORDS_HONDA_AUTOS = {
  // Producto principal
  principal: [
    'Honda CR-V',
    'CR-V Advanced Hybrid',
    'Honda HR-V 2026',
    'CR-V Perú',
    'Honda CR-V precio',
    'CR-V híbrida Perú',
    'HR-V precio Perú',
    'Honda Perú',
    'CR-V 2025',
    'HR-V 2026',
  ],

  // Categoría SUV
  suv: [
    'SUV híbrida',
    'mejor SUV Perú',
    'SUV familiar',
    'SUV Honda',
    'comprar SUV',
    'SUV compacta',
    'SUV mediana',
    'SUV confiable',
    'mejor híbrida Perú',
  ],

  // Tecnología híbrida e:HEV
  hibrido: [
    'Honda e:HEV',
    'híbrido sin enchufar',
    'auto híbrido Perú',
    'tecnología e:HEV',
    'eficiencia combustible',
    'autos ecológicos',
    'movilidad sostenible',
    'ahorro gasolina',
    'híbrido autorecargable',
    'vehículo híbrido',
  ],

  // Competencia directa
  competidores: [
    'Toyota RAV4',
    'Mazda CX-5',
    'Nissan X-Trail',
    'Hyundai Tucson',
    'Hyundai Creta',
    'Nissan Kicks',
    'Mazda CX-30',
    'Kia Sportage',
  ],

  // Intención de compra
  compra: [
    'precio Honda Perú',
    'financiamiento Honda',
    'concesionario Honda',
    'Pana Autos',
    'test drive Honda',
    'cotizar CR-V',
    'crédito vehicular',
    'comprar Honda',
    'Honda 29990',
    'bono Honda 2025',
  ],

  // Comparativas
  comparativas: [
    'CR-V vs RAV4',
    'CR-V vs Tucson',
    'CR-V vs CX-5',
    'HR-V vs Creta',
    'HR-V vs Kicks',
    'mejor híbrida',
    'comparativa SUV',
    'Honda vs Toyota',
  ],

  // Features y características
  features: [
    'Honda Sensing',
    'Magic Seats',
    'AWD',
    'tracción integral',
    'bajo consumo',
    'espacio familiar',
    'seguridad Honda',
    '22 km litro',
    'BOSE 12 parlantes',
  ],
};

export const KEYWORDS_HONDA_MOTOS = {
  // Producto principal
  principal: [
    'Honda Dio',
    'Honda Wave',
    'Honda Navi',
    'Honda CB',
    'Honda XR',
    'motos Honda Perú',
    'scooter Honda',
    'Honda PCX',
    'Honda Elite',
  ],

  // Categoría motos
  categoria: [
    'moto automática',
    'scooter 110cc',
    'moto ciudad',
    'moto económica',
    'mejor moto Perú',
    'moto confiable',
    'moto trabajo',
    'motos Honda 2025',
  ],

  // Competencia motos
  competidores: [
    'Yamaha',
    'Suzuki',
    'Bajaj',
    'Kawasaki',
    'Italika',
  ],

  // Intención de compra motos
  compra: [
    'precio motos Honda',
    'financiamiento motos',
    'Honda motos Perú',
    'concesionario motos',
    'motos Honda precio',
    'crédito moto',
  ],

  // Features motos
  features: [
    'bajo consumo',
    'motor 110cc',
    'automática',
    'ahorro combustible',
    'confiable',
    'servicio Honda',
  ],
};

export const HASHTAGS_HONDA_AUTOS = {
  // Principales
  principales: [
    '#HondaPeru',
    '#HondaCRV',
    '#CRVHybrid',
    '#HondaHRV',
    '#CRVE',
    '#AdvancedHybrid',
  ],

  // SUV
  suv: [
    '#SUVHonda',
    '#SUVHibrida',
    '#SUVFamiliar',
    '#MejorSUV',
    '#SUVCompacta',
  ],

  // Híbridos y sostenibilidad
  hibrido: [
    '#Hibrida',
    '#eHEV',
    '#HibridoSinEnchufar',
    '#AutosEcologicos',
    '#MovilidadSostenible',
    '#TecnologiaHibrida',
    '#EficienciaEnergetica',
    '#EcoFriendly',
  ],

  // Tecnología Honda
  tech: [
    '#HondaSensing',
    '#MagicSeats',
    '#TecnologiaHonda',
    '#InnovacionHonda',
    '#SafetyFirst',
    '#HondaTech',
  ],

  // Lifestyle
  lifestyle: [
    '#VidaSustentable',
    '#AventuraUrbana',
    '#FamiliaPeruana',
    '#RoadTrip',
    '#ViajesFamiliares',
    '#EstiloDeVida',
  ],

  // Perú
  peru: [
    '#AutosPeru',
    '#LimaPeru',
    '#PeruAutomotriz',
    '#Lima',
    '#0km',
    '#Financiamiento',
  ],
};

export const HASHTAGS_HONDA_MOTOS = {
  // Principales
  principales: [
    '#HondaMotos',
    '#HondaPeru',
    '#MotosHonda',
    '#HondaDio',
    '#HondaWave',
    '#HondaNavi',
  ],

  // Categoría
  categoria: [
    '#Scooter',
    '#MotoAutomatica',
    '#MotosCiudad',
    '#MotoEconomica',
    '#110cc',
  ],

  // Perú motos
  peru: [
    '#MotosPeru',
    '#LimaPeru',
    '#MotosLima',
    '#Financiamiento',
  ],
};

// Combinar hashtags autos
export const ALL_HASHTAGS_AUTOS = [
  ...HASHTAGS_HONDA_AUTOS.principales,
  ...HASHTAGS_HONDA_AUTOS.suv,
  ...HASHTAGS_HONDA_AUTOS.hibrido,
  ...HASHTAGS_HONDA_AUTOS.tech,
  ...HASHTAGS_HONDA_AUTOS.lifestyle,
  ...HASHTAGS_HONDA_AUTOS.peru,
];

// Combinar hashtags motos
export const ALL_HASHTAGS_MOTOS = [
  ...HASHTAGS_HONDA_MOTOS.principales,
  ...HASHTAGS_HONDA_MOTOS.categoria,
  ...HASHTAGS_HONDA_MOTOS.peru,
];

// Combinar keywords autos para Google Trends
export const ALL_KEYWORDS_AUTOS = [
  ...KEYWORDS_HONDA_AUTOS.principal,
  ...KEYWORDS_HONDA_AUTOS.suv,
  ...KEYWORDS_HONDA_AUTOS.hibrido,
  ...KEYWORDS_HONDA_AUTOS.compra,
];

// Combinar keywords motos
export const ALL_KEYWORDS_MOTOS = [
  ...KEYWORDS_HONDA_MOTOS.principal,
  ...KEYWORDS_HONDA_MOTOS.categoria,
  ...KEYWORDS_HONDA_MOTOS.compra,
];

// Keywords de alta intención - Autos
export const HIGH_INTENT_KEYWORDS_AUTOS = [
  ...KEYWORDS_HONDA_AUTOS.compra,
  ...KEYWORDS_HONDA_AUTOS.principal.filter(k => k.includes('precio')),
  'test drive Honda',
  'cotizar CR-V',
  'financiamiento Honda',
  'bono Honda',
];

// Keywords de alta intención - Motos
export const HIGH_INTENT_KEYWORDS_MOTOS = [
  ...KEYWORDS_HONDA_MOTOS.compra,
  'precio motos Honda',
  'financiamiento motos',
];

// Configuración para Google Trends - Autos
export const GOOGLE_TRENDS_CONFIG_AUTOS = {
  keywords: ALL_KEYWORDS_AUTOS.slice(0, 15), // Máximo 15 keywords principales
  region: 'PE', // Perú
  category: 47, // Autos & Vehicles
  timeframe: 'now 7-d', // Últimos 7 días
  refreshInterval: 3600000, // 1 hora en ms
};

// Configuración para Google Trends - Motos
export const GOOGLE_TRENDS_CONFIG_MOTOS = {
  keywords: ALL_KEYWORDS_MOTOS.slice(0, 15),
  region: 'PE',
  category: 47, // Autos & Vehicles
  timeframe: 'now 7-d',
  refreshInterval: 3600000,
};

// Configuración para TikTok - Autos
export const TIKTOK_CONFIG_AUTOS = {
  hashtags: HASHTAGS_HONDA_AUTOS.principales,
  region: 'PE',
  metrics: ['views', 'likes', 'shares', 'comments'],
  trending_threshold: 10000,
};

// Configuración para TikTok - Motos
export const TIKTOK_CONFIG_MOTOS = {
  hashtags: HASHTAGS_HONDA_MOTOS.principales,
  region: 'PE',
  metrics: ['views', 'likes', 'shares', 'comments'],
  trending_threshold: 5000,
};

// Fuentes de datos automotrices Perú
export const AUTOMOTIVE_SOURCES = [
  {
    name: 'Neoauto',
    url: 'https://neoauto.com',
    type: 'marketplace',
    scraping: true,
  },
  {
    name: 'Autocosmos Perú',
    url: 'https://autocosmos.com.pe',
    type: 'reviews',
    scraping: true,
  },
  {
    name: 'Motor1 Perú',
    url: 'https://motor1.com/es',
    type: 'news',
    scraping: false,
  },
  {
    name: 'Honda Perú Oficial - Autos',
    url: 'https://autos.honda.com.pe',
    type: 'official',
    scraping: false,
  },
  {
    name: 'Honda Perú Oficial - Motos',
    url: 'https://motos.honda.com.pe',
    type: 'official',
    scraping: false,
  },
];

export default {
  KEYWORDS_HONDA_AUTOS,
  KEYWORDS_HONDA_MOTOS,
  HASHTAGS_HONDA_AUTOS,
  HASHTAGS_HONDA_MOTOS,
  ALL_HASHTAGS_AUTOS,
  ALL_HASHTAGS_MOTOS,
  ALL_KEYWORDS_AUTOS,
  ALL_KEYWORDS_MOTOS,
  HIGH_INTENT_KEYWORDS_AUTOS,
  HIGH_INTENT_KEYWORDS_MOTOS,
  GOOGLE_TRENDS_CONFIG_AUTOS,
  GOOGLE_TRENDS_CONFIG_MOTOS,
  TIKTOK_CONFIG_AUTOS,
  TIKTOK_CONFIG_MOTOS,
  AUTOMOTIVE_SOURCES,
};
