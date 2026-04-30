'use client';

import { useEffect, useRef } from 'react';

class Particle {
  x: number; y: number;
  originX: number; originY: number;
  vx: number; vy: number;
  size: number; color: string;
  dispersion: number; returnSpd: number;

  constructor(x: number, y: number, size: number, color: string, dispersion: number, returnSpd: number) {
    this.x = x + (Math.random() - 0.5) * 10;
    this.y = y + (Math.random() - 0.5) * 10;
    this.originX = x;
    this.originY = y;
    this.vx = (Math.random() - 0.5) * 5;
    this.vy = (Math.random() - 0.5) * 5;
    this.size = size;
    this.color = color;
    this.dispersion = dispersion;
    this.returnSpd = returnSpd;
  }

  update(mouseX: number, mouseY: number) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const interactionRadius = 120;

    if (distance < interactionRadius && mouseX !== -1000 && mouseY !== -1000) {
      const force = (interactionRadius - distance) / interactionRadius;
      this.vx -= (dx / distance) * force * this.dispersion;
      this.vy -= (dy / distance) * force * this.dispersion;
    }

    this.vx += (this.originX - this.x) * this.returnSpd;
    this.vy += (this.originY - this.y) * this.returnSpd;
    this.vx *= 0.85;
    this.vy *= 0.85;

    const distToOrigin = Math.sqrt((this.x - this.originX) ** 2 + (this.y - this.originY) ** 2);
    if (distToOrigin < 1 && Math.random() > 0.95) {
      this.vx += (Math.random() - 0.5) * 0.2;
      this.vy += (Math.random() - 0.5) * 0.2;
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

interface ParticleTypographyProps {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
  particleSize?: number;
  particleDensity?: number;
  dispersionStrength?: number;
  returnSpeed?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ParticleTypography({
  text,
  fontSize = 90,
  fontFamily = 'Fixel Display, sans-serif',
  fontWeight = '600',
  particleSize = 1.5,
  particleDensity = 6,
  dispersionStrength = 15,
  returnSpeed = 0.08,
  color = '#ffffff',
  className,
  style,
}: ParticleTypographyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animFrameId: number;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let W = 0, H = 0;

    const init = () => {
      W = container.clientWidth;
      H = container.clientHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const fs = Math.min(fontSize, W * 0.12);
      ctx.font = `${fontWeight} ${fs}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = color;

      const maxLineWidth = W * 0.82;
      const lines = wrapLines(ctx, text, maxLineWidth);
      const lineH = fs * 1.15;
      const totalH = lines.length * lineH;
      const startY = (H - totalH) / 2 + fs / 2;

      ctx.clearRect(0, 0, W, H);
      lines.forEach((line, i) => ctx.fillText(line, W / 2, startY + i * lineH));

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      particles = [];
      const step = Math.max(1, Math.floor(particleDensity * dpr));

      for (let y = 0; y < imageData.height; y += step) {
        for (let x = 0; x < imageData.width; x += step) {
          if (imageData.data[(y * imageData.width + x) * 4 + 3] > 128) {
            particles.push(new Particle(x / dpr, y / dpr, particleSize, color, dispersionStrength, returnSpeed));
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(mouseX, mouseY); p.draw(ctx); });
      animFrameId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouseX = -1000; mouseY = -1000; };

    let roTimeout: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(roTimeout);
      roTimeout = setTimeout(init, 100);
    });
    ro.observe(container);

    document.fonts.ready.then(() => { init(); animate(); });

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      clearTimeout(roTimeout);
      ro.disconnect();
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animFrameId);
    };
  }, [text, fontSize, fontFamily, fontWeight, particleSize, particleDensity, dispersionStrength, returnSpeed, color]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%', ...style }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%', pointerEvents: 'none' }}
      />
    </div>
  );
}
