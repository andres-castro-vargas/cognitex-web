import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import ContactoPage from './pages/ContactoPage'
import NosotrosPage from './pages/NosotrosPage'
import ServiciosPage from './pages/ServiciosPage'
import NotFoundPage from './pages/NotFoundPage'

// Páginas de servicios individuales
import CausacionesPage from './pages/servicios/CausacionesPage'
import ConciliacionDianPage from './pages/servicios/ConciliacionDianPage'
import ConciliacionesBancariasPage from './pages/servicios/ConciliacionesBancariasPage'
import NominaPage from './pages/servicios/NominaPage'
import NotasFinancierasPage from './pages/servicios/NotasFinancierasPage'
import AgendasArlPage from './pages/servicios/AgendasArlPage'
import DocumentacionSstPage from './pages/servicios/DocumentacionSstPage'

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
    </>
  )
}

export default App
