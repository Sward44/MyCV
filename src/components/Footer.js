import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <h2 class="title-small ">{i18next.t("footer.title")}</h2>
      <form>
        <i className="far fa-envelope-open prefix "></i>
        <input
          id="email-text"
          type="email"
          name="email"
          placeholder={i18next.t("footer.placeholder")}
        ></input>
        <button id="click-button">
          <i className="fa-solid fa-paper-plane postfix "></i>
        </button>
      </form>
    </footer>
  );
}
