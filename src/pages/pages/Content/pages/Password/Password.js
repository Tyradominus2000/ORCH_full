import styles from "./Password.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";
import { FetchContext } from "../../../../../context/FetchContext";

export default function Password() {
  const { handleFetch } = useContext(FetchContext);
  const yupSchema = yup.object({
    password: yup
      .string()
      .required("This field must not be empty")
      .min(3, "At least 3 character"),
    newPassword: yup
      .string()
      .required("This field must not be empty")
      .min(3, "At least 3 character"),
    confirmPassword: yup
      .string()
      .required("You have to confirm your password")
      .oneOf([yup.ref("newPassword"), null], "Password must be the same"),
  });

  //Create the password and eye tag
  const [eye, setEye] = useState("");
  const [eyeOff, setEyeOff] = useState("");
  const [passwordField, setPasswordField] = useState("");

  //By using useEffect im sure that the react as finish loading and actualising it every time the ClickPasswordOn/Off is call
  useEffect(() => {
    //Get the password and eye tag
    setEye(document.querySelector(".fa-eye"));
    setEyeOff(document.querySelector(".fa-eye-slash"));
    setPasswordField(document.querySelector("#newPassword"));
  }, []);

  //If you click on the eye change the input password to text to be visible by user
  function clickPasswordOn() {
    eye.classList.add("dnone");
    eye.classList.remove("dblock");
    eyeOff.classList.add("dblock");
    eyeOff.classList.remove("dnone");
    passwordField.type = "text";
  }
  //If you click on the close eye change the input password to password to be invisible by user
  function clickPasswordOff() {
    eye.classList.add("dblock");
    eye.classList.remove("dnone");
    eyeOff.classList.add("dnone");
    eyeOff.classList.remove("dblock");
    passwordField.type = "password";
  }
  const defaultValues = {
    password: "",
    newPassword: "",
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
    clearErrors();
    const ResponseFromBackEnd = await handleFetch("UpdatePassword", values);
    if (ResponseFromBackEnd === "Invalid") {
      setError("generic", {
        type: "generic",
        message: "Incorect Password",
      });
    } else if (ResponseFromBackEnd === false) {
      setError("generic", {
        type: "generic",
        message: "Something went wrong",
      });
    }
  }

  return (
    <>
      <div className="m10">
        <form className={`d-flex flex-column`} onSubmit={handleSubmit(submit)}>
          <div className={`${styles.ContainerPassword}`}>
            <div>
              <h2 className={`my20`}>Change Password</h2>
            </div>

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
              </div>
              {errors?.password && (
                <p className="form-error-light">{errors.password.message}</p>
              )}
            </div>
            <label className="mb5" htmlFor="newPassword">
              New Password :
            </label>
            <div className={`d-flex flex-column`}>
              <div className={`d-flex align-items-center`}>
                <input
                  className={`my20 p20 ${styles.Password}`}
                  type="password"
                  id="newPassword"
                  placeholder="New Password"
                  {...register("newPassword")}
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
              {errors?.newPassword && (
                <p className="form-error-light">{errors.newPassword.message}</p>
              )}
            </div>
            <label className="mb5" htmlFor="confirmPassword">
              Confirm Password :
            </label>
            <div className={`d-flex flex-column`}>
              <div className={`d-flex align-items-center`}>
                <input
                  className={`my20 p20 ${styles.Password}`}
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
              </div>
              {errors?.confirmPassword && (
                <p className="form-error-light">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {errors.generic && (
            <p className="form-error">{errors.generic.message}</p>
          )}
          <div className={`d-flex justify-content-end ${styles.Btn}`}>
            <NavLink to={"../login"}>
              <button type="button" className={`m5 btn btn-primary-reverse`}>
                Cancel
              </button>
            </NavLink>
            <button className={`m5 btn btn-primary`}>Update</button>
          </div>
        </form>
      </div>
    </>
  );
}
