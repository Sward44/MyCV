import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    detection: {
      order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    debug: true,
    lng: document.querySelector("html").lang,
    fallbackLng: "fr",
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

export default i18next;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
