import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCurrentApp } from "components/context/app.context";
import { useTranslation } from "react-i18next";
import { NavDropdown } from "react-bootstrap";
import viFlag from "assets/svg/language/vi.svg";
import enFlag from "assets/svg/language/en.svg";
import "./app.header.scss"; // Import SCSS
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";

type ThemeContextType = "light" | "dark";

function AppHeader() {
  const { theme, setTheme } = useCurrentApp();
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false); // State for sticky behavior
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMode = (mode: ThemeContextType) => {
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-bs-theme", mode);
    setTheme(mode);
    setExpanded(false); // Close navbar when theme is changed
  };

  const renderFlag = (language: string) => (
    <img
      style={{ height: 20, width: 20 }}
      src={language === "en" ? enFlag : viFlag}
      alt={language}
    />
  );

  const handleBrandClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setExpanded(false); // Close navbar when brand is clicked
  };

  const handleNavLinkClick = () => {
    setExpanded(false); // Close navbar when a nav link is clicked
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setExpanded(false); // Close navbar when language is changed
  };

  return (
    <Navbar
      expand="lg"
      className={`app-header ${isSticky ? "sticky" : ""}`}
      expanded={expanded}
      onToggle={setExpanded}
      ref={navbarRef}
    >
      <Container>
        <Link className="navbar-brand" to="/" onClick={handleBrandClick}>
          <span className="brand-green">{t("appHeader.brand")}</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-nav" : ""}`
              }
              to="/"
              onClick={handleNavLinkClick}
            >
              {t("appHeader.home")}
            </NavLink>
            <NavLink
              className="nav-link"
              to="/project"
              onClick={handleNavLinkClick}
            >
              {t("appHeader.project")}
            </NavLink>
            <NavLink
              className="nav-link"
              to="/about"
              onClick={handleNavLinkClick}
            >
              {t("appHeader.about")}
            </NavLink>
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
