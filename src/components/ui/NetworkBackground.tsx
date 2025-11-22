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
      depth: number;
    }> = [];

    const nodeCount = 80;
    const connectionDistance = 150;
    let scrollY = 0;

    // Crear nodos
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.5,
        depth: Math.random() * 0.5 + 0.5
      });
    }

    // Animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        const parallaxY = node.y + (scrollY * node.depth * 0.5);

        // Actualizar posición
        node.x += node.vx;
        node.y += node.vy;

        // Rebotar en los bordes
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Dibujar nodo
        ctx.beginPath();
        ctx.arc(node.x, parallaxY, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 64, 175, ${node.opacity * node.depth})`;
        ctx.fill();

        // Dibujar conexiones
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x;
          const dy = (nodes[j].y + (scrollY * nodes[j].depth * 0.5)) - parallaxY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, parallaxY);
            ctx.lineTo(nodes[j].x, nodes[j].y + (scrollY * nodes[j].depth * 0.5));
            ctx.strokeStyle = `rgba(30, 64, 175, ${0.3 * (1 - distance / connectionDistance) * node.depth})`;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    // Actualizar scroll para parallax
    const handleScroll = () => {
      scrollY = window.pageYOffset;
    };
    window.addEventListener('scroll', handleScroll);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-45 pointer-events-none"
    />
  );
}
