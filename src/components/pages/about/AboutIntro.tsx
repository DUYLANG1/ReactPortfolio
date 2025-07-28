import { useTranslation } from "react-i18next";
import "./AboutIntro.scss";

const AboutIntro = () => {
  const { t } = useTranslation();

  return (
    <section className="about-intro" aria-labelledby="about-intro-heading">
      <h2 id="about-intro-heading" className="about-title">
        {t("aboutSection.introduce")}{" "}
        <span className="brand-red">{t("aboutSection.myself")}</span>
      </h2>

      <div
        className="about-description"
        role="region"
        aria-label="Personal introduction"
      >
        <p>{t("aboutSection.greeting")}</p>
        <p>{t("aboutSection.working")}</p>
        <p>{t("aboutSection.education")}</p>
      </div>

      <div
        className="about-hobbies"
        role="region"
        aria-labelledby="hobbies-heading"
      >
        <h3 id="hobbies-heading" className="sr-only">
          My Hobbies
        </h3>
        <p aria-describedby="hobbies-list">
          {t("aboutSection.hobbiesHeading")}
        </p>
        <ul id="hobbies-list" role="list" aria-label="List of hobbies">
          <li role="listitem">{t("aboutSection.hobbies.reading")}</li>
          <li role="listitem">{t("aboutSection.hobbies.exercizing")}</li>
          <li role="listitem">{t("aboutSection.hobbies.traveling")}</li>
        </ul>
      </div>

      <blockquote
        className="about-quote brand-red"
        role="complementary"
        aria-label="Personal quote"
      >
        {t("aboutSection.quote")}
      </blockquote>
    </section>
  );
};

export default AboutIntro;
