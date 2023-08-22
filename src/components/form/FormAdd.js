import styles from "./FormAdd.module.scss";
import React, { useState } from "react";
import { useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import i18next from "i18next";

function FormAdd({ onNewEmailReceive, handlePopup }) {
  const [isLoading, setIsLoading] = useState(false);
  // const [count, setCount] = useState(8);
  const isFinish = useRef(false);
  const options = [
    { optionValue: "+33", valueFlag: "FR" },
    { optionValue: "+44", valueFlag: "GB" },
    { optionValue: "+1", valueFlag: "US" },
  ];

  const defaultValues = {
    _id: onNewEmailReceive["_id"],
    email: onNewEmailReceive["email"],
    createdAt: onNewEmailReceive["createdAt"],
    done: onNewEmailReceive["done"],
  };

  const { t } = useTranslation();
  const schema = yup.object({
    email: yup
      .string()
      .required(i18next.t("formulaire.message.email.required"))
      .email(i18next.t("formulaire.message.email.email")),
    site: yup.string().url(),
    name: yup.string().required(i18next.t("formulaire.message.email.required")),
    surname: yup
      .string()
      .required(i18next.t("formulaire.message.email.required")),
    indicatif: yup.string(),
    number: yup.number(i18next.t("formulaire.message.phone.number")),
    comments: yup.string(),
  });
  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  async function submit(values) {
    try {
      setIsLoading(true);
      clearErrors();
      const { _id, ...newEmailWithoutId } = values;
      newEmailWithoutId.number =
        newEmailWithoutId.indicatif + newEmailWithoutId.number;
      const response = await fetch(
        `https://restapi.fr/api/email/${defaultValues._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEmailWithoutId),
        }
      );
      if (response.ok) {
        const newEmailFooter = await response.json();
        isFinish.current = true;
        reset();
        // onNewEmailReceive(newEmailFooter);
      } else {
        setError("generic", {
          type: "generic",
          message: "Problèmes serveurs else",
        });
      }
    } catch (e) {
      setError("generic", {
        type: "generic",
        message: "Problèmes serveurs catch",
      });
    }
    setIsLoading(false);
  }

  // function deCount() {

  //   setCount(count--);
  // }
  return (
    <div
      className={`${styles.formulaire} d-flex flex-fill align-items-center justify-content-center`}
    >
      {isLoading && (
        <i
          className={`fa-solid fa-spinner fa-spin-pulse ${styles.loadingSpin}`}
        ></i>
      )}
      {isFinish.current ? (
        <div
          className={`${styles.containerFormulaire} d-flex flex-column p-20`}
        >
          {/* onLoad={deCount}({count}) */}
          <h2 className="mb-20">{i18next.t("formulaire.thank")}</h2>
          <button onClick={handlePopup}>Ok </button>
        </div>
      ) : (
        <div className={`${styles.containerFormulaire} `}>
          <form onSubmit={handleSubmit(submit)} className="d-flex flex-column">
            <div className="d-flex flex-row mb-20">
              <h2 className="flex-fill">{i18next.t("formulaire.title")}</h2>
              <i
                onClick={handlePopup}
                className={`fa-solid fa-xmark ${styles.mark}`}
              ></i>
            </div>
            <label htmlFor="email">{i18next.t("formulaire.email")}</label>
            {/* {isChangeEmail ? (
              <div className="d-flex flex-row"> */}
            <input
              {...register("email")}
              defaultValues={"email"}
              className="mb-10"
            ></input>
            {/* <button onClick={setIsChangeEmail(false)}>
                  <i className="fa-solid fa-pen"></i>
                </button>
              </div>
            ) : (
              <div className="d-flex flex-row">
                <span className="flex-fill align-self-center pl-15">
                  {onNewEmailReceive["email"]}
                </span>
                <button onClick={setIsChangeEmail(true)}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </div>
            )} */}

            {errors?.email && <p>{errors.email.message}</p>}
            {errors?.email && <p>{errors.required.message}</p>}
            <label htmlFor="site">{i18next.t("formulaire.site")}</label>
            <input {...register("site")} className="mb-10"></input>
            <label htmlFor="name">{i18next.t("formulaire.name")}</label>
            <input {...register("name")} className="mb-10"></input>
            {errors?.name && <p>{errors.required.message}</p>}
            <label htmlFor="surname">{i18next.t("formulaire.surname")}</label>
            <input {...register("surname")} className="mb-10"></input>
            {errors?.surname && <p>{errors.required.message}</p>}
            <label htmlFor="number">{i18next.t("formulaire.phone")}</label>
            <div className="d-flex flex-row">
              <select
                id="indicatif"
                {...register("indicatif")}
                className="mb-10"
              >
                {options.map((option) => (
                  <option key={option.optionValue} value={option.optionValue}>
                    <ReactCountryFlag countryCode={option.valueFlag} />{" "}
                    {option.optionValue}
                  </option>
                ))}
              </select>
              <input
                {...register("number", { valueAsNumber: true })}
                className="flex-fill mb-10"
              ></input>
              {errors?.number && <p>{errors.number.message}</p>}
            </div>
            <label htmlFor="comments">{i18next.t("formulaire.comments")}</label>
            <textarea
              {...register("comments")}
              className="mb-20"
              placeholder={i18next.t("formulaire.commentPlaceholder")}
            ></textarea>
            <button disabled={isSubmitting}>
              <i className="fa-solid fa-paper-plane mr-20"></i>Envoyer
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default FormAdd;
