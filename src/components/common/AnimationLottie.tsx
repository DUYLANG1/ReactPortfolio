import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface AnimationLottieProps {
  animationPath: object;
  width?: string;
}

const AnimationLottie = ({
  animationPath,
  width = "95%",
}: AnimationLottieProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !animationPath || Object.keys(animationPath).length === 0) {
    return (
      <div
        className="animation-fallback"
        style={{
          width,
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--glow-card-background)",
          borderRadius: "8px",
          border: "1px solid var(--border-header-right)",
          color: "var(--text-white)",
          fontSize: "0.9rem",
          opacity: 0.7,
        }}
      >
        Animation unavailable
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={animationPath}
        loop
        autoplay
        style={{ width }}
        onError={() => setHasError(true)}
      />
    </motion.div>
  );
};

export default AnimationLottie;
