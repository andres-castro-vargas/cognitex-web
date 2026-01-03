import { useState } from 'react';
import { AlertCircle, Clock, FileX, Search, GitCompare, FileCheck, Zap, Shield, CheckCircle } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import NetworkBackground from '../../components/ui/NetworkBackground';

export default function ConciliacionDianPage() {
  const [isHeroCtaHovered, setIsHeroCtaHovered] = useState(false);
  const [isFinalCtaHovered, setIsFinalCtaHovered] = useState(false);

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#FFFFFF',
    position: 'relative'
  };

  const heroStyle: React.CSSProperties = {
    paddingTop: '140px',
    paddingBottom: '4rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
    maxWidth: '900px',
    margin: '0 auto',
    padding: '140px 2rem 4rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '700',
    fontFamily: "'Tomorrow', sans-serif",
    background: 'linear-gradient(135deg, #1E293B 0%, #3B82F6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
    lineHeight: '1.2'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.15rem',
    color: '#64748B',
    maxWidth: '600px',
    margin: '0 auto 2rem'
  };

  const ctaButtonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    color: '#FFFFFF',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: isHeroCtaHovered
      ? '0 15px 35px rgba(30, 64, 175, 0.35)'
      : '0 10px 25px rgba(30, 64, 175, 0.25)',
    transform: isHeroCtaHovered ? 'scale(1.05)' : 'scale(1)'
  };

  const sectionStyle: React.CSSProperties = {
    padding: '4rem 2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: '2rem',
    textAlign: 'center',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const problemCardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 1.5rem',
    background: '#FEF2F2',
    borderRadius: '12px',
    marginBottom: '1rem',
    border: '1px solid #FECACA'
  };

  const problemTextStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#991B1B',
    fontWeight: '500'
  };

  const stepsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  };

  const stepCardStyle: React.CSSProperties = {
    background: '#FFFFFF',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
  };

  const stepNumberStyle: React.CSSProperties = {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    color: '#FFFFFF'
  };

  const stepTitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '0.5rem'
  };

  const stepDescStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#64748B',
    lineHeight: '1.5'
  };

  const benefitsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const benefitCardStyle: React.CSSProperties = {
    background: '#F8FAFC',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #E2E8F0',
    textAlign: 'center'
  };

  const benefitIconStyle: React.CSSProperties = {
    width: '44px',
    height: '44px',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem'
  };

  const benefitTitleStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '0.35rem'
  };

  const benefitDescStyle: React.CSSProperties = {
    fontSize: '0.85rem',
    color: '#64748B'
  };

  const ctaSectionStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    padding: '4rem 2rem',
    textAlign: 'center',
    borderRadius: '24px',
    margin: '2rem',
    position: 'relative',
    zIndex: 10
  };

  const ctaTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: '1.5rem',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const ctaButtonWhiteStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: '#FFFFFF',
    color: '#1E40AF',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: isFinalCtaHovered
      ? '0 15px 35px rgba(0, 0, 0, 0.25)'
      : '0 10px 25px rgba(0, 0, 0, 0.15)',
    transform: isFinalCtaHovered ? 'scale(1.05)' : 'scale(1)'
  };

  return (
    <>
      <div style={pageStyle}>
        <NetworkBackground />
        <Header />

        <section style={heroStyle}>
          <h1 style={titleStyle}>Concilia facturas DIAN sin esfuerzo</h1>
          <p style={subtitleStyle}>
            De 2-3 días de revisión manual a solo 1 hora. Encuentra discrepancias en segundos.
          </p>
          <a
            href="https://wa.me/573124069303?text=Hola,%20quiero%20una%20demo%20de%20Conciliación%20DIAN"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonStyle}
            onMouseEnter={() => setIsHeroCtaHovered(true)}
            onMouseLeave={() => setIsHeroCtaHovered(false)}
          >
            Agendar Demo Gratis
          </a>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>¿Te suena familiar?</h2>

          <div style={problemCardStyle}>
            <AlertCircle size={24} color="#DC2626" />
            <span style={problemTextStyle}>Pasas días cruzando facturas DIAN con tu contabilidad</span>
          </div>

          <div style={problemCardStyle}>
            <Clock size={24} color="#DC2626" />
            <span style={problemTextStyle}>Las discrepancias aparecen cuando ya es tarde para corregir</span>
          </div>

          <div style={problemCardStyle}>
            <FileX size={24} color="#DC2626" />
            <span style={problemTextStyle}>Revisas NIT por NIT comparando listados interminables</span>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Así lo resolvemos</h2>

          <div style={stepsContainerStyle}>
            <div style={stepCardStyle}>
              <div style={stepNumberStyle}>
                <Search size={24} />
              </div>
              <h3 style={stepTitleStyle}>Comparación masiva</h3>
              <p style={stepDescStyle}>Cruzamos miles de facturas DIAN vs tu software en segundos</p>
            </div>

            <div style={stepCardStyle}>
              <div style={stepNumberStyle}>
                <GitCompare size={24} />
              </div>
              <h3 style={stepTitleStyle}>Detección automática</h3>
              <p style={stepDescStyle}>Identificamos faltantes, duplicados y diferencias de valores</p>
            </div>

            <div style={stepCardStyle}>
              <div style={stepNumberStyle}>
                <FileCheck size={24} />
              </div>
              <h3 style={stepTitleStyle}>Reportes listos</h3>
              <p style={stepDescStyle}>Genera reportes con discrepancias marcadas por tercero</p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Lo que ganas</h2>

          <div style={benefitsContainerStyle}>
            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}>
                <Clock size={22} color="#FFFFFF" />
              </div>
              <h4 style={benefitTitleStyle}>2 días a 1 hora</h4>
              <p style={benefitDescStyle}>Reduce tu revisión fiscal mensual</p>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}>
                <CheckCircle size={22} color="#FFFFFF" />
              </div>
              <h4 style={benefitTitleStyle}>100% cobertura</h4>
              <p style={benefitDescStyle}>Detecta todas las discrepancias</p>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}>
                <Shield size={22} color="#FFFFFF" />
              </div>
              <h4 style={benefitTitleStyle}>Evita sanciones</h4>
              <p style={benefitDescStyle}>Detecta errores antes de auditorías</p>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}>
                <Zap size={22} color="#FFFFFF" />
              </div>
              <h4 style={benefitTitleStyle}>Reportes DIAN</h4>
              <p style={benefitDescStyle}>Listos para entregar al cliente</p>
            </div>
          </div>
        </section>

        <section style={ctaSectionStyle}>
          <h2 style={ctaTitleStyle}>¿Listo para automatizar tu conciliación DIAN?</h2>
          <a
            href="https://wa.me/573124069303?text=Hola,%20quiero%20hablar%20sobre%20Conciliación%20DIAN"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonWhiteStyle}
            onMouseEnter={() => setIsFinalCtaHovered(true)}
            onMouseLeave={() => setIsFinalCtaHovered(false)}
          >
            Hablar con nuestro equipo
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
}
