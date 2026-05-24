import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Experiences.css";
import {
  experiencesData,
  type ExperienceItem,
} from "../data/experiencesData";

const Experiences: React.FC = () => {
  const { t } = useTranslation();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openExperience = (experience: ExperienceItem) => {
    setSelectedExperience(experience);
    setActiveImageIndex(0);
  };

  const closeExperience = () => {
    setSelectedExperience(null);
    setActiveImageIndex(0);
  };

  const activeImage = useMemo(() => {
    if (!selectedExperience || selectedExperience.images.length === 0) return null;
    return selectedExperience.images[activeImageIndex];
  }, [selectedExperience, activeImageIndex]);

  const nextImage = () => {
    if (!selectedExperience) return;
    setActiveImageIndex((prev) =>
      prev === selectedExperience.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedExperience) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedExperience.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="experiences-page">
      <div className="experiences-header">
        <p className="experiences-tag">{t("experiences.tag")}</p>
        <h1>{t("experiences.title")}</h1>
        <p className="experiences-subtitle">{t("experiences.subtitle")}</p>
      </div>

      <div className="experiences-grid">
        {experiencesData.map((experience) => (
          <button
            key={experience.id}
            className="experience-card"
            onClick={() => openExperience(experience)}
          >
            <div className="experience-card-image-wrapper">
              <img
                src={experience.coverImage}
                alt={t(experience.titleKey)}
                className="experience-card-image"
              />
              <div className="experience-card-overlay" />
              <div className="experience-card-badge">
                {t(experience.categoryKey)}
              </div>
            </div>

            <div className="experience-card-content">
              <div className="experience-card-top">
                <h3>{t(experience.titleKey)}</h3>
                <span className="experience-card-year">{t(experience.periodKey)}</span>
              </div>

              <p className="experience-card-location">{t(experience.locationKey)}</p>
              <p className="experience-card-summary">{t(experience.shortSummaryKey)}</p>

              <div className="experience-card-footer">
                <span className="experience-card-count">
                  {experience.images.length} {t("experiences.photos")}
                </span>
                <span className="experience-card-action">{t("experiences.viewStory")}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedExperience && (
        <div className="experience-modal-overlay" onClick={closeExperience}>
          <div
            className="experience-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="experience-modal-header">
              <div>
                <div className="close-button">
                  <p className="experience-modal-tag">{t("experiences.storyTag")}</p>
                  <button className="experience-close-btn" onClick={closeExperience}>✕</button>
                </div>               
                <h2>{t(selectedExperience.titleKey)}</h2>
                <p className="experience-modal-meta">
                  {t(selectedExperience.categoryKey)} • {t(selectedExperience.locationKey)} •{" "}
                  {t(selectedExperience.periodKey)}
                </p>
              </div>

              
            </div>

            <div className="experience-modal-gallery">
              <button className="gallery-nav gallery-prev" onClick={prevImage}>
                ‹
              </button>

              <div className="gallery-main">
                {activeImage && (
                  <img
                    src={activeImage}
                    alt={t(selectedExperience.titleKey)}
                    className="gallery-main-image"
                  />
                )}
              </div>

              <button className="gallery-nav gallery-next" onClick={nextImage}>
                ›
              </button>
            </div>

            <div className="gallery-thumbnails">
              {selectedExperience.images.map((image, index) => (
                <button
                  key={`${selectedExperience.id}-thumb-${index}`}
                  className={`gallery-thumb ${index === activeImageIndex ? "active" : ""}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image} alt={`${t(selectedExperience.titleKey)} ${index + 1}`} />
                </button>
              ))}
            </div>

            <div className="experience-modal-body">
              <div className="experience-modal-section">
                <h3>{t("experiences.overview")}</h3>
                <p>{t(selectedExperience.descriptionKey)}</p>
              </div>

              <div className="experience-modal-section">
                <h3>{t("experiences.professionalNote")}</h3>
                <p>{t(selectedExperience.noteKey)}</p>
              </div>

              {selectedExperience.highlights.length > 0 && (
                <div className="experience-modal-section">
                  <h3>{t("experiences.highlights")}</h3>
                  <ul className="experience-highlights">
                    {selectedExperience.highlights.map((highlightKey) => (
                      <li key={highlightKey}>{t(highlightKey)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experiences;