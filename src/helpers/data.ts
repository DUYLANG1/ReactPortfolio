import NextJsImage from "assets/svg/skills/nextJS.svg";

export interface LocalizedText {
  vi: string;
  en: string;
}

export interface Experience {
  id: number;
  title: LocalizedText;
  company: LocalizedText;
  duration: LocalizedText;
}

export const APP_DATA = {
  LINKEDIN_URL: "https://www.linkedin.com/in/vu-lang-887166224/",
  GMAIL_URL:
    "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGFDTzBXNfHHbTbTQbxCWZnvbGRFNbPTfWXlZRtpLkdVdVsFqBxvgCRTcGdfWsmcPGGjq",
  GITHUB_URL: "https://github.com/DUYLANG1?tab=repositories",
} as const;

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

export const PROJECTS = [
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
] as const;

export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Antd",
  "MaterialUI",
  "Next JS",
  "Express JS",
  "Nest JS",
  "SQL",
  "noSQL",
  "Git",
  "Bootstrap",
  "Tailwind",
  "Docker",
  "AWS",
  "Firebase",
  "Figma",
] as const;
