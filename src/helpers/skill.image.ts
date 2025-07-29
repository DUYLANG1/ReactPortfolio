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
import mysql from "assets/svg/skills/mysql.svg";
import mongodb from "assets/svg/skills/mongoDB.svg";
import git from "assets/svg/skills/git.svg";
import bootstrap from "assets/svg/skills/bootstrap.svg";
import tailwind from "assets/svg/skills/tailwind.svg";
import docker from "assets/svg/skills/docker.svg";
import aws from "assets/svg/skills/aws.svg";
import firebase from "assets/svg/skills/firebase.svg";
import figma from "assets/svg/skills/figma.svg";

const skillImages: Record<string, string> = {
  html,
  css,
  javascript,
  typescript,
  react,
  antd,
  materialui,
  "next js": nextJS,
  "express js": expressJS,
  "nest js": nestJS,
  sql: mysql,
  nosql: mongodb,
  git,
  bootstrap,
  tailwind,
  docker,
  aws,
  firebase,
  figma,
};

export const skillsImage = (skill: string) =>
  skillImages[skill.toLowerCase()] || null;
