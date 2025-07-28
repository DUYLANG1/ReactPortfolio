import { Card, Col } from "react-bootstrap";

const ProjectSkeleton = () => {
  return (
    <Col md={4} className="project-card mb-4">
      <Card className="project-card-view h-100">
        <div className="skeleton-img"></div>
        <Card.Body>
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="d-flex gap-2 mt-3">
            <div className="skeleton-button"></div>
            <div className="skeleton-button"></div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectSkeleton;
