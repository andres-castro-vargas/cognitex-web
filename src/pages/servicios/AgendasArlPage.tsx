import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function AgendasArlPage() {
  const pageStyle: React.CSSProperties = {
    background: '#0A0A0A',
    minHeight: '100vh',
    color: '#ffffff'
  };

  const sectionStyle: React.CSSProperties = {
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
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

  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '2rem',
    color: '#ffffff'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    color: '#9CA3AF',
    lineHeight: '1.6',
    maxWidth: '700px',
    margin: '0 auto'
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: '0',
    margin: '2rem 0'
  };

  const listItemStyle: React.CSSProperties = {
    padding: '1rem 0',
    fontSize: '1.1rem',
    color: '#D1D5DB',
    lineHeight: '1.6',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  };

  const iconStyle: React.CSSProperties = {
    minWidth: '24px',
    minHeight: '24px',
    marginTop: '0.2rem'
  };

  const stepsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gap: '1.5rem',
    margin: '2rem 0'
  };

  const stepStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #374151'
  };

  const stepNumberStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    color: '#ffffff',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    marginBottom: '1rem',
    fontSize: '1.2rem'
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

  const CheckIcon = () => (
    <svg style={iconStyle} fill="none" viewBox="0 0 24 24" stroke="#3B82F6" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const AlertIcon = () => (
    <svg style={iconStyle} fill="none" viewBox="0 0 24 24" stroke="#F59E0B" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );

  return (
    <>
      <Header />
      <main style={pageStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <h1 style={h1Style}>Recupera el 60% del tiempo que pierdes coordinando</h1>
          <p style={subtitleStyle}>
            Automatiza el agendamiento con ARL y dedícate a lo que realmente importa: ejecutar tu programa SST
          </p>
        </section>

        {/* EL DOLOR */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>¿Te suena familiar?</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <AlertIcon />
              <span>¿Pasas más tiempo coordinando inspecciones que ejecutándolas?</span>
            </li>
            <li style={listItemStyle}>
              <AlertIcon />
              <span>¿Los correos con ARL se pierden en bandejas de entrada interminables?</span>
            </li>
            <li style={listItemStyle}>
              <AlertIcon />
              <span>¿Los compromisos quedan sin seguimiento hasta que es tarde?</span>
            </li>
          </ul>
        </section>

        {/* CÓMO FUNCIONA */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Cómo funciona</h2>
          <div style={stepsContainerStyle}>
            <div style={stepStyle}>
              <div style={stepNumberStyle}>1</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Automatización de agendamiento con ARL
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                Centraliza todas las comunicaciones con tu ARL en un solo lugar. El sistema gestiona fechas y horarios automáticamente.
              </p>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>2</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Recordatorios automáticos
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                Envía recordatorios a todas las partes involucradas antes de cada inspección o actividad programada.
              </p>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>3</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Seguimiento de compromisos con alertas
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                Registra compromisos adquiridos y recibe alertas antes de vencimientos, nunca más olvides un compromiso.
              </p>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>4</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Historial completo de comunicaciones
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                Consulta fácilmente el historial de todas tus interacciones con la ARL en un solo lugar.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Resultados que puedes esperar</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <CheckIcon />
              <span><strong>Recupera el 60% del tiempo</strong> dedicado a coordinación administrativa</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span><strong>Nunca olvides una inspección</strong> o compromiso</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span><strong>Historial completo</strong> de comunicaciones con ARL</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span><strong>Mejor relación con ARL</strong> por cumplimiento puntual</span>
            </li>
          </ul>
        </section>

        {/* IDEAL PARA */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Ideal para</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <CheckIcon />
              <span>Coordinadores SST en empresas medianas y grandes</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span>Consultores SST con múltiples clientes</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span>Empresas con inspecciones frecuentes</span>
            </li>
          </ul>
        </section>

        {/* CTA FINAL */}
        <section style={ctaSectionStyle}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
            ¿Te identificas con esto?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#E5E7EB', marginBottom: '2rem' }}>
            Hablemos sobre cómo podemos ayudarte
          </p>
          <div>
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={ctaButtonStyle}
            >
              Agenda una consultoría gratuita
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
