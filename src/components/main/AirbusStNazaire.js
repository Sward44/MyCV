import airbus from "../img/airbus-icon.svg";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function AirbusStNazaire() {
  const { t } = useTranslation();
  return (
    <div className="experience ">
      <Trans i18nKey={"airbus_st_nazaire.date"}>
        <p className="timeline ">
          <br />
        </p>
      </Trans>
      <h3 className="titre ">{i18next.t("airbus_st_nazaire.title")}</h3>
      <a
        className="text-hint "
        href="https://www.airbus.com/fr/airbus-atlantic "
        target="_blank "
        rel="noopener noreferrer"
      >
        <img
          className="imag "
          src={airbus}
          alt={i18next.t("airbus_st_nazaire.logo")}
        />
        <p>Airbus - St Nazaire</p>
      </a>
      <div className="texte ">
        <p>{i18next.t("airbus_st_nazaire.description")}</p>
        <p className="resultat ">
          <span>{i18next.t("main.result")} </span> :
        </p>
      </div>
      <ul>
        <Trans i18nKey={"airbus_st_nazaire.result"}>
          <li></li>
          <li></li>
          <li></li>
        </Trans>
      </ul>
    </div>
  );
}
