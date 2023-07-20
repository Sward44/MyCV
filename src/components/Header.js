import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <h1>David Launay</h1>
      <p>{i18next.t("header.title")} </p>
    </header>
  );
}
