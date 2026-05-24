import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enContact from "./locales/en/en.json";
import esContact from "./locales/en/es.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enContact
      },
      es: {
        translation: esContact
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;