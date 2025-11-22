import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function NotFoundPage() {
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#0A0A0A',
    paddingTop: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '2rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    fontWeight: '700',
    fontFamily: "'Tomorrow', sans-serif",
    background: 'linear-gradient(135deg, #ffffff 0%, #3B82F6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    color: '#d1d5db',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '2rem'
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s',
    boxShadow: '0 10px 25px rgba(30, 64, 175, 0.3)'
  };

  return (
    <>
      <Header />
      <div style={pageStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>404</h1>
          <p style={subtitleStyle}>Página no encontrada</p>
          <Link
            to="/"
            style={buttonStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, {
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 35px rgba(30, 64, 175, 0.4)'
              });
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, {
                transform: 'translateY(0)',
                boxShadow: '0 10px 25px rgba(30, 64, 175, 0.3)'
              });
            }}
          >
            Volver al inicio
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
