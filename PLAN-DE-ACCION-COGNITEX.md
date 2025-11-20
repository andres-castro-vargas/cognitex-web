# 🚀 PLAN DE ACCIÓN COMPLETO - COGNITEX.CO
## Migración de HTML a React/TypeScript Profesional

**Fecha de inicio:** 19 de Noviembre, 2025  
**Empresa:** COGNITEX  
**Fundadores:** Andres Castro (CTO) + Ana María Rojas (CEO)  
**Dominio:** cognitex.co  
**Metodología:** Claude Projects + Claude Code + VS Code

---

## 📊 ESTADO ACTUAL

### ✅ LO QUE YA TIENES
- **Sitio web:** https://cognitex.co funcionando ✅
- **Hosting:** Hostinger VPS con EasyPanel ✅
- **Base de datos:** PostgreSQL en el servidor ✅
- **Dominio:** cognitex.co configurado ✅
- **SSL:** HTTPS activo con Let's Encrypt ✅
- **Backend:** n8n con 5 workflows activos ✅
- **Email:** andres@cognitex.co (Google Workspace) ✅

### 🎯 LO QUE VAMOS A LOGRAR
- Sitio React + TypeScript profesional
- Componentes reutilizables y mantenibles
- Integración robusta con n8n webhooks
- Deploy automatizado con Git
- Base de datos PostgreSQL integrada
- Sin downtime durante la migración
- Código limpio y escalable

---

## 🎨 PRINCIPIOS DEL PROYECTO

### ⚠️ CRÍTICO: MANTENER LO QUE FUNCIONA
- ✅ **NO** cambiar el diseño visual actual (te gusta)
- ✅ **NO** romper el sitio que está en producción
- ✅ **SOLO** mejorar la estructura técnica
- ✅ **MANTENER** el robot, colores, tipografía

### 🎯 OBJETIVOS
1. **Modularidad:** Componentes React reutilizables
2. **Mantenibilidad:** Código organizado y limpio
3. **Escalabilidad:** Fácil agregar funcionalidades
4. **Profesionalismo:** Estándares de la industria
5. **Automatización:** Deploy con Git + acciones automáticas

---

## 📋 STACK TECNOLÓGICO

### Frontend
```
- React 18+ (UI framework)
- TypeScript (tipado estático)
- Tailwind CSS (estilos - igual que EimyDesign)
- Vite (build tool - rápido y moderno)
- React Router (navegación entre páginas)
```

### Backend & Database
```
- PostgreSQL (tu servidor actual)
- n8n webhooks (capturas de leads)
- API REST (endpoints propios si necesitas)
```

### Deploy & Tools
```
- Git + GitHub (control de versiones)
- Vercel (hosting frontend - gratis y automático)
- EasyPanel (backend actual - se mantiene)
- VS Code + Claude Code (desarrollo)
```

### Ventajas vs EimyDesign
```
EimyDesign: Supabase externo (cloud)
COGNITEX:   PostgreSQL propio (tu servidor) ✅ Mejor control
```

---

## 🗺️ ESTRATEGIA DE MIGRACIÓN

### IMPORTANTE: MIGRACIÓN SIN DOWNTIME

```
Fase 1-3: Desarrollo local
├── Tu sitio actual sigue funcionando en cognitex.co
├── Nuevo sitio en desarrollo local (localhost)
└── Sin afectar producción

Fase 4: Deploy paralelo
├── Nuevo sitio en Vercel: cognitex-new.vercel.app
├── Sitio actual sigue en cognitex.co
└── Pruebas en paralelo

Fase 5: Transición
├── Cuando el nuevo esté perfecto
├── Apuntas cognitex.co a Vercel
└── Migración instantánea sin downtime
```

---

## 📅 FASES DEL PROYECTO

---

## 🔴 FASE 1: PREPARACIÓN Y SETUP (DÍA 1)
**Duración estimada:** 2-3 horas  
**Objetivo:** Configurar entorno de desarrollo

