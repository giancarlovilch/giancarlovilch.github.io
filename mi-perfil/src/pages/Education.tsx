import React, { useMemo, useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Education.css";

import daxuePhoto from "../assets/education/daxue.jpg";
import {
  educationData,
  type EducationPillar,
  type LearningItem,
} from "../data/educationData";

const renderStars = (level: number) => "★".repeat(level) + "☆".repeat(5 - level);

const getStatus = (item: LearningItem) => {
  if (item.file) return "view";
  if (item.level === 5) return "pending-upload";
  return "in-progress";
};

const sortByLevelDesc = (items: LearningItem[]) =>
  [...items].sort((a, b) => b.level - a.level);

const CERT_PASSWORD = "a47238914A";

const Education: React.FC = () => {
  const { t } = useTranslation();
  const [openPillar, setOpenPillar] = useState<string>(educationData[0]?.id ?? "");
  const [selectedCertificate, setSelectedCertificate] = useState<LearningItem | null>(null);
  const [pendingCertificate, setPendingCertificate] = useState<LearningItem | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // Referencia al panel de detalles para hacer scroll automático
  const detailPanelRef = useRef<HTMLDivElement>(null);

  const currentPillar: EducationPillar = useMemo(
    () => educationData.find((pillar) => pillar.id === openPillar) ?? educationData[0],
    [openPillar]
  );

  // Efecto para limpiar el scroll si desmontamos el componente con el modal abierto
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Solicita la contraseña antes de abrir el certificado
  const requestCertificate = (item: LearningItem) => {
    setPendingCertificate(item);
    setPasswordValue("");
    setPasswordError(false);
    setShowPasswordModal(true);
    document.body.style.overflow = "hidden";
  };

  const submitPassword = () => {
    if (passwordValue === CERT_PASSWORD) {
      setShowPasswordModal(false);
      setSelectedCertificate(pendingCertificate);
      setPendingCertificate(null);
      setPasswordValue("");
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const cancelPassword = () => {
    setShowPasswordModal(false);
    setPendingCertificate(null);
    setPasswordValue("");
    setPasswordError(false);
    document.body.style.overflow = "auto";
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "auto";
  };

  // Función al hacer clic en un pilar: cambia el estado y hace scroll suave
  const handlePillarClick = (id: string) => {
    setOpenPillar(id);
    // Un pequeño retraso asegura que React haya renderizado la nueva información antes de bajar
    setTimeout(() => {
      detailPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const renderActionButton = (item: LearningItem) => {
    const status = getStatus(item);

    if (status === "view") {
      return (
        <button className="view-btn" onClick={() => requestCertificate(item)}>
          {t("education.view")}
        </button>
      );
    }

    if (status === "pending-upload") {
      return (
        <button className="view-btn disabled-btn" disabled>
          {t("education.pendingUpload")}
        </button>
      );
    }

    return (
      <button className="view-btn disabled-btn" disabled>
        {t("education.inProgress")}
      </button>
    );
  };

  const renderList = (items: LearningItem[]) =>
    sortByLevelDesc(items).map((item, index) => (
      <div className="education-list-item" key={`${item.id}-${index}`}>
        <div className="education-list-main">
          <h4>{t(item.titleKey)}</h4>
          <p>{t(item.issuerKey)}</p>
        </div>

        <div className="education-list-meta">
          <span className="education-item-stars">{renderStars(item.level)}</span>
          {renderActionButton(item)}
        </div>
      </div>
    ));

  if (!currentPillar) return null;

  return (
    <section className="education-page">
      <div className="education-header">
        <p className="education-tag">{t("education.tag")}</p>
        <h1>{t("education.title")}</h1>
        <p className="education-subtitle">{t("education.subtitle")}</p>
      </div>

      <div className="pillar-grid">
        {educationData.map((pillar) => (
          <button
            key={pillar.id}
            className={`pillar-card ${openPillar === pillar.id ? "active" : ""}`}
            onClick={() => handlePillarClick(pillar.id)}
          >
            <div className="pillar-card-top">
              <h3>{t(pillar.titleKey)}</h3>
              <span className="pillar-stars">{renderStars(pillar.level)}</span>
            </div>

            <p>{t(pillar.summaryKey)}</p>

            <div className="pillar-foot">
              <span>
                {pillar.corePath.length} {t("education.coreItems")}
              </span>
              <span>
                {pillar.complementaryTraining.length} {t("education.complementaryItems")}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="education-photo-banner">
        <img
          src={daxuePhoto}
          alt={t("education.photoAlt")}
          className="education-photo-image"
        />
      </div>

      {/* Aquí conectamos la referencia (ref) para el scroll automático */}
      <div className="education-detail-panel" ref={detailPanelRef}>
        <div className="education-detail-header">
          <div>
            <p className="education-detail-tag">{t("education.selectedPillar")}</p>
            <h2>{t(currentPillar.titleKey)}</h2>
            <p>{t(currentPillar.summaryKey)}</p>

            {/* Nuevo bloque de especialidades */}
            {currentPillar.specialization && (
              <div className="specialization-container">
                <p className="specialization-label">{t("education.specialization")}:</p>
                <div className="specialization-tags">
                  {currentPillar.specialization.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <span className="education-detail-stars">{renderStars(currentPillar.level)}</span>
        </div>

        <div className="education-sections">
          <div className="education-section">
            <div className="education-section-header">
              <h3>{t("education.corePath")}</h3>
            </div>
            <div className="education-list">{renderList(currentPillar.corePath)}</div>
          </div>

          <div className="education-section">
            <div className="education-section-header">
              <h3>{t("education.complementaryTraining")}</h3>
            </div>
            <div className="education-list">
              {renderList(currentPillar.complementaryTraining)}
            </div>
          </div>
        </div>
      </div>

      <div className="education-note">
        <p>
          <strong>{t("education.noteTitle")}</strong> {t("education.noteText")}
        </p>
      </div>



      {showPasswordModal && (
        <div className="certificate-modal-overlay" onClick={cancelPassword}>
          <div className="password-modal" onClick={(e) => e.stopPropagation()}>
            <div className="password-modal-header">
              <p className="certificate-modal-tag">{t("education.passwordRequired")}</p>
              <h2>{t("education.passwordTitle")}</h2>
              <p>{t("education.passwordSubtitle")}</p>
            </div>

            <div className="password-modal-body">
              <input
                type="password"
                className={`password-input ${passwordError ? "password-input-error" : ""}`}
                placeholder={t("education.passwordPlaceholder")}
                value={passwordValue}
                onChange={(e) => {
                  setPasswordValue(e.target.value);
                  setPasswordError(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && submitPassword()}
                autoFocus
              />
              {passwordError && (
                <p className="password-error-msg">{t("education.passwordError")}</p>
              )}
            </div>

            <div className="password-modal-actions">
              <button className="view-btn disabled-btn password-cancel-btn" onClick={cancelPassword}>
                {t("education.cancel")}
              </button>
              <button className="view-btn password-confirm-btn" onClick={submitPassword}>
                {t("education.confirm")}
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedCertificate && (
        <div
          className="certificate-modal-overlay"
          onClick={closeCertificate}
        >
          <div
            className="certificate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <div>
                <p className="certificate-modal-tag">
                  {t("education.certificatePreview")}
                </p>
                <h2>{t(selectedCertificate.titleKey)}</h2>
                <p>{t(selectedCertificate.issuerKey)}</p>
              </div>

              <button
                className="close-modal-btn"
                onClick={closeCertificate}
              >
                ✕
              </button>
            </div>

            <div className="certificate-preview">
              {selectedCertificate.file ? (
                <iframe
                  src={selectedCertificate.file}
                  title={t(selectedCertificate.titleKey)}
                  className="certificate-pdf"
                />
              ) : (
                <div className="certificate-placeholder">
                  <span>{t("education.noCertificate")}</span>
                  <p>{t("education.uploadInstruction")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;