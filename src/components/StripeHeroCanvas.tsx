import React, { useEffect, useRef } from 'react';

/**
 * StripeHeroCanvas
 * Generates Stripe's authentic signature light-mode iridescent chromatic waves
 * flowing across an airy, white/light slate background.
 */
export const StripeHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || 900;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    let step = 0;

    const render = () => {
      step += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Base: Pure clean crisp light background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // Clyptus signature brand chromatic waves
      // 1. Clyptus Corporate Blue Wave (#2e3192)
      const g1 = ctx.createRadialGradient(
        width * 0.7 + Math.sin(step * 0.7) * 90,
        height * 0.25 + Math.cos(step * 0.5) * 60,
        40,
        width * 0.65,
        height * 0.35,
        width * 0.55
      );
      g1.addColorStop(0, 'rgba(46, 49, 146, 0.38)'); // Clyptus Blue
      g1.addColorStop(0.45, 'rgba(59, 63, 168, 0.18)');
      g1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // 2. Electric Sky & Tech Blue Stream
      const g2 = ctx.createRadialGradient(
        width * 0.85 + Math.cos(step * 0.6) * 110,
        height * 0.45 + Math.sin(step * 0.8) * 70,
        30,
        width * 0.75,
        height * 0.5,
        width * 0.5
      );
      g2.addColorStop(0, 'rgba(2, 132, 199, 0.28)'); // Sky/Tech
      g2.addColorStop(0.5, 'rgba(56, 189, 248, 0.12)');
      g2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // 3. Clyptus Brand Energetic Orange Ribbon (#ea4800)
      const g3 = ctx.createRadialGradient(
        width * 0.55 + Math.sin(step * 0.9) * 80,
        height * 0.6 + Math.cos(step * 0.7) * 50,
        20,
        width * 0.6,
        height * 0.55,
        width * 0.45
      );
      g3.addColorStop(0, 'rgba(234, 72, 0, 0.32)'); // Clyptus Orange
      g3.addColorStop(0.5, 'rgba(249, 115, 22, 0.15)'); // Warm Amber
      g3.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, width, height);

      // 4. Subtle Emerald / Mint highlight
      const g4 = ctx.createRadialGradient(
        width * 0.9 + Math.sin(step * 0.4) * 60,
        height * 0.2 + Math.cos(step * 0.4) * 40,
        15,
        width * 0.85,
        height * 0.25,
        width * 0.35
      );
      g4.addColorStop(0, 'rgba(0, 217, 36, 0.2)');
      g4.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g4;
      ctx.fillRect(0, 0, width, height);

      // Subtle bottom smooth blend into #f6f9fc
      const bottomFade = ctx.createLinearGradient(0, height * 0.75, 0, height);
      bottomFade.addColorStop(0, 'rgba(255, 255, 255, 0)');
      bottomFade.addColorStop(1, '#f6f9fc');
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, height * 0.75, width, height * 0.25);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
      />
      {/* Stripe-style angled diagonal beam line */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(99,91,255,0.3) 0%, rgba(0,212,255,0.2) 100%)'
        }}
      />
    </div>
  );
};
