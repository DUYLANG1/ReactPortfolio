import NextJsImage from "@/assets/svg/skills/nextJS.svg";
import { Experience, Project } from "@/types/global";

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: { vi: "Lập Trình Viên ReactJS", en: "ReactJS Developer" },
    company: { vi: "FPT Software", en: "FPT Software" },
    duration: { vi: "11/2024 - Hiện tại", en: "November 2024 - Present" },
  },
  {
    id: 2,
    title: { vi: "Lập Trình Viên SAP ABAP", en: "SAP ABAP Developer" },
    company: { vi: "FPT Software", en: "FPT Software" },
    duration: { vi: "12/2023 - 11/2024", en: "December 2023 - November 2024" },
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    imgPath: NextJsImage,
    title: "My Local Swapping Skills",
    description: {
      en: "A platform for people to swap skills with each other.",
      vi: "Website để mọi người tìm đến và trao đổi kỹ năng với nhau.",
    },
    githubLink: "https://github.com/DUYLANG1/LSS-FRONTEND",
    demoLink: "#",
  },
];
