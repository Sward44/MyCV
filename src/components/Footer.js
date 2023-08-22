import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Footer({ onNewEmailReceived }) {
  const { t } = useTranslation();
  const defaultValues = {
    email: "",
    done: false,
  };

  const schema = yup.object({
    email: yup
      .string()
      .required(i18next.t("formulaire.message.email.required"))
      .email(i18next.t("formulaire.message.email.email")),
  });
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  async function submit(values) {
    try {
      clearErrors();
      const response = await fetch("https://restapi.fr/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const newEmailFooter = await response.json();
        newEmailFooter.done = !newEmailFooter.done;
        onNewEmailReceived(newEmailFooter);
        reset(defaultValues);
      } else {
        setError("generic", {
          type: "generic",
          message: i18next.t("formulaire.message.generic.else"),
        });
      }
    } catch (e) {
      setError("generic", {
        type: "generic",
        message: i18next.t("formulaire.message.generic.catch"),
      });
    }
  }

  return (
    <footer>
      <h2 className="title-small ">{i18next.t("footer.title")}</h2>

      <form onSubmit={handleSubmit(submit)}>
        <i className="far fa-envelope-open prefix "></i>
        <input
          {...register("email")}
          id="email"
          type="email"
          name="email"
          placeholder={i18next.t("footer.placeholder")}
        ></input>

        <button disabled={isSubmitting} id="click-button">
          <i className="fa-solid fa-paper-plane postfix "></i>
        </button>
      </form>
      {errors?.email && <p>{errors.email.message}</p>}
      {errors?.generic && <p>{errors.generic.message}</p>}

      {/* <a href="mailto:davidlaunay567@gmail.com">
        <i className="fa-solid fa-envelope px-1" />
        <p className="titleCouleur">davidlaunay567@gmail.com</p>
      </a> */}
    </footer>
  );
}
