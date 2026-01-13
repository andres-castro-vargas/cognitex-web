import { useState } from 'react';
import { FileText, Shield, Workflow, ShieldCheck, Check } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NetworkBackground from '../components/ui/NetworkBackground';
import PricingCard from '../components/ui/PricingCard';

export default function ServiciosPage() {
  const [activeSection, setActiveSection] = useState<'contadores' | 'sst' | 'automatizacion'>('contadores');

  // Datos de planes Contadores
  const contadoresPlans = [
    {
      name: 'Trial',
      price: 'GRATIS',
      description: 'Prueba completa por 7 días',
      features: [
        { text: '30 facturas incluidas', included: true },
        { text: 'Descargador DIAN', included: true },
        { text: 'Visor de Facturas', included: true },
        { text: 'Prueba sin compromiso', included: true },
        { text: 'Reportes avanzados', included: false },
        { text: 'Soporte prioritario', included: false }
      ],
      isCustom: true,
      isTrial: true,
      ctaText: 'Prueba Gratis',
      ctaLink: 'https://appcontadores.cognitex.co/registro'
    },
    {
      name: 'Básico',
      price: 'Consultar',
      description: 'Ideal para contadores independientes',
      features: [
        { text: '500 facturas/mes', included: true },
        { text: 'Descargador DIAN', included: true },
        { text: 'Visor de Facturas', included: true },
        { text: 'Soporte prioritario', included: false },
        { text: 'Reportes avanzados', included: false }
      ],
      ctaText: 'Consultar plan',
      ctaLink: 'https://wa.me/573104489087?text=Hola%2C%20me%20interesa%20el%20Plan%20Básico'
    },
    {
      name: 'Pro',
      price: 'Consultar',
      description: 'Para firmas contables en crecimiento',
      features: [
        { text: '2,000 facturas/mes', included: true },
        { text: 'Descargador DIAN', included: true },
        { text: 'Visor de Facturas', included: true },
        { text: 'Reportes avanzados', included: true },
        { text: 'Soporte prioritario', included: true }
      ],
      isPopular: true,
      ctaText: 'Consultar plan',
      ctaLink: 'https://wa.me/573104489087?text=Hola%2C%20me%20interesa%20el%20Plan%20Pro'
    },
    {
      name: 'Enterprise',
      price: 'Cotización',
      description: 'Solución a la medida de tu empresa',
      features: [
        { text: 'Facturas ilimitadas', included: true },
        { text: 'Descargador DIAN + Visor', included: true },
        { text: 'Reportes avanzados', included: true },
        { text: 'Integración Siigo/Alegra', included: true },
        { text: 'API access', included: true },
        { text: 'Soporte dedicado 24/7', included: true }
      ],
      isCustom: true,
      ctaText: 'Contactar Ventas',
      ctaLink: 'https://wa.me/573104489087?text=Hola%2C%20me%20interesa%20el%20Plan%20Enterprise'
    }
  ];

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#FFFFFF',
    position: 'relative'
  };

  const heroStyle: React.CSSProperties = {
    paddingTop: '120px',
    paddingBottom: '3rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '700',
    fontFamily: "'Tomorrow', sans-serif",
    background: 'linear-gradient(135deg, #1E293B 0%, #3B82F6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: '#64748B',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  // Tabs de navegación
  const tabsContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '3rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    padding: '0 1rem'
  };

  const getTabStyle = (isActive: boolean, isDisabled: boolean = false): React.CSSProperties => ({
    padding: '0.875rem 1.5rem',
    borderRadius: '12px',
    border: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    fontFamily: "'Tomorrow', sans-serif",
    transition: 'all 0.3s',
    background: isActive
      ? 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)'
      : isDisabled
        ? '#E2E8F0'
        : '#F1F5F9',
    color: isActive ? '#FFFFFF' : isDisabled ? '#94A3B8' : '#1E293B',
    opacity: isDisabled ? 0.7 : 1,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  });

  const badgeStyle: React.CSSProperties = {
    background: '#FEF3C7',
    color: '#92400E',
    padding: '0.15rem 0.5rem',
    borderRadius: '10px',
    fontSize: '0.65rem',
    fontWeight: '700',
    textTransform: 'uppercase'
  };

  // Sección de contenido
  const sectionStyle: React.CSSProperties = {
    padding: '3rem 1rem 5rem',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10
  };

  // Grid de precios (4 planes)
  const pricingGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  // Estilos para sección SST (próximamente)
  const comingSoonStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '4rem 2rem',
    background: '#F8FAFC',
    borderRadius: '24px',
    border: '2px dashed #CBD5E1'
  };

  const comingSoonIconStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #CBD5E1 0%, #94A3B8 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem'
  };

  const comingSoonTitleStyle: React.CSSProperties = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: '0.75rem',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const comingSoonTextStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#64748B',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  // Estilos para sección Automatización
  const customSectionStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    borderRadius: '24px',
    padding: '3rem 2rem',
    textAlign: 'center',
    color: '#FFFFFF'
  };

  const customTitleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const customTextStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto 2rem',
    lineHeight: '1.6'
  };

  const customFeaturesStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    marginBottom: '2rem'
  };

  const customFeatureStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem'
  };

  const customButtonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: '#FFFFFF',
    color: '#1E40AF',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '700',
    fontFamily: "'Tomorrow', sans-serif",
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
  };

  return (
    <>
      <div style={pageStyle}>
        <NetworkBackground />
        <Header />

        {/* Hero */}
        <div style={heroStyle}>
          <h1 style={titleStyle}>Nuestros Servicios</h1>
          <p style={subtitleStyle}>
            Soluciones de automatización diseñadas para transformar la forma en que trabajas
          </p>

          {/* Tabs de navegación */}
          <div style={tabsContainerStyle}>
            <button
              style={getTabStyle(activeSection === 'contadores')}
              onClick={() => setActiveSection('contadores')}
            >
              <FileText size={20} />
              Contadores
            </button>

            <button
              style={getTabStyle(activeSection === 'sst', true)}
              onClick={() => {}}
              disabled
            >
              <Shield size={20} />
              SST
              <span style={badgeStyle}>Próximamente</span>
            </button>

            <button
              style={getTabStyle(activeSection === 'automatizacion')}
              onClick={() => setActiveSection('automatizacion')}
            >
              <Workflow size={20} />
              Automatización
            </button>
          </div>
        </div>

        {/* Contenido de sección */}
        <div style={sectionStyle}>
          {/* Sección Contadores */}
          {activeSection === 'contadores' && (
            <div style={pricingGridStyle}>
              {contadoresPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  isCustom={plan.isCustom}
                  isTrial={plan.isTrial}
                  ctaText={plan.ctaText}
                  ctaLink={plan.ctaLink}
                />
              ))}
            </div>
          )}

          {/* Sección SST - Próximamente */}
          {activeSection === 'sst' && (
            <div style={comingSoonStyle}>
              <div style={comingSoonIconStyle}>
                <ShieldCheck size={40} color="#FFFFFF" strokeWidth={1.5} />
              </div>
              <h2 style={comingSoonTitleStyle}>Seguridad y Salud en el Trabajo</h2>
              <p style={comingSoonTextStyle}>
                Estamos desarrollando una solución integral para la gestión de SST.
                Automatiza documentación, capacitaciones, inspecciones y cumplimiento normativo.
              </p>
              <p style={{ ...comingSoonTextStyle, marginTop: '1.5rem', fontWeight: '600' }}>
                ¿Quieres ser notificado cuando esté disponible?
              </p>
              <a
                href="https://wa.me/573124069303?text=Hola,%20quiero%20ser%20notificado%20cuando%20esté%20disponible%20la%20plataforma%20SST"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}
              >
                Notificarme
              </a>
            </div>
          )}

          {/* Sección Automatización Personalizada */}
          {activeSection === 'automatizacion' && (
            <div style={customSectionStyle}>
              <h2 style={customTitleStyle}>Automatización a la Medida</h2>
              <p style={customTextStyle}>
                ¿Tienes procesos únicos que necesitan automatización?
                Diseñamos soluciones personalizadas para cualquier industria.
              </p>

              <div style={customFeaturesStyle}>
                <div style={customFeatureStyle}>
                  <Check size={20} color="#FFFFFF" strokeWidth={2.5} />
                  Integración con sistemas existentes
                </div>
                <div style={customFeatureStyle}>
                  <Check size={20} color="#FFFFFF" strokeWidth={2.5} />
                  Desarrollo de bots y scrapers
                </div>
                <div style={customFeatureStyle}>
                  <Check size={20} color="#FFFFFF" strokeWidth={2.5} />
                  APIs personalizadas
                </div>
                <div style={customFeatureStyle}>
                  <Check size={20} color="#FFFFFF" strokeWidth={2.5} />
                  Flujos de trabajo automatizados
                </div>
              </div>

              <a
                href="https://wa.me/573124069303?text=Hola,%20me%20interesa%20una%20solución%20de%20automatización%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
                style={customButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Agendar Consulta Gratis
              </a>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
