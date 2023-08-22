// import { ReactComponent as France } from "../components/img/france-rectangulaire.svg";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import FormAdd from "./form/FormAdd";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./App.module.scss";

export default function App() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [newEmail, setNewEmail] = useState([]);
  const [popup, setPopup] = useState(false);

  console.log(popup);

  useEffect(() => {
    document.title = `${i18next.t("document.title")}`;
  }, []);

  const options = [
    { label: "Français", value: "fr", valueFlag: "FR" },
    { label: "English", value: "en", valueFlag: "GB" },
  ];
  function handleSelect(event) {
    setValue(event.target.value);
  }

  function message(emailReceive) {
    setNewEmail([...newEmail, emailReceive]);
    setPopup(true);
  }

  function handlePopup() {
    setPopup(false);
  }

  return (
    <>
      <div className="grid-container">
        <Header />
        <Section />
        <Main />
        <Aside />
        <div className="selection">
          <h2 className="title-small ">{i18next.t("aside.langue.language")}</h2>

          <select
            className={`${styles.tailleCharacter} selectButton`}
            onChange={handleSelect}
            onClick={() => i18next.changeLanguage(value)}
          >
            {options.map((option) => (
              <option
                value={option.value}
                className={`${styles.tailleCharacter}`}
              >
                <ReactCountryFlag countryCode={option.valueFlag} />{" "}
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <Footer onNewEmailReceived={message} />
      </div>
      {popup && (
        <FormAdd onNewEmailReceive={newEmail[0]} handlePopup={handlePopup} />
      )}
    </>
  );
}
