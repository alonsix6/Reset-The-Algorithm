// Keywords y hashtags para FitZone - Cadena de gimnasios Peru
// Configuracion completa para busquedas y monitoreo social

export const KEYWORDS_FITZONE = {
  // Marca FitZone
  marca: [
    'fitzone peru',
    'fitzone gimnasio',
    'fitzone miraflores',
    'fitzone precio',
    'fitzone membresia',
    'fitzone san isidro',
    'fitzone surco',
    'fitzone promocion',
    'fitzone horarios',
    'fitzone clases',
  ],

  // Keywords de categoria
  categoria: [
    'gimnasio lima',
    'gym cerca de mi',
    'mejor gimnasio lima',
    'gimnasio precio mensual',
    'membresia gimnasio',
    'gimnasio barato lima',
    'gimnasio miraflores',
    'gimnasio san isidro',
    'gimnasio surco',
    'gimnasio premium lima',
  ],

  // Intencion de compra alta
  intencion: [
    'inscripcion gimnasio',
    'promocion gimnasio enero',
    'gimnasio sin matricula',
    'gimnasio 24 horas lima',
    'gimnasio con piscina lima',
    'gimnasio cerca a mi ubicacion',
    'precio gimnasio mensual lima',
    'membresia gym lima',
    'oferta gimnasio lima',
    'gimnasio prueba gratis',
  ],

  // Keywords de servicios
  servicios: [
    'clases spinning lima',
    'yoga miraflores',
    'crossfit lima precio',
    'personal trainer lima',
    'funcional training lima',
    'pilates reformer lima',
    'clases grupales gimnasio',
    'entrenador personal precio',
    'hiit clases lima',
    'zumba lima',
  ],

  // Competencia
  competidores: [
    'smart fit peru',
    'smart fit precio',
    'b2 gimnasio',
    'b2 gimnasio precio',
    'bio ritmo gimnasio',
    'sportlife peru',
    'ko urban lima',
    'gimnasio vs smart fit',
    'alternativa smart fit',
    'mejor que smart fit',
  ],

  // Disciplinas fitness
  disciplinas: [
    'crossfit lima',
    'funcional lima',
    'spinning lima',
    'yoga lima',
    'pilates lima',
    'boxeo fitness lima',
    'hiit lima',
    'entrenamiento fuerza',
    'musculacion lima',
    'cardio lima',
  ],

  // Resultados/transformacion
  resultados: [
    'bajar de peso gimnasio',
    'ganar musculo gym',
    'transformacion fitness',
    'antes y despues gym',
    'resultados gimnasio',
    'rutina para principiantes',
    'como empezar gym',
    'dieta y gimnasio',
    'perder grasa gym',
    'tonificar cuerpo',
  ],

  // Geografias Lima
  geografias: [
    'gimnasio miraflores',
    'gimnasio san isidro',
    'gimnasio surco',
    'gimnasio la molina',
    'gimnasio san borja',
    'gimnasio magdalena',
    'gimnasio jesus maria',
    'gimnasio lince',
    'gimnasio los olivos',
    'gimnasio lima norte',
  ],
};

export const HASHTAGS_FITZONE = {
  // Core (usar siempre)
  core: [
    '#gymtok',
    '#fitnessperu',
    '#gimnasio',
    '#gym',
    '#fitness',
    '#FitZone',
    '#FitZonePeru',
  ],

  // Engagement (rotar)
  engagement: [
    '#fyp',
    '#parati',
    '#viral',
    '#trending',
    '#fypシ',
    '#xyzbca',
  ],

  // Nicho fitness
  fitness: [
    '#legday',
    '#glutesday',
    '#transformacion',
    '#gymrat',
    '#fitfam',
    '#gymmotivation',
    '#workout',
    '#fitnessmotivation',
    '#gains',
    '#bodybuilding',
  ],

  // Local Peru
  local: [
    '#lima',
    '#peru',
    '#peruanos',
    '#limalife',
    '#miraflores',
    '#sanisidro',
    '#gymlima',
    '#fitnessperu',
  ],

  // Disciplinas
  disciplinas: [
    '#crossfit',
    '#funcional',
    '#hiit',
    '#pilates',
    '#yoga',
    '#spinning',
    '#boxeo',
    '#cardio',
    '#fuerza',
    '#entrenamiento',
  ],

  // Transformaciones
  transformaciones: [
    '#antesydespues',
    '#transformacion',
    '#progreso',
    '#fitjourney',
    '#weightloss',
    '#musclegain',
    '#beforeandafter',
    '#glow up',
  ],

  // Motivacion
  motivacion: [
    '#motivation',
    '#gymlife',
    '#nopainnogain',
    '#nevergiveup',
    '#disciplina',
    '#constancia',
    '#lifestyle',
    '#healthylifestyle',
  ],

  // Competencia (monitoreo)
  competencia: [
    '#smartfit',
    '#smartfitperu',
    '#b2gimnasio',
    '#kourban',
    '#biorhythm',
  ],
};

