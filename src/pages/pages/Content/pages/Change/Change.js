import styles from "./Change.module.scss";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useOutletContext } from "react-router-dom";
import { FetchContext } from "../../../../../context/FetchContext";

export default function Change() {
  const { handleFetch } = useContext(FetchContext);
  const { User } = useOutletContext();

  const email = User[0].Useremail;
  const username = User[0].Username;

  const yupSchema = yup.object({
    username: yup.string(),
    email: yup.string().email("Use a valid email"),
    password: yup
      .string()
      .required("This field must not be empty")
      .min(3, "At least 3 charachter"),
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
    setPasswordField(document.querySelector("#password"));
  }, [clickPasswordOn, clickPasswordOff]);

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
    username: "",
    email: "",
    password: "",
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
    const update = await handleFetch("UpdateUser", values);
    if (update === "Invalid") {
      setError("generic", {
        type: "generic",
        message: "Invalid Password",
      });
    } else if (update === false) {
      setError("generic", {
        type: "generic",
        message: "Failed to Update",
      });
    }
  }

  return (
    <>
      <div className="m10">
        <form className={`d-flex flex-column`} onSubmit={handleSubmit(submit)}>
          <div className={`${styles.Change}`}>
            <div>
              <h2 className={`my20`}>Change Personal Information</h2>
            </div>
            <div className={`d-flex flex-column`}>
              <label className="mb5" htmlFor="username">
                Username :
              </label>
              <input
                className={`my20 p20 ${styles.Username}`}
                type="text"
                id="username"
                placeholder={`${username}`}
                {...register("username")}
              />
              {errors?.username && <p>{errors.username.message}</p>}
              <label className="mb5" htmlFor="email">
                Email :
              </label>
              <input
                className={`my20 p20 ${styles.Email}`}
                type="email"
                id="email"
                placeholder={`${email}`}
                {...register("email")}
              />
              {errors?.email && <p>{errors.email.message}</p>}
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
              </div>
            </div>
          </div>
          {errors.generic && (
            <p className="form-error">{errors.generic.message}</p>
          )}
          <div className={`d-flex justify-content-end ${styles.Btn}`}>
            <NavLink to={"/content/profil"}>
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
