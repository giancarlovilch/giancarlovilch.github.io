import React from "react";
import "./Contact.css";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import { useTranslation } from "react-i18next";
import wechatQR from "../assets/contact/wechat-qr.png";
// import whatsappQR from "../assets/contact/whatsapp-qr.png";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-page">
      <div className="contact-header">
        <p className="contact-tag">{t("contact.tag")}</p>
        <h1>{t("contact.title")}</h1>
        <p className="contact-subtitle">{t("contact.subtitle")}</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-card">
          <h2>{t("contact.connectTitle")}</h2>
          <p className="contact-description">{t("contact.description")}</p>

          <div className="contact-list">
            <a
              href="mailto:giancarlo.vilch@qq.com"
              className="contact-item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <span className="contact-label">{t("contact.items.email.label")}</span>
                <p>giancarlo.vilch@qq.com</p>
              </div>
            </a>

            <a href="tel:+51935812267" className="contact-item">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <span className="contact-label">{t("contact.items.phone.label")}</span>
                <p>+51 935 812 267</p>
              </div>
            </a>

            <a
              href="https://wa.me/51935812267"
              className="contact-item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">
                <FaWhatsapp />
              </div>
              <div>
                <span className="contact-label">{t("contact.items.whatsapp.label")}</span>
                <p>{t("contact.items.whatsapp.text")}</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/giancarlovilch/"
              className="contact-item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">
                <FaInstagram />
              </div>
              <div>
                <span className="contact-label">{t("contact.items.instagram.label")}</span>
                <p>@giancarlovilch</p>
              </div>
            </a>

            <div className="contact-item wechat-item">
              <div className="contact-icon">
                <SiWechat />
              </div>
              <div>
                <span className="contact-label">{t("contact.items.wechat.label")}</span>
                <p>{t("contact.items.wechat.text")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-qr-card">
          <h2>{t("contact.qrTitle")}</h2>
          <p>{t("contact.qrText")}</p>
          <div className="qr-wrapper">
            <img src={wechatQR} alt={t("contact.qrAlt")} className="wechat-qr" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;