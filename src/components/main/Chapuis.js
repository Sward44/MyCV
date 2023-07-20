import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Chapuis() {
  const { t } = useTranslation();
  return (
    <div className="experience ">
      <Trans i18nKey={"chapuis.date"}>
        <p className="timeline ">
          <br />
        </p>
      </Trans>
      <h3 className="titre ">{i18next.t("chapuis.title")}</h3>
      <p className="text-hint ">Chapuis-SARL - Migennes</p>
      <div className="texte ">
        <p>{i18next.t("chapuis.description")}</p>
        <p className="resultat ">
          <span>{i18next.t("main.result")} </span> :
        </p>
      </div>
      <ul>
        <Trans i18nKey={"chapuis.result"}>
          <li>Relation fournisseurs / clients ;</li>
          <li>Aquisition de rigueur dans le moules.</li>
        </Trans>
      </ul>
    </div>
  );
}
