import Typewriter from "typewriter-effect";
import SocialMedia from "@/components/common/SocialMedia";
import { useTranslation } from "react-i18next";
import "./HeaderLeft.scss";
import ResizeButton from "@/components/common/ResizeButton";
import { APP_DATA } from "helpers/data";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import { memo, useCallback } from "react";

interface IProps {
  scrollToExperienceSection: () => void;
}

const HeaderLeft = memo(({ scrollToExperienceSection }: IProps) => {
  const { t } = useTranslation();

  const openInNewTab = useCallback((url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }, []);

  const handleDownloadCV = useCallback(() => {
    openInNewTab(
      "https://drive.google.com/file/d/1MQDW9ag2HSlDSEbsO7al2lim4AWwakki/view?usp=sharing"
    );
  }, [openInNewTab]);

  return (
    <div className="header-left">
      <h3>
        Hi There!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 className="header-title">
        I'M &nbsp;
        <strong className="brand-red">{t("appHeader.brand")}</strong>
      </h3>
      <Typewriter
        options={{
          strings: ["Software Developer", "MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 0,
          wrapperClassName: "brand-green",
        }}
      />
      <div className="mt-md-6 mt-3 mb-md-5 mb-2">
        <SocialMedia
          LINKEDIN_URL={APP_DATA.LINKEDIN_URL}
          GMAIL_URL={APP_DATA.GMAIL_URL}
          GITHUB_URL={APP_DATA.GITHUB_URL}
          variant="header"
        />
      </div>
      <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 mt-4">
        <ResizeButton
          onClick={scrollToExperienceSection}
          btnText={t("headerSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-header-right)",
            color: "var(--text-white-1)",
            width: "auto",
          }}
        />
        <ResizeButton
          btnText={t("headerSection.cv")}
          btnIcons={<MdFileDownload />}
          onClick={handleDownloadCV}
          btnStyle={{
            width: "auto",
          }}
        />
      </div>
    </div>
  );
});

export default HeaderLeft;
