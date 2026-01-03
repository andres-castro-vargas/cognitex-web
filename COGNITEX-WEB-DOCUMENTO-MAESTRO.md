# COGNITEX WEB - Documento Maestro

**Version:** 2.3.0
**Ultima actualizacion:** 2026-01-03
**Mantenido por:** Andres Castro (CTO)

---

## Información General

| Campo | Valor |
|-------|-------|
| **Dominio** | cognitex.co |
| **URL Producción** | https://cognitex.co |
| **Hosting** | Hostinger VPS + EasyPanel |
| **SSL** | Let's Encrypt (automático) |
| **Repositorio** | Cognitex-Sitio-Web |

---

## Stack Tecnológico

```
Frontend:     React 18 + TypeScript
Build Tool:   Vite 6.x
Styling:      Tailwind CSS + CSS-in-JS (inline styles)
Routing:      React Router DOM v7
Fonts:        Google Fonts (Tomorrow, Outfit)
Icons:        Lucide React + SVG inline
Deploy:       EasyPanel (Nixpacks)
```

---

## Estructura del Proyecto

```
Cognitex-Sitio-Web/
├── public/
│   ├── favicon-cognitex.png    # Favicon optimizado (5.7KB)
│   ├── logo_cognitex.png       # Logo para emails/OG (130KB)
│   └── vite.svg                # (no usado)
├── src/
│   ├── assets/
│   │   └── logo_cognitex.png   # Logo para componentes React
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navegación principal
│   │   │   └── Footer.tsx          # Pie de página con marquee
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Sección principal con robot
│   │   │   └── ServicesSection.tsx # Cards de servicios en HomePage
│   │   └── ui/
│   │       ├── AccessModal.tsx     # Modal de acceso a plataformas
│   │       ├── AutomationFormModal.tsx # Formulario multi-pasos (4 pasos)
│   │       ├── NetworkBackground.tsx # Nodos animados (canvas)
│   │       ├── PricingCard.tsx     # Card de planes de precios
│   │       ├── Robot.tsx           # Robot animado interactivo
│   │       └── WhatsAppFloat.tsx   # Botón flotante WhatsApp
│   ├── pages/
│   │   ├── HomePage.tsx            # Página principal
│   │   ├── ServiciosPage.tsx       # Página de servicios/precios
│   │   ├── NosotrosPage.tsx        # Sobre nosotros
│   │   ├── ContactoPage.tsx        # Contacto
│   │   ├── NotFoundPage.tsx        # 404
│   │   └── servicios/              # Subpáginas de servicios
│   │       ├── CausacionesPage.tsx
│   │       ├── ConciliacionDianPage.tsx
│   │       └── ... (otros servicios)
│   ├── App.tsx                     # Router principal
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Estilos globales + variables
├── Dockerfile                      # Multi-stage build (Node + Nginx)
├── nginx.conf                      # Configuración SPA
├── docker-compose.yml              # Testing local / EasyPanel
├── CHANGELOG.md                    # Historial de cambios
├── COGNITEX-WEB-DOCUMENTO-MAESTRO.md # Este documento
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Rutas de la Aplicacion

| Ruta | Componente | Fondo | Estado |
|------|------------|-------|--------|
| `/` | HomePage | BLANCO | Completa |
| `/servicios` | ServiciosPage | BLANCO | Completa |
| `/nosotros` | NosotrosPage | BLANCO | Completa (Hero + Mision + CTA) |
| `/contacto` | ContactoPage | BLANCO | Completa |
| `/servicios/causaciones` | CausacionesPage | BLANCO | Completa (5 secciones) |
| `/servicios/conciliacion-dian` | ConciliacionDianPage | BLANCO | Completa (5 secciones) |
| `/servicios/conciliaciones-bancarias` | ConciliacionesBancariasPage | BLANCO | Completa (5 secciones) |
| `/servicios/nomina` | NominaPage | BLANCO | Proximamente Q1 2026 |
| `/servicios/notas-financieras` | NotasFinancierasPage | BLANCO | Proximamente Q2 2026 |
| `/servicios/agendas-arl` | AgendasArlPage | BLANCO | Proximamente Q3 2026 |
| `/servicios/documentacion-sst` | DocumentacionSstPage | BLANCO | Proximamente Q3 2026 |
| `*` | NotFoundPage | BLANCO | Completa (404 + Home) |

---

## Paleta de Colores (Tema Claro)

### Variables CSS (`index.css`)

```css
:root {
  --color-primary: #1E40AF;       /* Azul oscuro */
  --color-primary-light: #3B82F6; /* Azul brillante */
  --color-bg: #FFFFFF;            /* Fondo blanco */
  --color-surface: #F8FAFC;       /* Superficie gris claro */
  --color-text-primary: #1E293B;  /* Texto principal */
  --color-text-secondary: #64748B; /* Texto secundario */
  --color-border: #E2E8F0;        /* Bordes */
}
```

### Uso en Componentes

| Elemento | Color | Código |
|----------|-------|--------|
| Background página | Blanco | `#FFFFFF` |
| Cards | Blanco con borde | `#FFFFFF` + `#E2E8F0` |
| Header | Glassmorphism | `rgba(255,255,255,0.85)` + blur |
| Footer | Superficie | `#F8FAFC` |
| Títulos | Slate oscuro | `#1E293B` |
| Subtítulos | Gris medio | `#64748B` |
| Botones CTA | Gradiente azul | `#1E40AF` → `#3B82F6` |
| Trial badge | Verde | `#059669` → `#10B981` |
| SST cards | Azul muy claro | `#EFF6FF` + `#BFDBFE` |

