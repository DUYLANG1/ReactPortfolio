import React from "react";

import AnimationLottie from "@/components/common/AnimationLottie";
import {
  AboutAnimationProps,
  LottieAnimationData,
  AnimationWidth,
} from "./types";

import codingJSON from "assets/lottie/coding.json";
import "./AboutAnimation.scss";

const AboutAnimation: React.FC<AboutAnimationProps> = ({ width = "80%" }) => {
  // Type assertion for imported JSON animation data with width validation
  const typedCodingJSON: LottieAnimationData =
    codingJSON as LottieAnimationData;
  const validatedWidth: AnimationWidth = width as AnimationWidth;
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
      <AnimationLottie width={validatedWidth} animationPath={typedCodingJSON} />
    </div>
  );
};

export default AboutAnimation;
