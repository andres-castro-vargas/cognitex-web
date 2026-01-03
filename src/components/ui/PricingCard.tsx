import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  isCustom?: boolean;
  isTrial?: boolean;
}

export default function PricingCard({
  name,
  price,
  period = '/mes',
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
  isCustom = false,
  isTrial = false
}: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Colores para Trial (verde)
  const trialGradient = 'linear-gradient(135deg, #059669 0%, #10B981 100%)';
  const popularGradient = 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)';

  const getBackground = () => {
    if (isTrial) return trialGradient;
    if (isPopular) return popularGradient;
    return '#FFFFFF';
  };

  const isHighlighted = isPopular || isTrial;

  const cardStyle: React.CSSProperties = {
    background: getBackground(),
    borderRadius: '24px',
    padding: '1.75rem',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: isHighlighted ? 'none' : '1px solid #E2E8F0',
    boxShadow: isHovered
      ? isTrial
        ? '0 30px 60px rgba(5, 150, 105, 0.35), 0 0 40px rgba(16, 185, 129, 0.2)'
        : isPopular
          ? '0 30px 60px rgba(30, 64, 175, 0.35), 0 0 40px rgba(59, 130, 246, 0.2)'
          : '0 20px 40px rgba(0, 0, 0, 0.1)'
      : isTrial
        ? '0 20px 40px rgba(5, 150, 105, 0.25)'
        : isPopular
          ? '0 20px 40px rgba(30, 64, 175, 0.25)'
          : '0 4px 20px rgba(0, 0, 0, 0.06)',
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  };

  const badgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: '#FFFFFF',
    color: isTrial ? '#059669' : '#1E40AF',
    padding: '0.35rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: isHighlighted ? '#FFFFFF' : '#1E293B',
    fontFamily: "'Tomorrow', sans-serif",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '0.5rem'
  };

  const priceContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.25rem',
    marginBottom: '0.5rem',
    flexShrink: 0
  };

  const priceStyle: React.CSSProperties = {
    fontSize: isCustom ? '1.4rem' : '2rem',
    fontWeight: '700',
    color: isHighlighted ? '#FFFFFF' : '#1E293B',
    fontFamily: "'Tomorrow', sans-serif"
  };

  const periodStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: isHighlighted ? 'rgba(255, 255, 255, 0.8)' : '#64748B'
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '0.85rem',
    color: isHighlighted ? 'rgba(255, 255, 255, 0.9)' : '#64748B',
    marginBottom: '0',
    lineHeight: '1.5'
  };

  // Contenedor del header (nombre + precio + descripción) con altura fija
  const headerSectionStyle: React.CSSProperties = {
    minHeight: '120px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1.25rem'
  };

  const dividerStyle: React.CSSProperties = {
    width: '100%',
    height: '1px',
    background: isHighlighted ? 'rgba(255, 255, 255, 0.2)' : '#E2E8F0',
    marginBottom: '1.25rem',
    flexShrink: 0
  };

  const featuresContainerStyle: React.CSSProperties = {
    flex: 1,
    minHeight: '180px',
    display: 'flex',
    flexDirection: 'column'
  };

  const featuresListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const featureItemStyle = (included: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    marginBottom: '0.6rem',
    fontSize: '0.85rem',
    color: isHighlighted
      ? included ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)'
      : included ? '#1E293B' : '#94A3B8',
    textDecoration: included ? 'none' : 'line-through'
  });

  const checkIconColor = isHighlighted ? '#FFFFFF' : '#10B981';
  const crossIconColor = isHighlighted ? 'rgba(255, 255, 255, 0.4)' : '#CBD5E1';

  const getCtaBackground = () => {
    if (isHighlighted) return '#FFFFFF';
    if (isTrial) return trialGradient;
    return popularGradient;
  };

  const getCtaColor = () => {
    if (isTrial) return '#059669';
    if (isPopular) return '#1E40AF';
    return '#FFFFFF';
  };

  const ctaButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1.25rem',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: '600',
    fontFamily: "'Tomorrow', sans-serif",
    transition: 'all 0.3s',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    background: getCtaBackground(),
    color: getCtaColor(),
    boxShadow: isHovered
      ? isHighlighted
        ? '0 10px 30px rgba(255, 255, 255, 0.3)'
        : '0 10px 30px rgba(30, 64, 175, 0.3)'
      : 'none',
    marginTop: 'auto'
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {isTrial && (
        <span style={badgeStyle}>7 Días Gratis</span>
      )}
      {isPopular && !isTrial && (
        <span style={badgeStyle}>Más Popular</span>
      )}

      {/* Header section con altura fija para alineación */}
      <div style={headerSectionStyle}>
        {/* Nombre del plan */}
        <h3 style={nameStyle}>{name}</h3>

        {/* Precio */}
        <div style={priceContainerStyle}>
          <span style={priceStyle}>{price}</span>
          {!isCustom && <span style={periodStyle}>{period}</span>}
        </div>

        {/* Descripción */}
        <p style={descriptionStyle}>{description}</p>
      </div>

      {/* Línea divisora */}
      <div style={dividerStyle} />

      {/* Lista de características */}
      <div style={featuresContainerStyle}>
        <ul style={featuresListStyle}>
          {features.map((feature, index) => (
            <li key={index} style={featureItemStyle(feature.included)}>
              {feature.included ? (
                <Check size={18} color={checkIconColor} strokeWidth={2.5} />
              ) : (
                <X size={18} color={crossIconColor} strokeWidth={2} />
              )}
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Botón CTA */}
      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        style={ctaButtonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {ctaText}
      </a>
    </div>
  );
}
