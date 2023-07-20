// import { ReactComponent as France } from "../components/img/france-rectangulaire.svg";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect, useState } from "react";

export default function App() {
  const { t } = useTranslation();

  const [value, setValue] = useState("");
  const options = [
    { label: "Français", value: "fr" },
    { label: "English", value: "en" },
  ];
  function handleSelect(event) {
    setValue(event.target.value);
  }
  useEffect(() => {
    document.title = `${i18next.t("document.title")}`;
  });

  return (
    <div className="grid-container">
      <Header />
      <Section />
      <Main />
      <Aside />
      <div className="selection">
        <h2 class="title-small ">{i18next.t("aside.langue.language")}</h2>

        <select
          className="selectButton"
          onChange={handleSelect}
          onClick={() => i18next.changeLanguage(value)}
        >
          {options.map((option) => (
            <option value={option.value}>
              {option.imageCountries} {option.label}
            </option>
          ))}
        </select>
      </div>
      <Footer />
    </div>
  );
}
