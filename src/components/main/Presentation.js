import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Presentation() {
  const { t } = useTranslation();
  return (
    <div className="block ">
      <h2 className="title-small ">{i18next.t("main.title_profil")} </h2>
      <hr />
      <p>{i18next.t("synthese.description")}</p>
    </div>
  );
}
