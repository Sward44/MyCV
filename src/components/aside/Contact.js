import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="block contact">
      <h2 className="title-small">CONTACT</h2>
      <hr />
      <h3>{i18next.t("aside.contact.phone")}</h3>
      <p>
        <a href="telto:+33636946970">
          <i className="fa-solid fa-phone px-1"></i>+33 (0)6 36 94 69 70
        </a>
      </p>
      <h3>Email :</h3>
      <p>
        <a href="mailto:davidlaunay567@gmail.com">
          <i className="fa-solid fa-envelope px-1"></i>
          davidlaunay567@gmail.com
        </a>
      </p>
      <h3>{i18next.t("aside.contact.address")} </h3>
      <div className="loca-address">
        <p>
          <a
            rel="noopener noreferrer"
            href="https://goo.gl/maps/67yWc4vdLkcJh1op7"
            target="_blank"
          >
            <i className="fa-solid fa-location-dot px-1 py-1"></i>Le Pellerin,
            France
          </a>
        </p>
      </div>
      <h3>Social :</h3>
      <p>
        <a
          rel="noopener noreferrer"
          href={i18next.t("aside.contact.linkedin")}
          target="_blank"
        >
          <i className="fa-brands fa-linkedin px-1"></i>
          linkedin.com/in/david-launay
        </a>
      </p>
    </div>
  );
}
