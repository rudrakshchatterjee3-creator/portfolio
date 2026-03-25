import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial center position
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let animationFrameId: number;
    let isMoving = false;

    // Center the blob initially (offset by 400px since the blob is 800x800)
    if (blobRef.current) {
      blobRef.current.style.transform = `translate3d(${currentX - 400}px, ${currentY - 400}px, 0)`;
    }

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        animate();
      }
    };

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      // Hardware-throttle: Kill the animation loop if we are close enough to the target
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        isMoving = false;
        return;
      }

      currentX += dx * 0.12; 
      currentY += dy * 0.12;

      if (blobRef.current) {
        // GPU accelerated translation instead of expensive radial-gradient recalculation
        blobRef.current.style.transform = `translate3d(${currentX - 400}px, ${currentY - 400}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div 
        ref={blobRef}
        className="absolute w-[800px] h-[800px] opacity-[0.25] dark:opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(220,150,80,0.8) 0%, rgba(220,150,80,0) 60%)",
          filter: "blur(100px)",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
