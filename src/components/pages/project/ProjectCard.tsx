import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "./ProjectCard.scss";

interface Props {
  imgPath: string;
  title: string;
  description: {
    en: string;
    vi: string;
  };
  githubLink: string;
  demoLink: string;
  id: number;
}

const ProjectCard = ({
  imgPath,
  title,
  description,
  githubLink,
  demoLink,
}: Props) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <Card className="project-card-view shadow-sm h-100 transition-all">
      <div className="card-img-wrapper">
        <Card.Img
          variant="top"
          src={imgPath}
          alt={title}
          className="project-image"
        />
        <div className="card-img-overlay">
          <div className="overlay-buttons">
            <Button variant="light" href={githubLink} target="_blank">
              <BsGithub /> Code
            </Button>
            <Button variant="primary" href={demoLink} target="_blank">
              <CgWebsite /> Demo
            </Button>
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {currentLanguage === "vi" ? description.vi : description.en}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
