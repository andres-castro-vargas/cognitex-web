import { useEffect, useRef, useState } from 'react';

export default function Robot() {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);

  // Estados para hover y diálogo
  const [isHovered, setIsHovered] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState('¿Listo para automatizar?');
  const [dialogPosition, setDialogPosition] = useState<'left' | 'right'>('right');

  // Frases del original
  const phrases = [
    "¿Listo para automatizar?",
    "¿Quieres ahorrar 80% de tiempo?",
    "¿Tu empresa al siguiente nivel?",
    "¿Procesos sin errores?",
    "¿Trabajar menos, ganar más?",
    "¡Hola! 👋",
    "Escríbenes y Automatiza",
    "¡Transforma tu negocio!",
    "¿Necesitas ayuda?",
    "¡Automatización inteligente!"
  ];

  // Efecto para cambiar frase al hacer hover
  useEffect(() => {
    if (isHovered) {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setCurrentPhrase(randomPhrase);

      // Randomly choose left or right side
      const randomPosition = Math.random() > 0.5 ? 'right' : 'left';
      setDialogPosition(randomPosition);
    }
  }, [isHovered]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!robotRef.current || !leftPupilRef.current || !rightPupilRef.current) return;

      const robotRect = robotRef.current.getBoundingClientRect();
      const robotCenterX = robotRect.left + robotRect.width / 2;
      const robotCenterY = robotRect.top + robotRect.height / 2;

      // Calcular ángulo y distancia
      const angle = Math.atan2(e.clientY - robotCenterY, e.clientX - robotCenterX);
      const distance = Math.min(10, Math.sqrt(Math.pow(e.clientX - robotCenterX, 2) + Math.pow(e.clientY - robotCenterY, 2)) / 50);

      // Mover pupilas
      const pupilX = Math.cos(angle) * distance;
      const pupilY = Math.sin(angle) * distance;

      leftPupilRef.current.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
      rightPupilRef.current.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Estilos EXACTOS del HTML original
  const robotLogoStyle: React.CSSProperties = {
    width: '300px',
    height: '300px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    margin: '2rem auto 2rem',
    transform: isHovered ? 'scale(1.15)' : 'scale(1)' // EFECTO ZOOM
  };

  const robotHeadStyle: React.CSSProperties = {
    width: '220px',
    height: '220px',
    background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '5px solid #1a202c',
    overflow: 'hidden',
    animation: 'float 3s ease-in-out infinite'
  };

  const robotFaceStyle: React.CSSProperties = {
    width: '170px',
    height: '150px',
    background: '#1a202c',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '40%'
  };

  const robotEyesStyle: React.CSSProperties = {
    display: 'flex',
    gap: '45px',
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translateX(-50%)'
  };

  const robotEyeStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
    borderRadius: '50%',
    position: 'relative',
    boxShadow: '0 0 30px #3B82F6, inset 0 0 15px rgba(0,0,0,0.3)',
    animation: 'blink 10s infinite',
    overflow: 'hidden'
  };

  const robotPupilStyle: React.CSSProperties = {
    width: '15px',
    height: '15px',
    background: '#ffffff',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.1s ease-out'
  };

  const robotMouthStyle: React.CSSProperties = {
    width: '50px',
    height: '5px',
    background: '#3B82F6',
    borderRadius: '0 0 25px 25px',
    position: 'absolute',
    bottom: '25%',
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'smile 3s ease-in-out infinite',
    transition: 'all 0.3s'
  };

  const robotHeadphonesStyle: React.CSSProperties = {
    width: '260px',
    height: '220px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const headphoneBandStyle: React.CSSProperties = {
    width: '200px',
    height: '120px',
    border: '15px solid #2d3748',
    borderBottom: 'none',
    borderRadius: '100px 100px 0 0',
    position: 'absolute',
    top: '-45px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(to bottom, #374151 0%, transparent 50%)'
  };

  const headphoneSpeakerLeftStyle: React.CSSProperties = {
    width: '65px',
    height: '80px',
    background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
    borderRadius: '20px',
    position: 'absolute',
    top: '60px',
    left: '-20px',
    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 5px 15px rgba(0,0,0,0.3)'
  };

  const headphoneSpeakerRightStyle: React.CSSProperties = {
    width: '65px',
    height: '80px',
    background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
    borderRadius: '20px',
    position: 'absolute',
    top: '60px',
    right: '-20px',
    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 5px 15px rgba(0,0,0,0.3)'
  };

  // Estilos del diálogo (EXACTOS del original)
  const robotDialogBaseStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(30, 64, 175, 0.95)',
    color: 'white',
    padding: '12px 18px',
    borderRadius: '20px',
    fontFamily: "'Tomorrow', sans-serif",
    fontSize: '0.85rem',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    opacity: isHovered ? 1 : 0,
    pointerEvents: 'none',
    transition: 'all 0.4s ease',
    boxShadow: '0 10px 30px rgba(30, 64, 175, 0.5)'
  };

  const robotDialogStyle: React.CSSProperties = {
    ...robotDialogBaseStyle,
    ...(dialogPosition === 'right'
      ? { right: isHovered ? '-270px' : '-250px' }
      : { left: isHovered ? '-270px' : '-250px' }
    )
  };

  // Estilo de la flecha del diálogo
  const dialogArrowStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    ...(dialogPosition === 'right'
      ? {
          left: '-15px',
          borderWidth: '10px 15px 10px 0',
          borderColor: 'transparent rgba(30, 64, 175, 0.95) transparent transparent'
        }
      : {
          right: '-15px',
          borderWidth: '10px 0 10px 15px',
          borderColor: 'transparent transparent transparent rgba(30, 64, 175, 0.95)'
        }
    )
  };

  return (
    <div
      ref={robotRef}
      style={robotLogoStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cabeza del robot */}
      <div style={robotHeadStyle}>
        {/* Cara del robot */}
        <div style={robotFaceStyle}>
          {/* Ojos */}
          <div style={robotEyesStyle}>
            {/* Ojo izquierdo */}
            <div style={robotEyeStyle}>
              <div ref={leftPupilRef} style={robotPupilStyle} />
            </div>

            {/* Ojo derecho */}
            <div style={robotEyeStyle}>
              <div ref={rightPupilRef} style={robotPupilStyle} />
            </div>
          </div>

          {/* Boca */}
          <div style={robotMouthStyle} />
        </div>
      </div>

      {/* Audífonos */}
      <div style={robotHeadphonesStyle}>
        {/* Diadema curva */}
        <div style={headphoneBandStyle} />

        {/* Audífono izquierdo */}
        <div style={headphoneSpeakerLeftStyle} />

        {/* Audífono derecho */}
        <div style={headphoneSpeakerRightStyle} />
      </div>

      {/* Diálogo con frases */}
      <div style={robotDialogStyle}>
        {/* Flecha del diálogo */}
        <div style={dialogArrowStyle} />
        {currentPhrase}
      </div>
    </div>
  );
}
