import { Container } from "react-bootstrap";
import Project from "@/components/pages/project/Project";

const ProjectPage = () => (
  <div className="project-screen">
    <section className="mt-md-5 mt-2 pt-md-5 pt-0">
      <Container>
        <Project />
      </Container>
    </section>
  </div>
);

export default ProjectPage;