### 1.1 Instalar Herramientas Necesarias

#### Git (Control de versiones)
```bash
# Descargar de: https://git-scm.com/download/win
# Instalar con opciones por defecto
# Verificar instalación:
git --version
```

#### Node.js (JavaScript runtime)
```bash
# Descargar LTS de: https://nodejs.org
# Versión recomendada: 20.x o superior
# Instalar con opciones por defecto
# Verificar instalación:
node --version
npm --version
```

#### VS Code (ya lo tienes)
**Extensiones recomendadas:**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- GitLens
- Prettier - Code formatter

### 1.2 Crear Repositorio Git Local

```bash
# Crear carpeta del proyecto
mkdir cognitex-web
cd cognitex-web

# Inicializar Git
git init

# Configurar usuario (primera vez)
git config --global user.name "Andres Castro"
git config --global user.email "andres@cognitex.co"
```

### 1.3 Crear Cuenta GitHub

1. Ir a https://github.com
2. Sign Up con: `andres@cognitex.co`
3. Username sugerido: `cognitex` o `andres-cognitex`
4. Verificar email
5. Crear repositorio: `cognitex-web`
6. **NO** inicializar con README (ya tenemos Git local)

### 1.4 Crear Cuenta Vercel

1. Ir a https://vercel.com
2. Sign Up con GitHub (conectar cuenta)
3. Autorizar acceso a GitHub
4. Dashboard listo

### 1.5 Checklist Fase 1

- [ ] Git instalado y configurado
- [ ] Node.js instalado (versión 20+)
- [ ] VS Code con extensiones
- [ ] Carpeta `cognitex-web` creada
- [ ] Git inicializado localmente
- [ ] Cuenta GitHub creada
- [ ] Repositorio `cognitex-web` en GitHub
- [ ] Cuenta Vercel conectada a GitHub

---

## 🟡 FASE 2: CREAR PROYECTO REACT (DÍA 1-2)
**Duración estimada:** 3-4 horas  
**Objetivo:** Estructura base funcionando localmente

### 2.1 Crear Proyecto con Vite

**IMPORTANTE:** Usa Claude Code para esto

```bash
# En la carpeta cognitex-web
npm create vite@latest . -- --template react-ts

# Instalar dependencias
npm install

# Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Instalar React Router
npm install react-router-dom

# Instalar Shadcn UI (componentes como EimyDesign)
npx shadcn-ui@latest init
```

