import htmlcss from "../img/html-css-icon.svg";
import sass from "../img/sass-icon.svg";
import javascript from "../img/js-icon.svg";
import react from "../img/react -logo.svg";
import php from "../img/php-icon.svg";
import linux from "../img/linux-icon.svg";
import vb from "../img/vb-icon.svg";
import office from "../img/office-icon.svg";
import arras from "../img/aras-icon.svg";
import enovia from "../img/catia-icon.svg";
import sap from "../img/sap-icon.svg";
import autocad from "../img/autocad-icon.svg";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Informatique() {
  const { t } = useTranslation();
  return (
    <div className="block informatique">
      <h2 className="title-small">INFORMATIQUE</h2>
      <hr />
      <div className="localisation mx-3">
        <img src={htmlcss} alt={i18next.t("aside.computing.html-css")} />
        <img
          className="mx-1"
          src={sass}
          alt={i18next.t("aside.computing.sass")}
        />
        <h3>HTML & CSS/SCSS</h3>
      </div>
      <div className="bar-skill">
        <div className="skill-progress html"></div>
        <div className="skill-dot html-dot"></div>
      </div>
      <div className="localisation mx-3">
        <img src={javascript} alt={i18next.t("aside.computing.js")} />
        <img src={react} alt={i18next.t("aside.computing.react")} />
        <img src={php} alt={i18next.t("aside.computing.php")} />
        <img
          className="mx-1"
          src={linux}
          alt={i18next.t("aside.computing.linux")}
        />
        <h3>JS(X) - PHP - LINUX</h3>
      </div>
      <div className="bar-skill">
        <div className="skill-progress php-js"></div>
        <div className="skill-dot php-js-dot"></div>
      </div>
      <div className="localisation mx-3">
        <img className="mx-1" src={vb} alt={i18next.t("aside.computing.vba")} />
        <h3>VBA</h3>
      </div>
      <div className="bar-skill">
        <div className="skill-progress vba"></div>
        <div className="skill-dot vba-dot"></div>
      </div>
      <div className="localisation mx-3">
        <img
          className="mx-1"
          src={office}
          alt={i18next.t("aside.computing.office")}
        />
        <h3>Office</h3>
      </div>

      <div className="bar-skill">
        <div className="skill-progress office"></div>
        <div className="skill-dot office-dot"></div>
      </div>
      <div className="localisation mx-3">
        <img src={arras} alt={i18next.t("aside.computing.aras")} />
        <img src={enovia} alt={i18next.t("aside.computing.enovia")} />
        <img
          className="mx-1"
          src={sap}
          alt={i18next.t("aside.computing.sap")}
        />
        <h3>PLM / ERP</h3>
      </div>

      <div className="bar-skill">
        <div className="skill-progress erp"></div>
        <div className="skill-dot erp-dot"></div>
      </div>
      <div className="localisation mx-3">
        <img src={enovia} alt={i18next.t("aside.computing.enovia-cad")} />
        <img
          className="mx-1"
          src={autocad}
          alt={i18next.t("aside.computing.autocad")}
        />
        <h3>CAO / DAO</h3>
      </div>

      <div className="bar-skill">
        <div className="skill-progress cao"></div>
        <div className="skill-dot cao-dot"></div>
      </div>
    </div>
  );
}
