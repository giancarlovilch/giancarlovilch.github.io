import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import {
  projectsData,
  type ProjectItem,
} from "../data/projectsData";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  // Estados para filtros y modal
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Obtener categorías únicas
  const categories = useMemo(() => {
    return Array.from(new Set(projectsData.map((project) => project.categoryKey)));
  }, []);

  // Obtener años únicos ordenados de más reciente a más antiguo
  const years = useMemo(() => {
    return Array.from(new Set(projectsData.map((project) => project.year))).sort(
      (a, b) => Number(b) - Number(a)
    );
  }, []);

  // Filtrar y ordenar proyectos por año descendente
  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projectsData.filter((project) => {
      const categoryMatch =
        selectedCategory === "all" || project.categoryKey === selectedCategory;
      const yearMatch = selectedYear === "all" || project.year === selectedYear;
      return categoryMatch && yearMatch;
    });

    return filtered.sort((a, b) => Number(b.year) - Number(a.year));
  }, [selectedCategory, selectedYear]);

  // Controles del Modal
  const openProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    // Prevenir el scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
    // Restaurar el scroll
    document.body.style.overflow = "auto";
  };

  // Controles de Galería
  const nextImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const activeImage = useMemo(() => {
    if (!selectedProject || selectedProject.images.length === 0) return null;
    return selectedProject.images[activeImageIndex];
  }, [selectedProject, activeImageIndex]);
  

  return (
    <section className="projects-page">
      <div className="projects-header">
        <p className="projects-tag">{t("projects.tag")}</p>
        <h1>{t("projects.title")}</h1>
        <p className="projects-subtitle">{t("projects.subtitle")}</p>
      </div>

      <div className="projects-toolbar">
        <div className="projects-filter-group">
          <label htmlFor="category-filter">{t("projects.filters.category")}</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">{t("projects.filters.allCategories")}</option>
            {categories.map((categoryKey) => (
              <option key={categoryKey} value={categoryKey}>
                {t(categoryKey)}
              </option>
            ))}
          </select>
        </div>

        <div className="projects-filter-group">
          <label htmlFor="year-filter">{t("projects.filters.year")}</label>
          <select
            id="year-filter"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">{t("projects.filters.allYears")}</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista Minimalista de Proyectos */}
      <div className="projects-simple-list">
        {filteredAndSortedProjects.map((project) => (
          <button
            key={project.id}
            className={`project-list-item status-${project.status}`}
            onClick={() => openProject(project)}
            aria-label={`Ver detalles de ${t(project.titleKey)}`}
          >
            <div className="project-item-main">
              <span 
                className="project-item-status-dot" 
                title={t(`projects.status.${project.status}`)}
              ></span>
              <h3>{t(project.titleKey)}</h3>
            </div>
            
            <div className="project-item-meta">
              <span className="project-item-category">{t(project.categoryKey)}</span>
              <span className="project-item-year">{project.year}</span>
              <span className="project-item-arrow">→</span>
            </div>
          </button>
        ))}
        
        {/* Mensaje de estado vacío si los filtros no coinciden con nada */}
        {filteredAndSortedProjects.length === 0 && (
          <div className="projects-empty-msg">
            <p>No se encontraron proyectos con estos filtros.</p>
          </div>
        )}
      </div>

      {/* Modal de Detalles del Proyecto */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal-header">
              <div>
                <p className="project-modal-tag">{t("projects.modal.tag")}</p>
                <h2>{t(selectedProject.titleKey)}</h2>
                <p className="project-modal-submeta">
                  {t(selectedProject.categoryKey)} • {t(selectedProject.dateKey)} •{" "}
                  {t(`projects.status.${selectedProject.status}`)}
                </p>
              </div>

              <button className="project-close-btn" onClick={closeProject} aria-label="Cerrar modal">
                ✕
              </button>
            </div>

            <div className="project-modal-gallery">
              <button className="project-gallery-nav" onClick={prevImage} aria-label="Imagen anterior">
                ‹
              </button>

              <div className="project-gallery-main">
                {activeImage && (
                  <img
                    src={activeImage}
                    alt={t(selectedProject.titleKey)}
                    className="project-gallery-image"
                  />
                )}
              </div>

              <button className="project-gallery-nav" onClick={nextImage} aria-label="Siguiente imagen">
                ›
              </button>
            </div>

            {selectedProject.images.length > 1 && (
              <div className="project-gallery-thumbs">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={`${selectedProject.id}-${index}`}
                    className={`project-thumb ${index === activeImageIndex ? "active" : ""}`}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Ver miniatura ${index + 1}`}
                  >
                    <img src={image} alt={`Miniatura ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="project-modal-body">
              <div className="project-modal-section">
                <h3>{t("projects.modal.overview")}</h3>
                <p>{t(selectedProject.descriptionKey)}</p>
              </div>

              <div className="project-modal-section">
                <h3>{t("projects.modal.teamMembers")}</h3>
                <div className="project-members">
                  {selectedProject.members.map((memberKey) => (
                    <span key={memberKey} className="project-member-chip">
                      {t(memberKey)}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.highlights.length > 0 && (
                <div className="project-modal-section">
                  <h3>{t("projects.modal.highlights")}</h3>
                  <ul className="project-highlights">
                    {selectedProject.highlights.map((highlightKey) => (
                      <li key={highlightKey}>{t(highlightKey)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Documentación movida al final para que sirva como "Call to Action" */}
              <div className="project-modal-section">
                <h3>{t("projects.modal.documentation")}</h3>
                {selectedProject.documentFile ? (
                  <a
                    href={selectedProject.documentFile}
                    target="_blank"
                    rel="noreferrer"
                    className="project-document-link"
                  >
                    {t("projects.openDocument")}
                  </a>
                ) : (
                  <p className="project-no-document">{t("projects.noDocument")}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;