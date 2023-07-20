import Presentation from "./main/Presentation";
import Ge from "./main/Ge";
import Juignet from "./main/Juignet";
import Rabas from "./main/Rabas";
import AirbusNantes from "./main/AirbusNantes";
import Aerolia from "./main/Aerolia";
import AirbusStNazaire from "./main/AirbusStNazaire";
import Chapuis from "./main/Chapuis";
import Slam from "./main/Slam";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Main() {
  const { t } = useTranslation();

  return (
    <main>
      <Presentation />
      <h2 className="title-small ">{i18next.t("main.title_experience")}</h2>
      <hr />
      <Ge />
      <div className="separator "></div>
      <Juignet />
      <div className="separator "></div>
      <Rabas />
      <div className="separator "></div>
      <AirbusNantes />
      <div className="separator "></div>
      <Aerolia />
      <div className="separator "></div>
      <AirbusStNazaire />
      <div className="separator "></div>
      <Chapuis />
      <div className="separator "></div>
      <Slam />
    </main>
  );
}
