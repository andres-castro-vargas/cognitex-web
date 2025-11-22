import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function ConciliacionesBancariasPage() {
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
          <h1 style={h1Style}>Acaba con el descuadre bancario eterno</h1>
          <p style={subtitleStyle}>
            Automatiza tus conciliaciones bancarias y ahorra 16-20 horas al mes que pierdes buscando partidas
          </p>
        </section>

        {/* EL DOLOR */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>¿Te suena familiar?</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <AlertIcon />
              <span>¿Tus conciliaciones bancarias nunca cuadran a la primera?</span>
            </li>
            <li style={listItemStyle}>
              <AlertIcon />
              <span>¿Pasas horas buscando la partida que falta?</span>
            </li>
            <li style={listItemStyle}>
              <AlertIcon />
              <span>¿Tienes clientes con 2-3 meses de retraso porque "no me dan los números"?</span>
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
                Emparejamiento inteligente
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                Comparamos automáticamente movimientos bancarios con registros contables usando algoritmos inteligentes.
              </p>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>2</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Detección de duplicados y faltantes
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                Identificamos registros duplicados o partidas faltantes que causan descuadres.
              </p>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>3</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Sugerencias de corrección
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                El sistema sugiere correcciones para partidas sin conciliar, acelerando tu trabajo.
              </p>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>4</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Alertas tempranas de inconsistencias
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                Detectamos problemas antes de que se acumulen, evitando retrasos de meses.
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
              <span><strong>Ahorra 16-20 horas al mes</strong> en conciliaciones manuales</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span><strong>Resuelve el 80% de descuadres</strong> automáticamente</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span><strong>Evita retrasos acumulados</strong> con conciliación continua</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span><strong>Genera reportes listos</strong> para entregar al cliente</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span><strong>Detecta errores bancarios</strong> que pasan desapercibidos</span>
            </li>
          </ul>
        </section>

        {/* IDEAL PARA */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Ideal para</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <CheckIcon />
              <span>Contadores con clientes de alto volumen transaccional</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span>Empresas con múltiples cuentas bancarias</span>
            </li>
            <li style={listItemStyle}>
              <CheckIcon />
              <span>Negocios que necesitan conciliación diaria/semanal</span>
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
