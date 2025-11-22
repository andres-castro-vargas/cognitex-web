import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function TiendaPage() {
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
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    fontFamily: "'Tomorrow', sans-serif",
    background: 'linear-gradient(135deg, #ffffff 0%, #3B82F6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#d1d5db',
    fontFamily: "'Outfit', sans-serif"
  };

  return (
    <>
      <Header />
      <div style={pageStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Tienda</h1>
          <p style={subtitleStyle}>Página en construcción - Próximamente</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
