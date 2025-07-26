import Lottie, { LottieRefCurrentProps } from "lottie-react";
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
          border: "1px solid var(--border-hero-right)",
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
    <Lottie
      {...defaultOptions}
      onError={handleAnimationError}
      data-testid="animation-lottie"
      data-width={width}
    />
  );
};

export default AnimationLottie;
