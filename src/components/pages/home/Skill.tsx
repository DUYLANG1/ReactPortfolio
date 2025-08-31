import { SKILLS } from "@/helpers/skills";
import Marquee from "react-fast-marquee";
import "./Skill.scss";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Skill = () => {
  const { t } = useTranslation();
  return (
    <Row className="skills-container">
      <Col xs={12} className="my-3 my-md-5">
        <div className="text-center">
          <h3>{t("skill.title")}</h3>
        </div>
      </Col>
      <Col xs={12} className="skills-marquee">
        <Marquee
          gradient={false}
          speed={100}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {SKILLS.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-card">
                <img
                  src={skill.image}
                  alt={skill.name}
                  width={40}
                  height={40}
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </Col>
    </Row>
  );
};

export default Skill;
