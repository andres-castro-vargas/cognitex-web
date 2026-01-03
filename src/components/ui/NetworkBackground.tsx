import { useEffect, useRef } from 'react';

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuración de nodos
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const nodeCount = 80;
    const connectionDistance = 150;

    // Crear nodos (sin depth para parallax)
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.5
      });
    }

    // Animación - nodos fijos (sin parallax)
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        // Actualizar posición
        node.x += node.vx;
        node.y += node.vy;

        // Rebotar en los bordes
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Dibujar nodo con efecto de glow neón
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#3B82F6';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 64, 175, ${node.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Dibujar conexiones
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x;
          const dy = nodes[j].y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = '#3B82F6';
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(30, 64, 175, ${0.3 * (1 - distance / connectionDistance)})`;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Degradado azul sutil de fondo - para tema claro */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(59, 130, 246, 0.08) 0%, transparent 40%)',
          zIndex: -1
        }}
      />

      {/* Canvas de nodos con efecto neón - ajustado para fondo claro */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none"
      />
    </>
  );
}
