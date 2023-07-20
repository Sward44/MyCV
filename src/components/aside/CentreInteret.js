import travel from "../img/around.svg";
import comptuting from "../img/computer.svg";
import marche from "../img/traveler.svg";
import peche from "../img/fishing.svg";
import chasse from "../img/hunter-hunting-with-bow-and-arrow.svg";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function CentreInteret() {
  const { t } = useTranslation();
  return (
    <div className="block lang">
      <h2 className="title-small">{i18next.t("aside.hobbies.title")}</h2>
      <hr />
      <div className="langue">
        <img src={travel} alt={i18next.t("aside.hobbies.travel")} />
        <img src={comptuting} alt={i18next.t("aside.hobbies.computing")} />
        <img src={marche} alt={i18next.t("aside.hobbies.marche")} />
        <img src={peche} alt={i18next.t("aside.hobbies.peche")} />
        <img src={chasse} alt={i18next.t("aside.hobbies.chasse")} />
      </div>
    </div>
  );
}
