# COGNITEX - Fase 3: Actualización y Documentación

## 📋 Resumen de la Fase 3

La Fase 3 se enfocó en la migración del sitio web de COGNITEX a React + TypeScript + Vite + Tailwind CSS v4, implementando los componentes principales del diseño original con mejoras interactivas y responsive design.

---

## ✅ Componentes Completados

### 1. **Header (Header.tsx)**

**Ubicación:** `src/components/layout/Header.tsx`

**Características implementadas:**
- **Glassmorphism Effect:** Fondo semi-transparente `rgba(10, 10, 10, 0.8)` con `backdrop-filter: blur(12px)` para efecto de vidrio esmerilado
- **Layout responsive con CSS Grid:**
  - Desktop: 3 columnas `[1fr auto 1fr]` con logo centrado
  - Móvil: `flex justify-between` con logo a la izquierda y hamburguesa a la derecha
- **Navegación completa:**
  - Servicios
  - Nosotros (agregado en Fase 3)
  - Contacto
  - Iniciar Sesión (botón con gradiente)
- **Redes sociales:** Instagram y TikTok (solo visible en desktop)
- **Logo centrado:** Imagen `logo_cognitex.png` en el centro del header (desktop)
- **Responsive:**
  - Desktop: Texto "COGNITEX" + redes sociales | Logo centro | Menú completo
  - Móvil: Logo imagen (40px) | Botón hamburguesa
- **Drawer móvil:** Menú lateral con todos los enlaces y efectos de hover
- **Línea neón inferior:** Gradiente azul con efecto glow

**Estilos clave:**
```typescript
background: 'rgba(10, 10, 10, 0.8)'
backdropFilter: 'blur(12px)'
WebkitBackdropFilter: 'blur(12px)' // Safari
borderBottom: '1px solid rgba(30, 64, 175, 0.2)'
```

---

### 2. **HeroSection (HeroSection.tsx)**

**Ubicación:** `src/components/sections/HeroSection.tsx`

**Características implementadas:**
- **Robot interactivo:** Componente Robot.tsx centrado
- **Título con gradiente:**
  - Texto: "Automatización Inteligente para tu Negocio"
  - Gradiente: `from-white via-[#1E40AF] to-[#3B82F6]`
  - Font: 'Tomorrow', sans-serif
- **Subtítulo centrado:** Máximo 700px de ancho, centrado con `margin: auto`
- **Dos botones CTA:**
  - **Primario:** "Inicia o Cotiza tu Automatización"
    - Gradiente azul con efecto zoom y sombra al hover
    - `transform: translateY(-3px) scale(1.05)`
  - **Secundario:** "Agenda una Consultoría Gratuita"
    - Border azul con efecto de llenado de izquierda a derecha
    - Enlace a Google Calendar
- **Indicador de scroll:** Icono animado con `animate-bounce`
- **Espaciado optimizado:** `mb-6` título, `mt-6 mb-12` párrafo

**Efectos hover:**
```typescript
// Botón primario
transform: 'translateY(-3px) scale(1.05)'
boxShadow: '0 20px 45px rgba(30, 64, 175, 0.5)'

// Botón secundario
background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)'
transform: 'translateY(-3px)'
```

---

### 3. **Robot (Robot.tsx)**

**Ubicación:** `src/components/ui/Robot.tsx`

**Características implementadas:**
- **Cabeza con gradiente:** `linear-gradient(135deg, #4a5568 0%, #2d3748 100%)`
- **Ojos que siguen el mouse:**
  - Usa trigonometría para calcular ángulo y distancia
  - Pupilas se mueven dentro de los ojos usando `transform: translate()`
- **Audífonos con diadema curva:** Border superior redondeado y parlantes laterales
- **Animaciones CSS:**
  - `float`: Efecto de flotación vertical (3s)
  - `blink`: Parpadeo de ojos (10s)
  - `smile`: Boca que sonríe (3s)
- **Efecto hover:**
  - Zoom a `scale(1.15)`
  - Dialog bubble con frases aleatorias
  - Posición aleatoria (izquierda o derecha)
