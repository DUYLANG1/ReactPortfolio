import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollProgress.scss";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Add spring animation for smoother progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="scroll-progress-container">
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX,
          transformOrigin: "0%",
        }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
};

export default ScrollProgress;
