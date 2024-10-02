import "./App.css";
import { useEffect, useState } from "react";

import Eunha from "../src/Api/db.json";
import { useTranslation } from "react-i18next";
import i18n from "./i18next/i18n";

function App() {
  const { t } = useTranslation();
  const [dataFromApi, setDataFromApi] = useState(Eunha);

  useEffect(() => {
    const newResources = {};
    Object.keys(dataFromApi).forEach((key) => {
      const translationKey = `dataFromApi.${key}`;
      const translationValue = dataFromApi[key];
      newResources[translationKey] = translationValue;
    });

    // Añadir traducciones dinámicamente
    i18n.addResourceBundle("es", "translation", newResources);

    console.log("es", i18n.language);

    // Limpiar las traducciones al desmontar el componente
    return () => {
      // Object.keys(dataFromApi).forEach((key) => {
      //   const translationKey = `dataFromApi.${key}`;
      //   i18n.removeResourceBundle("es", "translation", [translationKey]);
      // });
    };
  }, [dataFromApi]);
  return (
    <>
      <main className="row">
        <section className="col-6">
          <h1>{t("dataFromApi.Name")}</h1>
          <p>{t("dataFromApi.who")}</p>
          <hr />
          <h3>{t("dataFromApi.title1")}</h3>
          <p>{t("dataFromApi.life")}</p>
          <hr />
          <h3>{t("dataFromApi.title2")}</h3>
          <p>{t("dataFromApi.Career")}</p>
        </section>
        <figure className="col-6">
          <img src={Eunha.EunhaImg4} alt="Eunha" />
        </figure>
      </main>
    </>
  );
}

export default App;
