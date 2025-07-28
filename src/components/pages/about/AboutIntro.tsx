import React from "react";
import { useTranslation } from "react-i18next";
import { AboutIntroProps, AboutTranslationKey } from "./types";

const AboutIntro: React.FC<AboutIntroProps> = () => {
  const { t } = useTranslation();

  // Type-safe translation helper function
  const getTranslation = (key: AboutTranslationKey): string => {
    return t(key);
  };

  return (
    <section className="about-intro" aria-labelledby="about-intro-heading">
      <h2 id="about-intro-heading" className="about-title">
        {getTranslation("aboutSection.introduce")}{" "}
        <span className="brand-red">
          {getTranslation("aboutSection.myself")}
        </span>
      </h2>

      <div
        className="about-description"
        role="region"
        aria-label="Personal introduction"
      >
        <p>{getTranslation("aboutSection.greeting")}</p>
        <p>{getTranslation("aboutSection.working")}</p>
        <p>{getTranslation("aboutSection.education")}</p>
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
          {getTranslation("aboutSection.hobbiesHeading")}
        </p>
        <ul id="hobbies-list" role="list" aria-label="List of hobbies">
          <li role="listitem">
            {getTranslation("aboutSection.hobbies.reading")}
          </li>
          <li role="listitem">
            {getTranslation("aboutSection.hobbies.exercizing")}
          </li>
          <li role="listitem">
            {getTranslation("aboutSection.hobbies.traveling")}
          </li>
        </ul>
      </div>

      <blockquote
        className="about-quote brand-red"
        role="complementary"
        aria-label="Personal quote"
      >
        {getTranslation("aboutSection.quote")}
      </blockquote>
    </section>
  );
};

export default AboutIntro;
