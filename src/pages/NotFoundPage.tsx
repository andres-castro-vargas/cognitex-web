import { Home, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NetworkBackground from '../components/ui/NetworkBackground';

export default function NotFoundPage() {
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#FFFFFF',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
    padding: '2rem',
    marginTop: '80px'
  };

  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '500px'
  };

  const iconContainerStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 2rem',
    border: '1px solid #F59E0B'
  };

  const errorCodeStyle: React.CSSProperties = {
    fontSize: 'clamp(4rem, 10vw, 6rem)',
    fontWeight: '700',
    fontFamily: "'Tomorrow', sans-serif",
    background: 'linear-gradient(135deg, #1E293B 0%, #3B82F6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
    lineHeight: '1'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '1rem'
  };

  const descStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#64748B',
    marginBottom: '2rem',
    lineHeight: '1.6'
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    color: '#FFFFFF',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: '0 10px 25px rgba(30, 64, 175, 0.25)'
  };

  return (
    <>
      <div style={pageStyle}>
        <NetworkBackground />
        <Header />

        <div style={contentStyle}>
          <div style={containerStyle}>
            <div style={iconContainerStyle}>
              <AlertTriangle size={40} color="#D97706" />
            </div>
            <div style={errorCodeStyle}>404</div>
            <h1 style={titleStyle}>Pagina no encontrada</h1>
            <p style={descStyle}>
              Lo sentimos, la pagina que buscas no existe o ha sido movida.
              Vuelve al inicio para continuar navegando.
            </p>
            <Link to="/" style={buttonStyle}>
              <Home size={18} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