// Combinar todos los hashtags
export const ALL_HASHTAGS = [
  ...HASHTAGS_FITZONE.core,
  ...HASHTAGS_FITZONE.fitness,
  ...HASHTAGS_FITZONE.local,
  ...HASHTAGS_FITZONE.disciplinas,
  ...HASHTAGS_FITZONE.transformaciones,
];

// Combinar keywords para Google Trends
export const ALL_KEYWORDS = [
  ...KEYWORDS_FITZONE.marca,
  ...KEYWORDS_FITZONE.categoria,
  ...KEYWORDS_FITZONE.intencion,
  ...KEYWORDS_FITZONE.servicios,
];

// Keywords de alta intencion (conversion)
export const HIGH_INTENT_KEYWORDS = [
  ...KEYWORDS_FITZONE.intencion,
  'inscripcion gimnasio',
  'membresia gym',
  'precio gimnasio',
  'promocion gimnasio',
  'gimnasio sin matricula',
  'prueba gratis gimnasio',
];

// Configuracion para Google Trends
export const GOOGLE_TRENDS_CONFIG = {
  keywords: ALL_KEYWORDS.slice(0, 15),
  region: 'PE',
  geo: {
    lima: 'PE-LIM',
  },
  category: 44, // Health & Fitness
  timeframe: 'now 7-d',
  refreshInterval: 3600000,
};

// Configuracion para TikTok
export const TIKTOK_CONFIG = {
  hashtags: [
    ...HASHTAGS_FITZONE.core,
    ...HASHTAGS_FITZONE.fitness.slice(0, 5),
    ...HASHTAGS_FITZONE.local.slice(0, 3),
  ],
  region: 'PE',
  metrics: ['views', 'likes', 'shares', 'comments'],
  trending_threshold: 10000,
  sounds: [
    { name: 'NEFFEX tracks', category: 'Workout Motivation' },
    { name: 'Tevvez - Legend', category: 'Gymtok classic' },
    { name: 'Bad Bunny hits', category: 'Reggaeton workout' },
    { name: 'Phonk remixes', category: 'Powerlifting' },
    { name: 'Eminem/2Pac workout', category: 'Hip Hop gym' },
  ],
};

// Configuracion para Meta (Facebook/Instagram)
export const META_CONFIG = {
  hashtags: [
    ...HASHTAGS_FITZONE.core,
    ...HASHTAGS_FITZONE.fitness,
    ...HASHTAGS_FITZONE.local,
  ],
  pages: [
    'FitZone Peru',
    'FitZone Oficial',
    'Smart Fit Peru',
    'b2 gimnasio',
  ],
  groups: [
    'Fitness Peru',
    'Gym Lima',
    'Runners Lima',
    'CrossFit Peru',
  ],
  interests: [
    'Fitness and wellness',
    'Gym',
    'Weight training',
    'Physical exercise',
    'Healthy lifestyle',
  ],
};

// Fuentes de informacion fitness Peru
export const FITNESS_SOURCES = [
  {
    name: 'Mercado Fitness',
    url: 'https://mercadofitness.com',
    type: 'industry',
    scraping: true,
  },
  {
    name: 'AGP',
    url: 'https://agpperu.org',
    type: 'association',
    scraping: false,
  },
  {
    name: 'El Comercio - Fitness',
    url: 'https://elcomercio.pe/respuestas/fitness',
    type: 'news',
    scraping: true,
  },
  {
    name: 'Gestion - Negocios Fitness',
    url: 'https://gestion.pe',
    type: 'business',
    scraping: true,
  },
];