- **10 frases interactivas:**
  - "¿Listo para automatizar?"
  - "¿Quieres ahorrar 80% de tiempo?"
  - "¿Tu empresa al siguiente nivel?"
  - Y más...

**Técnicas usadas:**
```typescript
// Seguimiento de mouse
const angle = Math.atan2(e.clientY - robotCenterY, e.clientX - robotCenterX);
const distance = Math.min(10, Math.sqrt(...) / 50);
const pupilX = Math.cos(angle) * distance;
const pupilY = Math.sin(angle) * distance;

// Dialog bubble
opacity: isHovered ? 1 : 0
right/left: isHovered ? '-270px' : '-250px'
```

---

### 4. **NetworkBackground (NetworkBackground.tsx)**

**Ubicación:** `src/components/ui/NetworkBackground.tsx`

**Características implementadas:**
- **Canvas animado:** 80 nodos conectados con líneas
- **Movimiento autónomo:** Cada nodo se mueve con velocidad aleatoria
- **Conexiones dinámicas:** Líneas entre nodos dentro de 150px de distancia
- **Efecto parallax:** Los nodos se mueven a diferentes velocidades según profundidad al hacer scroll
- **Rebote en bordes:** Los nodos rebotan al llegar a los límites del canvas
- **Opacidad variable:** Cada nodo tiene opacidad basada en profundidad
- **Responsive:** Canvas se ajusta automáticamente al tamaño de la ventana

**Configuración:**
```typescript
nodeCount: 80
connectionDistance: 150px
velocidad: (Math.random() - 0.5) * 0.5
parallax: scrollY * node.depth * 0.5
color: 'rgba(30, 64, 175, opacity)'
```

---

## 🎨 Paleta de Colores

### Colores Principales
- **Fondo:** `#0A0A0A` (Negro profundo)
- **Azul Primario:** `#1E40AF` (Blue-800)
- **Azul Secundario:** `#3B82F6` (Blue-500)
- **Gris Oscuro:** `#2d3748` (Gray-800)
- **Gris Medio:** `#4a5568` (Gray-700)
- **Blanco:** `#ffffff`

### Gradientes
```css
/* Botón primario */
background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)

/* Título hero */
background: linear-gradient(to right, white, #1E40AF, #3B82F6)
```

### Transparencias
```css
/* Header glassmorphism */
background: rgba(10, 10, 10, 0.8)
backdrop-filter: blur(12px)

/* Overlays */
background: rgba(0, 0, 0, 0.7) // Overlay móvil
```

---

## 🔤 Tipografías

### Familias de fuentes
- **Primary:** `'Outfit', sans-serif` - Texto general
  - Pesos: 300, 400, 500, 600, 700
- **Secondary:** `'Tomorrow', sans-serif` - Títulos y logo
  - Pesos: 400, 600, 700, 900

### Uso
```css
/* Logo y títulos principales */
font-family: 'Tomorrow', sans-serif
font-weight: 700

/* Texto general */
font-family: 'Outfit', sans-serif
font-weight: 400-600
```

---

## 📁 Estructura de Archivos Actual

```
Cognitex-Sitio-Web/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx          ✅ Completado
│   │   ├── sections/
│   │   │   └── HeroSection.tsx     ✅ Completado
│   │   └── ui/
│   │       ├── Robot.tsx           ✅ Completado
│   │       └── NetworkBackground.tsx ✅ Completado
│   ├── assets/
│   │   └── logo_cognitex.png       ✅ Agregado
│   ├── App.tsx                     ✅ Actualizado
│   ├── index.css                   ✅ Con animaciones
│   └── main.tsx                    ✅ Configurado
├── backup-html-original/
│   └── index.html                  📄 Referencia original
├── index.html                      ✅ Fuentes agregadas
├── package.json                    ✅ Dependencias
├── tailwind.config.js              ✅ Configurado
├── vite.config.ts                  ✅ Configurado
└── tsconfig.json                   ✅ Configurado
```

---

## 📱 Responsive Design

### Breakpoints de Tailwind CSS
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px

### Implementación

