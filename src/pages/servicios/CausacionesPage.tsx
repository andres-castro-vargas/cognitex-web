import { useState } from 'react';
import { AlertCircle, Clock, FileX, Upload, Brain, FileCheck, Zap, TrendingUp, Shield } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import NetworkBackground from '../../components/ui/NetworkBackground';

export default function CausacionesPage() {
  const [isHeroCtaHovered, setIsHeroCtaHovered] = useState(false);
  const [isFinalCtaHovered, setIsFinalCtaHovered] = useState(false);

  // Estilos - Tema Claro
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
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '1.25rem'
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

        {/* HERO */}
        <section style={heroStyle}>
          <h1 style={titleStyle}>Automatiza tus causaciones en minutos</h1>
          <p style={subtitleStyle}>
            De 4-5 minutos por factura a solo 10 segundos. Deja de digitar y empieza a revisar.
          </p>
          <a
            href="https://wa.me/573124069303?text=Hola,%20quiero%20una%20demo%20de%20Causaciones%20Automatizadas"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonStyle}
            onMouseEnter={() => setIsHeroCtaHovered(true)}
            onMouseLeave={() => setIsHeroCtaHovered(false)}
          >
            Agendar Demo Gratis
          </a>
        </section>

        {/* PROBLEMA */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>¿Te suena familiar?</h2>

          <div style={problemCardStyle}>
            <AlertCircle size={24} color="#DC2626" />
            <span style={problemTextStyle}>Tu equipo pasa horas digitando facturas una por una</span>
          </div>

          <div style={problemCardStyle}>
            <Clock size={24} color="#DC2626" />
            <span style={problemTextStyle}>Los errores de digitación generan reprocesos constantes</span>
          </div>

          <div style={problemCardStyle}>
            <FileX size={24} color="#DC2626" />
            <span style={problemTextStyle}>Las cuentas PUC se asignan incorrectamente cada semana</span>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Así lo resolvemos</h2>

          <div style={stepsContainerStyle}>
            <div style={stepCardStyle}>
              <div style={stepNumberStyle}>
                <Upload size={24} />
              </div>
              <h3 style={stepTitleStyle}>Descarga automática</h3>
              <p style={stepDescStyle}>Conectamos con DIAN y descargamos tus facturas automáticamente</p>
            </div>

            <div style={stepCardStyle}>
              <div style={stepNumberStyle}>
                <Brain size={24} />
              </div>
              <h3 style={stepTitleStyle}>Clasificación inteligente</h3>
              <p style={stepDescStyle}>El sistema aprende tus reglas y asigna el PUC correcto</p>
            </div>

            <div style={stepCardStyle}>
              <div style={stepNumberStyle}>
                <FileCheck size={24} />
              </div>
              <h3 style={stepTitleStyle}>Archivos listos</h3>
              <p style={stepDescStyle}>Obtienes archivos planos para importar a tu software contable</p>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Lo que ganas</h2>

          <div style={benefitsContainerStyle}>
            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}>
                <Clock size={22} color="#FFFFFF" />
              </div>
              <h4 style={benefitTitleStyle}>15-20 horas/mes</h4>
              <p style={benefitDescStyle}>Tiempo recuperado en digitación</p>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}>
                <Zap size={22} color="#FFFFFF" />
              </div>
              <h4 style={benefitTitleStyle}>99% precisión</h4>
              <p style={benefitDescStyle}>Elimina errores de transcripción</p>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}>
                <TrendingUp size={22} color="#FFFFFF" />
              </div>
              <h4 style={benefitTitleStyle}>3x más clientes</h4>
              <p style={benefitDescStyle}>Capacidad para crecer sin contratar</p>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}>
                <Shield size={22} color="#FFFFFF" />
              </div>
              <h4 style={benefitTitleStyle}>Tu revisión</h4>
              <p style={benefitDescStyle}>El contador siempre valida el 100%</p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={ctaSectionStyle}>
          <h2 style={ctaTitleStyle}>¿Listo para automatizar tus causaciones?</h2>
          <a
            href="https://wa.me/573124069303?text=Hola,%20quiero%20hablar%20con%20un%20experto%20sobre%20Causaciones"
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
