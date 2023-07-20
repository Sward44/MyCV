import airbus from "../img/airbus-icon.svg";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Aerolia() {
  const { t } = useTranslation();
  return (
    <div className="experience ">
      <Trans i18nKey={"aerolia.date"}>
        <p className="timeline ">
          <br />
        </p>
      </Trans>
      <h3 className="titre ">{i18next.t("aerolia.title")}</h3>
      <a
        className="text-hint "
        href="https://www.airbus.com/fr/airbus-atlantic "
        target="_blank "
        rel="noopener noreferrer"
      >
        <img className="imag " src={airbus} alt={i18next.t("aerolia.logo")} />
        <p>Aérolia (ex-Airbus) - Saint Nazaire</p>
      </a>
      <div className="texte ">
        <p>{i18next.t("aerolia.description")}</p>
        <p className="resultat ">
          <span>{i18next.t("main.result")} </span> :
        </p>
      </div>
      <ul>
        <Trans i18nKey={"aerolia.result"}>
          <li></li>
          <li></li>
          <li></li>
        </Trans>
      </ul>
    </div>
  );
}
