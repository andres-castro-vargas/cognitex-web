import { useEffect, useRef } from 'react';

export default function RobotLogo() {
  const robotRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!robotRef.current || !leftPupilRef.current || !rightPupilRef.current) return;

      const robotRect = robotRef.current.getBoundingClientRect();
      const robotCenterX = robotRect.left + robotRect.width / 2;
      const robotCenterY = robotRect.top + robotRect.height / 2;

      const angle = Math.atan2(e.clientY - robotCenterY, e.clientX - robotCenterX);
      const distance = Math.min(10, Math.sqrt(Math.pow(e.clientX - robotCenterX, 2) + Math.pow(e.clientY - robotCenterY, 2)) / 50);

      const pupilX = Math.cos(angle) * distance;
      const pupilY = Math.sin(angle) * distance;

      leftPupilRef.current.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
      rightPupilRef.current.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={robotRef} className="robot-logo">
      <div className="robot-head">
        <div className="robot-face">
          <div className="robot-eyes">
            <div className="robot-eye">
              <div ref={leftPupilRef} className="robot-pupil"></div>
            </div>
            <div className="robot-eye">
              <div ref={rightPupilRef} className="robot-pupil"></div>
            </div>
          </div>
          <div className="robot-mouth"></div>
        </div>
      </div>
      <div className="robot-headphones">
        <div className="headphone-band"></div>
        <div className="headphone-speaker left"></div>
        <div className="headphone-speaker right"></div>
      </div>
    </div>
  );
}
