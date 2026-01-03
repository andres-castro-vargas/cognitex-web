# COGNITEX WEB - Documento Maestro

**Versión:** 2.0.0
**Última actualización:** 2026-01-02
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
Icons:        SVG inline
Deploy:       EasyPanel (Nixpacks)
```

---

## Estructura del Proyecto

```
Cognitex-Sitio-Web/
├── public/
│   └── (assets estáticos)
├── src/
│   ├── assets/
│   │   └── logo_cognitex.png
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navegación principal
│   │   │   └── Footer.tsx          # Pie de página con marquee
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Sección principal con robot
│   │   │   └── ServicesSection.tsx # Cards de servicios en HomePage
│   │   └── ui/
│   │       ├── AccessModal.tsx     # Modal de acceso a plataformas
│   │       ├── NetworkBackground.tsx # Nodos animados (canvas)
│   │       ├── PricingCard.tsx     # Card de planes de precios
│   │       └── Robot.tsx           # Robot animado interactivo
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
├── CHANGELOG.md                    # Historial de cambios
├── COGNITEX-WEB-DOCUMENTO-MAESTRO.md # Este documento
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | HomePage | Landing principal con hero y servicios |
| `/servicios` | ServiciosPage | Planes de precios y opciones |
| `/nosotros` | NosotrosPage | Información de la empresa |
| `/contacto` | ContactoPage | Formulario de contacto |
| `/servicios/causaciones` | CausacionesPage | Servicio específico |
| `/servicios/conciliacion-dian` | ConciliacionDianPage | Servicio específico |
| `*` | NotFoundPage | Página 404 |

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

### ¿Por qué no se eliminó Tienda?
- La ruta `/tienda` fue eliminada
- El componente `TiendaPage` todavía existe pero no está en uso
- Pendiente: Eliminar archivos de tienda si no se usarán

### ¿Por qué nodos sin parallax?
- El parallax causaba movimiento excesivo
- Ahora son fixed, solo animación interna
- Opacidad reducida para no competir con contenido

---

## Pendientes y Mejoras Futuras

### Prioridad Alta
- [ ] Implementar formulario de contacto funcional con n8n
- [ ] Conectar planes con registro real en appcontadores
- [ ] Agregar Google Analytics / Meta Pixel

### Prioridad Media
- [ ] Crear subpáginas de servicios individuales
- [ ] Agregar sección de testimonios/casos de éxito
- [ ] Optimizar imágenes y lazy loading

### Prioridad Baja
- [ ] Blog o sección de recursos
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
1. Proyecto: "cognitex-web"
2. Build: Nixpacks v1.34.1
3. Puerto: 8080
4. SSL: Let's Encrypt automático

### Proceso de Deploy
1. Push a repositorio (si está conectado Git)
2. O subir archivos manualmente a EasyPanel
3. Rebuild automático

---

## Contacto Desarrollo

**Andres Castro (CTO)**
- Email: andres@cognitex.co
- WhatsApp: +57 312 406 9303
- Ubicación: Florencia, Caquetá, Colombia

---

## Historial de Versiones

| Versión | Fecha | Cambios Principales |
|---------|-------|---------------------|
| 2.0.0 | 2026-01-02 | Tema claro, reestructuración navegación, página servicios |
| 1.0.0 | Nov 2025 | Migración de HTML estático a React |

Ver `CHANGELOG.md` para detalles completos.
