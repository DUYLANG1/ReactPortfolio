import html from "assets/svg/skills/html.svg";
import css from "assets/svg/skills/css.svg";
import javascript from "assets/svg/skills/javascript.svg";
import typescript from "assets/svg/skills/typescript.svg";
import react from "assets/svg/skills/react.svg";
import antd from "assets/svg/skills/antd.svg";
import materialui from "assets/svg/skills/materialui.svg";
import nextJS from "assets/svg/skills/nextJS.svg";
import expressJS from "assets/svg/skills/expressjs.svg";
import nestJS from "assets/svg/skills/nestjs.svg";
import sql from "assets/svg/skills/mysql.svg";
import nosql from "assets/svg/skills/mongoDB.svg";
import git from "assets/svg/skills/git.svg";

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react":
      return react;
    case "antd":
      return antd;
    case "materialui":
      return materialui;
    case "next js":
      return nextJS;
    case "express js":
      return expressJS;
    case "nest js":
      return nestJS;
    case "sql":
      return sql;
    case "nosql":
      return nosql;
    case "git":
      return git;
    default:
      break;
  }
};
