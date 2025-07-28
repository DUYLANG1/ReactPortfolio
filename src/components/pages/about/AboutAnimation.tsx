import AnimationLottie from "@/components/common/AnimationLottie";
import codingJSON from "assets/lottie/coding.json";
import "./AboutAnimation.scss";

interface AboutAnimationProps {
  width?: string;
}

const AboutAnimation = ({ width = "80%" }: AboutAnimationProps) => {
  return (
    <div
      className="about-animation-container"
      role="img"
      aria-label="Animated illustration of a person coding at a computer"
      aria-describedby="coding-animation-desc"
    >
      <span id="coding-animation-desc" className="sr-only">
        Decorative animation showing a developer working on code
      </span>
      <AnimationLottie width={width} animationPath={codingJSON} />
    </div>
  );
};

export default AboutAnimation;