---

## Componentes Principales

### Header.tsx
- Navegación fixed con glassmorphism
- Logo central (desktop) / izquierda (móvil)
- Menú: Inicio, Servicios, Nosotros, Contacto
- Botón "Acceder" → Abre AccessModal
- Menú móvil: Drawer lateral con fondo oscuro

### Footer.tsx
- Marquee opcional con frases
- 3 columnas: Logo, Enlaces, Redes sociales
- Gradientes azules sutiles en esquinas

### AccessModal.tsx
- Modal de selección de plataforma
- Contadores: Activo → appcontadores.cognitex.co
- SST: Deshabilitado con badge "Próximamente"
- Cierre con Escape o click fuera

### PricingCard.tsx
- Card reutilizable para planes
- Props: name, price, features, isPopular, isTrial
- Trial: Fondo verde, badge "7 Días Gratis"
- Popular: Fondo azul, badge "Más Popular"

### NetworkBackground.tsx
- Canvas con nodos azules animados
- Posición fixed, cubre toda la pantalla
- Opacidad 0.30, pointer-events none
- Conexiones entre nodos cercanos

### Robot.tsx
- Robot SVG con ojos que siguen el cursor
- Hover: Zoom 1.15x, diálogo con frase random
- Animaciones: Float, blink, smile

---

## Planes de Contadores

| Plan | Precio | Límite | Color |
|------|--------|--------|-------|
| Trial | GRATIS | 30 facturas (7 días) | Verde |
| Básico | $39,900/mes | 500 facturas | Blanco |
| Pro | $79,900/mes | 1,000 facturas | Azul |
| Enterprise | Cotización | Ilimitado | Blanco |

**Todos los planes incluyen:** Descargador DIAN + Visor de Facturas

---

## URLs Externas

| Servicio | URL |
|----------|-----|
| App Contadores | https://appcontadores.cognitex.co |
| Registro | https://appcontadores.cognitex.co/registro |
| WhatsApp | https://wa.me/573124069303 |
| Instagram | https://www.instagram.com/cognitex.co/ |
| TikTok | https://www.tiktok.com/@cognitex |

---

## Tipografía

```css
font-family: 'Tomorrow', sans-serif;  /* Títulos, logos, botones */
font-family: 'Outfit', sans-serif;    /* Texto general */
```

Importadas en `index.html` desde Google Fonts.

---

## Decisiones de Diseño

### ¿Por qué tema claro?
- Coherencia visual con appcontadores.cognitex.co
- Aspecto más profesional y corporativo
- Mejor legibilidad en dispositivos móviles
- Inspiración: Linear.app, Stripe.com, Notion.so

