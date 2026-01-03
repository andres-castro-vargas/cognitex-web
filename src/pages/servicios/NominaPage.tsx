import { Clock, Bell } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import NetworkBackground from '../../components/ui/NetworkBackground';

export default function NominaPage() {
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
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: '#FFFFFF',
    color: '#1E40AF',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
  };

  return (
    <>
      <div style={pageStyle}>
        <NetworkBackground />
        <Header />

        <section style={heroStyle}>
          <div style={badgeStyle}>Proximamente Q1 2026</div>
          <h1 style={titleStyle}>Valida nomina y seguridad social en minutos</h1>
          <p style={subtitleStyle}>
            Automatiza la verificacion de nomina electronica y cruza datos con seguridad social.
          </p>
        </section>

        <div style={contentStyle}>
          <div style={cardStyle}>
            <p style={descStyle}>
              Esta solucion te permitira validar automaticamente que todos los empleados en tu nomina electronica coincidan con los registros de seguridad social.
            </p>
            <p style={descStyle}>
              Reduce de 1.5-2 horas por cada 10 empleados a solo 10 minutos de revision.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <div style={featureStyle}>
                <Clock size={20} color="#1E40AF" />
                <span>Validacion automatica de afiliaciones</span>
              </div>
              <div style={featureStyle}>
                <Clock size={20} color="#1E40AF" />
                <span>Deteccion de inconsistencias en aportes</span>
              </div>
              <div style={featureStyle}>
                <Clock size={20} color="#1E40AF" />
                <span>Reportes listos para revision</span>
              </div>
            </div>
          </div>
        </div>

        <section style={ctaSectionStyle}>
          <h2 style={ctaTitleStyle}>¿Quieres ser de los primeros en probarlo?</h2>
          <a
            href="https://wa.me/573124069303?text=Hola,%20quiero%20que%20me%20notifiquen%20cuando%20este%20disponible%20la%20automatizacion%20de%20Nomina"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonWhiteStyle}
          >
            <Bell size={18} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
            Notificame cuando este listo
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
}
