import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";
import "./SocialMedia.scss";

interface SocialMediaProps {
  LINKEDIN_URL: string;
  GMAIL_URL: string;
  GITHUB_URL: string;
  variant?: "header" | "contact" | "default";
  className?: string;
}

const SocialMedia = ({
  LINKEDIN_URL,
  GMAIL_URL,
  GITHUB_URL,
  variant = "default",
  className = "",
}: SocialMediaProps) => {
  const socialLinks = [
    { href: LINKEDIN_URL, icon: FaLinkedin, title: "LinkedIn Profile" },
    { href: GMAIL_URL, icon: SiGmail, title: "Email Contact" },
    { href: GITHUB_URL, icon: SiGithub, title: "GitHub Profile" },
  ];

  const getVariantClass = () => {
    switch (variant) {
      case "header":
        return "header-variant";
      case "contact":
        return "contact-variant";
      default:
        return "";
    }
  };

  return (
    <div className={`social-media ${getVariantClass()} ${className}`.trim()}>
      {socialLinks.map(({ href, icon: Icon, title }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
          title={title}
          aria-label={title}
        >
          <Icon size={variant === "header" ? 22 : 30} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
