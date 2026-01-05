import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>

          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#1E293B',
            marginBottom: '0.75rem',
            fontFamily: "'Tomorrow', sans-serif"
          }}>
            Algo salio mal
          </h1>

          <p style={{
            fontSize: '1rem',
            color: '#64748B',
            marginBottom: '2rem',
            maxWidth: '400px'
          }}>
            Lo sentimos, ha ocurrido un error inesperado. Por favor intenta recargar la pagina.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={this.handleReload}
              style={{
                padding: '0.875rem 2rem',
                background: '#175197',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Recargar pagina
            </button>
            <button
              onClick={this.handleGoHome}
              style={{
                padding: '0.875rem 2rem',
                background: '#F1F5F9',
                color: '#1E293B',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Ir al inicio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