#### **Móvil (< 768px)**
- Header: Logo imagen (40px) + Hamburguesa
- HeroSection: Robot, título, párrafo y botones apilados verticalmente
- NetworkBackground: Canvas responsive con menos nodos visibles
- Drawer menú: Slide desde la derecha con overlay

#### **Desktop (≥ 768px)**
- Header: Grid 3 columnas con logo centrado, texto "COGNITEX" y redes sociales
- HeroSection: Todo centrado con botones en fila horizontal
- NetworkBackground: Canvas completo con todos los nodos
- Menú inline en header

---

## 🎯 Efectos y Animaciones

### Animaciones CSS (@keyframes)
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes blink {
  0%, 95%, 100% { transform: scaleY(1); }
  98% { transform: scaleY(0.1); }
}

@keyframes smile {
  0%, 100% { height: 5px; width: 50px; }
  50% { height: 12px; width: 55px; }
}
```

### Efectos hover
- **Header botones:** `translateY(-2px)` + sombra aumentada
- **Robot:** `scale(1.15)` + dialog bubble
- **Botones CTA:** `translateY(-3px) scale(1.05)` + efecto de llenado

### Transiciones
```css
transition: all 0.3s ease
transition: opacity 0.4s ease
```

---

## 🚀 Próximos Pasos Pendientes

### Secciones por crear

1. **ServiciosSection.tsx**
   - Grid de servicios con iconos
   - Descripción de automatizaciones
   - Efectos hover en cards

2. **NosotrosSection.tsx**
   - Historia de COGNITEX
   - Misión y visión
   - Equipo (opcional)

3. **ContactoSection.tsx**
   - Formulario de contacto
   - Información de contacto
   - Mapa (opcional)

4. **Footer.tsx**
   - Links útiles
   - Redes sociales
   - Copyright

### Mejoras técnicas

- [ ] Agregar React Router para navegación
- [ ] Implementar formularios con validación
- [ ] Optimizar performance de canvas (NetworkBackground)
- [ ] Agregar lazy loading para imágenes
- [ ] Implementar meta tags SEO
- [ ] Agregar favicon personalizado
- [ ] Tests unitarios con Vitest
- [ ] Configurar CI/CD

### Optimizaciones

- [ ] Minificar bundle de producción
- [ ] Optimizar imágenes (WebP)
- [ ] Implementar service worker para PWA
- [ ] Mejorar accesibilidad (ARIA labels)
- [ ] Dark mode toggle (opcional)

---

## 🛠️ Tecnologías Utilizadas

- **React 18.3.1** - Librería UI
- **TypeScript 5.6.2** - Type safety
- **Vite 6.0.3** - Build tool
- **Tailwind CSS 4.0.0** - Utility-first CSS
- **Google Fonts** - Outfit & Tomorrow

---

## 📝 Notas de Desarrollo

### Decisiones técnicas

1. **Inline styles vs Tailwind:** Se usaron inline styles (`style={}`) para efectos complejos y hover states, mientras que Tailwind se usó para layouts y utilidades básicas.

2. **Canvas para NetworkBackground:** Se eligió Canvas API sobre SVG para mejor performance con muchos nodos animados.

3. **TypeScript strict mode:** Se mantiene type safety con `React.CSSProperties` para todos los estilos inline.

4. **No usar React Router aún:** Se decidió mantener navegación simple con anchors (#servicios, #nosotros) hasta completar todas las secciones.

### Patrones de código

- Event handlers con `onMouseEnter`/`onMouseLeave` para efectos hover
- `useRef` para manipulación de DOM (robot eyes, canvas)
- `useState` para estados interactivos
- `useEffect` para side effects (animations, event listeners)

---

## 📞 Contacto y Repositorio

- **GitHub:** [Repositorio COGNITEX](https://github.com/...)
- **Website:** cognitex.co
- **Instagram:** @cognitex.co
- **TikTok:** @cognitex

---

**Última actualización:** Fase 3 - 2025-11-21
**Próxima fase:** Fase 4 - Secciones de contenido (Servicios, Nosotros, Contacto)
