import { useEffect } from "react";

const InteractiveBackground = () => {
  useEffect(() => {
    // Add the specific classes we need to the body
    document.body.classList.add("antigravity-bg");
    
    // Set initial position to center
    document.body.style.setProperty("--cursor-x", `${window.innerWidth / 2}px`);
    document.body.style.setProperty("--cursor-y", `${window.innerHeight / 2}px`);

    const onMouseMove = (e: MouseEvent) => {
      // Update CSS variables instantly with absolutely zero easing/delay
      document.body.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.body.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    // Attach listener
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.classList.remove("antigravity-bg");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return null;
};

export default InteractiveBackground;
