import React, { useCallback, useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import AnimationLottie from "@/components/common/AnimationLottie";
import SocialMedia from "@/components/sections/SocialMedia";
import {
  ContactSectionProps,
  ContactClickHandler,
  ParsedAnimationData,
  AppDataUrls,
  AboutTranslationKey,
} from "./types";

import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import { APP_DATA } from "helpers/data";

const ContactSection: React.FC<ContactSectionProps> = () => {
  const { t } = useTranslation();

  // Type-safe translation helper function
  const getTranslation = (key: AboutTranslationKey): string => {
    return t(key);
  };

  // Type assertion for APP_DATA to ensure type safety
  const typedAppData: AppDataUrls = APP_DATA as AppDataUrls;

  // Memoize contact handler to prevent unnecessary re-renders with proper typing
  const handleContactClick: ContactClickHandler = useCallback((): void => {
    window.open(typedAppData.GMAIL_URL, "_blank");
  }, [typedAppData.GMAIL_URL]);

  // Enhanced click handler with event typing for better type safety
  const handleContactClickWithEvent = useCallback(
    (event: React.MouseEvent<HTMLDivElement>): void => {
      event.preventDefault();
      handleContactClick();
    },
    [handleContactClick]
  );

  // Keyboard handler for accessibility
  const handleContactKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>): void => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleContactClick();
      }
    },
    [handleContactClick]
  );

  // Memoize parsed animation with error handling
  const contactAnimation: ParsedAnimationData =
    useMemo((): ParsedAnimationData => {
      try {
        return JSON.parse(CONTACT_LOTTIE);
      } catch (error) {
        console.warn("Failed to parse contact animation:", error);
        return {}; // Return empty object as fallback
      }
    }, []);

  return (
    <section
      className="contact-section"
      aria-labelledby="contact-heading"
      role="region"
    >
      <Row className="contact-section">
        <Col
          md={6}
          xs={6}
          className="social-media-container mt-md-5 mt-3 d-flex flex-column align-items-center"
        >
          <h3
            id="contact-heading"
            className="contact-title mb-md-5 mb-2 text-center"
          >
            {getTranslation("aboutSection.findMe")}
          </h3>
          <nav
            aria-label="Social media links"
            role="navigation"
            className="d-flex justify-content-center"
          >
            <SocialMedia
              linkedin={typedAppData.LINKEDIN_URL}
              gmail={typedAppData.GMAIL_URL}
              github={typedAppData.GITHUB_URL}
            />
          </nav>
        </Col>
        <Col
          md={6}
          xs={6}
          className="contact-animation-container d-flex flex-column align-items-center justify-content-center"
          onClick={handleContactClickWithEvent}
          onKeyDown={handleContactKeyDown}
          role="button"
          tabIndex={0}
          aria-label={`${getTranslation(
            "aboutSection.contactMe"
          )} - Opens Gmail in new tab`}
          aria-describedby="contact-animation-desc"
        >
          <div
            role="img"
            aria-label="Contact animation illustration"
            aria-describedby="contact-animation-desc"
          >
            <span id="contact-animation-desc" className="sr-only">
              Decorative animation showing communication and contact methods
            </span>
            <AnimationLottie width="50%" animationPath={contactAnimation} />
          </div>
          <h4 className="contact-cta text-center" aria-hidden="true">
            {getTranslation("aboutSection.contactMe")}
          </h4>
        </Col>
      </Row>
    </section>
  );
};

export default ContactSection;
