/**
 * TypeScript interfaces and types for About component section
 */

// Animation-related types
export interface LottieAnimationData {
  [key: string]: unknown;
}

export interface AnimationConfig {
  width: string;
  animationPath: LottieAnimationData;
}

// Component prop interfaces
export type AboutProps = Record<string, never>;

export type AboutIntroProps = Record<string, never>;

export interface AboutAnimationProps {
  width?: string;
}

export type EducationSectionProps = Record<string, never>;

export type ContactSectionProps = Record<string, never>;

// Translation key paths for type safety
export type AboutTranslationKey =
  | "aboutSection.introduce"
  | "aboutSection.myself"
  | "aboutSection.greeting"
  | "aboutSection.working"
  | "aboutSection.education"
  | "aboutSection.hobbiesHeading"
  | "aboutSection.hobbies.reading"
  | "aboutSection.hobbies.exercizing"
  | "aboutSection.hobbies.traveling"
  | "aboutSection.quote"
  | "aboutSection.educationTitle"
  | "aboutSection.educationDuration"
  | "aboutSection.educationDegree"
  | "aboutSection.educationUniversity"
  | "aboutSection.findMe"
  | "aboutSection.contactMe";

// Animation width type for better validation
export type AnimationWidth = string | `${number}%` | `${number}px`;

// App data types
export interface AppDataUrls {
  LINKEDIN_URL: string;
  GMAIL_URL: string;
  GITHUB_URL: string;
}

// Social media component props (for type safety)
export interface SocialMediaProps {
  linkedin: string;
  gmail: string;
  github: string;
}

// Memoized function types
export type ContactClickHandler = () => void;

// Animation parsing types
export type ParsedAnimationData = LottieAnimationData;
