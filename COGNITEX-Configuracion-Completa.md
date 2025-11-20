# 📋 COGNITEX - CONFIGURACIÓN COMPLETA DE PÁGINA WEB

## 🌐 INFORMACIÓN GENERAL

**Empresa:** COGNITEX  
**Negocio:** Automatización empresarial con IA para contadores y profesionales de SST (Seguridad y Salud en el Trabajo)  
**Fundadores:** Andres Castro (CTO) + Ana María Rojas (CEO)  
**Plataforma principal:** n8n para workflows de automatización  

---

## 🔗 DOMINIO Y HOSTING

### Dominio
- **Dominio principal:** cognitex.co
- **URL alternativa:** www.cognitex.co
- **Proveedor de dominio:** Verificado en Google Workspace
- **Email corporativo:** andres@cognitex.co

### Hosting Actual
- **Proveedor:** Hostinger VPS
- **Plataforma de deploy:** EasyPanel
- **Proyecto en EasyPanel:** "cognitex-web"
- **URLs funcionando:**
  - https://cognitex.co ✅
  - https://www.cognitex.co ✅

---

## ⚙️ CONFIGURACIÓN TÉCNICA ACTUAL

### Stack Tecnológico
- **Tipo de sitio:** HTML estático (Single Page)
- **Servidor web:** Nginx
- **Sistema de compilación:** Nixpacks v1.34.1
- **Puerto:** 8080
- **SSL/HTTPS:** Activo con Let's Encrypt (automático)

### Arquitectura
```
Frontend: HTML + CSS + JavaScript (Vanilla)
Servidor: Nginx en EasyPanel
SSL: Let's Encrypt (renovación automática)
Deploy: Manual vía EasyPanel
```

---

## 📁 ESTRUCTURA DE ARCHIVOS ACTUAL

### Archivo Principal
```
index.html (archivo único con todo el sitio)
```

### Componentes Incluidos en el HTML

1. **Hero Section**
   - Logo/Robot de COGNITEX (sin cejas, con diadema mejorada)
   - Título principal
   - Call to action

2. **Formulario Multi-step**
   - Captura de leads en 3 pasos
   - Campos: Nombre, Email, Empresa, Necesidad
   - Webhook pendiente de configurar en n8n

3. **Botón de Calendario**
   - Texto: "Agenda una Consultoría Gratuita"
   - Enlace: https://calendar.app.google/uZEHQ1FiMa5RVh9p8
   - Google Calendar configurado para citas de 30 minutos

4. **Assets**
   - Favicon del robot
   - Logo eliminado del header (solo queda el robot)

---

## 🎨 DISEÑO Y BRANDING

### Paleta de Colores
- **Azul principal:** #1E40AF
- **Negro/Oscuro:** #1F2937
- **Blanco:** #FFFFFF

### Tipografía
- **Fuente principal:** Tomorrow

### Logo
- Robot de COGNITEX
- Versión sin cejas
- Diadema mejorada
- Favicon incluido

### Referencia de Diseño
- **Sitio inspiración:** https://turingia.framer.website
- **Estilo:** Moderno, profesional, fondo oscuro
- **Enfoque:** Servicios de automatización con IA

---

## 🔧 CÓDIGO DEL WEBHOOK (PENDIENTE)

En el archivo `index.html` hay una sección para webhook de n8n:

