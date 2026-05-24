import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>
            <Link to="/" className="footer-home">Gian Carlo - 小杨</Link>
          </h3>
          <p>{t("footer.about")}</p>
        </div>

        <div className="footer-links">
          <h4>{t("footer.linksTitle")}</h4>
          <ul>
            <li><Link to="/projects">{t("footer.links.projects")}</Link></li>
            <li><Link to="/experiences">{t("footer.links.experience")}</Link></li>
            <li><Link to="/education">{t("footer.links.education")}</Link></li>
            <li><Link to="/contact">{t("footer.links.contact")}</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>{t("footer.contactTitle")}</h4>
          <p>{t("footer.emailLabel")}: giancarlo.vilch@qq.com</p>
          <p>{t("footer.wechatLabel")}: giancarlovilch</p>
          <p>{t("footer.phoneLabel")}: +51 935 812 267</p>
          <div className="footer-socials">
            <a href="https://giancarlovilch.github.io" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gian-carlo-vc/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Gian Carlo. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;