import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoCognitex from '../../assets/logo_cognitex.png';
import AccessModal from '../ui/AccessModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  // Estilos con GLASSMORPHISM - Tema Claro
  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: 'rgba(255, 255, 255, 0.85)', // GLASSMORPHISM claro
    backdropFilter: 'blur(12px)', // GLASSMORPHISM
    WebkitBackdropFilter: 'blur(12px)', // Safari
    zIndex: 1000,
    padding: '1rem 0',
    borderBottom: '1px solid rgba(30, 64, 175, 0.15)',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
  };

  const navStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    alignItems: 'center',
    padding: '0 2rem',
    gap: '2rem'
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: "'Tomorrow', sans-serif",
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1E293B',
    letterSpacing: '1px',
    textDecoration: 'none'
  };

  const loginBtnStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    color: 'white',
    padding: '0.6rem 1.3rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s',
    boxShadow: '0 5px 15px rgba(30, 64, 175, 0.3)',
    border: 'none',
    cursor: 'pointer'
  };

  const centerLogoStyle: React.CSSProperties = {
    height: '45px',
    objectFit: 'contain',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isLogoHovered ? 'scale(1.15) rotateY(10deg)' : 'scale(1) rotateY(0deg)',
    filter: isLogoHovered ? 'drop-shadow(0 0 15px #3B82F6) drop-shadow(0 0 30px #1E40AF)' : 'none'
  };

  return (
    <>
      <header style={headerStyle}>
        {/* Línea azul inferior - sutil para tema claro */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(to right, transparent, #3B82F6, transparent)',
            opacity: 0.6
          }}
        />

        <nav style={navStyle} className="flex md:grid justify-between md:justify-normal md:grid-cols-[1fr_auto_1fr]">
          {/* IZQUIERDA: Logo imagen (móvil) / Logo texto (desktop) y Redes Sociales */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* Logo imagen - solo móvil */}
            <img
              src={logoCognitex}
              alt="COGNITEX Logo"
              className="md:hidden"
              style={{ height: '40px', objectFit: 'contain' }}
            />

            {/* Texto COGNITEX - solo desktop */}
            <Link to="/" style={logoTextStyle} className="hidden md:block">
              COGNITEX
            </Link>

            {/* Redes sociales - solo desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://www.instagram.com/cognitex.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3B82F6] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@cognitex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3B82F6] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* CENTRO: Logo COGNITEX */}
          <div className="hidden md:flex justify-center">
            <img
              src={logoCognitex}
              alt="COGNITEX Logo"
              style={centerLogoStyle}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            />
          </div>

          {/* DERECHA: Menú Desktop */}
          <div className="hidden md:flex items-center justify-end gap-8">
            <Link to="/" className="text-[#1E293B] hover:text-[#3B82F6] transition-all duration-300 font-medium text-base">
              Inicio
            </Link>
            <Link
              to="/servicios"
              style={{
                color: '#1E293B',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#1E293B'}
            >
              Servicios
            </Link>
            <Link
              to="/nosotros"
              style={{
                color: '#1E293B',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#1E293B'}
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              style={{
                color: '#1E293B',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#1E293B'}
            >
              Contacto
            </Link>
            <button
              style={loginBtnStyle}
              onClick={() => setIsAccessModalOpen(true)}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(30, 64, 175, 0.4)'
                });
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, {
                  transform: 'translateY(0)',
                  boxShadow: '0 5px 15px rgba(30, 64, 175, 0.3)'
                });
              }}
            >
              Acceder
            </button>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button
              className="text-[#1E293B] p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 z-[60]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay borroso */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menú Móvil Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isMenuOpen ? 0 : '-320px',
          height: '100vh',
          width: '320px',
          zIndex: 9999,
          background: 'linear-gradient(180deg, #0A0A0A 0%, #0f172a 50%, #1E40AF 100%)',
          transition: 'right 0.3s ease-in-out',
          overflowY: 'auto'
        }}
        className="md:hidden"
      >
        {/* Botón cerrar */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '2rem' }}>
          <button
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menú Items */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 2rem' }}>
          {/* Inicio */}
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-[#3B82F6] transition-all duration-300 font-medium text-lg"
          >
            Inicio
          </Link>

          {/* Línea divisora */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.6), transparent)',
            margin: '0.5rem 0',
            boxShadow: '0 0 8px #3B82F6'
          }} />

          {/* Servicios */}
          <Link
            to="/servicios"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1.25rem',
              padding: '1.5rem 0',
              textAlign: 'center',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            Servicios
          </Link>

          {/* Línea divisora */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.6), transparent)',
            margin: '0.5rem 0',
            boxShadow: '0 0 8px #3B82F6'
          }} />

          {/* Nosotros */}
          <Link
            to="/nosotros"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1.25rem',
              padding: '1.5rem 0',
              textAlign: 'center',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            Nosotros
          </Link>

          {/* Línea divisora */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.6), transparent)',
            margin: '0.5rem 0',
            boxShadow: '0 0 8px #3B82F6'
          }} />

          {/* Contacto */}
          <Link
            to="/contacto"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1.25rem',
              padding: '1.5rem 0',
              textAlign: 'center',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            Contacto
          </Link>

          {/* Línea divisora */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.6), transparent)',
            margin: '0.5rem 0',
            boxShadow: '0 0 8px #3B82F6'
          }} />

          {/* Acceder */}
          <div style={{ paddingTop: '1.5rem' }}>
            <button
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                fontSize: '1.125rem',
                width: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: 'none'
              }}
              onClick={() => {
                setIsMenuOpen(false);
                setIsAccessModalOpen(true);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#3B82F6';
                e.currentTarget.style.borderColor = '#3B82F6';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Acceder
            </button>
          </div>
        </div>

        {/* Footer del drawer */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '2rem', right: '2rem' }}>
          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), transparent)',
            boxShadow: '0 0 8px #3B82F6'
          }} />
          <p style={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.3)',
            fontSize: '0.875rem',
            marginTop: '1rem',
            fontFamily: "'Tomorrow', sans-serif"
          }}>
            COGNITEX
          </p>
        </div>
      </div>

      {/* Modal de Acceso */}
      <AccessModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
      />
    </>
  );
}
