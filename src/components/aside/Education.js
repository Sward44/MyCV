import dyma from "../img/dyma-icon.svg";
import yomi from "../img/yomi-logo.svg";
import wse from "../img/wse-icon.svg";
import bea from "../img/bea-icon.svg";
import cesi from "../img/cesi-icon.svg";
import afpi from "../img/afpi-icon.svg";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <div className="block education">
      <h2 className="title-small">EDUCATION</h2>
      <hr />
      <a
        className="localisation"
        rel="noopener noreferrer"
        href="https://dyma.fr/"
        target="_blank"
      >
        <img
          className="mx-1"
          src={dyma}
          alt={i18next.t("aside.education.img_dyma")}
        />
        <h3>{i18next.t("aside.education.dyma")}</h3>
      </a>
      <p>{i18next.t("aside.education.full_stack")}</p>
      <a
        className="localisation"
        rel="noopener noreferrer"
        href="https://www.yomidenzel.com/"
        target="_blank"
      >
        <img
          className="mx-1"
          src={yomi}
          alt={i18next.t("aside.education.img_yomi")}
        />
        <h3>{i18next.t("aside.education.yomi")}</h3>
      </a>
      <p>{i18next.t("aside.education.e-commerce")}</p>
      <a
        className="localisation"
        rel="noopener noreferrer"
        href="https://wallstreetenglish.fr/"
        target="_blank"
      >
        <img
          className="mx-1"
          src={wse}
          alt={i18next.t("aside.education.img_wse")}
        />
        <h3>WSE - Nantes</h3>
      </a>
      <Trans i18nKey={"aside.education.wse-en"}>
        <p>
          <br />
        </p>
      </Trans>
      <a
        className="localisation"
        rel="noopener noreferrer"
        href="https://www.britannia-school.com/"
        target="_blank"
      >
        <img
          className="mx-1"
          src={bea}
          alt="British English Academy - Formation d'anglais"
        />
        <h3>BEA - Manchester</h3>
      </a>
      <p>{i18next.t("aside.education.bea-en")}</p>
      <a
        className="localisation"
        rel="noopener noreferrer"
        href="https://www.cesi.fr/programmes/cycle-preparatoire-integre/?gclid=Cj0KCQjw166aBhDEARIsAMEyZh68XSXVR53vFy_bbvWPGmf0P1un3MW-YcVlMd0bvZs95-7ZLZvnuxoaAkUXEALw_wcB"
        target="_blank"
      >
        <img
          className="mx-1"
          src={cesi}
          alt={i18next.t("aside.education.img-cesi")}
        />
        <h3>CESI - St Nazaire</h3>
      </a>
      <p>{i18next.t("aside.education.cesi")}</p>
      <a
        className="localisation"
        rel="noopener noreferrer"
        href="https://www.cesi.fr/programmes/cycle-preparatoire-integre/?gclid=Cj0KCQjw166aBhDEARIsAMEyZh68XSXVR53vFy_bbvWPGmf0P1un3MW-YcVlMd0bvZs95-7ZLZvnuxoaAkUXEALw_wcB"
        target="_blank"
      >
        <img
          className="mx-1"
          src={afpi}
          alt={i18next.t("aside.education.img-afpi")}
        />
        <h3>AFPI - Nantes</h3>
      </a>
      <p>{i18next.t("aside.education.afpi")}</p>
    </div>
  );
}
