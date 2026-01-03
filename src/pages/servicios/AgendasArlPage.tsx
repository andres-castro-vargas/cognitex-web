import { useState } from 'react';
import { Clock, Bell } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import NetworkBackground from '../../components/ui/NetworkBackground';

export default function AgendasArlPage() {
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#FFFFFF',
    position: 'relative'
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    color: '#1F2937',
    padding: '0.5rem 1.5rem',
    borderRadius: '50px',
    fontSize: '0.9rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 10
  };

  const heroStyle: React.CSSProperties = {
    paddingTop: '140px',
    paddingBottom: '2rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
    maxWidth: '800px',
    margin: '0 auto',
    padding: '140px 2rem 2rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '700',
    fontFamily: "'Tomorrow', sans-serif",
    background: 'linear-gradient(135deg, #1E293B 0%, #3B82F6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
    lineHeight: '1.2'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.15rem',
    color: '#64748B',
    maxWidth: '600px',
    margin: '0 auto 2rem'
  };

  const contentStyle: React.CSSProperties = {
    padding: '2rem',
    maxWidth: '700px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10
  };

  const cardStyle: React.CSSProperties = {
    background: '#F8FAFC',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid #E2E8F0',
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const descStyle: React.CSSProperties = {
    fontSize: '1.05rem',
    color: '#475569',
    lineHeight: '1.8',
    marginBottom: '1.5rem'
  };

  const featureStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    color: '#1E293B',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '0.75rem'
  };

  const ctaSectionStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    padding: '3rem 2rem',
    textAlign: 'center',
    borderRadius: '24px',
    margin: '2rem',
    position: 'relative',
    zIndex: 10
  };

  const ctaTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: '1.5rem',
    fontFamily: "'Tomorrow', sans-serif"
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
    transition: 'all 0.3s ease',
    boxShadow: isCtaHovered
      ? '0 15px 35px rgba(0, 0, 0, 0.25)'
      : '0 10px 25px rgba(0, 0, 0, 0.15)',
    transform: isCtaHovered ? 'scale(1.05)' : 'scale(1)'
  };

  return (
    <>
      <div style={pageStyle}>
        <NetworkBackground />
        <Header />

        <section style={heroStyle}>
          <div style={badgeStyle}>Próximamente Q3 2026</div>
          <h1 style={titleStyle}>Gestiona agendas ARL sin complicaciones</h1>
          <p style={subtitleStyle}>
            Organiza capacitaciones, inspecciones y reuniones de SST en un solo lugar.
          </p>
        </section>

        <div style={contentStyle}>
          <div style={cardStyle}>
            <p style={descStyle}>
              Esta solución te ayudará a programar y dar seguimiento a todas las actividades requeridas por las ARL: capacitaciones, inspecciones, reuniones del COPASST y más.
            </p>
            <p style={descStyle}>
              Recibe recordatorios automáticos y genera actas de cumplimiento con un clic.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <div style={featureStyle}>
                <Clock size={20} color="#1E40AF" />
                <span>Calendario unificado de actividades SST</span>
              </div>
              <div style={featureStyle}>
                <Clock size={20} color="#1E40AF" />
                <span>Recordatorios automáticos</span>
              </div>
              <div style={featureStyle}>
                <Clock size={20} color="#1E40AF" />
                <span>Generación de actas y evidencias</span>
              </div>
            </div>
          </div>
        </div>

        <section style={ctaSectionStyle}>
          <h2 style={ctaTitleStyle}>¿Quieres ser de los primeros en probarlo?</h2>
          <a
            href="https://wa.me/573124069303?text=Hola,%20quiero%20que%20me%20notifiquen%20cuando%20esté%20disponible%20la%20automatización%20de%20Agendas%20ARL"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonWhiteStyle}
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
          >
            <Bell size={24} />
            Notifícame cuando esté listo
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
}
