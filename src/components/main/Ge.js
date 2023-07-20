import GeneralElectrics from "../img/general_electric_icon.svg";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Ge() {
  const { t } = useTranslation();
  return (
    <div className="experience ">
      <Trans i18nKey={"ge.date"}>
        <p className="timeline ">
          <br />
        </p>
      </Trans>
      <h3 className="titre ">{i18next.t("ge.title")}</h3>
      <a
        className="text-hint"
        href="https://www.ge.com/renewableenergy/wind-energy/offshore-wind "
        target="_blank "
        rel="noopener noreferrer"
      >
        <img
          className="imag "
          src={GeneralElectrics}
          alt={i18next.t("ge.logo")}
        />
        <p>GE Renewable Energy - Montoir de bretagne </p>
      </a>
      <div className="texte ">
        <p>{i18next.t("ge.description")}</p>
        <p className="resultat ">
          <span>{i18next.t("main.result")}</span> :
        </p>
      </div>
      <ul>
        <Trans i18nKey={"ge.result"}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </Trans>
      </ul>
    </div>
  );
}
