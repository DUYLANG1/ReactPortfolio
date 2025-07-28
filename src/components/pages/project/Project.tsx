import { Col, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "helpers/data";
import { memo } from "react";

const Project = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">
            {t("projectSection.title")}{" "}
            <span className="brand-red">{t("projectSection.works")}</span>
          </h3>
          <h6 className="text-center mb-md-5 mb-2">
            {t("projectSection.subTitle")}
          </h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {PROJECTS.map((item) => (
          <Col md={4} className="project-card" key={item.id}>
            <ProjectCard
              imgPath={item.imgPath}
              title={item.title}
              description={item.description}
              githubLink={item.githubLink}
              demoLink={item.demoLink}
              id={item.id}
            />
          </Col>
        ))}
      </Row>
      <div className="mb-7"></div>
    </>
  );
};

export default memo(Project);
