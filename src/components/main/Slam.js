import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Slam() {
  const { t } = useTranslation();
  return (
    <div className="experience ">
      <Trans i18nKey={"slam.date"}>
        <p className="timeline ">
          <br />
        </p>
      </Trans>
      <h3 className="titre ">{i18next.t("slam.title")} </h3>
      <p className="text-hint ">S.L.A.M - Saint Brévin</p>
      <div className="texte ">
        <p>{i18next.t("slam.description")}</p>
        <p className="resultat ">
          <span>{i18next.t("main.result")} </span> :
        </p>
      </div>
      <ul>
        <Trans i18nKey={"slam.result"}>
          <li></li>
          <li></li>
        </Trans>
      </ul>
    </div>
  );
}
