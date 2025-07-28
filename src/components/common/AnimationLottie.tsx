import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface IProps {
  animationPath: object;
  width?: string;
}

const AnimationLottie = ({ animationPath, width = "95%" }: IProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [hasError, setHasError] = useState(false);

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: {
        width,
      },
      lottieRef: lottieRef,
    };
  }, [animationPath, width]);

  useEffect(() => {
    const currentLottieRef = lottieRef.current;
    return () => {
      if (currentLottieRef) {
        currentLottieRef.destroy();
      }
    };
  }, []);

  // Error boundary for animation loading
  const handleAnimationError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
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
        data-testid="animation-error-fallback"
      >
        Animation unavailable
      </div>
    );
  }

  return (
    <motion.div
      initial={{ x: "-50%", y: "-50%", scale: 0 }}
      animate={{ x: "0%", y: "0%", scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        {...defaultOptions}
        onError={handleAnimationError}
        data-testid="animation-lottie"
        data-width={width}
      />
    </motion.div>
  );
};

export default AnimationLottie;
