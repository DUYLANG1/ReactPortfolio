import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AnimationLottie from "@/components/common/AnimationLottie";
import GlowCard from "@/components/common/GlowCard";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { FaGraduationCap } from "react-icons/fa6";
import "./EducationSection.scss";

const EducationSection = () => {
  const { t } = useTranslation();
  const developmentAnimation = JSON.parse(DEVELOPMENT_LOTTIE);

  return (
    <div className="education-section">
      <Row className="education-section">
        <Col
          md={6}
          xs={12}
          className="education-animation d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie width="50%" animationPath={developmentAnimation} />
        </Col>
        <Col md={6} xs={12} className="education-content mt-md-5 mt-3">
          <div className="education-card-container d-flex flex-column align-items-center gap-3">
            <h3 className="education-title text-center brand-red">
              {t("aboutSection.educationTitle")}
            </h3>
            <GlowCard identifier="experience-5">
              <div className="education-card-content p-3 relative">
                <div className="experience-container">
                  <div className="duration-text">
                    <p>{t("aboutSection.educationDuration")}</p>
                  </div>
                  <div className="details">
                    <div className="icon">
                      <FaGraduationCap size={36} />
                    </div>
                    <div className="info">
                      <h4 className="title">
                        {t("aboutSection.educationDegree")}
                      </h4>
                      <p className="company">
                        {t("aboutSection.educationUniversity")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EducationSection;
