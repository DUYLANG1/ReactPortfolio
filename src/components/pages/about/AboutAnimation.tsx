import AnimationLottie from "@/components/common/AnimationLottie";
import codingJSON from "assets/lottie/coding.json";
import "./AboutAnimation.scss";

interface Props {
  width?: string;
}

const AboutAnimation = ({ width = "80%" }: Props) => (
  <div className="about-animation-container">
    <AnimationLottie width={width} animationPath={codingJSON} />
  </div>
);

export default AboutAnimation;
