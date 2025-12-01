import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateData from "./translate.json";
const savedLanguage = localStorage.getItem('lang') || 'ru';
i18n.use(initReactI18next).init({
    resources:translateData,
    lng: savedLanguage,
    fallbackLng: "ru",
    debug: false,
    interpolation: {
      escapeValue: false,
    }
});

export default i18n;