### 2.2 Configurar Tailwind

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Azul Cognitex
        dark: '#1F2937',    // Negro/Oscuro
      },
      fontFamily: {
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 2.3 Estructura de Carpetas

**Claude Code creará esta estructura:**
```
cognitex-web/
├── public/
│   ├── robot-logo.svg (tu logo actual)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/ (componentes shadcn)
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── LeadFormSection.tsx
│   │       └── CalendarSection.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   │   └── useLeadForm.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### 2.4 Primer Commit

```bash
# Agregar archivos
git add .

# Primer commit
git commit -m "Initial project setup with Vite + React + TypeScript"

# Conectar con GitHub
git remote add origin https://github.com/TU-USUARIO/cognitex-web.git

# Subir a GitHub
git push -u origin main
```

### 2.5 Checklist Fase 2

- [ ] Proyecto Vite creado
- [ ] Tailwind CSS configurado
- [ ] React Router instalado
- [ ] Shadcn UI inicializado
- [ ] Estructura de carpetas creada
- [ ] Colores Cognitex configurados
- [ ] Fuente Tomorrow configurada
- [ ] Primer commit hecho
- [ ] Código subido a GitHub
- [ ] `npm run dev` funciona en localhost

---

## 🟢 FASE 3: MIGRAR CONTENIDO HTML (DÍA 2-3)
**Duración estimada:** 6-8 horas  
**Objetivo:** Convertir HTML actual a componentes React

### 3.1 Componentes a Crear

#### Header Component
```typescript
// src/components/layout/Header.tsx
- Logo/Robot de Cognitex
- Navegación (si agregas más páginas después)
- Botón CTA principal
```

#### Hero Section
```typescript
// src/components/sections/HeroSection.tsx
- Título principal
- Subtítulo
- Call to action
- Imagen de fondo o robot
```

#### Services Section
```typescript
// src/components/sections/ServicesSection.tsx
- Lista de servicios
- Íconos
- Descripciones
```

#### Lead Form Section
```typescript
// src/components/sections/LeadFormSection.tsx
- Formulario multi-step (3 pasos)
- Progress bar
- Validación
- Integración con n8n webhook
```

#### Calendar Section
```typescript
// src/components/sections/CalendarSection.tsx
- Botón "Agenda una Consultoría Gratuita"
- Link a Google Calendar
```

#### Footer Component
```typescript
// src/components/layout/Footer.tsx
- Información de contacto
- Links importantes
- Copyright
```

### 3.2 Estrategia de Conversión

**Claude Code hará esto paso a paso:**

1. **Extraer HTML** de tu `index.html`
2. **Convertir a JSX** (sintaxis React)
3. **Separar en componentes** (modular)
4. **Agregar TypeScript** (tipos)
5. **Adaptar estilos** a Tailwind
6. **Probar cada componente** individualmente

### 3.3 Integración con n8n

**Hook personalizado para el formulario:**

```typescript
// src/hooks/useLeadForm.ts
import { useState } from 'react';

interface LeadData {
  nombre: string;
  email: string;
  empresa: string;
  necesidad: string;
}

export const useLeadForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (data: LeadData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('TU_WEBHOOK_N8N_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar formulario');
      }

      return { success: true };
    } catch (err) {
      setError('Hubo un error. Por favor intenta de nuevo.');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { submitLead, loading, error };
};
```

### 3.4 Variables de Entorno

**Crear archivo `.env.local`:**
```bash
VITE_N8N_WEBHOOK_URL=https://tu-webhook-n8n.com/webhook/leads
VITE_GOOGLE_CALENDAR_URL=https://calendar.app.google/uZEHQ1FiMa5RVh9p8
```

**Agregar al `.gitignore`:**
```
.env.local
.env*.local
```

### 3.5 Checklist Fase 3

- [ ] Header componente creado
- [ ] Hero section migrada
- [ ] Services section migrada
- [ ] Lead form funcionando
- [ ] Progress bar animado
- [ ] Validación de formulario
- [ ] Integración n8n configurada
- [ ] Variables de entorno creadas
- [ ] Calendar button funcionando
- [ ] Footer creado
- [ ] Responsive design verificado
- [ ] Pruebas en diferentes pantallas
- [ ] Sin errores en consola
- [ ] Commit de la fase 3

---

## 🔵 FASE 4: INTEGRACIÓN CON POSTGRESQL (DÍA 4-5)
**Duración estimada:** 4-6 horas  
**Objetivo:** Conectar con tu base de datos

### 4.1 Estrategia de Base de Datos

**Tienes 2 opciones:**

#### Opción A: API en tu servidor (Recomendada)
```
Frontend (Vercel) → API en tu VPS → PostgreSQL
```

**Ventajas:**
- ✅ Control total sobre PostgreSQL
- ✅ Seguridad (DB no expuesta públicamente)
- ✅ Ya tienes el servidor

**Crear endpoints en tu servidor:**
```
POST /api/leads - Guardar lead
GET /api/leads - Obtener leads (admin)
POST /api/contact - Formulario de contacto
```

#### Opción B: Serverless Functions en Vercel
```
Frontend (Vercel) → Vercel Functions → PostgreSQL
```

**Ventajas:**
- ✅ Todo en un mismo lugar
- ✅ Escalable automáticamente

### 4.2 Crear API REST Simple (Opción A)

**En tu servidor (Node.js + Express):**

```javascript
// server.js en tu VPS
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'cognitex_db',
  password: 'tu_password',
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Endpoint para guardar leads
app.post('/api/leads', async (req, res) => {
  const { nombre, email, empresa, necesidad } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO leads (nombre, email, empresa, necesidad, fecha) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
      [nombre, email, empresa, necesidad]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al guardar lead' });
  }
});

