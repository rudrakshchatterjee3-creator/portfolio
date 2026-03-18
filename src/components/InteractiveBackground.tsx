import { useEffect } from "react";

const InteractiveBackground = () => {
  useEffect(() => {
    // Add the specific classes we need to the body
    document.body.classList.add("antigravity-bg");
    
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    // Set initial position to center
    document.body.style.setProperty("--cursor-x", `${currentX}px`);
    document.body.style.setProperty("--cursor-y", `${currentY}px`);

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    let animationFrameId: number;

    const animate = () => {
      // Linear interpolation for smooth trailing effect
      currentX += (targetX - currentX) * 0.12; 
      currentY += (targetY - currentY) * 0.12;

      document.body.style.setProperty("--cursor-x", `${currentX}px`);
      document.body.style.setProperty("--cursor-y", `${currentY}px`);

      animationFrameId = requestAnimationFrame(animate);
    };

    // Attach listener and start animation loop
    window.addEventListener("mousemove", onMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("antigravity-bg");
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return null;
};

export default InteractiveBackground;
