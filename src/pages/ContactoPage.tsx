import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar envío de formulario
    console.log('Formulario enviado:', formData);
  };

  // Estilos
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #0A0A0A 0%, #0f1419 50%, #1a1f2e 100%)',
    paddingTop: '80px'
  };

  const heroStyle: React.CSSProperties = {
    padding: '2.5rem 2rem 2rem',
    textAlign: 'center'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
    fontWeight: '700',
    fontFamily: "'Tomorrow', sans-serif",
    background: 'linear-gradient(135deg, #ffffff 0%, #3B82F6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.8rem'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#d1d5db',
    fontFamily: "'Outfit', sans-serif"
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  };

  const getInputStyle = (fieldName: string): React.CSSProperties => ({
    width: '100%',
    padding: '0.7rem 1rem',
    background: 'rgba(30, 64, 175, 0.1)',
    border: `2px solid ${focusedField === fieldName ? '#3B82F6' : 'rgba(59, 130, 246, 0.3)'}`,
    borderRadius: '10px',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontFamily: "'Outfit', sans-serif",
    transition: 'all 0.3s',
    outline: 'none'
  });

  const textareaStyle: React.CSSProperties = {
    ...getInputStyle('mensaje'),
    minHeight: '120px',
    resize: 'vertical'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.4rem',
    color: '#ffffff',
    fontWeight: '500',
    fontSize: '0.9rem'
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 2rem',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 10px 25px rgba(30, 64, 175, 0.3)'
  };

  const cardStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
    padding: '1.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 1
  };

  const floatingBgStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)',
    filter: 'blur(40px)',
    borderRadius: '20px',
    zIndex: -1,
    pointerEvents: 'none'
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '1.2rem',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const contactItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '0.8rem',
    color: '#d1d5db',
    fontSize: '0.95rem'
  };

  const contactItemTitleStyle: React.CSSProperties = {
    fontSize: '0.7rem',
    fontWeight: '600',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.25rem'
  };

  const iconStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    color: '#3B82F6'
  };

  const socialLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '0.7rem',
    color: '#d1d5db',
    textDecoration: 'none',
    transition: 'all 0.3s',
    padding: '0.4rem',
    borderRadius: '8px',
    fontSize: '0.95rem'
  };

  return (
    <>
      <Header />
      <div style={pageStyle}>
        {/* Hero Section */}
        <div style={heroStyle}>
          <h1 style={titleStyle}>Contáctanos</h1>
          <p style={subtitleStyle}>Estamos aquí para responder tus preguntas</p>
        </div>

        {/* Contenido */}
        <div style={containerStyle}>
          {/* COLUMNA IZQUIERDA - Formulario */}
          <div>
            <div style={cardStyle}>
              <div style={floatingBgStyle} />
              <h2 style={cardTitleStyle}>Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit}>
                {/* Nombre */}
                <div style={{ marginBottom: '1.1rem' }}>
                  <label htmlFor="nombre" style={labelStyle}>
                    Nombre completo <span style={{ color: '#3B82F6' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('nombre')}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle('nombre')}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1.1rem' }}>
                  <label htmlFor="email" style={labelStyle}>
                    Email <span style={{ color: '#3B82F6' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle('email')}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                {/* Teléfono */}
                <div style={{ marginBottom: '1.1rem' }}>
                  <label htmlFor="telefono" style={labelStyle}>
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('telefono')}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle('telefono')}
                    placeholder="+57 (xxx) xxx-xxxx"
                  />
                </div>

                {/* Mensaje */}
                <div style={{ marginBottom: '1.1rem' }}>
                  <label htmlFor="mensaje" style={labelStyle}>
                    Mensaje <span style={{ color: '#3B82F6' }}>*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('mensaje')}
                    onBlur={() => setFocusedField(null)}
                    style={textareaStyle}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  style={buttonStyle}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 15px 35px rgba(30, 64, 175, 0.4)'
                    });
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, {
                      transform: 'translateY(0)',
                      boxShadow: '0 10px 25px rgba(30, 64, 175, 0.3)'
                    });
                  }}
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* COLUMNA DERECHA - Información */}
          <div>
            {/* Información de Contacto */}
            <div style={cardStyle}>
              <div style={floatingBgStyle} />
              <h3 style={cardTitleStyle}>Información de Contacto</h3>

              {/* Email */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={contactItemTitleStyle}>Email</div>
                <div style={contactItemStyle}>
                  <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@cognitex.co</span>
                </div>
              </div>

              {/* Teléfono */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={contactItemTitleStyle}>Teléfono</div>
                <div style={contactItemStyle}>
                  <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+57 312 406 9303</span>
                </div>
              </div>

              {/* Ubicación */}
              <div>
                <div style={contactItemTitleStyle}>Ubicación</div>
                <div style={contactItemStyle}>
                  <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Bogotá, Colombia</span>
                </div>
              </div>
            </div>

            {/* Síguenos */}
            <div style={cardStyle}>
              <div style={floatingBgStyle} />
              <h3 style={cardTitleStyle}>Síguenos</h3>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/cognitex.co/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, {
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#3B82F6'
                  });
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, {
                    background: 'transparent',
                    color: '#d1d5db'
                  });
                }}
              >
                <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@cognitex.co</span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@cognitex"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, {
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#3B82F6'
                  });
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, {
                    background: 'transparent',
                    color: '#d1d5db'
                  });
                }}
              >
                <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>@cognitex</span>
              </a>

              {/* Facebook - Próximamente */}
              <div style={{ ...socialLinkStyle, opacity: 0.5, cursor: 'not-allowed' }}>
                <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Próximamente</span>
              </div>

              {/* Twitter/X - Próximamente */}
              <div style={{ ...socialLinkStyle, opacity: 0.5, cursor: 'not-allowed' }}>
                <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
