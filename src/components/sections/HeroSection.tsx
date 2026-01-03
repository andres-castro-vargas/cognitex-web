import { useState, useEffect } from 'react';
import Robot from '../ui/Robot';

interface HeroSectionProps {
  onOpenModal?: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Efecto para ocultar/mostrar la flecha de scroll basado en scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section className="relative min-h-screen flex items-center justify-center pt-12 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="w-full max-w-[1200px] mx-auto text-center z-10">

        {/* Robot - centrado y con tamaño ajustado */}
        <div className="flex justify-center items-center w-full mb-4 scale-90">
          <Robot />
        </div>

        {/* Título con gradiente - tamaño reducido para laptops */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 bg-gradient-to-r from-[#1E293B] via-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent leading-tight"
          style={{ fontFamily: "'Tomorrow', sans-serif" }}
        >
          Automatización Inteligente para tu Negocio
        </h1>

        {/* Subtítulo - CENTRADO con espaciado reducido */}
        <p
          className="text-base sm:text-lg md:text-xl text-[#64748B] leading-relaxed"
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '1rem auto 2rem auto',
            padding: '0 1rem'
          }}
        >
          Impulsamos el crecimiento de tu empresa mediante soluciones inteligentes
          que operan sin interrupciones. Cada proceso, optimizado. Cada resultado, medible.
        </p>

        {/* Botones CTA - con estilos exactos del original */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Botón primario - Abre modal de automatización */}
          <button
            style={ctaPrimaryStyle}
            onClick={onOpenModal}
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

        {/* Indicador de scroll - perfectamente centrado */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          style={{
            opacity: showScrollIndicator ? 1 : 0,
            transition: 'opacity 0.3s ease',
            transform: `translateX(-50%) ${showScrollIndicator ? 'translateY(0)' : 'translateY(10px)'}`
          }}
        >
          <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
