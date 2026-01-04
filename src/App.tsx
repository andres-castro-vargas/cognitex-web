import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import WhatsAppFloat from './components/ui/WhatsAppFloat'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));
const NosotrosPage = lazy(() => import('./pages/NosotrosPage'));
const ServiciosPage = lazy(() => import('./pages/ServiciosPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Lazy load service pages
const CausacionesPage = lazy(() => import('./pages/servicios/CausacionesPage'));
const ConciliacionDianPage = lazy(() => import('./pages/servicios/ConciliacionDianPage'));
const ConciliacionesBancariasPage = lazy(() => import('./pages/servicios/ConciliacionesBancariasPage'));
const NominaPage = lazy(() => import('./pages/servicios/NominaPage'));
const NotasFinancierasPage = lazy(() => import('./pages/servicios/NotasFinancierasPage'));
const AgendasArlPage = lazy(() => import('./pages/servicios/AgendasArlPage'));
const DocumentacionSstPage = lazy(() => import('./pages/servicios/DocumentacionSstPage'));

// Loading fallback component
function PageLoader() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFFFFF'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #E2E8F0',
        borderTopColor: '#175197',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppFloat />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />

          {/* Rutas de servicios individuales */}
          <Route path="/servicios/causaciones" element={<CausacionesPage />} />
          <Route path="/servicios/conciliacion-dian" element={<ConciliacionDianPage />} />
          <Route path="/servicios/conciliaciones-bancarias" element={<ConciliacionesBancariasPage />} />
          <Route path="/servicios/nomina" element={<NominaPage />} />
          <Route path="/servicios/notas-financieras" element={<NotasFinancierasPage />} />
          <Route path="/servicios/agendas-arl" element={<AgendasArlPage />} />
          <Route path="/servicios/documentacion-sst" element={<DocumentacionSstPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
