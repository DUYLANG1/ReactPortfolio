declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "assets/blur-23.svg" {
  const value: string;
  export default value;
}

declare module "assets/avatar.svg" {
  const value: string;
  export default value;
}

declare module "assets/svg/language/vi.svg" {
  const value: string;
  export default value;
}

declare module "assets/svg/language/en.svg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

// Lottie animation JSON files
declare module "*.json" {
  const value: unknown;
  export default value;
}

// Specific Lottie animation modules for type safety
declare module "assets/lottie/coding.json" {
  const value: object;
  export default value;
}

declare module "assets/lottie/string/development" {
  export const DEVELOPMENT_LOTTIE: string;
}

declare module "assets/lottie/string/contact" {
  export const CONTACT_LOTTIE: string;
}

// Global application types
export type Theme = "light" | "dark";
export type Language = "en" | "vi";

export interface LocalizedContent {
  en: string;
  vi: string;
}

export interface Experience {
  id: number;
  title: LocalizedContent;
  company: LocalizedContent;
  duration: LocalizedContent;
}

export interface Project {
  id: number;
  imgPath: string;
  title: string;
  description: LocalizedContent;
  githubLink: string;
  demoLink: string;
}
