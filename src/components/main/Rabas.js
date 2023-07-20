import rabas from "../img/rabas-icon.svg";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Rabas() {
  const { t } = useTranslation();
  return (
    <div className="experience ">
      <Trans i18nKey={"rabas.date"}>
        <p className="timeline ">
          <br />
        </p>
      </Trans>
      <h3 className="titre ">{i18next.t("rabas.title")} </h3>
      <a
        className="text-hint "
        href="http://www.rabas.fr/ "
        target="_blank "
        rel="noopener noreferrer"
      >
        <img className="imag " src={rabas} alt={i18next.t("rabas.logo")} />
        <p>Rabas - Saint Nazaire</p>
      </a>
      <div className="texte ">
        <p>{i18next.t("rabas.description")}</p>
        <p className="resultat ">
          <span>{i18next.t("main.result")} </span> :
        </p>
      </div>
      <ul>
        <Trans i18nKey={"rabas.result"}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </Trans>
      </ul>
    </div>
  );
}
