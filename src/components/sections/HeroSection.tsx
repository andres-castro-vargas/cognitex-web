import { useState } from 'react';
import Robot from '../ui/Robot';

export default function HeroSection() {
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  // Estilos EXACTOS del botón primario del original
  const ctaPrimaryStyle: React.CSSProperties = {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    color: 'white',
    padding: '1rem 2.5rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s',
    boxShadow: '0 15px 35px rgba(30, 64, 175, 0.3)',
    cursor: 'pointer',
    border: 'none'
  };

  // Estilos EXACTOS del botón secundario del original
  const ctaSecondaryStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.8rem',
    background: 'transparent',
    color: isSecondaryHovered ? 'white' : '#3B82F6',
    padding: '1rem 2.5rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    border: '2px solid #3B82F6',
    transition: 'all 0.3s',
    position: 'relative',
    overflow: 'hidden',
    transform: isSecondaryHovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: isSecondaryHovered ? '0 15px 35px rgba(30, 64, 175, 0.3)' : 'none'
  };

  // Pseudo-elemento ::before para el efecto de llenado
  const ctaSecondaryBeforeStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: isSecondaryHovered ? 0 : '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    transition: 'left 0.3s',
    zIndex: -1
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="w-full max-w-[1200px] mx-auto text-center z-10">

        {/* Robot - centrado */}
        <div className="flex justify-center items-center w-full mb-8">
          <Robot />
        </div>

        {/* Título con gradiente */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent leading-tight"
          style={{ fontFamily: "'Tomorrow', sans-serif" }}
        >
          Automatización Inteligente para tu Negocio
        </h1>

        {/* Subtítulo - CENTRADO */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed"
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '1.5rem auto 3rem auto',
            padding: '0 1rem'
          }}
        >
          Impulsamos el crecimiento de tu empresa mediante soluciones inteligentes
          que operan sin interrupciones. Cada proceso, optimizado. Cada resultado, medible.
        </p>

        {/* Botones CTA - con estilos exactos del original */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Botón primario - EXACTO del original */}
          <button
            style={ctaPrimaryStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, {
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 20px 45px rgba(30, 64, 175, 0.5)'
              });
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, {
                transform: 'translateY(0) scale(1)',
                boxShadow: '0 15px 35px rgba(30, 64, 175, 0.3)'
              });
            }}
          >
            Inicia o Cotiza tu Automatización
          </button>

          {/* Botón secundario - EXACTO del original */}
          <a
            href="https://calendar.app.google/uZEHQ1FiMa5RVh9p8"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaSecondaryStyle}
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
          >
            {/* Pseudo-elemento ::before para el efecto de llenado */}
            <div style={ctaSecondaryBeforeStyle} />

            <svg
              style={{ width: '1.2rem', height: '1.2rem', position: 'relative', zIndex: 1 }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span style={{ position: 'relative', zIndex: 1 }}>Agenda una Consultoría Gratuita</span>
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
