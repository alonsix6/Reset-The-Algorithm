# 🎓 UCSP Algorithm

**Social Intelligence para Universidad Católica San Pablo - Admisiones 2025**

![Version](https://img.shields.io/badge/version-1.0.0-003B7A)
![Status](https://img.shields.io/badge/status-MVP-0056A3)
![License](https://img.shields.io/badge/license-Proprietary-002453)

---

## 📋 Descripción

El **UCSP Algorithm** es una plataforma de Social Intelligence que unifica datos de diversas fuentes digitales para optimizar la estrategia de **admisiones de pregrado y posgrado** de la Universidad Católica San Pablo.

Identifica microcomportamientos, emociones e intenciones de postulación en el ecosistema digital educativo del sur del Perú, optimizando la inversión publicitaria mediante decisiones automatizadas basadas en señales de data en tiempo real.

### 🎯 Propuesta de Valor

- **Cliente**: Universidad Católica San Pablo (UCSP)
- **Mercado**: Sur del Perú (Arequipa, Puno, Cusco, Moquegua, Tacna)
- **Objetivo**: Sistema automatizado de Social Intelligence para optimizar campañas de admisión 2025-I
- **Enfoque**: Postulaciones calificadas, alcance geográfico e interacciones (lead ads, WhatsApp, landing pages)

---

## 🏗️ Las 4 Capas del Algorithm

### 1. **📊 Capa de Datos (Data Layer)**
Monitoreo en tiempo real del ecosistema digital educativo:
- **Google Trends**: Búsquedas de carreras universitarias en zonas objetivo
- **TikTok**: Hashtags y contenido viral educativo
- **Meta Platforms**: Insights de Facebook e Instagram
- **YouTube**: Testimoniales y tours virtuales
- **Portales Educativos**: Ponte en Carrera, Estudia Perú, SUNEDU

**Métricas**: Búsqueda, Tendencia, Intención, Engagement

**Geografías monitoreadas**: Arequipa (70%), Puno (18%), Cusco (10%), Moquegua (1%), Tacna (1%)

### 2. **🎯 Capa de Decisión (Decision Layer)**
Inteligencia de mercado y estrategia automática:
- **UCSP Opportunity Score**: Índice de oportunidad 0-100
- **Audiencias objetivo**:
  - Postulantes Pregrado (17-25 años, ~10,500 personas)
  - Postulantes Posgrado (25-45 años, ~3,000 personas)
- **Mensajes clave**: Primera universidad licenciada del sur, formación integral, acreditación internacional
- **Recomendaciones automáticas** basadas en signals de mercado

**Output**: Qué mensaje activar, en qué momento y en qué plataforma

### 3. **⚡ Capa de Ejecución (Execution Layer)**
Distribución inteligente de presupuesto y contenidos:
- **Budget Allocation Pregrado**: Meta Ads (35%), Google Search (30%), YouTube (20%), Display (15%)
- **Budget Allocation Posgrado**: Google Search (40%), Meta Ads (35%), YouTube (15%), Display (10%)
- **Carreras monitoreadas**: 13 carreras (top 5: Ing. Industrial, Derecho, Medicina, Administración, Arquitectura)
- **Timing Óptimo**: Mañana (7-9 AM), Tarde (18-21 PM)
- **KPIs por canal**: Postulaciones, CPP (Costo por Postulación), Alcance, Engagement

**Canales de conversión**:
- Lead Ads (Meta): Formularios de contacto instantáneos
- Conversaciones WhatsApp: Objetivo de conversación en Meta Ads
- Visitas a Landing Page: Desde Google Ads y Meta Ads

**Output**: Implementación en tiempo real de campañas optimizadas

### 4. **📈 Capa de Optimización (Optimization Layer)**
Performance y ajustes automáticos:
- **KPIs principales**: Postulaciones completadas, Alcance total, Interacciones, Charlas asistidas
- **Funnel de conversión**: Alcance → Visitas Landing → Formularios → Postulaciones → Matriculados
- **Análisis de competencia**: UNSA, UCSM, UNSAAC (Cusco), UTP, UAC (Cusco), ULASALLE
- **Integración HubSpot**: Sistema de alertas automáticas cuando CPL supera límites establecidos
  - Pregrado: Alerta en $10, Pausa en $14 (máximo $12)
  - Posgrado: Alerta en $13, Pausa en $17 (máximo $15)

**Output**: Evaluación continua y redistribución de inversión

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** + **Vite**
- **Tailwind CSS** (branding UCSP: azul #003B7A, burdeos #6B1B3D, dorado #C5A572)
- **Recharts** para visualizaciones de datos
- **Lucide React** para iconografía

### Scrapers & Data
- **Python 3.10** con `pytrends` para Google Trends
- **Node.js 18** con `axios` + `cheerio` para TikTok y Meta
- **Mock Data GA4** para demostración

### Infraestructura
- **GitHub** (repositorio + versionado)
- **GitHub Actions** (CI/CD automático - scrapers semanales)
- **Netlify** (hosting + deploy continuo)

---

## 📦 Instalación Rápida

### 1. Clonar repositorio

```bash
git clone https://github.com/alonsix6/SanPablo-algorithm-mvp.git
cd SanPablo-algorithm-mvp
```

### 2. Instalar dependencias

```bash
# Frontend
npm install

# Scrapers (opcional)
cd scrapers
npm install
pip install -r requirements.txt
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 4. Build para producción

```bash
npm run build
npm run preview
```

---

## 🎨 Paleta de Colores UCSP

La paleta está basada en los colores institucionales del logo (#002453 y #4d102c):

```javascript
ucsp: {
  // Azules (basados en #002453)
  darkBlue: '#002453',     // Azul oscuro del logo
  blue: '#003B7A',         // Azul principal (más claro)
  lightBlue: '#0056A3',    // Azul claro para interacciones
  skyBlue: '#4A90E2',      // Azul cielo para acentos/tech

  // Burgundy/Vino (basados en #4d102c)
  darkBurgundy: '#4d102c', // Burdeos oscuro del logo
  burgundy: '#6B1B3D',     // Burdeos principal
  wine: '#8B2449',         // Vino para acentos

  // Complementarios
  gold: '#C5A572',         // Dorado académico
  gray: '#54565A',         // Gris corporativo
}
```

---

## 📊 Datos y Configuración

### Keywords y Hashtags

Archivo: `src/data/keywords.js`

- **Marca UCSP**: 10 keywords principales
- **Carreras**: 10 keywords de las carreras más demandadas
- **Intención**: 10 keywords de alta conversión
- **Hashtags**: 40+ hashtags categorizados por tema

### Audiencias Objetivo

Archivo: `src/data/config.js`

**2 audiencias principales:**

1. **Pregrado** (17-25 años, ~10,500 personas)
   - Escolares 5to Secundaria (17-18 años)
   - Bachilleres y Trabajadores (19-25 años)

2. **Posgrado** (25-45 años, ~3,000 personas)
   - Profesionales Jóvenes (25-32 años)
   - Profesionales Establecidos (33-45 años)

### Carreras Monitoreadas

13 carreras de pregrado:
1. Ingeniería Industrial ⭐
2. Derecho ⭐
3. Medicina Humana ⭐
4. Administración ⭐
5. Arquitectura y Urbanismo ⭐
6. Psicología
7. Ingeniería Civil
8. Contabilidad
9. Ciencia de la Computación
10. Ciencia de Datos
11. Ingeniería Electrónica y Telecomunicaciones
12. Ingeniería Mecatrónica
13. Ingeniería Ambiental

⭐ = Top 5 con mayor demanda

---

## 🗂️ Arquitectura de Datos - Guía Completa

### ⚠️ IMPORTANTE: Cómo funcionan los datos en este sistema

El sistema usa **2 estrategias diferentes** para cargar datos según el componente:

#### 📂 Estrategia 1: Imports estáticos (Build time)
Componentes que cargan datos desde archivos JavaScript:
- **DecisionLayer** → `src/data/mockData.js` + `src/data/config.js`
- **ExecutionLayer** → `src/data/mockData.js` + `src/data/config.js`
- **OptimizationLayer** → `src/data/mockData.js` + `src/data/config.js`
- **Dashboard** → `src/data/config.js`

#### 📡 Estrategia 2: Fetch dinámico (Runtime)
Componentes que cargan datos desde archivos JSON:
- **DataLayer** → `public/data/*.json` (cargados con fetch al montar)

### 📁 Mapa Completo de Archivos de Datos

```
SanPablo-algorithm-mvp/
├── src/data/                    # Datos importados (build time)
│   ├── config.js               # Configuración global del sistema
│   │   ├── BRAND_CONFIG        # Colores, logo, nombre UCSP
│   │   ├── LAYER_CONFIG        # Nombres y descripciones de capas
│   │   ├── KEY_MESSAGES        # 5 mensajes clave (licenciamiento, formación, etc.)
│   │   ├── TARGET_AUDIENCES    # Pregrado y Posgrado (audiencias + CPL targets)
│   │   ├── CHANNELS_CONFIG     # Google Search, Meta Ads, YouTube, Display
│   │   ├── HUBSPOT_CONFIG      # Thresholds de CPL, API keys
│   │   └── METRIC_CARDS_CONFIG # Cards de KPIs principales
│   │
│   └── mockData.js             # Datos de rendimiento (mockup)
│       ├── OPPORTUNITY_SCORE   # Score 0-100 + componentes + recomendación
│       ├── BUDGET_ALLOCATION   # Presupuesto mensual por canal
│       ├── PERFORMANCE_KPIS    # Leads, conversión, CPL, budget
│       ├── CARRERAS_PERFORMANCE# 13 carreras con CPL/CPP/conversión
│       ├── CONTENT_PILLARS     # Pilares de contenido + rendimiento
│       ├── ALERTS              # Alertas automáticas
│       ├── COMPETITOR_INSIGHTS # UNSA, UCSM, UNSAAC, UTP, UAC, ULASALLE
│       └── HUBSPOT_MOCKUP      # Alertas de HubSpot (mockup)
│
└── public/data/                # Datos JSON dinámicos (runtime)
    ├── trends/
    │   └── latest.json         # Google Trends - 10 keywords educativas
    ├── tiktok/
    │   └── latest.json         # TikTok - 12 hashtags educativos
    ├── meta/
    │   └── latest.json         # Meta - 10 temas con engagement
    └── mock/
        └── ga4_data.json       # Google Analytics 4 - métricas web
```

### 🔧 Cómo Editar Datos Mockup

#### ¿Qué necesitas cambiar?

| **Quiero cambiar...**                  | **Archivo a editar**            | **Ruta**                        |
|----------------------------------------|---------------------------------|---------------------------------|
| Presupuesto mensual                    | `BUDGET_ALLOCATION`             | `src/data/mockData.js`          |
| CPL/CPP de las 13 carreras             | `CARRERAS_PERFORMANCE`          | `src/data/mockData.js`          |
| Opportunity Score (82/100)             | `OPPORTUNITY_SCORE`             | `src/data/mockData.js`          |
| KPIs principales (leads, alcance, etc.)| `PERFORMANCE_KPIS`              | `src/data/mockData.js`          |
| Thresholds CPL (Pregrado $12, Posgrado $15) | `HUBSPOT_CONFIG.cpl_thresholds` | `src/data/config.js`     |
| CPL target de audiencias               | `TARGET_AUDIENCES[].cpl_target` | `src/data/config.js`            |
| Mensajes clave institucionales         | `KEY_MESSAGES`                  | `src/data/config.js`            |
| Colores del branding                   | `BRAND_CONFIG.colors`           | `src/data/config.js`            |
| Keywords de Google Trends              | `trends/latest.json`            | `public/data/trends/`           |
| Hashtags de TikTok                     | `tiktok/latest.json`            | `public/data/tiktok/`           |
| Temas de Meta (Facebook/Instagram)     | `meta/latest.json`              | `public/data/meta/`             |
| Métricas de Google Analytics           | `ga4_data.json`                 | `public/data/mock/`             |

### ⚙️ Reglas de Edición (CRÍTICO)

#### 1. **Moneda: TODO en USD ($)**
Todos los valores monetarios deben estar en **dólares estadounidenses**:
- ✅ `cpl: 10.40` = $10.40
- ✅ `total_budget: 23000` = $23,000
- ❌ ~~`cpl: 38.50`~~ = S/38.50 (INCORRECTO)

#### 2. **CPL Targets por audiencia**
- **Pregrado**: `cpl_target: 9.5` ($9.50 USD)
- **Posgrado**: `cpl_target: 17.5` ($17.50 USD)

#### 3. **CPL Thresholds HubSpot**
```javascript
// src/data/config.js - HUBSPOT_CONFIG
pregrado: {
  max_cpl: 12,    // USD máximo
  alert_at: 10,   // Alerta en $10
  pause_at: 14,   // Pausar en $14
},
posgrado: {
  max_cpl: 15,    // USD máximo
  alert_at: 13,   // Alerta en $13
  pause_at: 17,   // Pausar en $17
}
```

#### 4. **Estructura de OPPORTUNITY_SCORE**
⚠️ **IMPORTANTE**: Esta estructura es crítica para DecisionLayer. No alterar:

```javascript
export const OPPORTUNITY_SCORE = {
  current_score: 82,        // ✅ Debe ser "current_score" (no "total")
  trend: '+5.2%',           // ✅ Debe existir
  components: {             // ✅ Debe ser objeto (no array)
    search_interest: {
      score: 85,
      weight: 0.25,         // ✅ Decimal (no porcentaje)
      contribution: 21.25,  // ✅ Debe existir
    },
    // ... otros componentes
  },
  recommendation: {         // ✅ Debe existir
    message: '...',
    confidence: '95%',
    priority: 'high',
  },
};
```

### 🚀 Migración de Mockup a Producción (Paso a Paso)

#### **Fase 1: Activar Scrapers Automáticos (OBLIGATORIO)**

1. **Configurar GitHub Actions** (ya existe en `.github/workflows/`):
   ```yaml
   # .github/workflows/scrapers.yml
   name: Update Social Data
   on:
     schedule:
       - cron: '0 6 * * 1'  # Lunes 6 AM
   jobs:
     scrape:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - run: cd scrapers && npm install && npm run scrape:all
         - run: git add public/data/ && git commit -m "Update data" && git push
   ```

2. **Activar GitHub Actions**:
   - GitHub → Settings → Actions → Allow all actions

3. **Configurar secretos** (si usas APIs pagadas):
   - GitHub → Settings → Secrets → New repository secret
   - Agregar: `APIFY_API_KEY`, `RAPIDAPI_KEY`, etc.

#### **Fase 2: Conectar Google Analytics 4 Real (OPCIONAL)**

> Solo si el cliente tiene GA4 configurado y quiere métricas web reales.

1. **Crear Service Account en Google Cloud**:
   - Google Cloud Console → IAM & Admin → Service Accounts
   - Crear nueva cuenta → Descargar JSON key

2. **Dar acceso a GA4**:
   - Google Analytics → Admin → Property Access Management
   - Agregar email del service account con rol "Viewer"

3. **Crear función serverless**:
   ```javascript
   // netlify/functions/ga4-data.js
   const { BetaAnalyticsDataClient } = require('@google-analytics/data');

   exports.handler = async () => {
     const analyticsDataClient = new BetaAnalyticsDataClient({
       credentials: JSON.parse(process.env.GA4_CREDENTIALS)
     });

     const [response] = await analyticsDataClient.runReport({
       property: `properties/${process.env.GA4_PROPERTY_ID}`,
       dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
       dimensions: [{ name: 'pagePath' }],
       metrics: [{ name: 'screenPageViews' }, { name: 'conversions' }],
     });

     return { statusCode: 200, body: JSON.stringify(response) };
   };
   ```

4. **Reemplazar mockData con datos reales**:
   ```javascript
   // src/components/DataLayer.jsx
   const basePath = HUBSPOT_CONFIG.enabled
     ? '/.netlify/functions'  // API real
     : '/data';               // Mockup
   ```

#### **Fase 3: Integrar Meta Ads API y Google Ads API (OPCIONAL)**

> Solo si el cliente quiere pausado automático de campañas basado en CPL.

1. **Meta Ads API** (pausado automático):
   ```javascript
   // netlify/functions/meta-pause-campaign.js
   const axios = require('axios');

   exports.handler = async (event) => {
     const { campaign_id, cpl } = JSON.parse(event.body);

     if (cpl > 12) {  // CPL Pregrado threshold
       await axios.post(
         `https://graph.facebook.com/v18.0/${campaign_id}`,
         { status: 'PAUSED' },
         { params: { access_token: process.env.META_ACCESS_TOKEN }}
       );
     }

     return { statusCode: 200, body: JSON.stringify({ paused: true }) };
   };
   ```

2. **Google Ads API** (ajuste de bids):
   ```javascript
   // netlify/functions/google-adjust-bids.js
   const { GoogleAdsApi } = require('google-ads-api');

   exports.handler = async (event) => {
     const client = new GoogleAdsApi({
       client_id: process.env.GOOGLE_ADS_CLIENT_ID,
       client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
       developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
     });

     // Ajustar bids según OPPORTUNITY_SCORE
     // ...
   };
   ```

#### **Fase 4: Integración HubSpot (OPCIONAL - Solo UCSP)**

> Esta integración fue solicitada específicamente por UCSP para monitoreo de CPL en tiempo real. Otros clientes pueden no necesitarla.

1. **Obtener credenciales HubSpot**:
   - Ir a HubSpot → Settings → Integrations → API Key
   - Copiar Private App Access Token

2. **Configurar en el sistema**:
   ```javascript
   // src/data/config.js
   export const HUBSPOT_CONFIG = {
     enabled: true,  // Cambiar a true solo si se usa
     api_key: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   };
   ```

3. **Crear endpoint backend** (Netlify Functions):
   ```javascript
   // netlify/functions/hubspot-cpl.js
   const axios = require('axios');

   exports.handler = async (event) => {
     const response = await axios.get('https://api.hubapi.com/crm/v3/objects/deals', {
       headers: { 'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}` }
     });
     return { statusCode: 200, body: JSON.stringify(response.data) };
   };
   ```

### 🧪 Testing Antes de Producción

```bash
# 1. Test local con datos mockup
npm run dev

# 2. Test build
npm run build
npm run preview

# 3. Test scrapers
cd scrapers
npm run scrape:test

# 4. Verificar estructura de datos
node -e "const data = require('./src/data/mockData.js'); console.log(data.OPPORTUNITY_SCORE)"
```

### 📝 Checklist de Producción

**Obligatorio:**
- [ ] Todos los valores en USD ($)
- [ ] CPL targets actualizados (Pregrado $9.5, Posgrado $17.5)
- [ ] OPPORTUNITY_SCORE con estructura correcta
- [ ] Scrapers testeados localmente
- [ ] GitHub Actions activadas
- [ ] APIFY_TOKEN configurado en GitHub Secrets
- [ ] Build exitoso sin errores

**Opcional (según necesidad del cliente):**
- [ ] GA4 Service Account creada
- [ ] Variables de entorno en Netlify
- [ ] Meta Ads API token válido
- [ ] Google Ads API configurada
- [ ] HubSpot API key configurada *(Solo UCSP)*

---

## 🔄 Integración HubSpot (Opcional - Solo UCSP)

> ⚠️ **Nota**: Esta integración fue solicitada específicamente por UCSP. Otros clientes pueden no necesitarla y pueden ignorar esta sección.

El sistema incluye espacio para integración con HubSpot API:

### Configuración de Alertas CPL

```javascript
cpl_thresholds: {
  pregrado: {
    max_cpl: 12,      // USD máximo por lead pregrado
    alert_at: 10,     // Alerta cuando se acerca al límite
    pause_at: 14,     // Pausar si supera este valor
  },
  posgrado: {
    max_cpl: 15,      // USD máximo por lead posgrado
    alert_at: 13,
    pause_at: 17,
  },
}
```

### Tracking de Conversiones

- ✅ Lead Ads (Meta)
- ✅ Conversaciones WhatsApp (Meta Ads objetivo)
- ✅ Visitas a Landing Page
- ✅ Formularios completados

**Nota**: La integración HubSpot actualmente es mockup. Para activarla, configurar `enabled: true` y agregar API key en `src/data/config.js`.

---

## 📈 UCSP Opportunity Score

Score propietario 0-100 que evalúa 5 componentes:

1. **Interés de Búsqueda** (25%) - Google Trends en zonas objetivo
2. **Engagement Social** (20%) - TikTok + Instagram + Facebook
3. **Intención de Conversión** (30%) - Lead Ads + WhatsApp
4. **Calidad de Leads** (15%) - HubSpot Lead Score
5. **Competitividad** (10%) - Share of Voice vs UNSA/UCSM

**Score actual**: 82/100 (Grado A)

---

## 🎯 KPIs Principales

### Métricas de Éxito

- **Postulaciones Completadas**: 1,256 (+15.0%)
- **Alcance Total**: 875,000 usuarios únicos (+21.9%)
- **Interacciones**: 142,500 (+8.1%)
- **Costo por Postulación (CPP)**: $10.40 (-7.9%)
- **Charlas Asistidas**: 485 (+17.7%)
- **Conversaciones WhatsApp**: 1,420 (+28.2%)

### Funnel de Conversión

```
Alcance (850,000)
      ↓ 1.4%
Visitas Landing (12,000)
      ↓ 25%
Formularios (3,000)
      ↓ 35%
Postulaciones Válidas (1,050)
      ↓ 23%
Matriculados (240)
```

---

## 🏆 Competencia

Principales universidades competidoras en el sur del Perú (Arequipa y Cusco):

### **Alta Amenaza**
1. **UNSA** - Universidad Nacional de San Agustín (Arequipa)
   - 38% share of voice, 72% sentiment
   - 2da en ranking público nacional Sunedu 2025, posición 14 general
   - Principal universidad pública del sur

2. **UCSM** - Universidad Católica Santa María (Arequipa)
   - 22% share of voice, 68% sentiment
   - Principal competidor privado en Arequipa, fuerte en medicina

3. **UNSAAC** - Universidad Nacional de San Antonio Abad del Cusco (Cusco)
   - 12% share of voice, 70% sentiment
   - 6,000+ postulantes por ciclo, 41 carreras
   - Segunda universidad nacional más grande del sur, posición 9 ranking público Sunedu

### **Amenaza Media**
4. **UTP** - Universidad Tecnológica del Perú (Arequipa)
   - 10% share of voice, 70% sentiment
   - Enfoque en tecnología y empleabilidad

5. **UAC** - Universidad Andina del Cusco (Cusco)
   - 8% share of voice, 66% sentiment
   - 4 campus: Cusco, Sicuani, Quillabamba, Puerto Maldonado
   - Fuerte cobertura regional Cusco

### **Amenaza Baja**
6. **ULASALLE** - Universidad La Salle (Arequipa)
   - 3% share of voice, 74% sentiment
   - Pequeña pero de calidad, enfoque lasallista, licenciada 2018

### **Nuestra Posición**
**UCSP** - Universidad Católica San Pablo (Arequipa)
- 13% share of voice, 78% sentiment
- Primera universidad licenciada del sur del Perú
- Posición 19 en ranking QS 2024

---

## 📝 Notas Importantes

### Datos Actuales

⚠️ **Importante**: Actualmente el sistema usa **datos mock/curados** para demostración. Los scrapers están implementados pero no ejecutan scraping en tiempo real.

### Próximos Pasos

Para implementación en producción:

1. **Fase 1 (Obligatoria)**: Activar scrapers automáticos con Apify (GitHub Actions cada lunes)
2. **Fase 2 (Opcional)**: Conectar con GA4 real (si el cliente tiene GA4)
3. **Fase 3 (Opcional - Solo UCSP)**: Configurar API keys de HubSpot para monitoreo CPL
4. **Fase 4 (Opcional)**: Integrar Meta Ads API y Google Ads API para pausado automático

> **Nota**: HubSpot fue solicitado específicamente por UCSP. Otros clientes pueden no necesitar esta integración.

---

## 🚀 GUÍA DE PRODUCCIÓN: Apify + Multi-Cliente

Esta sección documenta cómo llevar el sistema a **producción 100% funcional** con datos reales automatizados usando **Apify**.

### ¿Por qué Apify?

| Problema | Solución con Apify |
|----------|-------------------|
| pytrends falla constantemente | Apify tiene Actors estables para Google Trends |
| TikTok bloquea scrapers | Apify maneja proxies y anti-bot automáticamente |
| Meta API tokens expiran | Apify Actors manejan autenticación |
| Necesitas mantener servidores | Apify es serverless, solo pagas por uso |
| Múltiples clientes | Una cuenta Apify, múltiples configuraciones |

**Costo**: ~$49/mes para múltiples clientes (modelo basado en créditos)

### Arquitectura Code-First (Recomendada)

```
┌─────────────────────────────────────────────────────────────────┐
│  Tu Repositorio (GitHub)                                        │
│                                                                 │
│  configs/clients/           scrapers/                           │
│  ├── ucsp.js        ───────▶ apify_runner.js ────┐              │
│  ├── powerpay.js                                 │              │
│  └── [nuevo-cliente].js                          │              │
│                                                  │              │
│  .github/workflows/                              │              │
│  └── scrape-data.yml  ◀──────────────────────────┘              │
│       (Lunes 8 AM Perú)                                         │
└──────────────────────────────────────────────────│──────────────┘
                                                   │
                          API call con parámetros  │
                                                   ▼
                      ┌─────────────────────────────────────────┐
                      │  Apify Cloud                            │
                      │  ┌─────────────────────────────────┐    │
                      │  │ Actors (scrapers pre-hechos):   │    │
                      │  │ • clockworks/tiktok-scraper     │    │
                      │  │ • apify/google-trends-scraper   │    │
                      │  │ • apify/facebook-posts-scraper  │    │
                      │  │ • apify/instagram-scraper       │    │
                      │  └─────────────────────────────────┘    │
                      │  (Solo ejecuta, no guarda configs)      │
                      └─────────────────────────────────────────┘
                                                   │
                                Resultados JSON    │
                                                   ▼
                      ┌─────────────────────────────────────────┐
                      │  GitHub Actions:                        │
                      │  1. Recibe datos de Apify               │
                      │  2. Guarda en public/data/              │
                      │  3. Commit + Push automático            │
                      │  4. Netlify detecta cambio → Deploy     │
                      └─────────────────────────────────────────┘
```

### Paso 1: Crear cuenta Apify

1. Ir a [apify.com](https://apify.com) y crear cuenta
2. Ir a **Settings → Integrations → API**
3. Copiar tu **API Token**
4. Guardarlo como secreto en GitHub:
   - GitHub → Settings → Secrets and variables → Actions
   - New repository secret: `APIFY_TOKEN`

### Paso 2: Estructura de configuración multi-cliente

Crear carpeta `configs/clients/` con un archivo por cliente:

```javascript
// configs/clients/ucsp.js
export default {
  id: 'ucsp',
  name: 'Universidad Católica San Pablo',
  industry: 'education',
  region: 'PE',  // Perú

  // Configuración TikTok
  tiktok: {
    hashtags: [
      '#ucsp', '#admision2026', '#universidadarequipa',
      '#vidauniversitaria', '#carreras2026', '#becasuniversitarias',
      '#ingenieriaIndustrial', '#medicina', '#derecho'
    ],
    maxResults: 50,
    language: 'es'
  },

  // Configuración Google Trends
  trends: {
    keywords: [
      'UCSP', 'Universidad Católica San Pablo', 'admisión UCSP 2026',
      'ingeniería industrial arequipa', 'medicina arequipa',
      'universidades arequipa', 'becas UCSP'
    ],
    geo: 'PE',  // Perú
    timeframe: 'today 1-m'  // Último mes
  },

  // Configuración Meta (Facebook/Instagram)
  meta: {
    pages: ['UCatolicaSanPablo'],
    hashtags: ['#ucsp', '#sanpablo', '#arequipa'],
    keywords: ['admisión', 'becas', 'carreras', 'matrícula']
  },

  // Configuración de salida
  output: {
    dataPath: 'public/data',
    timezone: 'America/Lima'
  }
};
```

```javascript
// configs/clients/powerpay.js (ejemplo otro cliente)
export default {
  id: 'powerpay',
  name: 'PowerPay',
  industry: 'fintech',
  region: 'PE',

  tiktok: {
    hashtags: [
      '#pagosdigitales', '#ecommerce', '#fintech',
      '#emprendimiento', '#ventasonline', '#pasareladepago'
    ],
    maxResults: 50,
    language: 'es'
  },

  trends: {
    keywords: [
      'pasarela de pago', 'pagos online peru',
      'ecommerce peru', 'cobrar con tarjeta'
    ],
    geo: 'PE',
    timeframe: 'today 1-m'
  },

  meta: {
    pages: ['PowerPayPE'],
    hashtags: ['#powerpay', '#pagosdigitales'],
    keywords: ['pago', 'tarjeta', 'ecommerce']
  },

  output: {
    dataPath: 'public/data',
    timezone: 'America/Lima'
  }
};
```

### Paso 3: Runner de Apify

```javascript
// scrapers/apify_runner.js
import { ApifyClient } from 'apify-client';
import fs from 'fs';
import path from 'path';

// Inicializar cliente
const client = new ApifyClient({
  token: process.env.APIFY_TOKEN,
});

/**
 * Scrape TikTok usando Apify Actor
 */
export async function scrapeTikTok(config) {
  console.log(`🎵 Scraping TikTok para ${config.name}...`);

  const run = await client.actor("clockworks/tiktok-scraper").call({
    hashtags: config.tiktok.hashtags,
    resultsPerPage: config.tiktok.maxResults,
    shouldDownloadVideos: false,
    shouldDownloadCovers: false,
  });

  const { items } = await client.dataset(run.defaultDatasetId).listItems();

  return {
    source: 'tiktok',
    client: config.id,
    timestamp: new Date().toISOString(),
    hashtags_searched: config.tiktok.hashtags,
    results_count: items.length,
    trends: {
      hashtags: processHashtags(items),
      top_videos: processVideos(items)
    }
  };
}

/**
 * Scrape Google Trends usando Apify Actor
 */
export async function scrapeGoogleTrends(config) {
  console.log(`📈 Scraping Google Trends para ${config.name}...`);

  const run = await client.actor("apify/google-trends-scraper").call({
    searchTerms: config.trends.keywords,
    geo: config.trends.geo,
    timeRange: config.trends.timeframe,
    isMultiple: true,
  });

  const { items } = await client.dataset(run.defaultDatasetId).listItems();

  return {
    source: 'google_trends',
    client: config.id,
    timestamp: new Date().toISOString(),
    keywords_searched: config.trends.keywords,
    region: config.trends.geo,
    timeframe: config.trends.timeframe,
    trends: processGoogleTrends(items)
  };
}

/**
 * Scrape Meta (Facebook/Instagram) usando Apify Actor
 */
export async function scrapeMeta(config) {
  console.log(`📘 Scraping Meta para ${config.name}...`);

  // Facebook Posts
  const fbRun = await client.actor("apify/facebook-posts-scraper").call({
    startUrls: config.meta.pages.map(page => ({
      url: `https://www.facebook.com/${page}`
    })),
    resultsLimit: 50,
  });

  const { items: fbItems } = await client.dataset(fbRun.defaultDatasetId).listItems();

  return {
    source: 'meta',
    client: config.id,
    timestamp: new Date().toISOString(),
    pages_scraped: config.meta.pages,
    trends: {
      topics: processMetaTopics(fbItems, config.meta.keywords),
      engagement: calculateEngagement(fbItems)
    }
  };
}

/**
 * Ejecutar todos los scrapers para un cliente
 */
export async function scrapeAll(config) {
  const results = {};

  try {
    results.tiktok = await scrapeTikTok(config);
  } catch (error) {
    console.error(`❌ Error TikTok: ${error.message}`);
    results.tiktok = { error: error.message };
  }

  try {
    results.trends = await scrapeGoogleTrends(config);
  } catch (error) {
    console.error(`❌ Error Trends: ${error.message}`);
    results.trends = { error: error.message };
  }

  try {
    results.meta = await scrapeMeta(config);
  } catch (error) {
    console.error(`❌ Error Meta: ${error.message}`);
    results.meta = { error: error.message };
  }

  return results;
}

/**
 * Guardar resultados en archivos JSON
 */
export function saveResults(results, config) {
  const dataPath = config.output.dataPath;
  const date = new Date().toISOString().split('T')[0].replace(/-/g, '');

  // Guardar cada fuente
  for (const [source, data] of Object.entries(results)) {
    if (data.error) continue;

    const sourceDir = path.join(dataPath, source);
    if (!fs.existsSync(sourceDir)) {
      fs.mkdirSync(sourceDir, { recursive: true });
    }

    // Guardar con fecha
    const filePath = path.join(sourceDir, `${source}_${date}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    // Actualizar latest.json
    const latestPath = path.join(sourceDir, 'latest.json');
    fs.writeFileSync(latestPath, JSON.stringify(data, null, 2));

    console.log(`✅ Guardado: ${filePath}`);
  }
}

// Funciones auxiliares de procesamiento
function processHashtags(items) {
  const hashtagMap = new Map();
  items.forEach(item => {
    (item.hashtags || []).forEach(tag => {
      const current = hashtagMap.get(tag) || { count: 0, views: 0 };
      hashtagMap.set(tag, {
        count: current.count + 1,
        views: current.views + (item.playCount || 0)
      });
    });
  });
  return Array.from(hashtagMap.entries())
    .map(([hashtag, data]) => ({ hashtag, ...data }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 20);
}

function processVideos(items) {
  return items
    .sort((a, b) => (b.playCount || 0) - (a.playCount || 0))
    .slice(0, 10)
    .map(item => ({
      id: item.id,
      description: item.text?.slice(0, 100),
      views: item.playCount,
      likes: item.diggCount,
      shares: item.shareCount,
      author: item.authorMeta?.name
    }));
}

function processGoogleTrends(items) {
  return items.map(item => ({
    keyword: item.term,
    interest: item.interestOverTime?.[0]?.value || 0,
    trend: item.trend || 'stable',
    related_queries: item.relatedQueries?.slice(0, 5) || []
  }));
}

function processMetaTopics(items, keywords) {
  const topics = {};
  items.forEach(post => {
    keywords.forEach(keyword => {
      if (post.text?.toLowerCase().includes(keyword.toLowerCase())) {
        topics[keyword] = (topics[keyword] || 0) + 1;
      }
    });
  });
  return Object.entries(topics)
    .map(([topic, mentions]) => ({ topic, mentions }))
    .sort((a, b) => b.mentions - a.mentions);
}

function calculateEngagement(items) {
  const total = items.reduce((acc, post) => ({
    likes: acc.likes + (post.likes || 0),
    comments: acc.comments + (post.comments || 0),
    shares: acc.shares + (post.shares || 0)
  }), { likes: 0, comments: 0, shares: 0 });

  return {
    ...total,
    total: total.likes + total.comments + total.shares,
    posts_analyzed: items.length
  };
}
```

### Paso 4: Script de ejecución

```javascript
// scrapers/run_apify.js
import { scrapeAll, saveResults } from './apify_runner.js';

// Cargar configuración del cliente
const CLIENT_ID = process.env.CLIENT_ID || 'ucsp';
const configPath = `../configs/clients/${CLIENT_ID}.js`;

async function main() {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`🚀 Iniciando scraping para: ${CLIENT_ID}`);
  console.log(`📅 Fecha: ${new Date().toISOString()}`);
  console.log(`${'='.repeat(50)}\n`);

  try {
    // Importar configuración dinámicamente
    const { default: config } = await import(configPath);

    // Ejecutar todos los scrapers
    const results = await scrapeAll(config);

    // Guardar resultados
    saveResults(results, config);

    console.log(`\n✅ Scraping completado para ${config.name}`);

  } catch (error) {
    console.error(`\n❌ Error fatal: ${error.message}`);
    process.exit(1);
  }
}

main();
```

### Paso 5: GitHub Actions actualizado

```yaml
# .github/workflows/scrape-data.yml
name: UCSP Algorithm - Weekly Data Scrape (Apify)

on:
  schedule:
    # Lunes 8 AM Perú (1 PM UTC)
    - cron: '0 13 * * 1'
  workflow_dispatch:
    inputs:
      client_id:
        description: 'ID del cliente (ucsp, powerpay, etc.)'
        required: false
        default: 'ucsp'

env:
  NODE_VERSION: '18'
  CLIENT_ID: ${{ github.event.inputs.client_id || 'ucsp' }}

jobs:
  scrape:
    runs-on: ubuntu-latest

    steps:
      - name: 📥 Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: 🟢 Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          cache-dependency-path: scrapers/package-lock.json

      - name: 📦 Install dependencies
        working-directory: scrapers
        run: npm ci

      - name: 🔍 Run Apify scrapers
        working-directory: scrapers
        env:
          APIFY_TOKEN: ${{ secrets.APIFY_TOKEN }}
          CLIENT_ID: ${{ env.CLIENT_ID }}
        run: node run_apify.js

      - name: 📤 Commit and push data
        run: |
          git config --local user.email "github-actions[bot]@users.noreply.github.com"
          git config --local user.name "github-actions[bot]"

          # Agregar cambios
          git add public/data/
          git add data/

          # Verificar si hay cambios
          if git diff --staged --quiet; then
            echo "No hay cambios para commitear"
            exit 0
          fi

          # Commit con fecha
          DATE=$(TZ='America/Lima' date '+%Y-%m-%d %H:%M')
          git commit -m "📊 Actualización automática de datos - $DATE"

          # Push
          git push

      - name: 🔔 Notificar éxito (opcional)
        if: success()
        run: |
          echo "✅ Scraping completado exitosamente para $CLIENT_ID"
          # Aquí puedes agregar notificación a Slack/Discord/Email
```

### Paso 6: Duplicar repo para nuevo cliente

Sigue estos pasos para crear un nuevo Algorithm para otro cliente:

```bash
# 1. Clonar el repo base
git clone https://github.com/alonsix6/SanPablo-algorithm-mvp.git NuevoCliente-algorithm-mvp
cd NuevoCliente-algorithm-mvp

# 2. Cambiar remote a nuevo repo
git remote set-url origin https://github.com/tu-usuario/NuevoCliente-algorithm-mvp.git

# 3. Crear archivo de configuración del nuevo cliente
cp configs/clients/ucsp.js configs/clients/nuevocliente.js

# 4. Editar la configuración
nano configs/clients/nuevocliente.js
# Cambiar: id, name, industry, hashtags, keywords, pages, etc.

# 5. Actualizar package.json
sed -i 's/ucsp-algorithm/nuevocliente-algorithm/g' package.json
sed -i 's/UCSP/NuevoCliente/g' package.json

# 6. Actualizar branding (colores, logo)
# Editar: src/data/config.js → BRAND_CONFIG

# 7. Limpiar datos del cliente anterior
rm -rf public/data/*/latest.json
rm -rf data/*/

# 8. Configurar secretos en GitHub
# GitHub → Settings → Secrets → APIFY_TOKEN

# 9. Actualizar variable CLIENT_ID en workflow
# .github/workflows/scrape-data.yml → default: 'nuevocliente'

# 10. Commit inicial
git add .
git commit -m "Configuración inicial para NuevoCliente"
git push -u origin main
```

### Checklist de nuevo cliente

**Obligatorio:**
- [ ] Repo clonado y remote actualizado
- [ ] `configs/clients/[cliente].js` creado con:
  - [ ] Hashtags TikTok relevantes
  - [ ] Keywords Google Trends
  - [ ] Páginas Meta (Facebook/Instagram)
- [ ] `package.json` actualizado (nombre, descripción)
- [ ] `src/data/config.js` actualizado:
  - [ ] BRAND_CONFIG (colores, logo, nombre)
  - [ ] TARGET_AUDIENCES (si aplica)
- [ ] Secretos configurados en GitHub:
  - [ ] `APIFY_TOKEN`
- [ ] GitHub Actions habilitado
- [ ] Netlify conectado (o hosting alternativo)
- [ ] Primer scraping manual ejecutado (workflow_dispatch)
- [ ] Datos aparecen en el dashboard

**Opcional (solo si el cliente lo requiere):**
- [ ] HUBSPOT_CONFIG (monitoreo CPL automático) - *UCSP lo usa, otros clientes pueden no necesitarlo*
- [ ] GA4 API (métricas web reales)
- [ ] Meta Ads API (pausado automático de campañas)

### Costos estimados por cliente

| Servicio | Costo mensual | Notas |
|----------|--------------|-------|
| Apify | ~$10-15 | Depende del volumen de scraping |
| GitHub | $0 | Actions gratuito para repos públicos |
| Netlify | $0 | Tier gratuito suficiente |
| **Total** | **~$10-15/cliente** | Con una cuenta Apify de $49 puedes manejar 3-5 clientes |

### Troubleshooting común

**Error: "APIFY_TOKEN not found"**
```bash
# Verificar que el secreto esté configurado
# GitHub → Settings → Secrets → Actions → APIFY_TOKEN
```

**Error: "Actor not found"**
```bash
# Los actors de Apify pueden cambiar de nombre
# Verificar en apify.com/store los nombres actuales
```

**Error: "Rate limit exceeded"**
```bash
# Apify tiene límites por plan
# Reducir maxResults o espaciar ejecuciones
```

**Datos no se actualizan en Netlify**
```bash
# Verificar que el commit se haya hecho
git log -1

# Verificar que Netlify detectó el cambio
# Netlify Dashboard → Deploys
```

---

## 📄 Licencia

Este proyecto es propiedad de Universidad Católica San Pablo. Todos los derechos reservados.

---

## 👥 Contacto

Para consultas sobre el proyecto:
- **Universidad**: Universidad Católica San Pablo
- **Repositorio**: https://github.com/alonsix6/SanPablo-algorithm-mvp

---

**© 2025 UCSP Algorithm - Universidad Católica San Pablo**
