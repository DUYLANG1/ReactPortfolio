import { useEffect, useState, useCallback } from "react";
import "./ScrollProgress.scss"; // Add this import

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScroll = useCallback(() => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const currentPosition = window.scrollY;
    const progress = totalHeight ? (currentPosition / totalHeight) * 100 : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    // Initial call to set progress
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

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
