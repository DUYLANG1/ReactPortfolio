import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useCurrentApp } from "components/context/app.context";
import { useTranslation } from "react-i18next";
import { NavDropdown } from "react-bootstrap";
import viFlag from "assets/svg/language/vi.svg";
import enFlag from "assets/svg/language/en.svg";
import "./app.header.scss";
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import CustomNavLink from "components/common/CustomNavLink";

function AppHeader() {
  const { theme, setTheme } = useCurrentApp();
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMode = (mode: "light" | "dark") => {
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-bs-theme", mode);
    setTheme(mode);
    setExpanded(false);
  };

  const renderFlag = (language: string) => (
    <img
      style={{ height: 20, width: 20 }}
      src={language === "en" ? enFlag : viFlag}
      alt={language}
    />
  );

  const closeNavbar = () => setExpanded(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    closeNavbar();
  };

  return (
    <Navbar
      expand="lg"
      className={`app-header ${isSticky ? "sticky" : ""}`}
      expanded={expanded}
      onToggle={setExpanded}
      ref={navbarRef}
      data-bs-theme={theme}
    >
      <Container>
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <span className="brand-green">{t("appHeader.brand")}</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <CustomNavLink to="/" onClick={closeNavbar}>
              {t("appHeader.home")}
            </CustomNavLink>
            <CustomNavLink to="/project" onClick={closeNavbar}>
              {t("appHeader.project")}
            </CustomNavLink>
            <CustomNavLink to="/about" onClick={closeNavbar}>
              {t("appHeader.about")}
            </CustomNavLink>
          </Nav>
          <Nav className="ms-auto">
            <div className="nav-link" style={{ cursor: "pointer" }}>
              {theme === "light" ? (
                <MdOutlineLightMode
                  onClick={() => handleMode("dark")}
                  style={{ fontSize: 20 }}
                />
              ) : (
                <MdNightlight
                  onClick={() => handleMode("light")}
                  style={{ fontSize: 20 }}
                />
              )}
            </div>
            <NavDropdown title={renderFlag(i18n.resolvedLanguage!)}>
              <div
                onClick={() => handleLanguageChange("en")}
                className="dropdown-item d-flex gap-2 align-items-center"
                style={{ cursor: "pointer" }}
              >
                <img style={{ height: 20, width: 20 }} src={enFlag} alt="en" />
                <span>English</span>
              </div>
              <div
                onClick={() => handleLanguageChange("vi")}
                className="dropdown-item d-flex gap-2 align-items-center"
                style={{ cursor: "pointer" }}
              >
                <img style={{ height: 20, width: 20 }} src={viFlag} alt="vi" />
                <span>Tiếng Việt</span>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
