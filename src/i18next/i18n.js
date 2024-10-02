// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// const loadDynamicTranslations = (translations) => {
//   Object.keys(translations).forEach((lenguage) => {
//     i18n.addResource(lenguage, "translation", translations[lenguage]);
//   });
// };

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "es", // idioma predeterminado
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // react ya lo maneja
    },
  });

export default i18n;
