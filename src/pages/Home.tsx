import { Container } from "react-bootstrap";
import { Home } from "../components/pages/home/Home";

const HomePage = () => (
  <div className="about-screen">
    <section className="mt-md-5 mt-2 pt-md-5 pt-0">
      <Container>
        <Home />
      </Container>
    </section>
  </div>
);

export default HomePage;
