import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "./project.card.scss";
import { memo } from "react";

interface IProps {
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

function ProjectCard(props: IProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <Card className="project-card-view shadow-sm h-100 transition-all">
      <div className="card-img-wrapper">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          className="project-image"
        />
        <div className="card-img-overlay">
          <div className="overlay-buttons">
            <Button variant="light" href={props.githubLink} target="_blank">
              <BsGithub /> Code
            </Button>
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> Demo
            </Button>
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {currentLanguage === "vi"
            ? props.description.vi
            : props.description.en}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default memo(ProjectCard);
