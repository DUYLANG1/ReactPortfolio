import { useCallback, useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import AnimationLottie from "@/components/common/AnimationLottie";
import SocialMedia from "@/components/common/SocialMedia";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import { APP_DATA } from "helpers/data";
import "./ContactSection.scss";

const ContactSection = () => {
  const { t } = useTranslation();

  const handleContactClick = useCallback(
    (event?: React.MouseEvent | React.KeyboardEvent) => {
      event?.preventDefault();
      window.open(APP_DATA.GMAIL_URL, "_blank");
    },
    []
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        handleContactClick(event);
      }
    },
    [handleContactClick]
  );

  const contactAnimation = useMemo(() => {
    try {
      return JSON.parse(CONTACT_LOTTIE);
    } catch {
      return {};
    }
  }, []);

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <Row>
        <Col lg={6} className="social-media-container">
          <h3 id="contact-heading" className="contact-title">
            {t("aboutSection.findMe")}
          </h3>
          <SocialMedia {...APP_DATA} variant="contact" />
        </Col>
        <Col
          lg={6}
          className="contact-animation-container"
          onClick={handleContactClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label={`${t("aboutSection.contactMe")} - Opens Gmail`}
        >
          <AnimationLottie width="50%" animationPath={contactAnimation} />
          <h4 className="contact-cta">{t("aboutSection.contactMe")}</h4>
        </Col>
      </Row>
    </section>
  );
};

export default ContactSection;
