import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar: React.FC = () => {
  // Extraemos también i18n para saber qué idioma está activo
  const { t, i18n } = useTranslation();

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active" : "nav-link";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // Obtenemos el idioma actual (si es en-US, tomamos solo 'en')
  const currentLang = i18n.language?.split("-")[0] || "es";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Gian Carlo - 小杨</Link>
        </div>

        {/* Enlaces de Navegación */}
        <ul className="nav-links">
          <li><NavLink to="/experiences" className={linkStyle}>{t("navbar.experiences")}</NavLink></li>
          <li><NavLink to="/projects" className={linkStyle}>{t("navbar.projects")}</NavLink></li>
          <li><NavLink to="/education" className={linkStyle}>{t("navbar.education")}</NavLink></li>
          <li><NavLink to="/contact" className={linkStyle}>{t("navbar.contact")}</NavLink></li>
        </ul>

        {/* Selector de Idioma Independiente (Diseño Cápsula) */}
        <div className="language-switcher">
          <button 
            className={currentLang === "en" ? "lang-btn active" : "lang-btn"} 
            onClick={() => changeLanguage("en")}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button 
            className={currentLang === "es" ? "lang-btn active" : "lang-btn"} 
            onClick={() => changeLanguage("es")}
            aria-label="Cambiar a Español"
          >
            ES
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;