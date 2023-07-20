import airbus from "../img/airbus-icon.svg";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function AirbusNantes() {
  const { t } = useTranslation();
  return (
    <div className="experience ">
      <Trans i18nKey={"airbus_nantes.date"}>
        <p className="timeline ">
          <br />
        </p>
      </Trans>
      <h3 className="titre ">Technicien de production</h3>
      <a
        className="text-hint "
        href="https://www.airbus.com/en/products-services/commercial-aircraft "
        target="_blank "
        rel="noopener noreferrer"
      >
        <img
          className="imag "
          src={airbus}
          alt={i18next.t("airbus_nantes.logo")}
        />
        <p>{i18next.t("airbus_nantes.title")}</p>
      </a>
      <div className="texte ">
        <p>{i18next.t("airbus_nantes.description")}</p>
        <p className="resultat ">
          <span>{i18next.t("main.result")}</span> :
        </p>
      </div>
      <ul>
        <Trans i18nKey={"airbus_nantes.result"}>
          <li></li>
          <li></li>
        </Trans>
      </ul>
    </div>
  );
}
