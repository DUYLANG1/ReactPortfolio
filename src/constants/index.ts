export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export const LANGUAGES = {
  EN: "en",
  VI: "vi",
} as const;

export type ThemeType = (typeof THEMES)[keyof typeof THEMES];
export type LanguageType = (typeof LANGUAGES)[keyof typeof LANGUAGES];
