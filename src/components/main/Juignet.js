import juignet from "../img/juignet-icon.svg";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Juignet() {
  const { t } = useTranslation();
  return (
    <div className="experience ">
      <Trans i18nKey={"juignet.date"}>
        <p className="timeline ">
          <br />
        </p>
      </Trans>
      <h3 className="titre ">{i18next.t("juignet.title")}</h3>
      <a
        className="text-hint "
        href="https://www.juignet.fr/ "
        target="_blank "
        rel="noopener noreferrer"
      >
        <img className="imag " src={juignet} alt={i18next.t("juignet.logo")} />
        <p>Juignet- Les Sorinières</p>
      </a>
      <div className="texte ">
        <p>{i18next.t("juignet.description")}</p>
        <p className="resultat ">
          <span>{i18next.t("main.result")}</span> :
        </p>
      </div>
      <ul>
        <Trans i18nKey={"juignet.result"}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </Trans>
      </ul>
    </div>
  );
}
