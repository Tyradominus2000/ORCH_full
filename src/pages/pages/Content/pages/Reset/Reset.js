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
  // https://www.youtube.com/watch?v=AClnCg_WCJk
  const yupSchema = yup.object({
    password: yup.string().required("This field must not be empty"),
    confirmPassword: yup
      .string()
      .required("This field must not be empty")
      .oneOf([yup.ref("password"), null], "Password must be the same"),
  });
  //Get the password and eye tag
  let eye;
  let eyeoff;
  let passwordField;
  //By using useEffect im sure that the react as finish loading and actualising it every time the ClickPasswordOn/Off is call
  useEffect(() => {
    eye = document.querySelector(".fa-eye");
    eyeoff = document.querySelector(".fa-eye-slash");
    passwordField = document.querySelector("#password");
  }, [clickPasswordOn, clickPasswordOff]);

  //If you click on the eye change the input password to text to be visible by user
  function clickPasswordOn() {
    eye.classList.add("dnone");
    eye.classList.remove("dblock");
    eyeoff.classList.add("dblock");
    eyeoff.classList.remove("dnone");
    passwordField.type = "text";
  }
  //If you click on the close eye change the input password to password to be invisible by user
  function clickPasswordOff() {
    eye.classList.add("dblock");
    eye.classList.remove("dnone");
    eyeoff.classList.add("dnone");
    eyeoff.classList.remove("dblock");
    passwordField.type = "password";
  }
  const defaultValues = {
    password: "",
    confirmPassword: "",
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
    handleFetch("");
  }
  return (
    <>
      <div className="m10">
        <form className={`d-flex flex-column`} onSubmit={handleSubmit(submit)}>
          <div className={`${styles.Register}`}>
            <div>
              <h2 className={`my20`}>Reset Password</h2>
            </div>
            <div className={`d-flex flex-column`}>
              <label className="mb5" htmlFor="password">
                Password :
              </label>
              <div className={`d-flex flex-column`}>
                <div className={`d-flex align-items-center`}>
                  <input
                    className={`my20 p20 ${styles.Password}`}
                    type="password"
                    id="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <i
                    onClick={() => clickPasswordOn()}
                    className={"fa-regular fa-eye m5"}
                  ></i>
                  <i
                    onClick={() => clickPasswordOff()}
                    className="fa-regular fa-eye-slash m5"
                  ></i>
                </div>
                {errors?.password && <p>{errors.password.message}</p>}
                <label className="mb5" htmlFor="confirmPassword">
                  Confirm Password :
                </label>
                <div className={`d-flex align-items-center`}>
                  <input
                    className={`my20 p20 ${styles.Password}`}
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                  />
                </div>
                {errors?.password && <p>{errors.confirmPassword.message}</p>}
              </div>
            </div>
          </div>
          <NavLink to={"/content/reset"}>
            <p className="form-question">Forgot Password ?</p>
          </NavLink>
          {errors.generic && (
            <p className="form-error">{errors.generic.message}</p>
          )}
          <div className={`d-flex justify-content-end ${styles.Btn}`}>
            <NavLink to={"/content/login"}>
              <button type="button" className={`m5 btn btn-primary-reverse`}>
                Cancel
              </button>
            </NavLink>
            <button className={`m5 btn btn-primary`}>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}