### ¿Por qué CSS-in-JS (inline styles)?
- Control total sin conflictos de clases
- Fácil de leer y mantener en componentes pequeños
- TypeScript type-checking con `React.CSSProperties`
- Hover effects con onMouseEnter/onMouseLeave

### Tienda eliminada
- La ruta `/tienda` fue eliminada
- El archivo `TiendaPage.tsx` fue eliminado (v2.1.0)

### ¿Por qué nodos sin parallax?
- El parallax causaba movimiento excesivo
- Ahora son fixed, solo animación interna
- Opacidad reducida para no competir con contenido

---

## Pendientes y Mejoras Futuras

### FASE 2 - COMPLETADA (v2.2.0)
- [x] Migrar 9 paginas de fondo NEGRO a tema BLANCO:
  - [x] NosotrosPage (Hero + Mision + CTA)
  - [x] NotFoundPage (404 con Lucide icons)
  - [x] CausacionesPage (5 secciones SaaS)
  - [x] ConciliacionDianPage (5 secciones SaaS)
  - [x] ConciliacionesBancariasPage (5 secciones SaaS)
  - [x] NominaPage (Proximamente Q1 2026)
  - [x] NotasFinancierasPage (Proximamente Q2 2026)
  - [x] AgendasArlPage (Proximamente Q3 2026)
  - [x] DocumentacionSstPage (Proximamente Q3 2026)
- [x] Completar contenido de NosotrosPage

### Prioridad Alta - Funcionalidad
- [ ] Implementar formulario de contacto funcional con n8n
- [ ] Conectar planes con registro real en appcontadores
- [ ] Agregar Google Analytics / Meta Pixel

### Prioridad Media
- [ ] Agregar seccion de testimonios/casos de exito
- [ ] Optimizar imagenes y lazy loading
- [ ] Revisar links de Calendar (actualmente google.com placeholder)

### Prioridad Baja
- [ ] Blog o seccion de recursos
- [ ] Calculadora de ROI
- [ ] Dark mode toggle

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

---

## Deploy

### EasyPanel (Hostinger VPS)

| Campo | Valor |
|-------|-------|
| Proyecto | cognitex-web |
| Source | Git (URL pública) |
| Repositorio | https://github.com/andres-castro-vargas/cognitex-web.git |
| Branch | main |
| Build | Dockerfile |
| Puerto | 80 (Nginx) |
| SSL | Let's Encrypt automático |

### Archivos Docker

**Dockerfile:**
```dockerfile
# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
- Gzip compression
- Cache static assets (1 year)
- SPA routing (try_files → index.html)
- Security headers (X-Frame-Options, X-Content-Type-Options)

### Proceso de Deploy
1. Push a GitHub (rama main)
2. En EasyPanel: Click "Redeploy"
3. Esperar build (~2-3 min)
4. Verificar en https://cognitex.co

---

## Contacto Desarrollo

**Andres Castro (CTO)**
- Email: andres@cognitex.co
- WhatsApp: +57 312 406 9303
- Ubicación: Florencia, Caquetá, Colombia

---

## Historial de Versiones

| Version | Fecha | Cambios Principales |
|---------|-------|---------------------|
| 2.3.0 | 2026-01-03 | Deploy Docker/Nginx, SEO/OG, favicon optimizado, WhatsAppFloat, AutomationFormModal |
| 2.2.1 | 2026-01-03 | Tildes corregidas, hover CTAs, grid 2x2, NosotrosPage actualizado |
| 2.2.0 | 2026-01-02 | FASE 2: Migracion completa tema claro (9 paginas), estructura SaaS simplificada |
| 2.1.0 | 2026-01-02 | Lucide icons, alineacion cards, WhatsApp corregido, TiendaPage eliminado |
| 2.0.0 | 2026-01-02 | Tema claro, reestructuracion navegacion, pagina servicios |
| 1.0.0 | Nov 2025 | Migracion de HTML estatico a React |

Ver `CHANGELOG.md` para detalles completos.
