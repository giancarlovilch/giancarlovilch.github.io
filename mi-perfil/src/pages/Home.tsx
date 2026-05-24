import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";

import homeImage01 from "../assets/home/image_01.jpg";
import homeImage02 from "../assets/home/image_02.jpg";
import homeImage03 from "../assets/home/image_03.jpg";
import homeImage04 from "../assets/home/image_04.jpg";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const homeImages = useMemo(
    () => [homeImage01, homeImage02, homeImage03, homeImage04],
    []
  );

  const nextImage = () => {
    setActiveIndex((prev) => (prev === homeImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? homeImages.length - 1 : prev - 1));
  };

  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="home-hero-content">
          <p className="home-tag">{t("home.tag")}</p>
          <h1>{t("home.title")}</h1>
          <p className="home-subtitle">{t("home.subtitle")}</p>

          <div className="home-cta-group">
            <Link to="/projects" className="home-primary-btn">
              {t("home.ctaProjects")}
            </Link>
            <Link to="/contact" className="home-secondary-btn">
              {t("home.ctaContact")}
            </Link>
          </div>

          <div className="home-metrics">
            <div className="home-metric-card">
              <span className="home-metric-number">4</span>
              <p>{t("home.metrics.fields")}</p>
            </div>
            <div className="home-metric-card">
              <span className="home-metric-number">4</span>
              <p>{t("home.metrics.languages")}</p>
            </div>
            <div className="home-metric-card">
              <span className="home-metric-number">∞</span>
              <p>{t("home.metrics.growth")}</p>
            </div>
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="home-carousel-card">
            <div className="home-carousel-main">
              <img
                src={homeImages[activeIndex]}
                alt={t("home.carouselAlt")}
                className="home-carousel-image"
              />
              <div className="home-carousel-overlay" />
            </div>

            <div className="home-carousel-controls">
              <button onClick={prevImage} className="home-carousel-btn">
                ‹
              </button>
              <div className="home-carousel-dots">
                {homeImages.map((_, index) => (
                  <button
                    key={index}
                    className={`home-dot ${index === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <button onClick={nextImage} className="home-carousel-btn">
                ›
              </button>
            </div>

            <div className="home-carousel-thumbs">
              {homeImages.map((image, index) => (
                <button
                  key={index}
                  className={`home-thumb ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={image} alt={`${t("home.carouselAlt")} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="home-intro-panel">
        <div className="home-section-heading">
          <p className="home-section-tag">{t("home.introTag")}</p>
          <h2>{t("home.introTitle")}</h2>
        </div>

        <div className="home-intro-grid">
          <div className="home-intro-card">
            <h3>{t("home.cards.engineering.title")}</h3>
            <p>{t("home.cards.engineering.text")}</p>
          </div>

          <div className="home-intro-card">
            <h3>{t("home.cards.software.title")}</h3>
            <p>{t("home.cards.software.text")}</p>
          </div>

          <div className="home-intro-card">
            <h3>{t("home.cards.business.title")}</h3>
            <p>{t("home.cards.business.text")}</p>
          </div>

          <div className="home-intro-card">
            <h3>{t("home.cards.languages.title")}</h3>
            <p>{t("home.cards.languages.text")}</p>
          </div>
        </div>
      </div>

      <div className="home-summary-panel">
        <div className="home-summary-text">
          <p className="home-section-tag">{t("home.profileTag")}</p>
          <h2>{t("home.profileTitle")}</h2>
          <p>{t("home.profileText")}</p>
        </div>

        <div className="home-summary-list">
          <div className="home-summary-item">
            <span>01</span>
            <p>{t("home.points.point1")}</p>
          </div>
          <div className="home-summary-item">
            <span>02</span>
            <p>{t("home.points.point2")}</p>
          </div>
          <div className="home-summary-item">
            <span>03</span>
            <p>{t("home.points.point3")}</p>
          </div>
          <div className="home-summary-item">
            <span>04</span>
            <p>{t("home.points.point4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;