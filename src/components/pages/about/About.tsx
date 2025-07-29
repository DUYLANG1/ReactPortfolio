import { Col, Row } from "react-bootstrap";
import {
  AboutIntro,
  AboutAnimation,
  EducationSection,
  ContactSection,
} from "./index";
import "./About.scss";

const About = () => (
  <div className="about-content">
    <Row className="about-intro-section">
      <Col md={6} xs={12}>
        <AboutIntro />
      </Col>
      <Col
        md={6}
        xs={12}
        className="d-flex align-items-center justify-content-center"
      >
        <AboutAnimation />
      </Col>
    </Row>
    <EducationSection />
    <ContactSection />
  </div>
);

export default About;
