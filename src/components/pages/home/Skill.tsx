import { SKILLS_DATA } from "helpers/data";
import { skillsImage } from "helpers/skill.image";
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
          {SKILLS_DATA.map((skill, id) => {
            const skillImage = skillsImage(skill);
            return (
              <div className="skill-item" key={id}>
                <div className="skill-card">
                  {skillImage ? (
                    <img src={skillImage} alt={skill} width={40} height={40} />
                  ) : (
                    <div className="skill-icon-placeholder">
                      {skill.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <p className="skill-name">{skill}</p>
                </div>
              </div>
            );
          })}
        </Marquee>
      </Col>
    </Row>
  );
};

export default Skill;
