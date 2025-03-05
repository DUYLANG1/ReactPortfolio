import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const handleContactClick = () => {
    window.open(APP_DATA.GMAIL_URL, "_blank");
  };
  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            {t("aboutSection.introduce")}{" "}
            <span className="brand-red">{t("aboutSection.myself")}</span>{" "}
          </h3>
          <div>
            <div>
              <p>{t("aboutSection.greeting")}</p>

              <p>{t("aboutSection.working")}</p>

              <p>{t("aboutSection.education")}</p>
            </div>
          </div>
          <div>
            <p>{t("aboutSection.hobbiesHeading")}</p>
            <ul>
              <li>{t("aboutSection.hobbies.reading")}</li>
              <li>{t("aboutSection.hobbies.exercizing")}</li>
              <li>{t("aboutSection.hobbies.traveling")}</li>
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">{t("aboutSection.quote")}</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div>
              <h4 className="text-center brand-red">
                {t("aboutSection.educationTitle")}
              </h4>
            </div>
            <div>
              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>{t("aboutSection.educationDuration")}</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">
                          {t("aboutSection.educationDegree")}
                        </p>
                        <p className="company">
                          {t("aboutSection.educationUniversity")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">{t("aboutSection.findMe")}</h3>
          <SocialMedia
            linkedin={APP_DATA.LINKEDIN_URL}
            gmail={APP_DATA.GMAIL_URL}
            github={APP_DATA.GITHUB_URL}
            facebook={APP_DATA.FACEBOOK_URL}
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
          onClick={handleContactClick}
          style={{ cursor: "pointer" }}
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">{t("aboutSection.contactMe")}</h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
