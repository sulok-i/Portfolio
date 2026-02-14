import React, { useEffect, useRef } from 'react';

const MeteorShower = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame;
    let meteors = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const createMeteor = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.3,
      length: Math.random() * 120 + 60,
      speed: Math.random() * 10 + 5,
      angle: Math.random() * 25 + 25,
      opacity: Math.random() * 0.6 + 0.2,
      tailWidth: Math.random() * 2.5 + 1,
      hue: Math.random() * 60 + 200 // Blue to white range
    });

    // Create initial meteors
    for (let i = 0; i < 6; i++) {
      meteors.push(createMeteor());
    }

    const drawMeteor = (meteor) => {
      const angleInRad = (meteor.angle * Math.PI) / 180;
      const endX = meteor.x - Math.cos(angleInRad) * meteor.length;
      const endY = meteor.y + Math.sin(angleInRad) * meteor.length;

      // Create gradient for meteor trail
      const gradient = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
      gradient.addColorStop(0, `hsla(${meteor.hue}, 100%, 80%, ${meteor.opacity})`);
      gradient.addColorStop(0.4, `hsla(${meteor.hue}, 100%, 70%, ${meteor.opacity * 0.5})`);
      gradient.addColorStop(0.8, `hsla(${meteor.hue}, 100%, 60%, ${meteor.opacity * 0.2})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = meteor.tailWidth;
      ctx.stroke();

      // Draw meteor head with glow
      ctx.shadowColor = `hsla(${meteor.hue}, 100%, 70%, 0.8)`;
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(meteor.x, meteor.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${meteor.hue}, 100%, 90%, ${meteor.opacity})`;
      ctx.fill();
      
      // Reset shadow
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      // Clear with transparent to create trail effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((meteor, index) => {
        drawMeteor(meteor);

        // Update meteor position
        meteor.x += Math.cos((meteor.angle * Math.PI) / 180) * meteor.speed;
        meteor.y -= Math.sin((meteor.angle * Math.PI) / 180) * meteor.speed;

        // Reset meteor if it goes off screen
        if (meteor.x > canvas.width + meteor.length || 
            meteor.y < -meteor.length || 
            meteor.x < -meteor.length) {
          meteors[index] = createMeteor();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 1,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default MeteorShower;