app.listen(3000, () => {
  console.log('API corriendo en puerto 3000');
});
```

### 4.3 Crear Tabla en PostgreSQL

```sql
-- Conectar a PostgreSQL en tu servidor
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  empresa VARCHAR(255),
  necesidad TEXT,
  fecha TIMESTAMP DEFAULT NOW(),
  estado VARCHAR(50) DEFAULT 'nuevo'
);

-- Índice para búsquedas rápidas
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_fecha ON leads(fecha DESC);
```

### 4.4 Conectar Frontend con API

```typescript
// src/lib/api.ts
const API_URL = import.meta.env.VITE_API_URL;

export const saveLeadToDatabase = async (leadData: LeadData) => {
  const response = await fetch(`${API_URL}/api/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    throw new Error('Error al guardar en base de datos');
  }

  return response.json();
};
```

### 4.5 Flujo Completo: Formulario → n8n + PostgreSQL

```typescript
// Cuando el usuario envía el formulario:
const handleSubmit = async (data: LeadData) => {
  // 1. Guardar en PostgreSQL
  await saveLeadToDatabase(data);
  
  // 2. Enviar a n8n para automatizaciones
  await sendToN8N(data);
  
  // 3. Mostrar confirmación al usuario
  toast.success('¡Gracias! Nos contactaremos pronto.');
};
```

### 4.6 Checklist Fase 4

- [ ] API REST creada en servidor
- [ ] Tabla `leads` en PostgreSQL
- [ ] Endpoints funcionando
- [ ] CORS configurado
- [ ] Frontend conectado a API
- [ ] Formulario guarda en DB
- [ ] n8n sigue funcionando
- [ ] Doble captura (DB + n8n)
- [ ] Manejo de errores
- [ ] Variables de entorno configuradas

---

## 🟣 FASE 5: DEPLOY A VERCEL (DÍA 5-6)
**Duración estimada:** 2-3 horas  
**Objetivo:** Sitio nuevo en producción paralela

### 5.1 Preparar para Deploy

**Crear archivo `vercel.json`:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Verificar `.gitignore`:**
```
node_modules/
dist/
.env.local
.env*.local
```

### 5.2 Deploy desde GitHub

1. **Ir a Vercel Dashboard**
2. **New Project**
3. **Import Git Repository** → Seleccionar `cognitex-web`
4. **Configure Project:**
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Environment Variables:** Agregar las de `.env.local`
6. **Deploy**

### 5.3 URL Temporal

Vercel te dará algo como:
```
https://cognitex-web.vercel.app
```

**Ahora tienes DOS sitios:**
- ✅ Original: https://cognitex.co (EasyPanel)
- ✅ Nuevo: https://cognitex-web.vercel.app (Vercel)

### 5.4 Probar Sitio en Vercel

**Checklist de pruebas:**
- [ ] Sitio carga correctamente
- [ ] Diseño se ve igual que local
- [ ] Formulario funciona
- [ ] n8n recibe datos
- [ ] PostgreSQL guarda leads
- [ ] Botón calendar funciona
- [ ] Responsive en móvil
- [ ] Sin errores en consola
- [ ] SSL activo (HTTPS)
- [ ] Velocidad de carga buena

### 5.5 Checklist Fase 5

- [ ] `vercel.json` creado
- [ ] Proyecto conectado en Vercel
- [ ] Variables de entorno configuradas
- [ ] Build exitoso
- [ ] Sitio funcionando en Vercel URL
- [ ] Todas las funcionalidades probadas
- [ ] Sin errores en producción
- [ ] Performance verificado

---

## 🟠 FASE 6: MIGRACIÓN DE DOMINIO (DÍA 7)
**Duración estimada:** 1-2 horas  
**Objetivo:** cognitex.co apunta al nuevo sitio

### 6.1 Configurar Dominio en Vercel

1. **Vercel Dashboard** → Tu proyecto
2. **Settings** → **Domains**
3. **Add Domain:** `cognitex.co`
4. **Add Domain:** `www.cognitex.co`

Vercel te dará instrucciones de DNS.

### 6.2 Actualizar DNS en Squarespace/Hostinger

**Dependiendo de dónde tengas el DNS:**

**Opción A: Registros A (recomendado)**
```
Tipo: A
Nombre: @
Valor: 76.76.21.21 (IP de Vercel)

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

**Opción B: CNAME (alternativa)**
```
Tipo: CNAME
Nombre: @
Valor: cognitex-web.vercel.app
```

### 6.3 Esperar Propagación DNS

- **Tiempo:** 15 minutos a 48 horas
- **Promedio:** 2-4 horas
- **Verificar:** https://dnschecker.org

### 6.4 Verificar Migración

```bash
# Ver a dónde apunta el dominio
nslookup cognitex.co
```

### 6.5 Certificado SSL Automático

Vercel genera certificado SSL automáticamente.
En 5-10 minutos después del DNS, tendrás HTTPS.

### 6.6 Backup del Sitio Anterior

**Antes de migrar, hacer backup:**

1. Descargar `index.html` actual
2. Hacer screenshot del sitio
3. Guardar en carpeta "backup-old-site"
4. Commit en Git: `git tag old-site-backup`

### 6.7 Checklist Fase 6

- [ ] Dominio agregado en Vercel
- [ ] DNS actualizado
- [ ] Propagación completada
- [ ] cognitex.co apunta a Vercel
- [ ] www.cognitex.co funciona
- [ ] SSL/HTTPS activo
- [ ] Sitio anterior respaldado
- [ ] Todas las funciones funcionan
- [ ] n8n recibe datos
- [ ] PostgreSQL conectado
- [ ] ¡MIGRACIÓN COMPLETA! 🎉

---

## 🎯 FASE 7: OPTIMIZACIÓN Y MEJORAS (CONTINUO)

### 7.1 SEO Básico

```html
<!-- public/index.html -->
<head>
  <title>COGNITEX - Automatización Inteligente para tu Negocio</title>
  <meta name="description" content="Soluciones de automatización con IA para contadores y profesionales de SST en Colombia. Integración con OpenAI y n8n." />
  <meta name="keywords" content="automatización, IA, contadores, SST, Colombia, n8n" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="COGNITEX - Automatización con IA" />
  <meta property="og:description" content="Automatización inteligente para tu negocio" />
  <meta property="og:image" content="https://cognitex.co/og-image.png" />
</head>
```

### 7.2 Analytics

**Google Analytics 4:**
```html
<!-- Agregar en index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### 7.3 Performance

**Optimizaciones:**
- [ ] Imágenes en formato WebP
- [ ] Lazy loading de imágenes
- [ ] Code splitting
- [ ] Caché de assets
- [ ] Minificación automática (Vite)

### 7.4 Funcionalidades Futuras

**Corto plazo:**
- [ ] Webhook n8n 100% funcional
- [ ] Respuestas automáticas por email
- [ ] Tracking de conversiones

**Mediano plazo:**
- [ ] Dashboard de leads (admin)
- [ ] Blog con casos de éxito
- [ ] Calculadora de ROI

**Largo plazo:**
- [ ] Portal de clientes
- [ ] Sistema de tickets
- [ ] E-commerce de paquetes

---

## 🔧 COMANDOS ÚTILES

### Git Workflow Diario

```bash
# Ver estado
git status

# Agregar cambios
git add .

# Commit
git commit -m "Descripción del cambio"

# Subir a GitHub
git push

# Ver historial
git log --oneline

# Crear rama nueva (para experimentos)
git checkout -b feature/nueva-funcionalidad
```

### NPM Scripts

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Instalar dependencia
npm install nombre-paquete

# Desinstalar dependencia
npm uninstall nombre-paquete
```

### Vercel CLI (Opcional)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy desde terminal
vercel

# Deploy a producción
vercel --prod
```

---

## 📊 PROGRESO DEL PROYECTO

### Tracking de Fases

```
□ Fase 1: Preparación y Setup (2-3 horas)
□ Fase 2: Proyecto React (3-4 horas)
□ Fase 3: Migración HTML (6-8 horas)
□ Fase 4: PostgreSQL (4-6 horas)
□ Fase 5: Deploy Vercel (2-3 horas)
□ Fase 6: Migración Dominio (1-2 horas)
□ Fase 7: Optimización (continuo)

Total estimado: 18-26 horas de trabajo
```

### Hitos Importantes

- [ ] Git y Node.js instalados
- [ ] Proyecto React creado
- [ ] Primer componente funcionando
- [ ] Formulario integrado con n8n
- [ ] PostgreSQL conectado
- [ ] Deploy en Vercel exitoso
- [ ] Dominio migrado
- [ ] Sitio 100% funcional

---

## 🤝 WORKFLOW: CLAUDE PROJECTS + CLAUDE CODE

### Roles Definidos

**Claude Projects (Este chat):**
- 🧠 Estrategia y planificación
- 📋 Revisar progreso
- 🔍 Resolver problemas conceptuales
- 📝 Documentación
- ✅ Validación de decisiones

**Claude Code (Terminal):**
- 💻 Ejecutar comandos
- 🛠️ Crear archivos
- 🔧 Modificar código
- 🚀 Deploy y Git
- ⚡ Automatización técnica

**Andres (Tú):**
- ✔️ Validar cambios visualmente
- 🎨 Feedback de diseño
- 🧪 Probar funcionalidades
- 📸 Screenshots cuando sea necesario
- 👍 Aprobar o solicitar ajustes

### Flujo de Trabajo Típico

```
1. En Claude Projects: "Necesito crear el componente Header"
2. Claude Projects: Te da el plan y te pide usar Claude Code
3. En Claude Code: Ejecutas los comandos sugeridos
4. Claude Code: Crea los archivos automáticamente
5. Tú: Revisas en localhost, das feedback
6. Si está bien: Siguiente paso
   Si no: Claude Code ajusta
```

---

## ⚠️ PROBLEMAS COMUNES Y SOLUCIONES

### Problema 1: "npm install" falla

**Solución:**
```bash
# Limpiar cache
npm cache clean --force

# Borrar node_modules
rm -rf node_modules

# Reinstalar
npm install
```

### Problema 2: Git push rechazado

**Solución:**
```bash
# Traer cambios del servidor
git pull origin main --rebase

# Intentar push de nuevo
git push origin main
```

### Problema 3: Vercel build falla

**Solución:**
1. Revisar errores en Vercel dashboard
2. Verificar que `npm run build` funcione localmente
3. Verificar variables de entorno en Vercel

### Problema 4: Formulario no envía a n8n

**Solución:**
1. Verificar URL del webhook
2. Revisar CORS en n8n
3. Ver network tab en DevTools
4. Verificar console.log() de errores

### Problema 5: PostgreSQL no conecta

**Solución:**
1. Verificar credenciales
2. Verificar que PostgreSQL esté corriendo
3. Verificar firewall del servidor
4. Verificar que la API esté corriendo

---

## 📚 RECURSOS Y REFERENCIAS

### Documentación Oficial

- **React:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vite:** https://vitejs.dev/guide
- **Vercel:** https://vercel.com/docs

### Tutoriales Recomendados

- **React + TypeScript:** freeCodeCamp en YouTube
- **Tailwind CSS:** Official Tailwind Labs
- **Git básico:** GitHub Skills

### Herramientas Útiles

- **Tailwind Playground:** https://play.tailwindcss.com
- **TypeScript Playground:** https://www.typescriptlang.org/play
- **Can I Use:** https://caniuse.com (compatibilidad navegadores)
- **DNS Checker:** https://dnschecker.org

---

## 🎨 GUÍA DE ESTILO COGNITEX

### Colores

```css
/* Primarios */
--azul-cognitex: #1E40AF;
--negro-oscuro: #1F2937;
--blanco: #FFFFFF;

/* Secundarios */
--azul-claro: #3B82F6;
--gris: #6B7280;
--gris-claro: #F3F4F6;
```

### Tipografía

```css
/* Fuente principal */
font-family: 'Tomorrow', sans-serif;

/* Tamaños */
h1: 48px / 3rem
h2: 36px / 2.25rem
h3: 24px / 1.5rem
p: 16px / 1rem
```

### Espaciado

```css
/* Sistema de 8px */
xs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 48px
2xl: 64px
```

---

## 🔐 SEGURIDAD Y BUENAS PRÁCTICAS

### Variables de Entorno

```bash
# NUNCA subir a Git
.env.local

# Variables necesarias:
VITE_N8N_WEBHOOK_URL=
VITE_API_URL=
VITE_GOOGLE_CALENDAR_URL=
```

### API Keys

- ❌ NUNCA hardcodear API keys en código
- ✅ Usar variables de entorno
- ✅ Diferentes keys para desarrollo y producción
- ✅ Rotar keys regularmente

### Base de Datos

- ✅ Usar prepared statements (evitar SQL injection)
- ✅ Validar inputs
- ✅ Sanitizar datos
- ✅ Backups regulares

---

## 📞 INFORMACIÓN DE CONTACTO Y SOPORTE

### Equipo COGNITEX

**Andres Castro (CTO)**
- Email: andres@cognitex.co
- Ubicación: Florencia, Caquetá, Colombia

**Ana María Rojas (CEO)**
- Email: ana@cognitex.co (configurar después)

### Soporte Técnico

**Hostinger:**
- Panel: Tu cuenta de Hostinger
- Soporte: 24/7 chat

**Vercel:**
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs

**GitHub:**
- Repositorio: https://github.com/TU-USUARIO/cognitex-web
- Issues: Para reportar problemas

---

## 🎯 OBJETIVOS DE APRENDIZAJE

### Andres al finalizar este proyecto sabrá:

**Git & GitHub:**
- ✅ Crear repositorios
- ✅ Hacer commits
- ✅ Push y pull
- ✅ Trabajar con ramas
- ✅ Resolver conflictos

**React & TypeScript:**
- ✅ Crear componentes
- ✅ Usar hooks (useState, useEffect)
- ✅ Props y tipos
- ✅ Eventos y formularios
- ✅ Routing

**Deploy & DevOps:**
- ✅ Deploy automático
- ✅ Variables de entorno
- ✅ DNS y dominios
- ✅ CI/CD básico

**Base de Datos:**
- ✅ PostgreSQL queries
- ✅ APIs REST
- ✅ Integración frontend-backend

---

## 🚀 MOTIVACIÓN Y VISIÓN

### Lo que estamos construyendo

No es solo un sitio web. Es:
- 🎯 La cara pública de COGNITEX
- 🎯 Tu herramienta de ventas automatizada
- 🎯 Un sistema escalable para crecer
- 🎯 Una base sólida para el futuro
- 🎯 Tu aprendizaje en desarrollo moderno

### Ventajas sobre el HTML actual

```
HTML estático           →  React/TypeScript
Todo en un archivo      →  Componentes modulares
Manual deploy           →  Git automático
Sin base de datos       →  PostgreSQL integrado
Sin escalabilidad       →  Infinitamente escalable
Difícil mantener        →  Fácil de actualizar
```

### Proyección a 6 meses

Con esta base podrás:
- ✅ Agregar blog fácilmente
- ✅ Crear dashboard de leads
- ✅ Implementar portal de clientes
- ✅ Escalar a SaaS si quieres
- ✅ Mantener todo tú mismo
- ✅ Contratar devs si creces (código profesional)

---

## ✅ CRITERIOS DE ÉXITO

### El proyecto es exitoso cuando:

**Técnicos:**
- [ ] Sitio corre en cognitex.co
- [ ] Formulario envía a n8n
- [ ] Leads se guardan en PostgreSQL
- [ ] Deploy automático funciona
- [ ] Sin errores en producción
- [ ] Responsive perfecto
- [ ] Performance > 90 (Lighthouse)

**Negocio:**
- [ ] Genera confianza (diseño profesional)
- [ ] Captura leads efectivamente
- [ ] Fácil de actualizar contenido
- [ ] Integrado con workflow de ventas
- [ ] Analytics funcionando

**Personal (Andres):**
- [ ] Entiendes el código
- [ ] Puedes hacer cambios solo
- [ ] Confianza en Git
- [ ] Sabes debuggear problemas
- [ ] Base para siguientes proyectos

---

## 🎊 MENSAJE FINAL

**Andres, este proyecto es TU oportunidad de:**

1. 🚀 Llevar COGNITEX al siguiente nivel
2. 💻 Aprender desarrollo web moderno
3. 🎯 Tener control total de tu sitio
4. 📈 Escalar sin limitaciones técnicas
5. 🤝 Trabajar con metodología probada (EimyDesign 90% exitoso)

**Recuerda:**
- ✅ No estás solo: Claude Projects + Claude Code
- ✅ No hay apuros: Fase por fase
- ✅ No hay preguntas tontas: Pregunta todo
- ✅ Tu sitio actual sigue funcionando durante migración
- ✅ Cada fase es un logro

**La metodología funciona. Lo probamos con EimyDesign.**

**Ahora es momento de aplicarla a TU empresa. 🚀**

---

## 📋 PRÓXIMO PASO INMEDIATO

### Para empezar AHORA MISMO:

1. **Crea nuevo proyecto en Claude:**
   - Nombre: "COGNITEX - Sitio Web"
   
2. **Sube este documento al proyecto**

3. **Inicia con Fase 1:**
   - Mensaje a Claude Projects: 
   ```
   "Hola Claude, voy a empezar con COGNITEX. 
   Ya leí el plan completo.
   Vamos con Fase 1: Instalación de herramientas.
   ¿Por dónde empiezo?"
   ```

4. **Usa Claude Code para comandos técnicos**

5. **Valida cada paso antes de continuar**

---

**¡VAMOS A CONSTRUIR ALGO INCREÍBLE! 🚀**

---

**Documento creado:** 19 de Noviembre, 2025  
**Versión:** 1.0  
**Estado:** Listo para iniciar  
**Próxima acción:** Crear nuevo proyecto Claude y empezar Fase 1

---

## 🔖 ÍNDICE RÁPIDO

- [Estado Actual](#-estado-actual)
- [Stack Tecnológico](#-stack-tecnológico)
- [Fase 1: Preparación](#-fase-1-preparación-y-setup-día-1)
- [Fase 2: Proyecto React](#-fase-2-crear-proyecto-react-día-1-2)
- [Fase 3: Migración HTML](#-fase-3-migrar-contenido-html-día-2-3)
- [Fase 4: PostgreSQL](#-fase-4-integración-con-postgresql-día-4-5)
- [Fase 5: Deploy Vercel](#-fase-5-deploy-a-vercel-día-5-6)
- [Fase 6: Migración Dominio](#-fase-6-migración-de-dominio-día-7)
- [Fase 7: Optimización](#-fase-7-optimización-y-mejoras-continuo)
- [Comandos Útiles](#-comandos-útiles)
- [Workflow](#-workflow-claude-projects--claude-code)
- [Problemas Comunes](#️-problemas-comunes-y-soluciones)
- [Criterios de Éxito](#-criterios-de-éxito)

---

**¡ÉXITO EN TU PROYECTO, ANDRES! 🎯**
