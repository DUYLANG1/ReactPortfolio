import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "components/sections/hero/hero.left";
import HeroRight from "components/sections/hero/hero.right";
import { MdFileDownload } from "react-icons/md";
import Introduction from "@/components/sections/introduction/introduction";
import ResizeButton from "components/sections/resize.button";
import { useTranslation } from "react-i18next";
import Divider from "components/sections/divider";
import Experience from "@/components/sections/experience/experience";
import Skill from "@/components/sections/skill/skill";
import { useRef } from "react";
import PageTransition from "components/common/PageTransition";

const HomePage = () => {
  const { t } = useTranslation();

  const expRef = useRef<HTMLElement>(null);

  const scrollToExperienceSection = () => {
    expRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "end",
    });
  };

  return (
    <PageTransition>
      <div className="homepage-screen">
        <section className="mt-md-7 mt-2">
          <Container style={{ position: "relative" }}>
            <Row>
              <Col className="d-none d-md-block" md={6}>
                <HeroLeft
                  scrollToExperienceSection={scrollToExperienceSection}
                />
              </Col>
              <Col md={6}>
                <HeroRight />
              </Col>
              <Col
                xs={12}
                className="d-md-none d-flex mt-4 justify-content-center"
              >
                <ResizeButton
                  btnText={t("heroSection.cv")}
                  btnIcons={<MdFileDownload />}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Introduction />
          </Container>
        </section>
        <Divider />
        <section ref={expRef}>
          <Container>
            <Experience />
          </Container>
        </section>
        <Divider />
        <section>
          <Container>
            <Skill />
          </Container>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomePage;
