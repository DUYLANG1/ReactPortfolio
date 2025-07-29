import { Col, Row } from "react-bootstrap";
import {
  AboutIntro,
  AboutAnimation,
  EducationSection,
  ContactSection,
} from "./index";

import "./About.scss";

const About = () => {
  return (
    <main className="about-content" role="main" aria-labelledby="about-heading">
      <section
        className="about-intro-section"
        aria-labelledby="about-intro-heading"
      >
        <Row className="about-intro-section">
          <Col md={6} xs={12}>
            <AboutIntro />
          </Col>
          <Col
            md={6}
            xs={12}
            className="d-flex align-items-center justify-content-center"
            role="img"
            aria-label="Coding animation illustration"
          >
            <AboutAnimation />
          </Col>
        </Row>
      </section>
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export default About;
