import { Link } from 'react-router-dom';
import logoCognitex from '../../assets/logo_cognitex.png';

export default function Footer({ showMarquee = false }: { showMarquee?: boolean }) {
  // Frases para el marquee
  const phrases = [
    'Automatización Inteligente',
    'Procesos Optimizados',
    'Resultados Medibles',
    'Tecnología que Transforma',
    'Tu Negocio al Siguiente Nivel'
  ];

  // Duplicar frases para efecto infinito
  const marqueeContent = [...phrases, ...phrases];

  const marqueeContainerStyle: React.CSSProperties = {
    background: '#F8FAFC',
    overflow: 'hidden',
    padding: '1rem 0',
    borderTop: '1px solid #E2E8F0',
    borderBottom: '1px solid #E2E8F0',
    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
  };

  const marqueeWrapperStyle: React.CSSProperties = {
    display: 'flex',
    animation: 'marquee 20s linear infinite',
    whiteSpace: 'nowrap'
  };

  const marqueeTextStyle: React.CSSProperties = {
    color: '#64748B',
    fontSize: '1.1rem',
    fontWeight: '500',
    paddingRight: '3rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '3rem'
  };

  const separatorStyle: React.CSSProperties = {
    width: '6px',
    height: '6px',
    background: '#3B82F6',
    borderRadius: '50%',
    display: 'inline-block'
  };

  const footerStyle: React.CSSProperties = {
    background: '#F8FAFC',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderTop: '1px solid #E2E8F0',
    paddingTop: showMarquee ? '5rem' : '3rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingBottom: '1.5rem',
    marginTop: '5rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const gradientOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(ellipse 900px 650px at bottom left, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 25%, rgba(59, 130, 246, 0.03) 50%, transparent 75%),
      radial-gradient(ellipse 600px 500px at bottom right, rgba(30, 64, 175, 0.08) 0%, transparent 60%)
    `,
    pointerEvents: 'none',
    zIndex: 0
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '2rem'
  };

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  };

  const logoStyle: React.CSSProperties = {
    height: '60px',
    objectFit: 'contain',
    marginBottom: '1rem'
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: "'Tomorrow', sans-serif",
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1E293B',
    letterSpacing: '1px',
    marginBottom: '0.5rem'
  };

  const descriptionStyle: React.CSSProperties = {
    color: '#64748B',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    maxWidth: '280px'
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontFamily: "'Tomorrow', sans-serif",
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '1rem'
  };

  const linkStyle: React.CSSProperties = {
    color: '#64748B',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.3s',
    display: 'block',
    marginBottom: '0.7rem'
  };

  const socialContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    marginTop: '1rem'
  };

  const socialLinkStyle: React.CSSProperties = {
    color: '#64748B',
    fontSize: '1.5rem',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const dividerStyle: React.CSSProperties = {
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(30, 64, 175, 0.2), transparent)',
    margin: '2rem 0 1.5rem'
  };

  const copyrightStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: '0.9rem'
  };

  return (
    <>
      {/* Marquee/Deslizante */}
      {showMarquee && (
        <div style={marqueeContainerStyle}>
          <div style={marqueeWrapperStyle}>
            {marqueeContent.map((phrase, index) => (
              <div key={index} style={marqueeTextStyle}>
                {phrase}
                <span style={separatorStyle} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer principal */}
      <footer style={footerStyle}>
        {/* Overlay de gradiente azul/morado neón en las esquinas */}
        <div style={gradientOverlayStyle} />

        <div style={containerStyle}>
          <div style={gridStyle}>
            {/* COLUMNA 1 - Logo y descripción */}
            <div style={columnStyle}>
              <img src={logoCognitex} alt="COGNITEX Logo" style={logoStyle} />
              <p style={logoTextStyle}>COGNITEX</p>
              <p style={descriptionStyle}>
                Automatización inteligente para tu negocio. Transformamos procesos en resultados medibles.
              </p>
            </div>

            {/* COLUMNA 2 - Enlaces */}
            <div style={columnStyle}>
              <h3 style={sectionTitleStyle}>Enlaces</h3>
              <Link
                to="/servicios"
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                Servicios
              </Link>
              <Link
                to="/nosotros"
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                Nosotros
              </Link>
              <Link
                to="/tienda"
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                Tienda
              </Link>
              <Link
                to="/contacto"
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                Contacto
              </Link>
            </div>

            {/* COLUMNA 3 - Redes sociales */}
            <div style={columnStyle}>
              <h3 style={sectionTitleStyle}>Síguenos</h3>
              <div style={socialContainerStyle}>
                <a
                  href="https://www.instagram.com/cognitex.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                >
                  <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@cognitex"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                >
                  <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={dividerStyle} />

          {/* Copyright */}
          <p style={copyrightStyle}>
            © 2025 COGNITEX. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
