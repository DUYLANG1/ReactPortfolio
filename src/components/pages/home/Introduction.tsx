import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/avatar.svg";
import "./Introduction.scss";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <section
      className="introduction-section my-5 my-md-7"
      style={{ position: "relative" }}
    >
      <Row>
        <Col xs={12} md={9}>
          <h2 className="text-center text-md-start">
            <span className="text-pink-100">
              {t("introSection.title.highlight")}
            </span>{" "}
            {t("introSection.title.main")}
          </h2>
          <br />
          <p>
            {t("introSection.heading1")}
            <br />
            <br />
            {t("introSection.heading2")}
            <i>
              <b className="text-pink-100">
                {" "}
                Javascript {t("introSection.and")} {t("introSection.framework")}
              </b>
            </i>
            <br />
            <br />
            {t("introSection.heading3")} &nbsp;
            <i>
              <b className="text-pink-100">{t("introSection.heading4")}</b>
            </i>
            <br />
            <br />
            {t("introSection.heading5")}
            <i>
              <b className="text-pink-100">&nbsp;ReactJS</b>{" "}
            </i>
            {t("introSection.and")}
            <i>
              <b className="text-pink-100"> NodeJS</b>
            </i>
          </p>
        </Col>
        <Col md={3} className="d-md-block d-none">
          <Tilt>
            <img src={avatarImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
    </section>
  );
};

export default Introduction;
