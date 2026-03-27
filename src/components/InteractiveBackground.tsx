import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 55; // Reduced from 70 for performance
    const connectionDistance = 200;
    const connectionDistSq = connectionDistance * connectionDistance; // Avoid sqrt
    
    const isDark = currentTheme === "dark";
    
    const dotR = isDark ? 184 : 120;
    const dotG = isDark ? 115 : 110;
    const dotB = isDark ? 51 : 95;
    const lineR = isDark ? 184 : 110;
    const lineG = isDark ? 130 : 105;
    const lineB = isDark ? 60 : 90;

    // Scroll state — immediate response, no heavy smoothing
    let scrollDelta = 0;

    const onScroll = () => {
      scrollDelta = 1; // Just flag that a scroll happened
    };

    let lastScrollY = window.scrollY;
    const onScrollCapture = () => {
      const now = window.scrollY;
      const delta = now - lastScrollY;
      lastScrollY = now;
      scrollDelta = delta * 0.15; // Immediate, scaled-down response
    };

    window.addEventListener("scroll", onScrollCapture, { passive: true });

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      isStar: boolean;
      scrollFactor: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.18;
        this.vy = (Math.random() - 0.5) * 0.18;
        
        this.isStar = Math.random() < 0.15;
        this.size = this.isStar 
          ? Math.random() * 2.5 + 2
          : Math.random() * 1.2 + 0.5;
        
        this.opacity = this.isStar
          ? (isDark ? 0.45 : 0.18)
          : (isDark ? 0.20 : 0.10);
        
        // Parallax depth factor
        this.scrollFactor = this.isStar 
          ? (Math.random() * 0.2 + 0.05)
          : (Math.random() * 0.5 + 0.15);
      }

      update(sDelta: number) {
        this.x += this.vx;
        this.y += this.vy + (sDelta * this.scrollFactor);

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < -10) this.y = canvas.height + 10;
        else if (this.y > canvas.height + 10) this.y = -10;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        
        if (this.isStar) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotR},${dotG},${dotB},${(this.opacity * 0.15).toFixed(3)})`;
          ctx.fill();
        }
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotR},${dotG},${dotB},${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const lineMaxOpacity = isDark ? 0.18 : 0.08;
    const lineW = isDark ? 0.6 : 0.4;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Immediately apply scroll delta then decay it fast
      const currentScrollDelta = scrollDelta;
      scrollDelta *= 0.75; // Fast decay — no lingering lag
      if (Math.abs(scrollDelta) < 0.01) scrollDelta = 0;
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(currentScrollDelta);
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistSq) {
            const distance = Math.sqrt(distSq);
            const lineOpacity = (1 - distance / connectionDistance) * lineMaxOpacity;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineR},${lineG},${lineB},${lineOpacity.toFixed(3)})`;
            ctx.lineWidth = lineW;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    }, { threshold: 0.1 });
    
    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScrollCapture);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [currentTheme]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Lightweight CSS-only ambient glows — no framer-motion overhead */}
      <div
        className="absolute top-[5%] right-[5%] w-[700px] h-[700px] rounded-full blur-[120px] opacity-[0.06] dark:opacity-[0.10] animate-[glowDrift1_35s_linear_infinite]"
        style={{
          background: currentTheme === "dark" 
            ? "radial-gradient(circle, #B87333 0%, transparent 70%)" 
            : "radial-gradient(circle, #D4C5A0 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute bottom-[15%] left-[15%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.04] dark:opacity-[0.08] animate-[glowDrift2_45s_linear_infinite]"
        style={{
          background: currentTheme === "dark" 
            ? "radial-gradient(circle, #DAA520 0%, transparent 70%)" 
            : "radial-gradient(circle, #C0B090 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
        aria-hidden="true"
      />
    </div>
  );
};

export default InteractiveBackground;