// Sedes FitZone (para monitoreo individual)
export const SEDES_FITZONE = [
  {
    id: 1,
    nombre: 'FitZone Miraflores',
    slug: 'miraflores',
    distrito: 'Miraflores',
    keywords: ['gimnasio miraflores', 'gym miraflores', 'fitzone miraflores'],
    hashtags: ['#Miraflores', '#GymMiraflores'],
  },
  {
    id: 2,
    nombre: 'FitZone San Isidro',
    slug: 'san-isidro',
    distrito: 'San Isidro',
    keywords: ['gimnasio san isidro', 'gym san isidro', 'fitzone san isidro'],
    hashtags: ['#SanIsidro', '#GymSanIsidro'],
  },
  {
    id: 3,
    nombre: 'FitZone Surco',
    slug: 'surco',
    distrito: 'Surco',
    keywords: ['gimnasio surco', 'gym surco', 'fitzone surco'],
    hashtags: ['#Surco', '#GymSurco'],
  },
  {
    id: 4,
    nombre: 'FitZone La Molina',
    slug: 'la-molina',
    distrito: 'La Molina',
    keywords: ['gimnasio la molina', 'gym la molina', 'fitzone la molina'],
    hashtags: ['#LaMolina', '#GymLaMolina'],
  },
  {
    id: 5,
    nombre: 'FitZone San Borja',
    slug: 'san-borja',
    distrito: 'San Borja',
    keywords: ['gimnasio san borja', 'gym san borja', 'fitzone san borja'],
    hashtags: ['#SanBorja', '#GymSanBorja'],
  },
  {
    id: 6,
    nombre: 'FitZone Magdalena',
    slug: 'magdalena',
    distrito: 'Magdalena',
    keywords: ['gimnasio magdalena', 'gym magdalena', 'fitzone magdalena'],
    hashtags: ['#Magdalena', '#GymMagdalena'],
  },
  {
    id: 7,
    nombre: 'FitZone Jesus Maria',
    slug: 'jesus-maria',
    distrito: 'Jesus Maria',
    keywords: ['gimnasio jesus maria', 'gym jesus maria'],
    hashtags: ['#JesusMaria', '#GymJesusMaria'],
  },
  {
    id: 8,
    nombre: 'FitZone Lince',
    slug: 'lince',
    distrito: 'Lince',
    keywords: ['gimnasio lince', 'gym lince', 'fitzone lince'],
    hashtags: ['#Lince', '#GymLince'],
  },
  {
    id: 9,
    nombre: 'FitZone San Miguel',
    slug: 'san-miguel',
    distrito: 'San Miguel',
    keywords: ['gimnasio san miguel', 'gym san miguel', 'fitzone san miguel'],
    hashtags: ['#SanMiguel', '#GymSanMiguel'],
  },
  {
    id: 10,
    nombre: 'FitZone Independencia',
    slug: 'independencia',
    distrito: 'Independencia',
    keywords: ['gimnasio independencia', 'gym lima norte', 'fitzone independencia'],
    hashtags: ['#Independencia', '#LimaNorte'],
  },
  {
    id: 11,
    nombre: 'FitZone Los Olivos',
    slug: 'los-olivos',
    distrito: 'Los Olivos',
    keywords: ['gimnasio los olivos', 'gym los olivos', 'fitzone los olivos'],
    hashtags: ['#LosOlivos', '#GymLosOlivos'],
  },
  {
    id: 12,
    nombre: 'FitZone Ate',
    slug: 'ate',
    distrito: 'Ate',
    keywords: ['gimnasio ate', 'gym lima este', 'fitzone ate'],
    hashtags: ['#Ate', '#LimaEste'],
  },
];

export default {
  KEYWORDS_FITZONE,
  HASHTAGS_FITZONE,
  ALL_HASHTAGS,
  ALL_KEYWORDS,
  HIGH_INTENT_KEYWORDS,
  GOOGLE_TRENDS_CONFIG,
  TIKTOK_CONFIG,
  META_CONFIG,
  FITNESS_SOURCES,
  SEDES_FITZONE,
};
