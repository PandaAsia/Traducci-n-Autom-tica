# Utilizando i18next

### instalación

npm install i18next

### componente archivos de traducción para la integración con React.

npm install i18next-http-backend react-i18next

### Configuración

```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en", // idioma predeterminado
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // react ya lo maneja
    },
  });

export default i18n;
```

###

# Traducci-n-Autom-tica

Este Proyecto aun no esta listo, ya que no funciona intentere otros metodos, cuando tenga conocimiento mas profundo de Node.js
