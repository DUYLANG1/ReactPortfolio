import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import ProjectSkeleton from "./ProjectSkeleton";

// Define interface for project items
interface ProjectItem {
  id: number;
  imgPath: string;
  title: string;
  description: {
    en: string;
    vi: string;
  };
  githubLink: string;
  demoLink: string;
}

const Project = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectData = await import("helpers/data").then(
          (m) => m.PROJECTS
        );
        setProjects(projectData);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <Row>
        {[1, 2, 3].map((i) => (
          <ProjectSkeleton key={i} />
        ))}
      </Row>
    );
  }

  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">
            {t("projectSection.title")}{" "}
            <span className="brand-red">{t("projectSection.works")}</span>{" "}
          </h3>
          <h6 className="text-center mb-md-5 mb-2">
            {t("projectSection.subTitle")}
          </h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projects?.map((item) => {
          return (
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
          );
        })}
      </Row>
      <div className="mb-7"></div>
    </>
  );
};

export default Project;
