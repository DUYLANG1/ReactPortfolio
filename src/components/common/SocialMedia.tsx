import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";
import "./SocialMedia.scss";

interface Props {
  LINKEDIN_URL: string;
  GMAIL_URL: string;
  GITHUB_URL: string;
  variant?: "header" | "contact";
}

const SocialMedia = ({
  LINKEDIN_URL,
  GMAIL_URL,
  GITHUB_URL,
  variant,
}: Props) => {
  const size = variant === "header" ? 22 : 30;
  const variantClass = variant ? `${variant}-variant` : "";

  return (
    <div className={`social-media ${variantClass}`}>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >
        <FaLinkedin size={size} />
      </a>
      <a
        href={GMAIL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >
        <SiGmail size={size} />
      </a>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >
        <SiGithub size={size} />
      </a>
    </div>
  );
};

export default SocialMedia;