```javascript
const response = await fetch('TU_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

**⚠️ PENDIENTE:** Reemplazar 'TU_WEBHOOK_URL' con el webhook real de n8n

---

## 📧 CONFIGURACIÓN DE GOOGLE WORKSPACE

### Cuentas y Servicios
- **Email:** andres@cognitex.co
- **Google Calendar:** Configurado con página de reservas
- **Problema actual:** Nombre personal aparece en vez de "COGNITEX"

### Pendientes de Configuración
1. Crear calendario empresarial "COGNITEX - Negocios"
2. Configurar alias profesional: info@cognitex.co
3. Ajustar presentación del calendario para clientes

### Estrategia de Escasez
- Bloquear horarios manualmente en Calendar
- Evitar verse "disponible todo el tiempo"

---

## 🚀 ESTADO ACTUAL DEL PROYECTO

### ✅ Completado
- [x] Sistema Cognitex backend funcionando 100%
- [x] 5 workflows activos en n8n
- [x] Monitoreo automatizado 24/7
- [x] Backup diario
- [x] Dominio cognitex.co verificado y funcionando
- [x] Logo profesional terminado
- [x] Página web básica en producción con HTTPS
- [x] Formulario de captura de leads implementado
- [x] Google Calendar configurado
- [x] Favicon personalizado

### ⏳ En Progreso / Pendiente
- [ ] Configurar webhook n8n para formulario
- [ ] Crear calendario empresarial nuevo
- [ ] Configurar alias info@cognitex.co
- [ ] Respuestas automáticas al capturar leads
- [ ] Mejorar estructura del sitio (migrar a React/TypeScript)
- [ ] Implementar metodología moderna de desarrollo

---

## 🔐 ACCESOS Y CREDENCIALES

### EasyPanel (Hostinger VPS)
- **Panel:** Acceso vía Hostinger
- **Proyecto:** cognitex-web
- **Archivos:** index.html principal

### Google Workspace
- **Email:** andres@cognitex.co
- **Servicios:** Gmail, Calendar, Sites, Drive

### Herramientas de Desarrollo
- **Editor recomendado:** Visual Studio Code
- **Control de versiones:** Git (pendiente de configurar)
- **Deploy:** EasyPanel (actual) → Vercel (sugerido para nuevo stack)

---

## 📊 SERVICIOS DE COGNITEX

### Oferta Principal
1. **Automatización de procesos** con n8n
2. **Integración con OpenAI** para IA
3. **Soluciones para contadores** (DIAN, facturación)
4. **Sistemas SST** (Seguridad y Salud en el Trabajo)

### Clientes Activos
- 5 clientes monitoreados 24/7
- Soluciones de automatización personalizadas
- Integración con PostgreSQL y APIs

---

## 🎯 VISIÓN PARA MEJORA DEL SITIO

### Objetivos de la Migración
1. **Estructura profesional** con React/TypeScript
2. **Componentes reutilizables** y mantenibles
3. **Integración moderna** con n8n webhooks
4. **Deploy automatizado** con Git + Vercel
5. **Escalabilidad** para futuras funcionalidades

### Funcionalidades Deseadas
- Formulario de contacto funcional con n8n
- Sistema de captura de leads automatizado
- Integración con CRM (futuro)
- Blog o contenido dinámico (futuro)
- Panel de seguimiento de leads (futuro)

### Metodología Propuesta
- **Claude Projects** para estrategia
- **Claude Code** para ejecución técnica
- **VS Code + React/TypeScript** para estructura profesional
- **Git + Vercel** para deploy moderno

---

## 📝 CONTENIDO ACTUAL DEL SITIO

### Secciones del HTML
1. **Hero:** Presentación de COGNITEX
2. **Servicios:** Automatización con IA
3. **Formulario:** Captura de leads multi-step
4. **CTA:** Botón de agenda de consultoría
5. **Footer:** Información de contacto

### Textos Clave
- "Automatización inteligente para tu negocio"
- "Soluciones con IA para contadores y SST"
- "Agenda una Consultoría Gratuita"

---

## 🔄 PROBLEMAS HISTÓRICOS RESUELTOS

### Problema: No se podía actualizar HTML en EasyPanel
**Solución aplicada:**
- Cambió de Nixpacks con errores
- Configuró correctamente el puerto 8080
- Activó SSL/HTTPS con Let's Encrypt
- Sitio funcionando exitosamente

### Problema: SSL/HTTPS no funcionaba
**Solución aplicada:**
- Configuración correcta en EasyPanel
- Let's Encrypt automático
- Redirección HTTP → HTTPS activa

---

## 💡 PRÓXIMOS PASOS RECOMENDADOS

### Fase 1: Preparación (Inmediato)
1. Descargar HTML actual completo
2. Crear repositorio Git local
3. Configurar VS Code con extensiones React
4. Instalar Node.js y npm

### Fase 2: Migración (1-2 semanas)
1. Crear proyecto React con TypeScript
2. Componentizar el HTML actual
3. Configurar webhook n8n funcional
4. Implementar sistema de formularios robusto

### Fase 3: Deploy (1 semana)
1. Conectar con Git
2. Deploy a Vercel
3. Configurar dominio cognitex.co en Vercel
4. Pruebas de producción

### Fase 4: Optimización (Continuo)
1. Agregar analytics
2. Implementar SEO
3. Optimizar rendimiento
4. Agregar más funcionalidades

---

## 📞 INFORMACIÓN DE CONTACTO

**Andres Castro (CTO)**
- Email: andres@cognitex.co
- Ubicación: Florencia, Caquetá, Colombia
- Partner: Ana María Rojas (CEO)

---

## 🎓 CONTEXTO DEL DESARROLLADOR

### Perfil de Andres
- **Experiencia:** No tiene background formal en software engineering
- **Fortalezas:** Automatización con n8n, integración de APIs
- **Preferencias:** Guía paso a paso, documentación completa
- **Herramientas:** n8n, OpenAI, PostgreSQL
- **Aprendizaje:** Tutoriales de YouTube, hands-on learning

### Estilo de Trabajo Preferido
- Explicaciones paso a paso
- Preguntar antes de hacer cambios
- Documentación exhaustiva
- Soluciones probadas y seguras
- Evitar romper lo que ya funciona

---

## 📚 RECURSOS ADICIONALES

### Enlaces Importantes
- Sitio web actual: https://cognitex.co
- Calendario: https://calendar.app.google/uZEHQ1FiMa5RVh9p8
- Referencia de diseño: https://turingia.framer.website

### Documentación Relacionada
- Resumen del proyecto en Google Drive
- Flujos de n8n documentados
- Guión comercial de COGNITEX

---

## ⚡ RESUMEN EJECUTIVO

**COGNITEX es una empresa de automatización con IA funcionando al 100% en el backend**, con:
- ✅ 5 clientes activos
- ✅ Sistema de monitoreo 24/7
- ✅ Página web básica en producción
- ✅ Dominio y SSL configurados

**NECESITA:** Migrar de HTML estático a React/TypeScript para:
- Estructura profesional y mantenible
- Componentes reutilizables
- Integración robusta con n8n
- Escalabilidad para futuras funcionalidades
- Deploy automatizado moderno

**ENFOQUE:** Metodología Claude Projects + Claude Code + VS Code + Git + Vercel, probada exitosamente en proyecto EimyDesign (90% completado).

---

**Última actualización:** Julio-Noviembre 2025  
**Estado del documento:** Completo y listo para migración  
**Versión:** 1.0
