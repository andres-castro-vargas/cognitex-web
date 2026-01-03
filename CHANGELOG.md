# CHANGELOG - Cognitex Sitio Web

Registro de cambios del sitio web cognitex.co

---

## [2.3.0] - 2026-01-03

### Deploy en Producción + SEO + Nuevos Componentes

#### Deploy con Docker
- **Dockerfile**: Multi-stage build (Node 20 + Nginx Alpine)
- **nginx.conf**: Configuración SPA con gzip, cache, security headers
- **docker-compose.yml**: Para testing local y referencia EasyPanel
- Deploy exitoso en https://cognitex.co via EasyPanel

#### SEO y Metadatos
- **Título**: Actualizado de "temp-vite" a "Cognitex"
- **Favicon**: Cambiado de vite.svg a favicon-cognitex.png (5.7KB optimizado)
- **Lang**: Cambiado de "en" a "es"
- **Meta description**: Automatización inteligente para tu negocio
- **Keywords**: automatización, contabilidad, SST, n8n, Colombia
- **Open Graph**: Configurado para Facebook/LinkedIn
- **Twitter Card**: summary_large_image
- **Theme color**: #175197 (Azul COGNITEX)
- **Apple touch icon**: favicon-cognitex.png

#### Assets Públicos
- `public/logo_cognitex.png`: URL estable para emails (https://cognitex.co/logo_cognitex.png)
- `public/favicon-cognitex.png`: Favicon optimizado (5.7KB)

#### Nuevos Componentes
- **WhatsAppFloat.tsx**: Botón flotante WhatsApp con SVG oficial, animación pulse
- **AutomationFormModal.tsx**: Formulario multi-pasos (4 pasos):
  - Paso 1: Industria (Contadores, SST, Comercio, etc.)
  - Paso 2: Tamaño de empresa
  - Paso 3: Procesos a automatizar
  - Paso 4: Datos de contacto
  - Integración: Webhook n8n + Resend para emails

#### Paleta Modal (Gris Carbón)
- Modal fondo: `#1f1f1f`
- Cards/inputs: `#2a2a2a`
- Bordes: `#3a3a3a`
- Azul COGNITEX: `#175197` (botones CTA)

#### Integraciones
- **Webhook n8n**: https://evolutionapi-n8n-workflows.gdvjzg.easypanel.host/webhook/automation-assessment
- **Emails**: Resend API (info@cognitex.co)
- **WhatsApp**: +57 312 406 9303

---

## [2.2.1] - 2026-01-03

### Correcciones y Mejoras Menores

#### Tildes Corregidas (8 páginas)
- Corregidas todas las tildes faltantes en textos:
  - `Proximamente` → `Próximamente`
  - `Documentacion` → `Documentación`
  - `automatica` → `automática`
  - `Gestion` → `Gestión`
  - `solucion` → `solución`
  - `politicas` → `políticas`
  - `Actualizacion` → `Actualización`
  - `Deteccion` → `Detección`
  - `correccion` → `corrección`
  - `digitacion` → `digitación`
  - `transcripcion` → `transcripción`
  - `precision` → `precisión`
  - `revision` → `revisión`
  - `Clasificacion` → `Clasificación`
  - `Comparacion` → `Comparación`
  - `conciliacion` → `conciliación`
  - `Generacion` → `Generación`
  - `Notificame` → `Notifícame`
  - `este` → `esté`

#### Botones CTA con Hover
- Agregado efecto hover a TODOS los botones CTA:
  - `transition: 'all 0.3s ease'`
  - `transform: scale(1.05)` en hover
  - `boxShadow` aumentado en hover
- Páginas actualizadas: CausacionesPage, ConciliacionDianPage, ConciliacionesBancariasPage, NominaPage, NotasFinancierasPage, AgendasArlPage, DocumentacionSstPage

#### Botón "Notifícame cuando esté listo"
- Icono Bell aumentado a 24px (antes 18px)
- Cambiado a `display: inline-flex` con `alignItems: center`
- Icono y texto perfectamente centrados

#### Cards de Beneficios (grid 2x2)
- Cambiado de `auto-fit` a `repeat(2, 1fr)`
- `maxWidth: 600px` + `margin: 0 auto`
- 4 cards ahora se muestran en layout 2x2 centrado

#### ConciliacionesBancariasPage
- Título actualizado: `"Reconcilia bancos automáticamente"` → `"Conciliación Bancaria Automática"`

#### NosotrosPage - Contenido General
- Hero: "Automatizamos para que tú crezcas" (enfoque general, no solo contadores)
- Subtítulo actualizado para empresas en general
- Cards Misión/Enfoque/Compromiso con textos generales
- Nueva sección "Quiénes somos" con 2 cards de equipo (Andrés Castro, Ana María Rojas)
- Iconos UserCircle como placeholder para fotos
- CTA: "¿Listo para transformar tu negocio?"

---

## [2.2.0] - 2026-01-02

### FASE 2: Migracion Completa a Tema Claro (9 paginas)

#### Estructura SaaS Simplificada
Todas las paginas de servicios ahora siguen una estructura consistente de 5 secciones:
1. **Hero**: Titulo principal + subtitulo + CTA
2. **Problema**: Cards rojos con pain points del usuario
3. **Solucion**: 3 pasos de como se resuelve
4. **Beneficios**: 4 cards con metricas de valor
5. **CTA Final**: Seccion azul con boton de contacto

#### Paginas de Contabilidad Migradas

| Pagina | Titulo | Estructura |
|--------|--------|------------|
| CausacionesPage | "Automatiza tus causaciones en minutos" | 5 secciones completas |
| ConciliacionDianPage | "Concilia facturas DIAN sin esfuerzo" | 5 secciones completas |
| ConciliacionesBancariasPage | "Reconcilia bancos automaticamente" | 5 secciones completas |
| NominaPage | "Valida nomina y seguridad social en minutos" | Proximamente Q1 2026 |
| NotasFinancierasPage | "Actualiza tus notas financieras en segundos" | Proximamente Q2 2026 |

#### Paginas SST Migradas

| Pagina | Titulo | Estructura |
|--------|--------|------------|
| AgendasArlPage | "Gestiona agendas ARL sin complicaciones" | Proximamente Q3 2026 |
| DocumentacionSstPage | "Documentacion SST al dia, siempre" | Proximamente Q3 2026 |

#### Otras Paginas Migradas

| Pagina | Estructura | Contenido |
|--------|------------|-----------|
| NosotrosPage | Hero + Mision (3 cards) + CTA | Mision, Enfoque, Compromiso |
| NotFoundPage | 404 + icono AlertTriangle + boton Home | "Volver al inicio" |

#### Cambios Globales

- **Fondo**: `#0A0A0A` (negro) → `#FFFFFF` (blanco) en TODAS las paginas
- **NetworkBackground**: Agregado a todas las paginas para consistencia visual
- **Lucide React**: Iconos profesionales en todas las paginas (Clock, Bell, Target, Users, Zap, Home, AlertTriangle, etc.)
- **CTA Unificado**: "Hablar con nuestro equipo" en lugar de "Hablar con un experto"
- **WhatsApp**: 573124069303 en todas las paginas
- **Badge Proximamente**: Degradado amarillo (#F59E0B → #D97706) con texto oscuro

#### Estructura Paginas "Proximamente"
Las paginas de productos futuros tienen estructura simplificada:
1. Hero con badge amarillo "Proximamente Qx 2026"
2. Card descriptivo con features
3. CTA "Notificame cuando este listo" (con icono Bell)

---

## [2.1.0] - 2026-01-02

### MEJORAS Y CORRECCIONES - Sesion 2

#### Lucide React Icons
- Instalado `lucide-react` para iconos profesionales
- Reemplazados TODOS los emojis por iconos SVG
- Archivos actualizados:
  - `PricingCard.tsx`: Check y X icons
  - `ServiciosPage.tsx`: FileText, Shield, Workflow, ShieldCheck, Check
  - `AccessModal.tsx`: FileText, Shield, ChevronRight, Lock, X
  - `ContactoPage.tsx`: Mail, Phone, MapPin, Instagram, Send

#### PricingCard - Alineacion Uniforme
- Header section con `minHeight: 120px`
- Features container con `minHeight: 180px`
- Botones alineados con `marginTop: auto`
- Lineas divisorias a la misma altura

#### Cambios en Planes
- **PRO**: Cambiado "Multi-empresa" por "Soporte por email"
- **Enterprise**: Quitado "Multi-empresa" y "Integraciones personalizadas"
- **Enterprise**: Agregado "Reportes avanzados" e "Integracion Siigo/Alegra"
- **Textos CTA**: Trial→"Prueba Gratis", Basico→"Elegir Basico"

#### AccessModal - Hover Sutil
- Transicion: `all 0.3s ease`
- Transform: `scale(1.02)` en hover
- Sombra: `0 8px 25px rgba(30, 64, 175, 0.12)`

#### ContactoPage - Tema Claro
- Background: `#FFFFFF`
- Iconos Lucide con contenedor degradado azul
- NetworkBackground agregado
- Fuentes reducidas (titulo: 1.75rem-2.25rem)

#### Icono Automatizacion
- Cambiado de `Settings` a `Workflow` (representa nodos conectados)

#### WhatsApp Corregido
- Todas las subpaginas actualizadas: `wa.me/573124069303`
- Archivos: CausacionesPage, ConciliacionDianPage, ConciliacionesBancariasPage, NominaPage, NotasFinancierasPage, AgendasArlPage, DocumentacionSstPage

#### Limpieza
- Eliminado: `TiendaPage.tsx` (no usado)

---

## [2.0.0] - 2026-01-02

### REDISEÑO COMPLETO: Tema Oscuro → Tema Claro

#### Cambio de Paleta de Colores
- **Background**: `#0A0A0A` → `#FFFFFF` (blanco)
- **Superficie**: `#F8FAFC` (gris muy claro)
- **Texto principal**: `#1E293B` (slate oscuro)
- **Texto secundario**: `#64748B` (gris medio)
- **Acento primario**: `#1E40AF` (azul oscuro)
- **Acento secundario**: `#3B82F6` (azul brillante)
- **Bordes**: `#E2E8F0` (gris claro)

#### Archivos Modificados - Tema

| Archivo | Cambios |
|---------|---------|
| `src/index.css` | Variables CSS nuevas, body background blanco |
| `src/pages/HomePage.tsx` | Background blanco, transición visual Hero→Servicios |
| `src/components/sections/HeroSection.tsx` | Gradientes y textos para tema claro |
| `src/components/ui/NetworkBackground.tsx` | Opacidad reducida (0.30), parallax eliminado |
| `src/components/sections/ServicesSection.tsx` | Cards blancos, bordes transparentes |
| `src/components/layout/Header.tsx` | Glassmorphism claro, texto oscuro |
| `src/components/layout/Footer.tsx` | Background claro, gradientes sutiles |

#### Ajustes Visuales
- **Nodos azules**: Ahora son fijos (sin parallax), opacidad 0.30
- **Robot**: Mantiene colores originales, sombra sutil al hover
- **Cards servicios**: Fondo blanco, borde transparente, sombra reducida 50%
- **SST rectangles**: Fondo `#EFF6FF`, borde `#BFDBFE`
- **Logo header**: `filter: drop-shadow()` en lugar de `boxShadow` para transparencia PNG
- **Línea divisora Hero→Servicios**: 50% ancho, max 500px, gradiente azul

---

### REESTRUCTURACIÓN DE NAVEGACIÓN

#### Nuevos Componentes Creados

| Componente | Descripción |
|------------|-------------|
| `src/components/ui/AccessModal.tsx` | Modal de acceso con opciones Contadores/SST |
| `src/components/ui/PricingCard.tsx` | Card reutilizable para planes de precios |

#### Cambios en Navegación

**Header.tsx:**
- Eliminado: Link "Tienda" del menú (desktop y móvil)
- Cambiado: "Iniciar Sesión" → "Acceder" (abre AccessModal)
- Agregado: Estado `isAccessModalOpen` y componente AccessModal

**Footer.tsx:**
- Eliminado: Link "Tienda" de la sección Enlaces

**App.tsx:**
- Eliminada: Ruta `/tienda`
- Eliminada: Importación de `TiendaPage`

---

### NUEVA PÁGINA DE SERVICIOS

**ServiciosPage.tsx** - Reescrita completamente con 3 secciones:

#### 1. Sección Contadores (Activa)
Planes de precios con 4 opciones:

| Plan | Precio | Límite | Características |
|------|--------|--------|-----------------|
| Trial | GRATIS | 30 facturas (7 días) | Descargador + Visor, prueba completa |
| Básico | $39,900/mes | 500 facturas | Descargador + Visor, Soporte email |
| Pro | $79,900/mes | 1,000 facturas | + Reportes avanzados, Soporte prioritario |
| Enterprise | Cotización | Ilimitado | + API, Multi-empresa, Soporte 24/7 |

- Trial: Card verde (`#059669` → `#10B981`), badge "7 Días Gratis"
- Pro: Card azul, badge "Más Popular"
- CTAs redirigen a appcontadores.cognitex.co/registro

#### 2. Sección SST (Próximamente)
- Icono de escudo con gradiente gris
- Mensaje explicativo
- CTA "Notificarme" → WhatsApp

#### 3. Sección Automatización Personalizada
- Card azul degradado con lista de servicios
- CTA "Agendar Consulta Gratis" → WhatsApp

---

### AccessModal

Modal que aparece al hacer clic en "Acceder":

| Opción | Estado | Acción |
|--------|--------|--------|
| Contadores | Activo | Abre appcontadores.cognitex.co |
| SST | Deshabilitado | Badge "Próximamente", icono candado |

Características:
- Cierre con Escape key
- Cierre al hacer clic fuera
- Bloqueo de scroll del body
- Animación de entrada

---

### Información de Contacto

**WhatsApp actualizado:** +57 312 406 9303

URLs configuradas:
- Contadores: `https://appcontadores.cognitex.co`
- Registro: `https://appcontadores.cognitex.co/registro`
- WhatsApp: `https://wa.me/573124069303`

---

## [1.0.0] - Noviembre 2025

### Migración Inicial
- Migrado de HTML estático a React + Vite + TypeScript + Tailwind CSS
- Estructura de componentes modular
- Sistema de routing con React Router
- Deploy en producción

### Componentes Base Creados
- Header con glassmorphism
- Footer con marquee
- HeroSection con robot interactivo
- ServicesSection con cards
- NetworkBackground (nodos animados)
- Robot con ojos que siguen el cursor

---

## Notas de Desarrollo

### Stack Tecnológico
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS-in-JS (inline styles)
- **Routing**: React Router DOM
- **Deploy**: EasyPanel (Hostinger VPS)
- **SSL**: Let's Encrypt

### Convenciones de Código
- Componentes con `export default function`
- Estilos inline con `React.CSSProperties`
- Hover effects con `onMouseEnter/onMouseLeave`
- Fuente principal: Tomorrow (Google Fonts)

### Paleta de Colores Actual
```css
--color-primary: #1E40AF;
--color-primary-light: #3B82F6;
--color-bg: #FFFFFF;
--color-surface: #F8FAFC;
--color-text-primary: #1E293B;
--color-text-secondary: #64748B;
--color-border: #E2E8F0;
```

---

**Mantenido por:** Andres Castro (CTO)
**Última actualización:** 2026-01-02
