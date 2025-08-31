// Skill data and image mappings
import html from "@/assets/svg/skills/html.svg";
import css from "@/assets/svg/skills/css.svg";
import javascript from "@/assets/svg/skills/javascript.svg";
import typescript from "@/assets/svg/skills/typescript.svg";
import react from "@/assets/svg/skills/react.svg";
import antd from "@/assets/svg/skills/antd.svg";
import materialui from "@/assets/svg/skills/materialui.svg";
import nextJS from "@/assets/svg/skills/nextJS.svg";
import expressJS from "@/assets/svg/skills/expressjs.svg";
import nestJS from "@/assets/svg/skills/nestjs.svg";
import mysql from "@/assets/svg/skills/mysql.svg";
import mongodb from "@/assets/svg/skills/mongoDB.svg";
import git from "@/assets/svg/skills/git.svg";
import bootstrap from "@/assets/svg/skills/bootstrap.svg";
import tailwind from "@/assets/svg/skills/tailwind.svg";
import docker from "@/assets/svg/skills/docker.svg";
import aws from "@/assets/svg/skills/aws.svg";
import firebase from "@/assets/svg/skills/firebase.svg";
import figma from "@/assets/svg/skills/figma.svg";

export interface Skill {
  name: string;
  image: string;
}

export const SKILLS: Skill[] = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "Javascript", image: javascript },
  { name: "Typescript", image: typescript },
  { name: "React", image: react },
  { name: "Antd", image: antd },
  { name: "MaterialUI", image: materialui },
  { name: "Next JS", image: nextJS },
  { name: "Express JS", image: expressJS },
  { name: "Nest JS", image: nestJS },
  { name: "SQL", image: mysql },
  { name: "NoSQL", image: mongodb },
  { name: "Git", image: git },
  { name: "Bootstrap", image: bootstrap },
  { name: "Tailwind", image: tailwind },
  { name: "Docker", image: docker },
  { name: "AWS", image: aws },
  { name: "Firebase", image: firebase },
  { name: "Figma", image: figma },
];
