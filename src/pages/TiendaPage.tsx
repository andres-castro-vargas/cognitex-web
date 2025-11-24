import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function TiendaPage() {
  const products = [
    {
      id: 1,
      title: 'Plantillas de Automatización Notion',
      price: '$149',
      currency: 'USD',
      description: 'Templates pre-configurados para contadores con procesos de causaciones, conciliaciones y seguimiento DIAN',
      features: [
        '5 plantillas profesionales Notion',
        'Video tutoriales paso a paso',
        'Soporte técnico 30 días',
        'Actualizaciones gratuitas',
        'Guía de implementación'
      ],
      badge: 'Nuevo',
      badgeColor: '#10B981',
      popular: false
    },
    {
      id: 2,
      title: 'Paquete de Automatización Básico',
      price: '$499',
      currency: 'USD',
      description: 'Automatización completa de 1 proceso empresarial con hasta 50 ejecuciones mensuales',
      features: [
        'Implementación de 1 automatización',
        'Hasta 50 ejecuciones/mes',
        'Capacitación del equipo',
        'Soporte técnico 90 días',
        'Ajustes y optimización'
      ],
      badge: 'Más Popular',
      badgeColor: '#3B82F6',
      popular: true
    },
    {
      id: 3,
      title: 'Auditoría de Procesos',
      price: '$299',
      currency: 'USD',
      description: 'Análisis completo de oportunidades de automatización en tu empresa con reporte detallado',
      features: [
        'Análisis de procesos actuales',
        'Identificación de oportunidades',
        'Reporte detallado profesional',
        'Roadmap de implementación',
        'Sesión de presentación 1 hora'
      ],
      badge: null,
      badgeColor: null,
      popular: false
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Header />

      {/* Hero Section con gradiente azul */}
      <section style={{
        background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%)',
        padding: '6rem 2rem 3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Patrón decorativo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
          opacity: 0.3
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '1.5rem',
            textShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            Productos y Servicios
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.95)',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Soluciones profesionales para automatizar tu negocio. Desde plantillas listas para usar
            hasta implementaciones personalizadas.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{
        padding: '3rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: product.popular ? '2px solid #3B82F6' : '1px solid #E5E7EB',
                padding: '2rem',
                boxShadow: product.popular
                  ? '0 20px 60px rgba(59, 130, 246, 0.25)'
                  : '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'visible',
                transform: product.popular ? 'scale(1.05)' : 'scale(1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(' + (product.popular ? '1.05' : '1') + ')';
                e.currentTarget.style.boxShadow = product.popular
                  ? '0 25px 70px rgba(59, 130, 246, 0.35)'
                  : '0 20px 50px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(' + (product.popular ? '1.05' : '1') + ')';
                e.currentTarget.style.boxShadow = product.popular
                  ? '0 20px 60px rgba(59, 130, 246, 0.25)'
                  : '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              {/* Badge */}
              {product.badge && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '1.5rem',
                  zIndex: 10,
                  background: product.badgeColor,
                  color: '#FFFFFF',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: `0 4px 12px ${product.badgeColor}40`
                }}>
                  {product.badge}
                </div>
              )}

              {/* Header con gradiente */}
              <div style={{
                background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
                margin: '-2rem -2rem 1.5rem',
                padding: '2rem 2rem 1.5rem',
                borderRadius: '20px 20px 0 0'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1F2937',
                  marginBottom: '0.5rem'
                }}>
                  {product.title}
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <span style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {product.price}
                  </span>
                  <span style={{
                    fontSize: '1rem',
                    color: '#6B7280',
                    fontWeight: '500'
                  }}>
                    {product.currency}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{
                color: '#6B7280',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {product.description}
              </p>

              {/* Features List */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.5rem 0'
              }}>
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.6rem',
                      color: '#4B5563',
                      fontSize: '0.9rem'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="10" cy="10" r="10" fill="#3B82F6" fillOpacity="0.1"/>
                      <path d="M6 10l2 2 6-6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/contacto"
                style={{
                  display: 'block',
                  background: product.popular
                    ? 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)'
                    : '#FFFFFF',
                  color: product.popular ? '#FFFFFF' : '#1E40AF',
                  border: product.popular ? 'none' : '2px solid #1E40AF',
                  padding: '1rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  boxShadow: product.popular
                    ? '0 8px 20px rgba(30, 64, 175, 0.3)'
                    : '0 4px 12px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  if (product.popular) {
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(30, 64, 175, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  } else {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'transparent';
                  }
                }}
                onMouseLeave={(e) => {
                  if (product.popular) {
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 64, 175, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  } else {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#1E40AF';
                    e.currentTarget.style.borderColor = '#1E40AF';
                  }
                }}
              >
                Solicitar Información
              </Link>
            </div>
          ))}
        </div>

        {/* Info adicional */}
        <div style={{
          marginTop: '3rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%)',
          borderRadius: '20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(30, 64, 175, 0.4)'
        }}>
          {/* Patrón animado de fondo */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.03) 10px,
              rgba(255, 255, 255, 0.03) 20px
            )`,
            animation: 'slidePattern 20s linear infinite',
            pointerEvents: 'none'
          }}></div>

          {/* Círculos decorativos flotantes */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '-100px',
            left: '-100px',
            animation: 'float 6s ease-in-out infinite',
            pointerEvents: 'none'
          }}></div>

          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            bottom: '-50px',
            right: '-50px',
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '1s',
            pointerEvents: 'none'
          }}></div>

          {/* Contenido */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              ¿Necesitas algo personalizado?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: '1.6'
            }}>
              Si ninguno de estos productos se ajusta a lo que buscas, podemos crear una solución completamente personalizada para tu negocio.
            </p>
            <Link
              to="/contacto"
              style={{
                display: 'inline-block',
                background: 'white',
                color: '#1E40AF',
                padding: '1rem 3rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes slidePattern {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(20px) translateY(20px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>
    </div>
  );
}
