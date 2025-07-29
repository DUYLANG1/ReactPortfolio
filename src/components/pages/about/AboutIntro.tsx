import { useTranslation } from "react-i18next";
import "./AboutIntro.scss";

const AboutIntro = () => {
  const { t } = useTranslation();

  return (
    <div className="about-intro">
      <h2 className="about-title">
        {t("aboutSection.introduce")}{" "}
        <span className="brand-red">{t("aboutSection.myself")}</span>
      </h2>

      <div className="about-description">
        <p>{t("aboutSection.greeting")}</p>
        <p>{t("aboutSection.working")}</p>
        <p>{t("aboutSection.education")}</p>
      </div>

      <div className="about-hobbies">
        <p>{t("aboutSection.hobbiesHeading")}</p>
        <ul>
          <li>{t("aboutSection.hobbies.reading")}</li>
          <li>{t("aboutSection.hobbies.exercizing")}</li>
          <li>{t("aboutSection.hobbies.traveling")}</li>
        </ul>
      </div>

      <blockquote className="about-quote brand-red">
        {t("aboutSection.quote")}
      </blockquote>
    </div>
  );
};

export default AboutIntro;
