import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AnimationLottie from "@/components/common/AnimationLottie";
import SocialMedia from "@/components/common/SocialMedia";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import { APP_DATA } from "@/constants";
import "./ContactSection.scss";

const ContactSection = () => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    window.open(APP_DATA.GMAIL_URL, "_blank");
  };

  const contactAnimation = JSON.parse(CONTACT_LOTTIE);

  return (
    <div className="contact-section">
      <Row>
        <Col lg={6} className="social-media-container">
          <h3 className="contact-title">{t("aboutSection.findMe")}</h3>
          <SocialMedia {...APP_DATA} variant="contact" />
        </Col>
        <Col
          lg={6}
          className="contact-animation-container"
          onClick={handleContactClick}
          style={{ cursor: "pointer" }}
        >
          <AnimationLottie width="50%" animationPath={contactAnimation} />
          <h4 className="contact-cta">{t("aboutSection.contactMe")}</h4>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
