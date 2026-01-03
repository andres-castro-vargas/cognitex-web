import { useEffect, useState } from 'react';
import { FileText, Shield, ChevronRight, Lock, X } from 'lucide-react';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessModal({ isOpen, onClose }: AccessModalProps) {
  const [contadoresHovered, setContadoresHovered] = useState(false);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  };

  const modalStyle: React.CSSProperties = {
    background: '#FFFFFF',
    borderRadius: '24px',
    padding: '2.5rem',
    maxWidth: '450px',
    width: '100%',
    position: 'relative',
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)',
    animation: 'modalSlideIn 0.3s ease-out'
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64748B'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: '0.5rem',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#64748B',
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const getOptionStyle = (isActive: boolean, isHovered: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem',
    borderRadius: '16px',
    border: isActive ? '1px solid #E2E8F0' : '1px solid #E2E8F0',
    background: isActive ? '#FFFFFF' : '#F8FAFC',
    cursor: isActive ? 'pointer' : 'not-allowed',
    transition: 'all 0.3s ease',
    marginBottom: '1rem',
    textDecoration: 'none',
    opacity: isActive ? 1 : 0.6,
    transform: isActive && isHovered ? 'scale(1.02)' : 'scale(1)',
    boxShadow: isActive && isHovered ? '0 8px 25px rgba(30, 64, 175, 0.12)' : 'none'
  });

  const getIconContainerStyle = (isActive: boolean): React.CSSProperties => ({
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: isActive
      ? 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)'
      : '#CBD5E1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  });

  const optionTitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '0.25rem'
  };

  const optionDescStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#64748B'
  };

  const badgeStyle: React.CSSProperties = {
    background: '#FEF3C7',
    color: '#92400E',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {/* Botón cerrar */}
        <button
          style={closeButtonStyle}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#F1F5F9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <X size={24} />
        </button>

        {/* Título */}
        <h2 style={titleStyle}>Acceder</h2>
        <p style={subtitleStyle}>Selecciona tu plataforma</p>

        {/* Opción Contadores - Activo */}
        <a
          href="https://appcontadores.cognitex.co"
          target="_blank"
          rel="noopener noreferrer"
          style={getOptionStyle(true, contadoresHovered)}
          onMouseEnter={() => setContadoresHovered(true)}
          onMouseLeave={() => setContadoresHovered(false)}
        >
          <div style={getIconContainerStyle(true)}>
            <FileText size={24} color="#FFFFFF" strokeWidth={1.5} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={optionTitleStyle}>Contadores</div>
            <div style={optionDescStyle}>Accede a tu plataforma de automatización contable</div>
          </div>
          <ChevronRight size={20} color="#3B82F6" />
        </a>

        {/* Opción SST - Deshabilitado */}
        <div style={getOptionStyle(false, false)}>
          <div style={getIconContainerStyle(false)}>
            <Shield size={24} color="#FFFFFF" strokeWidth={1.5} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={optionTitleStyle}>SST</span>
              <span style={badgeStyle}>Próximamente</span>
            </div>
            <div style={optionDescStyle}>Seguridad y Salud en el Trabajo</div>
          </div>
          <Lock size={20} color="#94A3B8" />
        </div>

        {/* Estilos de animación */}
        <style>{`
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
