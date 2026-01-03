import { Target, Users, Zap, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NetworkBackground from '../components/ui/NetworkBackground';

export default function NosotrosPage() {
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
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.15rem',
    color: '#64748B',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.7'
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

  const cardsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  };

  const cardStyle: React.CSSProperties = {
    background: '#F8FAFC',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    textAlign: 'center'
  };

  const iconContainerStyle: React.CSSProperties = {
    width: '56px',
    height: '56px',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem'
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '0.75rem'
  };

  const cardDescStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748B',
    lineHeight: '1.6'
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
    marginBottom: '1rem',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const ctaDescStyle: React.CSSProperties = {
    fontSize: '1.05rem',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: '2rem',
    maxWidth: '500px',
    margin: '0 auto 2rem'
  };

  const ctaButtonWhiteStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2.5rem',
    background: '#FFFFFF',
    color: '#1E40AF',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
  };

  return (
    <>
      <div style={pageStyle}>
        <NetworkBackground />
        <Header />

        <section style={heroStyle}>
          <h1 style={titleStyle}>Automatizamos para que tu crezcas</h1>
          <p style={subtitleStyle}>
            Somos un equipo apasionado por eliminar el trabajo repetitivo de los contadores.
            Creemos que tu tiempo vale mas que digitar facturas.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Lo que nos mueve</h2>

          <div style={cardsContainerStyle}>
            <div style={cardStyle}>
              <div style={iconContainerStyle}>
                <Target size={28} color="#FFFFFF" />
              </div>
              <h3 style={cardTitleStyle}>Nuestra Mision</h3>
              <p style={cardDescStyle}>
                Liberar a los contadores del trabajo manual para que puedan enfocarse en lo que realmente importa: asesorar a sus clientes.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={iconContainerStyle}>
                <Zap size={28} color="#FFFFFF" />
              </div>
              <h3 style={cardTitleStyle}>Nuestro Enfoque</h3>
              <p style={cardDescStyle}>
                Desarrollamos herramientas que automatizan lo tedioso sin reemplazar el criterio profesional. Tu siempre tienes el control.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={iconContainerStyle}>
                <Users size={28} color="#FFFFFF" />
              </div>
              <h3 style={cardTitleStyle}>Nuestro Compromiso</h3>
              <p style={cardDescStyle}>
                Acompanamos a cada cliente en su transicion hacia procesos mas eficientes. Tu exito es nuestro exito.
              </p>
            </div>
          </div>
        </section>

        <section style={ctaSectionStyle}>
          <h2 style={ctaTitleStyle}>¿Listo para conocernos?</h2>
          <p style={ctaDescStyle}>
            Cuentanos sobre tu firma y descubre como podemos ayudarte a crecer.
          </p>
          <a
            href="https://wa.me/573124069303?text=Hola,%20quiero%20conocer%20mas%20sobre%20Cognitex"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonWhiteStyle}
          >
            Hablar con nuestro equipo
            <ArrowRight size={18} />
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
}
