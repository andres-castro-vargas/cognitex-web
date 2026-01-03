import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NetworkBackground from '../components/ui/NetworkBackground';

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

  // Estilos - Tema Claro
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#FFFFFF',
    position: 'relative'
  };

  const heroStyle: React.CSSProperties = {
    paddingTop: '120px',
    paddingBottom: '2rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
    fontWeight: '700',
    fontFamily: "'Tomorrow', sans-serif",
    background: 'linear-gradient(135deg, #1E293B 0%, #3B82F6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#64748B',
    fontFamily: "'Outfit', sans-serif"
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    position: 'relative',
    zIndex: 10
  };

  const getInputStyle = (fieldName: string): React.CSSProperties => ({
    width: '100%',
    padding: '0.875rem 1rem',
    background: '#FFFFFF',
    border: `2px solid ${focusedField === fieldName ? '#3B82F6' : '#E2E8F0'}`,
    borderRadius: '12px',
    color: '#1E293B',
    fontSize: '0.95rem',
    fontFamily: "'Outfit', sans-serif",
    transition: 'all 0.3s',
    outline: 'none'
  });

  const textareaStyle: React.CSSProperties = {
    ...getInputStyle('mensaje'),
    minHeight: '140px',
    resize: 'vertical'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#1E293B',
    fontWeight: '500',
    fontSize: '0.9rem'
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 10px 25px rgba(30, 64, 175, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  };

  const cardStyle: React.CSSProperties = {
    background: '#FFFFFF',
    padding: '2rem',
    borderRadius: '24px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    marginBottom: '1.5rem'
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '1.25rem',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const contactItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.25rem',
    color: '#1E293B',
    fontSize: '0.95rem'
  };

  const contactItemTitleStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.35rem'
  };

  const iconContainerStyle: React.CSSProperties = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  };

  const socialLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
    color: '#1E293B',
    textDecoration: 'none',
    transition: 'all 0.3s',
    padding: '0.75rem',
    borderRadius: '12px',
    fontSize: '0.95rem',
    border: '1px solid #E2E8F0'
  };

  return (
    <>
      <div style={pageStyle}>
        <NetworkBackground />
        <Header />

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
              <h2 style={cardTitleStyle}>Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit}>
                {/* Nombre */}
                <div style={{ marginBottom: '1.25rem' }}>
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
                <div style={{ marginBottom: '1.25rem' }}>
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
                <div style={{ marginBottom: '1.25rem' }}>
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
                <div style={{ marginBottom: '1.5rem' }}>
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
                      boxShadow: '0 15px 35px rgba(30, 64, 175, 0.35)'
                    });
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, {
                      transform: 'translateY(0)',
                      boxShadow: '0 10px 25px rgba(30, 64, 175, 0.25)'
                    });
                  }}
                >
                  <Send size={20} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* COLUMNA DERECHA - Información */}
          <div>
            {/* Información de Contacto */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Información de Contacto</h3>

              {/* Email */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={contactItemTitleStyle}>Email</div>
                <div style={contactItemStyle}>
                  <div style={iconContainerStyle}>
                    <Mail size={20} color="#FFFFFF" />
                  </div>
                  <span>info@cognitex.co</span>
                </div>
              </div>

              {/* Teléfono */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={contactItemTitleStyle}>Teléfono</div>
                <div style={contactItemStyle}>
                  <div style={iconContainerStyle}>
                    <Phone size={20} color="#FFFFFF" />
                  </div>
                  <span>+57 312 406 9303</span>
                </div>
              </div>

              {/* Ubicación */}
              <div>
                <div style={contactItemTitleStyle}>Ubicación</div>
                <div style={contactItemStyle}>
                  <div style={iconContainerStyle}>
                    <MapPin size={20} color="#FFFFFF" />
                  </div>
                  <span>Bogotá, Colombia</span>
                </div>
              </div>
            </div>

            {/* Síguenos */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Síguenos</h3>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/cognitex.co/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, {
                    background: '#F8FAFC',
                    borderColor: '#3B82F6'
                  });
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, {
                    background: 'transparent',
                    borderColor: '#E2E8F0'
                  });
                }}
              >
                <div style={{ ...iconContainerStyle, background: 'linear-gradient(135deg, #E1306C 0%, #F77737 100%)' }}>
                  <Instagram size={20} color="#FFFFFF" />
                </div>
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
                    background: '#F8FAFC',
                    borderColor: '#3B82F6'
                  });
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, {
                    background: 'transparent',
                    borderColor: '#E2E8F0'
                  });
                }}
              >
                <div style={{ ...iconContainerStyle, background: '#000000' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span>@cognitex</span>
              </a>

              {/* Facebook - Próximamente */}
              <div style={{ ...socialLinkStyle, opacity: 0.5, cursor: 'not-allowed' }}>
                <div style={{ ...iconContainerStyle, background: '#CBD5E1' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span style={{ color: '#94A3B8' }}>Próximamente</span>
              </div>

              {/* Twitter/X - Próximamente */}
              <div style={{ ...socialLinkStyle, opacity: 0.5, cursor: 'not-allowed', marginBottom: 0 }}>
                <div style={{ ...iconContainerStyle, background: '#CBD5E1' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span style={{ color: '#94A3B8' }}>Próximamente</span>
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
