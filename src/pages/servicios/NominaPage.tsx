import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function NominaPage() {
  const pageStyle: React.CSSProperties = {
    background: '#0A0A0A',
    minHeight: '100vh',
    color: '#ffffff'
  };

  const bannerStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    padding: '1.5rem 2rem',
    textAlign: 'center',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1F2937'
  };

  const heroStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '6rem 2rem 4rem',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const h1Style: React.CSSProperties = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #ffffff 0%, #3B82F6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    color: '#9CA3AF',
    lineHeight: '1.6',
    maxWidth: '700px',
    margin: '0 auto 3rem'
  };

  const contentStyle: React.CSSProperties = {
    padding: '4rem 2rem',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#D1D5DB',
    lineHeight: '1.8',
    marginBottom: '3rem'
  };

  const ctaSectionStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    padding: '4rem 2rem',
    textAlign: 'center',
    borderRadius: '20px',
    margin: '4rem 2rem'
  };

  const ctaButtonStyle: React.CSSProperties = {
    display: 'inline-block',
    background: '#ffffff',
    color: '#1E40AF',
    padding: '1rem 2.5rem',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    textDecoration: 'none',
    margin: '1rem',
    transition: 'all 0.3s',
    border: '2px solid #ffffff'
  };

  const ctaButtonSecondaryStyle: React.CSSProperties = {
    ...ctaButtonStyle,
    background: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff'
  };

  return (
    <>
      <Header />
      <main style={pageStyle}>
        {/* BANNER PRÓXIMAMENTE */}
        <div style={bannerStyle}>
          PRÓXIMAMENTE - Disponible Q1 2026
        </div>

        {/* HERO */}
        <section style={heroStyle}>
          <h1 style={h1Style}>Valida nómina y seguridad social en minutos</h1>
          <p style={subtitleStyle}>
            Automatiza la verificación de nómina electrónica y cruza datos con seguridad social
          </p>
        </section>

        {/* DESCRIPCIÓN BREVE */}
        <section style={contentStyle}>
          <p style={descriptionStyle}>
            Esta solución te permitirá validar automáticamente que todos los empleados en tu nómina electrónica
            coincidan con los registros de seguridad social, detectando inconsistencias, empleados sin afiliación
            y errores en aportes.
          </p>
          <p style={descriptionStyle}>
            Reduce de 1.5-2 horas por cada 10 empleados a solo 10 minutos de revisión, eliminando el trabajo
            manual de comparación entre múltiples sistemas.
          </p>
          <p style={descriptionStyle}>
            <strong>¿Por qué aún no está disponible?</strong> Estamos perfeccionando la integración con las diferentes
            administradoras de seguridad social para garantizar precisión del 100% en las validaciones.
          </p>
        </section>

        {/* CTA */}
        <section style={ctaSectionStyle}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
            Quiero ser de los primeros en probarlo
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#E5E7EB', marginBottom: '2rem' }}>
            Regístrate y te avisaremos cuando esté listo
          </p>
          <div>
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={ctaButtonStyle}
            >
              Quiero ser de los primeros
            </a>
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={ctaButtonSecondaryStyle}
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
