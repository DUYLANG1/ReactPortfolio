import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import AnimationLottie from "@/components/common/animation-lottie";
import GlowCard from "@/components/common/glow-card";
import {
  EducationSectionProps,
  ParsedAnimationData,
  AboutTranslationKey,
} from "./types";

import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";

import { FaGraduationCap } from "react-icons/fa6";

const EducationSection: React.FC<EducationSectionProps> = () => {
  const { t } = useTranslation();

  // Type-safe translation helper function
  const getTranslation = (key: AboutTranslationKey): string => {
    return t(key);
  };

  // Memoize parsed animation to avoid repeated JSON.parse calls with error handling
  const developmentAnimation: ParsedAnimationData =
    useMemo((): ParsedAnimationData => {
      try {
        return JSON.parse(DEVELOPMENT_LOTTIE);
      } catch (error) {
        console.warn("Failed to parse development animation:", error);
        return {}; // Return empty object as fallback
      }
    }, []);

  return (
    <section
      className="education-section"
      aria-labelledby="education-heading"
      role="region"
    >
      <Row className="education-section">
        <Col
          md={6}
          xs={12}
          className="education-animation d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
          role="img"
          aria-label="Development and learning animation"
          aria-describedby="education-animation-desc"
        >
          <span id="education-animation-desc" className="sr-only">
            Decorative animation representing software development and
            continuous learning
          </span>
          <AnimationLottie width="50%" animationPath={developmentAnimation} />
        </Col>
        <Col md={6} xs={12} className="education-content mt-md-5 mt-3">
          <div className="education-card-container d-flex flex-column align-items-center gap-3">
            <div>
              <h3
                id="education-heading"
                className="education-title text-center brand-red"
              >
                {getTranslation("aboutSection.educationTitle")}
              </h3>
            </div>
            <div>
              <GlowCard identifier="experience-5">
                <article
                  className="education-card-content p-3 relative"
                  role="article"
                  aria-labelledby="education-degree"
                  aria-describedby="education-details"
                >
                  <div className="experience-container">
                    <div className="duration-text">
                      <p aria-label="Education duration">
                        {getTranslation("aboutSection.educationDuration")}
                      </p>
                    </div>
                    <div className="details" id="education-details">
                      <div
                        className="icon"
                        role="img"
                        aria-label="Graduation cap icon"
                      >
                        <FaGraduationCap size={36} aria-hidden="true" />
                      </div>
                      <div className="info">
                        <h4 id="education-degree" className="title">
                          {getTranslation("aboutSection.educationDegree")}
                        </h4>
                        <p className="company">
                          {getTranslation("aboutSection.educationUniversity")}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default EducationSection;
