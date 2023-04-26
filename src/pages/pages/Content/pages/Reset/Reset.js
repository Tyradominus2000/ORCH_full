import styles from "./Reset.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";
import { FetchContext } from "../../../../../context/FetchContext";
import { useContext } from "react";

export default function Reset() {
  const { handleFetch } = useContext(FetchContext);
  const yupSchema = yup.object({
    email: yup
      .string()
      .email("Use a valid email")
      .required("This field must not be empty"),
  });

  const defaultValues = {
    email: "",
  };

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    console.log(values);
    clearErrors();
    if ((await handleFetch("Reset", values)) === false) {
      setError("generic", {
        type: "generic",
        message: "Wrong email",
      });
    }
  }
  return (
    <>
      <div className="m10">
        <form className={`d-flex flex-column`} onSubmit={handleSubmit(submit)}>
          <div className={`${styles.Login}`}>
            <div>
              <h2 className={`my20`}>Login in</h2>
            </div>
            <div className={`d-flex flex-column`}>
              <label className="mb5" htmlFor="email">
                Email :
              </label>
              <input
                className={`my20 p20 ${styles.Email}`}
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors?.email && <p>{errors.email.message}</p>}
            </div>
          </div>
          <NavLink to={"/content/reset"}>
            <p className="form-question">Forgot Password ?</p>
          </NavLink>
          {errors.generic && (
            <p className="form-error">{errors.generic.message}</p>
          )}
          <div className={`d-flex justify-content-end ${styles.Btn}`}>
            <NavLink to={"../../"}>
              <button type="button" className={`m5 btn btn-primary-reverse`}>
                Cancel
              </button>
            </NavLink>
            <button className={`m5 btn btn-primary`}>Log in</button>
          </div>
        </form>
      </div>
    </>
  );
}
