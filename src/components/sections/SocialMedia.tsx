import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";

interface IProps {
  linkedin: string;
  gmail: string;
  github: string;
}
const SocialMedia = (props: IProps) => {
  const { linkedin, gmail, github } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={linkedin}
        target="_blank"
        className="highlight"
        title="My LinkedIn Profile"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href={gmail}
        target="_blank"
        className="highlight"
        title="Udemy Hỏi Dân IT"
      >
        <SiGmail size={30} />
      </a>
      <a
        href={github}
        target="_blank"
        className="highlight"
        title="Youtube Hỏi Dân IT"
      >
        <SiGithub size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
