import { useEffect, useState, useCallback } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Memoize the scroll handler
  const updateScroll = useCallback(() => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const currentPosition = window.scrollY;
    const progress = totalHeight ? (currentPosition / totalHeight) * 100 : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    // Add passive listener for better performance
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  // Skip rendering if progress is 0
  if (scrollProgress === 0) return null;

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
