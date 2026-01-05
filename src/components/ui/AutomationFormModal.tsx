import { useState, useEffect } from 'react';
import {
  X, Store, Briefcase, Factory, Cpu, Building2,
  User, Users, Building, Landmark,
  TrendingUp, Megaphone, Settings, DollarSign, UserCheck,
  CheckCircle, ArrowRight, ArrowLeft,
  Calculator, ShieldCheck, Receipt, ClipboardCheck, AlertCircle
} from 'lucide-react';

interface FormData {
  industry: string;
  size: string;
  processes: string[];
  fullName: string;
  email: string;
  company: string;
  phone: string;
}

interface AutomationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || '';

// Email validation regex (RFC 5322 simplified)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 500); // Limit length
};

// Validate email format
const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email) && email.length <= 254;
};

export default function AutomationFormModal({ isOpen, onClose }: AutomationFormModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    industry: '',
    size: '',
    processes: [],
    fullName: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Block body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setFormData({
        industry: '',
        size: '',
        processes: [],
        fullName: '',
        email: '',
        company: '',
        phone: ''
      });
      setIsSuccess(false);
      setIsError(false);
      setEmailError('');
    }
  }, [isOpen]);

  const industries = [
    { id: 'Contadores Públicos', label: 'Contadores Públicos', description: 'Firmas contables, contadores independientes', icon: Calculator },
    { id: 'SST', label: 'Seguridad y Salud en el Trabajo', description: 'Empresas SST, consultores', icon: ShieldCheck },
    { id: 'Comercio/Retail', label: 'Comercio / Retail', description: 'Tiendas físicas, e-commerce, distribución', icon: Store },
    { id: 'Servicios', label: 'Servicios', description: 'Consultoría, agencias, servicios profesionales', icon: Briefcase },
    { id: 'Manufactura', label: 'Manufactura', description: 'Producción, fábricas, ensamblaje', icon: Factory },
    { id: 'Tecnología', label: 'Tecnología', description: 'Software, SaaS, desarrollo, IT', icon: Cpu },
    { id: 'Otro', label: 'Otro Sector', description: 'Educación, salud, finanzas, etc.', icon: Building2 }
  ];

  const sizes = [
    { id: '1-10', label: '1-10 empleados', description: 'Startup o pequeña empresa', icon: User },
    { id: '11-50', label: '11-50 empleados', description: 'Empresa en crecimiento', icon: Users },
    { id: '51-200', label: '51-200 empleados', description: 'Mediana empresa', icon: Building },
    { id: '200+', label: 'Más de 200 empleados', description: 'Gran empresa', icon: Landmark }
  ];

  const processes = [
    { id: 'Contabilidad', label: 'Contabilidad', description: 'Causaciones, conciliaciones DIAN, facturación', icon: Receipt },
    { id: 'SST', label: 'SST', description: 'Documentación, matrices de riesgo, agendas ARL', icon: ClipboardCheck },
    { id: 'Ventas y CRM', label: 'Ventas y CRM', description: 'Seguimiento de clientes, pipeline, cotizaciones', icon: TrendingUp },
    { id: 'Marketing', label: 'Marketing', description: 'Email marketing, redes sociales, campañas', icon: Megaphone },
    { id: 'Operaciones', label: 'Operaciones', description: 'Inventarios, logística, producción', icon: Settings },
    { id: 'Finanzas', label: 'Finanzas', description: 'Facturación, cobros, reportes financieros', icon: DollarSign },
    { id: 'Recursos Humanos', label: 'Recursos Humanos', description: 'Nómina, reclutamiento, capacitación', icon: UserCheck }
  ];

  const handleSelectOption = (field: 'industry' | 'size', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleToggleProcess = (processId: string) => {
    setFormData(prev => ({
      ...prev,
      processes: prev.processes.includes(processId)
        ? prev.processes.filter(p => p !== processId)
        : [...prev.processes, processId]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear email error when user types
    if (name === 'email' && emailError) {
      setEmailError('');
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.industry !== '';
      case 2: return formData.size !== '';
      case 3: return formData.processes.length > 0;
      case 4: return formData.fullName && formData.email && formData.company;
      default: return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed()) return;

    // Rate limiting: prevent spam (30 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setEmailError('Por favor espera unos segundos antes de intentar de nuevo');
      return;
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
      setEmailError('Por favor ingresa un correo electrónico válido');
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(now);

    try {
      // Sanitize all inputs before sending
      const sanitizedData = {
        fullName: sanitizeInput(formData.fullName),
        email: sanitizeInput(formData.email.toLowerCase()),
        company: sanitizeInput(formData.company),
        phone: sanitizeInput(formData.phone),
        industry: formData.industry, // Already from controlled options
        size: formData.size, // Already from controlled options
        processes: formData.processes, // Already from controlled options
        source: 'cognitex.co',
        formType: 'automation-assessment',
        timestamp: new Date().toISOString()
      };

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData)
      });
      setIsSuccess(true);
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Styles
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1001,
    padding: '1rem'
  };

  const modalStyle: React.CSSProperties = {
    background: '#1f1f1f',
    borderRadius: '20px',
    maxWidth: '650px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
  };

  const headerStyle: React.CSSProperties = {
    padding: '1.5rem 1.5rem 1rem',
    borderBottom: '1px solid #3a3a3a',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const closeButtonStyle: React.CSSProperties = {
    background: '#2a2a2a',
    border: '1px solid #3a3a3a',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const progressContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem'
  };

  const progressDotStyle = (step: number): React.CSSProperties => ({
    width: step <= currentStep ? '12px' : '10px',
    height: step <= currentStep ? '12px' : '10px',
    borderRadius: '50%',
    background: step <= currentStep
      ? '#175197'
      : '#3a3a3a',
    transition: 'all 0.3s ease',
    boxShadow: step <= currentStep ? '0 0 10px rgba(23, 81, 151, 0.5)' : 'none'
  });

  const contentStyle: React.CSSProperties = {
    padding: '0 2rem 2rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: '0.5rem',
    textAlign: 'center',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginBottom: '1.5rem'
  };

  const optionsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem'
  };

  const optionCardStyle = (isSelected: boolean): React.CSSProperties => ({
    background: isSelected
      ? 'rgba(23, 81, 151, 0.15)'
      : '#2a2a2a',
    border: isSelected
      ? '2px solid #175197'
      : '1px solid #3a3a3a',
    borderRadius: '12px',
    padding: '1.25rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'left'
  });

  const optionIconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    background: '#175197',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.75rem'
  };

  const optionLabelStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: '0.25rem'
  };

  const optionDescStyle: React.CSSProperties = {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.5)'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    background: '#2a2a2a',
    border: '1px solid #3a3a3a',
    borderRadius: '10px',
    color: '#FFFFFF',
    fontSize: '1rem',
    marginBottom: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const buttonsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '1rem'
  };

  const buttonBackStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.5rem',
    background: '#2a2a2a',
    color: '#FFFFFF',
    border: '1px solid #3a3a3a',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const buttonNextStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 2rem',
    background: canProceed()
      ? '#175197'
      : '#2a2a2a',
    color: '#FFFFFF',
    border: canProceed() ? 'none' : '1px solid #3a3a3a',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: canProceed() ? 'pointer' : 'not-allowed',
    opacity: canProceed() ? 1 : 0.5,
    transition: 'all 0.3s ease'
  };

  const resultContainerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '2rem'
  };

  const resultIconStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
  };

  const successListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: '1.5rem 0 2rem',
    textAlign: 'left',
    maxWidth: '350px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const successItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: '0.95rem',
    marginBottom: '0.75rem',
    lineHeight: '1.5'
  };

  const successCheckStyle: React.CSSProperties = {
    flexShrink: 0,
    color: '#10B981'
  };

  const errorIconStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    boxShadow: '0 0 30px rgba(239, 68, 68, 0.4)'
  };

  // Render current step
  const renderStep = () => {
    if (isError) {
      return (
        <div style={resultContainerStyle}>
          <div style={errorIconStyle}>
            <AlertCircle size={40} color="#FFFFFF" />
          </div>
          <h2 id="modal-title" style={titleStyle}>Hubo un problema</h2>
          <p style={{ ...subtitleStyle, marginBottom: '1.5rem' }}>
            No pudimos enviar tu información. Por favor intenta de nuevo o contáctanos directamente por WhatsApp.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{...buttonNextStyle, background: '#175197', opacity: 1, cursor: 'pointer'}}
              onClick={() => {
                setIsError(false);
                setCurrentStep(4);
              }}
            >
              Intentar de nuevo
            </button>
            <a
              href="https://wa.me/573124069303"
              target="_blank"
              rel="noopener noreferrer"
              style={{...buttonNextStyle, background: '#25D366', opacity: 1, cursor: 'pointer', textDecoration: 'none'}}
            >
              WhatsApp
            </a>
          </div>
        </div>
      );
    }

    if (isSuccess) {
      return (
        <div style={resultContainerStyle}>
          <div style={resultIconStyle}>
            <CheckCircle size={40} color="#FFFFFF" />
          </div>
          <h2 id="modal-title" style={titleStyle}>Hemos recibido tu información</h2>
          <p style={{ ...subtitleStyle, marginBottom: '0.5rem' }}>
            En los próximos minutos recibirás en tu correo:
          </p>
          <ul style={successListStyle}>
            <li style={successItemStyle}>
              <CheckCircle size={20} style={successCheckStyle} />
              <span>Tu diagnóstico personalizado de automatización</span>
            </li>
            <li style={successItemStyle}>
              <CheckCircle size={20} style={successCheckStyle} />
              <span>Estimación de horas que puedes ahorrar</span>
            </li>
            <li style={successItemStyle}>
              <CheckCircle size={20} style={successCheckStyle} />
              <span>Casos de éxito en tu industria</span>
            </li>
            <li style={successItemStyle}>
              <CheckCircle size={20} style={successCheckStyle} />
              <span>Plan de acción recomendado</span>
            </li>
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              style={{...buttonNextStyle, background: '#2a2a2a', border: '1px solid #3a3a3a', opacity: 1, cursor: 'pointer'}}
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 id="modal-title" style={titleStyle}>¿En qué industria opera tu empresa?</h2>
            <p style={subtitleStyle}>Esto nos ayuda a personalizar las soluciones para tu sector</p>
            <div style={optionsGridStyle}>
              {industries.map(ind => (
                <div
                  key={ind.id}
                  style={optionCardStyle(formData.industry === ind.id)}
                  onClick={() => handleSelectOption('industry', ind.id)}
                >
                  <div style={optionIconStyle}>
                    <ind.icon size={20} color="#FFFFFF" />
                  </div>
                  <div style={optionLabelStyle}>{ind.label}</div>
                  <div style={optionDescStyle}>{ind.description}</div>
                </div>
              ))}
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h2 id="modal-title" style={titleStyle}>¿Cuántos empleados tiene tu empresa?</h2>
            <p style={subtitleStyle}>Esto determina la escala de automatización que necesitas</p>
            <div style={optionsGridStyle}>
              {sizes.map(size => (
                <div
                  key={size.id}
                  style={optionCardStyle(formData.size === size.id)}
                  onClick={() => handleSelectOption('size', size.id)}
                >
                  <div style={optionIconStyle}>
                    <size.icon size={20} color="#FFFFFF" />
                  </div>
                  <div style={optionLabelStyle}>{size.label}</div>
                  <div style={optionDescStyle}>{size.description}</div>
                </div>
              ))}
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 id="modal-title" style={titleStyle}>¿Qué procesos quieres automatizar?</h2>
            <p style={subtitleStyle}>Puedes seleccionar múltiples opciones</p>
            <div style={optionsGridStyle}>
              {processes.map(proc => (
                <div
                  key={proc.id}
                  style={optionCardStyle(formData.processes.includes(proc.id))}
                  onClick={() => handleToggleProcess(proc.id)}
                >
                  <div style={optionIconStyle}>
                    <proc.icon size={20} color="#FFFFFF" />
                  </div>
                  <div style={optionLabelStyle}>{proc.label}</div>
                  <div style={optionDescStyle}>{proc.description}</div>
                </div>
              ))}
            </div>
          </>
        );

      case 4:
        return (
          <>
            <h2 id="modal-title" style={titleStyle}>Déjanos tus datos</h2>
            <p style={subtitleStyle}>Te enviaremos un diagnóstico personalizado de automatización</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Nombre completo"
                value={formData.fullName}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo empresarial"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  ...inputStyle,
                  borderColor: emailError ? '#EF4444' : '#3a3a3a'
                }}
                required
                aria-invalid={!!emailError}
                aria-describedby={emailError ? 'email-error' : undefined}
              />
              {emailError && (
                <p id="email-error" role="alert" style={{ color: '#EF4444', fontSize: '0.85rem', marginTop: '-0.75rem', marginBottom: '1rem' }}>
                  {emailError}
                </p>
              )}
              <input
                type="text"
                name="company"
                placeholder="Nombre de la empresa"
                value={formData.company}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono (opcional)"
                value={formData.phone}
                onChange={handleInputChange}
                style={inputStyle}
              />
              <div style={buttonsContainerStyle}>
                <button type="button" style={buttonBackStyle} onClick={() => setCurrentStep(3)}>
                  <ArrowLeft size={18} />
                  Atrás
                </button>
                <button type="submit" style={buttonNextStyle} disabled={!canProceed() || isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Obtener Diagnóstico'}
                </button>
              </div>
            </form>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div style={overlayStyle} onClick={onClose} role="presentation">
      <div
        style={modalStyle}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div style={headerStyle}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }} aria-live="polite">
            {!isSuccess && !isError && `Paso ${currentStep} de 4`}
          </span>
          <button
            style={closeButtonStyle}
            onClick={onClose}
            aria-label="Cerrar formulario"
          >
            <X size={18} color="#FFFFFF" aria-hidden="true" />
          </button>
        </div>

        {!isSuccess && (
          <div style={progressContainerStyle}>
            {[1, 2, 3, 4].map(step => (
              <div key={step} style={progressDotStyle(step)} />
            ))}
          </div>
        )}

        <div style={contentStyle}>
          {renderStep()}

          {!isSuccess && currentStep < 4 && (
            <div style={buttonsContainerStyle}>
              {currentStep > 1 && (
                <button style={buttonBackStyle} onClick={() => setCurrentStep(prev => prev - 1)}>
                  <ArrowLeft size={18} />
                  Atrás
                </button>
              )}
              <button
                style={buttonNextStyle}
                onClick={() => setCurrentStep(prev => prev + 1)}
                disabled={!canProceed()}
              >
                Continuar
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
