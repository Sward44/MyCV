import CentreInteret from "./aside/CentreInteret";
import Contact from "./aside/Contact";
import Education from "./aside/Education";
import Informatique from "./aside/Informatique";
import Langues from "./aside/Langues";

export default function Aside() {
  // { t } = useTranslation();
  return (
    <aside>
      <div className="sticky">
        <Contact />
        <Education />
        <Informatique />
        <Langues />
        <CentreInteret />
      </div>
    </aside>
  );
}
