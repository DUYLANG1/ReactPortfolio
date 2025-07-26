declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";

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
