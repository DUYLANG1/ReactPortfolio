import { Col, Container, Row } from "react-bootstrap";
import HeaderLeft from "@/components/pages/home/HeaderLeft";
import HeaderRight from "@/components/pages/home/HeaderRight";
import { MdFileDownload } from "react-icons/md";
import Introduction from "@/components/pages/home/Introduction";
import ResizeButton from "@/components/common/ResizeButton";
import { useTranslation } from "react-i18next";
import Divider from "@/components/common/Divider";
import Experience from "@/components/pages/home/Experience";
import Skill from "@/components/pages/home/Skill";
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
                <HeaderLeft
                  scrollToExperienceSection={scrollToExperienceSection}
                />
              </Col>
              <Col md={6}>
                <HeaderRight />
              </Col>
              <Col
                xs={12}
                className="d-md-none d-flex mt-4 justify-content-center"
              >
                <ResizeButton
                  btnText={t("headerSection.cv")}
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
