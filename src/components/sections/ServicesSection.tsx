import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesCarousel.css';

import causacionesImg from '../../assets/services/causaciones.png';
import conciliacionDianImg from '../../assets/services/conciliaciones-dian.png';
import conciliacionesBancariasImg from '../../assets/services/conciliaciones-bancarias.png';
import nominaImg from '../../assets/services/nomina.png';
import notasFinancierasImg from '../../assets/services/notas-financieras.png';
import agendasArlImg from '../../assets/services/agendas-arl.png';
import documentacionSstImg from '../../assets/services/documentacion-sst.png';
import colaboracionTecnologicaImg from '../../assets/services/Colaboracion-Tecnologica.png';
import automatizacionAccionImg from '../../assets/services/Automatizacion-en-Accion.png';

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  status: 'active' | 'coming-soon';
}

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredSstCard, setHoveredSstCard] = useState<string | null>(null);

  // SECCIÓN 1: Soluciones para Contadores
  const contadorServices: ServiceCard[] = [
    {
      id: 'causaciones',
      title: 'Dile adiós a la digitación manual',
      subtitle: 'De 4-5 minutos por factura a 10 segundos',
      link: '/servicios/causaciones',
      status: 'active'
    },
    {
      id: 'conciliacion-dian',
      title: 'Encuentra discrepancias fiscales en 1 click',
      subtitle: 'De 2-3 días de revisión a 1 hora',
      link: '/servicios/conciliacion-dian',
      status: 'active'
    },
    {
      id: 'conciliaciones-bancarias',
      title: 'Acaba con el descuadre bancario eterno',
      subtitle: 'De 4-5 horas semanales a 30 minutos',
      link: '/servicios/conciliaciones-bancarias',
      status: 'active'
    },
    {
      id: 'nomina',
      title: 'Valida nómina y seguridad social en minutos',
      subtitle: 'De 1.5-2 horas por cada 10 empleados a 10 minutos',
      link: '/servicios/nomina',
      status: 'coming-soon'
    },
    {
      id: 'notas-financieras',
      title: 'Actualiza tus notas financieras en segundos',
      subtitle: 'Elimina el copy-paste manual de Excel a Word',
      link: '/servicios/notas-financieras',
      status: 'coming-soon'
    }
  ];

  // SECCIÓN 2: Soluciones para SST
  const sstServices: ServiceCard[] = [
    {
      id: 'agendas-arl',
      title: 'Recupera el 60% del tiempo que pierdes coordinando',
      subtitle: 'Automatización de agendamiento con ARL',
      link: '/servicios/agendas-arl',
      status: 'active'
    },
    {
      id: 'documentacion-sst',
      title: 'Tu documentación SST siempre al día',
      subtitle: 'Centralización, alertas y formularios automatizados',
      link: '/servicios/documentacion-sst',
      status: 'active'
    }
  ];

  const serviceImages: { [key: string]: string } = {
    'causaciones': causacionesImg,
    'conciliacion-dian': conciliacionDianImg,
    'conciliaciones-bancarias': conciliacionesBancariasImg,
    'nomina': nominaImg,
    'notas-financieras': notasFinancierasImg,
    'agendas-arl': agendasArlImg,
    'documentacion-sst': documentacionSstImg
  };

  const sectionStyle: React.CSSProperties = {
    padding: '5rem 2rem',
    background: '#0A0A0A'
  };

  const categoryTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: '700',
    marginBottom: '2.5rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #ffffff 0%, #1E40AF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const mainTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '4rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #ffffff 0%, #1E40AF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const categoryContainerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto 5rem'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem'
  };

  const getCardStyle = (isHovered: boolean): React.CSSProperties => ({
    background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
    borderRadius: '20px',
    border: `1px solid ${isHovered ? '#1E40AF' : '#374151'}`,
    transition: 'all 0.4s',
    overflow: 'hidden',
    cursor: 'pointer',
    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: isHovered ? '0 25px 50px rgba(30, 64, 175, 0.4)' : '0 5px 15px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    textDecoration: 'none',
    display: 'block',
    minWidth: '380px',
    flexShrink: 0
  });

  const getImageStyle = (serviceId: string, isHovered: boolean): React.CSSProperties => ({
    width: '100%',
    height: '180px',
    backgroundImage: `url(${serviceImages[serviceId]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.4s ease',
    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
    overflow: 'hidden'
  });

  const cardContentStyle: React.CSSProperties = {
    padding: '1.5rem'
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '0.5rem',
    lineHeight: '1.3'
  };

  const cardSubtitleStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#9CA3AF',
    lineHeight: '1.5'
  };

  const badgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: '#F59E0B',
    color: '#1F2937',
    padding: '0.4rem 0.8rem',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const customCardStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    padding: '3rem 2rem',
    borderRadius: '20px',
    border: '1px solid #1E40AF',
    textAlign: 'center',
    transition: 'all 0.4s',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block'
  };

  const customTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '1rem'
  };

  const customSubtitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#E5E7EB',
    marginBottom: '1rem',
    fontWeight: '600'
  };

  const customDescStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#D1D5DB',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const carouselContainerStyle: React.CSSProperties = {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
  };

  const carouselTrackStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    animation: 'scroll 60s linear infinite',
    width: 'fit-content'
  };

  const carouselTrackPausedStyle: React.CSSProperties = {
    ...carouselTrackStyle,
    animationPlayState: 'paused'
  };

  const renderServiceCard = (service: ServiceCard, customHoverId?: string) => {
    const effectiveHoverId = customHoverId || service.id;
    const isHovered = hoveredCard === effectiveHoverId;

    const cardContent = (
      <>
        {service.status === 'coming-soon' && (
          <div style={badgeStyle}>Próximamente</div>
        )}
        <div style={getImageStyle(service.id, isHovered)} />
        <div style={cardContentStyle}>
          <h3 style={cardTitleStyle}>{service.title}</h3>
          <p style={cardSubtitleStyle}>{service.subtitle}</p>
        </div>
      </>
    );

    if (service.status === 'active') {
      return (
        <Link
          to={service.link}
          style={getCardStyle(isHovered)}
          onMouseEnter={() => setHoveredCard(effectiveHoverId)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {cardContent}
        </Link>
      );
    }

    return (
      <div
        style={getCardStyle(isHovered)}
        onMouseEnter={() => setHoveredCard(effectiveHoverId)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {cardContent}
      </div>
    );
  };

  return (
    <section id="servicios" style={sectionStyle}>
      <h2 style={mainTitleStyle}>Servicios que Transforman tu Empresa</h2>

      {/* SECCIÓN 1: Soluciones para Contadores - CON CARRUSEL */}
      <div style={categoryContainerStyle}>
        <h3 style={categoryTitleStyle}>Soluciones para Contadores Públicos</h3>
        <div style={carouselContainerStyle}>
          <div style={hoveredCard ? carouselTrackPausedStyle : carouselTrackStyle}>
            {/* Primera copia de las tarjetas */}
            {contadorServices.map((service, index) =>
              renderServiceCard(service, `contador-${index}`)
            )}
            {/* Segunda copia para efecto infinito */}
            {contadorServices.map((service, index) =>
              renderServiceCard(service, `contador-dup-${index}`)
            )}
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: Soluciones para SST - DISEÑO ESPECIAL */}
      <div style={categoryContainerStyle}>
        <h3 style={categoryTitleStyle}>Empresas de Seguridad y Salud en el Trabajo</h3>

        <div style={{
          position: 'relative',
          height: '400px',
          background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
          borderRadius: '20px',
          border: '1px solid #374151',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          {/* Imagen izquierda - Agendas ARL */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '40%',
            backgroundImage: `url(${agendasArlImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            opacity: 0.65,
            maskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)'
          }} />

          {/* Imagen derecha - Documentación SST */}
          <div style={{
            position: 'absolute',
            right: '-5%',
            top: 0,
            bottom: 0,
            width: '45%',
            backgroundImage: `url(${documentacionSstImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center left',
            opacity: 0.65,
            maskImage: 'linear-gradient(to left, black 0%, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 50%, transparent 100%)'
          }} />

          {/* Contenido central */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: '600px',
            padding: '0 2rem'
          }}>
            <div style={{
              background: 'rgba(10, 10, 10, 0.7)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '2.5rem',
              border: '1px solid rgba(30, 64, 175, 0.3)'
            }}>
              <h4 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                Optimiza tu Gestión de SST
              </h4>

              <div style={{
                display: 'grid',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                <Link
                  to="/servicios/agendas-arl"
                  style={{
                    background: hoveredSstCard === 'agendas'
                      ? 'rgba(30, 64, 175, 0.5)'
                      : 'rgba(30, 64, 175, 0.2)',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: hoveredSstCard === 'agendas'
                      ? '2px solid rgba(59, 130, 246, 0.8)'
                      : '1px solid rgba(59, 130, 246, 0.3)',
                    textDecoration: 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'block',
                    transform: hoveredSstCard === 'agendas'
                      ? 'scale(1.05) translateX(8px)'
                      : 'scale(1) translateX(0)',
                    boxShadow: hoveredSstCard === 'agendas'
                      ? '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)'
                      : '0 0 0 rgba(59, 130, 246, 0)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => setHoveredSstCard('agendas')}
                  onMouseLeave={() => setHoveredSstCard(null)}
                >
                  {/* Efecto flash al hover */}
                  {hoveredSstCard === 'agendas' && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      animation: 'flash 0.6s ease-out',
                      pointerEvents: 'none'
                    }} />
                  )}

                  <p style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.3rem',
                    transition: 'all 0.3s'
                  }}>
                    Recupera el 60% del tiempo coordinando
                  </p>
                  <p style={{
                    fontSize: '0.85rem',
                    color: hoveredSstCard === 'agendas' ? '#ffffff' : '#9CA3AF',
                    transition: 'all 0.3s'
                  }}>
                    Automatización de agendamiento con ARL
                  </p>
                </Link>

                <Link
                  to="/servicios/documentacion-sst"
                  style={{
                    background: hoveredSstCard === 'documentacion'
                      ? 'rgba(30, 64, 175, 0.5)'
                      : 'rgba(30, 64, 175, 0.2)',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: hoveredSstCard === 'documentacion'
                      ? '2px solid rgba(59, 130, 246, 0.8)'
                      : '1px solid rgba(59, 130, 246, 0.3)',
                    textDecoration: 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'block',
                    transform: hoveredSstCard === 'documentacion'
                      ? 'scale(1.05) translateX(8px)'
                      : 'scale(1) translateX(0)',
                    boxShadow: hoveredSstCard === 'documentacion'
                      ? '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)'
                      : '0 0 0 rgba(59, 130, 246, 0)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => setHoveredSstCard('documentacion')}
                  onMouseLeave={() => setHoveredSstCard(null)}
                >
                  {/* Efecto flash al hover */}
                  {hoveredSstCard === 'documentacion' && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      animation: 'flash 0.6s ease-out',
                      pointerEvents: 'none'
                    }} />
                  )}

                  <p style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.3rem',
                    transition: 'all 0.3s'
                  }}>
                    Tu documentación SST siempre al día
                  </p>
                  <p style={{
                    fontSize: '0.85rem',
                    color: hoveredSstCard === 'documentacion' ? '#ffffff' : '#9CA3AF',
                    transition: 'all 0.3s'
                  }}>
                    Centralización, alertas y formularios automatizados
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: Automatizaciones a la Medida - REDISEÑADO */}
      <div style={categoryContainerStyle}>
        <h3 style={categoryTitleStyle}>Automatizaciones a la Medida</h3>

        <div style={{
          position: 'relative',
          minHeight: '500px',
          background: 'linear-gradient(135deg, #1E40AF 0%, #0f172a 50%, #1F2937 100%)',
          borderRadius: '20px',
          border: '1px solid #1E40AF',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 2rem',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: hoveredCard === 'custom' ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
          boxShadow: hoveredCard === 'custom'
            ? '0 30px 60px rgba(30, 64, 175, 0.6), 0 0 50px rgba(59, 130, 246, 0.4)'
            : '0 15px 40px rgba(30, 64, 175, 0.4)'
        }}
        onMouseEnter={() => setHoveredCard('custom')}
        onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Imagen izquierda - Colaboración Tecnológica */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '45%',
            backgroundImage: `url(${colaboracionTecnologicaImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            opacity: hoveredCard === 'custom' ? 0.5 : 0.35,
            transition: 'all 0.6s ease',
            maskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 100%)',
            transform: hoveredCard === 'custom' ? 'scale(1.1)' : 'scale(1)'
          }} />

          {/* Imagen derecha - Automatización en Acción */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '45%',
            backgroundImage: `url(${automatizacionAccionImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center left',
            opacity: hoveredCard === 'custom' ? 0.5 : 0.35,
            transition: 'all 0.6s ease',
            maskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)',
            transform: hoveredCard === 'custom' ? 'scale(1.1)' : 'scale(1)'
          }} />

          {/* Banner CTA Profesional */}
          <div style={{
            position: 'absolute',
            top: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            width: 'auto',
            maxWidth: '90%'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)',
              backdropFilter: 'blur(10px)',
              padding: '0.75rem 2.5rem',
              borderRadius: '50px',
              border: '1px solid rgba(59, 130, 246, 0.6)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: hoveredCard === 'custom'
                ? '0 10px 30px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.4)'
                : '0 8px 20px rgba(30, 64, 175, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}>
              <span style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#ffffff',
                letterSpacing: '0.5px',
                whiteSpace: 'nowrap'
              }}>
                Solución Personalizada para tu Negocio
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  animation: 'arrowSlide 1.5s ease-in-out infinite'
                }}
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Efecto glow pulsante */}
          {hoveredCard === 'custom' && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '80%',
              height: '80%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
              animation: 'pulse 2s ease-in-out infinite',
              pointerEvents: 'none'
            }} />
          )}

          {/* Contenido central */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: '700px',
            padding: '0 2rem'
          }}>
            <div style={{
              background: hoveredCard === 'custom'
                ? 'rgba(10, 10, 10, 0.85)'
                : 'rgba(10, 10, 10, 0.75)',
              backdropFilter: 'blur(12px)',
              borderRadius: '20px',
              padding: '3rem 2.5rem',
              border: hoveredCard === 'custom'
                ? '2px solid rgba(59, 130, 246, 0.6)'
                : '1px solid rgba(30, 64, 175, 0.4)',
              transition: 'all 0.4s',
              boxShadow: hoveredCard === 'custom'
                ? '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(59, 130, 246, 0.1)'
                : '0 10px 20px rgba(0, 0, 0, 0.3)'
            }}>
              <p style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: hoveredCard === 'custom' ? '#60A5FA' : '#9CA3AF',
                marginBottom: '1.5rem',
                transition: 'all 0.4s'
              }}>
                Diseñamos automatizaciones a la medida de tu negocio
              </p>

              <p style={{
                fontSize: '1rem',
                color: hoveredCard === 'custom' ? '#D1D5DB' : '#9CA3AF',
                lineHeight: '1.7',
                marginBottom: '2rem',
                transition: 'all 0.4s'
              }}>
                No importa tu industria. Si tienes un proceso repetitivo que consume tiempo,
                podemos automatizarlo. Ingenieros, abogados, médicos, arquitectos...
                cada negocio tiene oportunidades de ahorro.
              </p>

              <Link
                to="/contacto"
                style={{
                  display: 'inline-block',
                  background: hoveredCard === 'custom'
                    ? 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)'
                    : 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
                  color: 'white',
                  padding: '1rem 3rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  transition: 'all 0.4s',
                  boxShadow: hoveredCard === 'custom'
                    ? '0 15px 35px rgba(59, 130, 246, 0.5)'
                    : '0 10px 25px rgba(30, 64, 175, 0.4)',
                  transform: hoveredCard === 'custom' ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                Hablemos de tu proyecto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
