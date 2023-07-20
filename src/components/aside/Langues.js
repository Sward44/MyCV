import uk from "../img/uk-rectangulaire.svg";
import francais from "../img/france-rectangulaire.svg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Langues() {
  const { t } = useTranslation();
  return (
    <div className="block langues">
      <h2 className="title-small">{i18next.t("aside.langue.language")}</h2>
      <hr />
      <div className="langue">
        <img
          className="mx-1"
          src={francais}
          alt={i18next.t("aside.langue.france")}
        />
        <i className="fa-solid fa-star text-primary"></i>
        <i className="fa-solid fa-star text-primary"></i>
        <i className="fa-solid fa-star text-primary"></i>
        <i className="fa-solid fa-star text-primary"></i>
        <i className="fa-solid fa-star text-primary"></i>
      </div>
      <div className="langue">
        <img className="mx-1" src={uk} alt={i18next.t("aside.langue.uk")} />
        <i className="fa-solid fa-star text-primary"></i>
        <i className="fa-solid fa-star text-primary"></i>
        <i className="fa-solid fa-star text-primary"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </div>
  );
}
