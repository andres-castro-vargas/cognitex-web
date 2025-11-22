import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  status: 'active' | 'coming-soon';
}

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
    display: 'block'
  });

  const imagePlaceholderStyle: React.CSSProperties = {
    width: '100%',
    height: '180px',
    background: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6B7280',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

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

  const renderServiceCard = (service: ServiceCard) => {
    const isHovered = hoveredCard === service.id;

    const cardContent = (
      <>
        {service.status === 'coming-soon' && (
          <div style={badgeStyle}>Próximamente</div>
        )}
        <div style={imagePlaceholderStyle}>
          800 x 450
        </div>
        <div style={cardContentStyle}>
          <h3 style={cardTitleStyle}>{service.title}</h3>
          <p style={cardSubtitleStyle}>{service.subtitle}</p>
        </div>
      </>
    );

    if (service.status === 'active') {
      return (
        <Link
          key={service.id}
          to={service.link}
          style={getCardStyle(isHovered)}
          onMouseEnter={() => setHoveredCard(service.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {cardContent}
        </Link>
      );
    }

    return (
      <div
        key={service.id}
        style={getCardStyle(isHovered)}
        onMouseEnter={() => setHoveredCard(service.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {cardContent}
      </div>
    );
  };

  return (
    <section id="servicios" style={sectionStyle}>
      <h2 style={mainTitleStyle}>Soluciones que Transforman tu Empresa</h2>

      {/* SECCIÓN 1: Soluciones para Contadores */}
      <div style={categoryContainerStyle}>
        <h3 style={categoryTitleStyle}>Soluciones para Contadores</h3>
        <div style={gridStyle}>
          {contadorServices.map(renderServiceCard)}
        </div>
      </div>

      {/* SECCIÓN 2: Soluciones para SST */}
      <div style={categoryContainerStyle}>
        <h3 style={categoryTitleStyle}>Soluciones para SST</h3>
        <div style={gridStyle}>
          {sstServices.map(renderServiceCard)}
        </div>
      </div>

      {/* SECCIÓN 3: Automatizaciones a la Medida */}
      <div style={categoryContainerStyle}>
        <h3 style={categoryTitleStyle}>Automatizaciones a la Medida</h3>
        <Link
          to="/contacto"
          style={{
            ...customCardStyle,
            transform: hoveredCard === 'custom' ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
            boxShadow: hoveredCard === 'custom' ? '0 25px 50px rgba(30, 64, 175, 0.5)' : '0 10px 30px rgba(30, 64, 175, 0.3)'
          }}
          onMouseEnter={() => setHoveredCard('custom')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 style={customTitleStyle}>¿Tu proceso no está aquí?</h3>
          <p style={customSubtitleStyle}>Diseñamos automatizaciones a la medida de tu negocio</p>
          <p style={customDescStyle}>
            No importa tu industria. Si tienes un proceso repetitivo que consume tiempo, podemos automatizarlo.
            Ingenieros, abogados, médicos, arquitectos... cada negocio tiene oportunidades de ahorro.
          </p>
        </Link>
      </div>
    </section>
  );
}
