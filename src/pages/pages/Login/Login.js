import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";

export default function Login() {
  const { handleFetch } = useOutletContext();
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

  //If you click on the eye change the input password to text to be visible by user

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(values) {
    handleFetch("VerifyUser", values);
    console.log(values);
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
              <label className="mb5" htmlFor="mail">
                Email :
              </label>
              <input
                className={`my20 p20 ${styles.Email}`}
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  minLength: {
                    value: 3,
                    message: "Must have 3 charactere",
                  },
                  required: {
                    value: true,
                    message: "This field must not be empty",
                  },
                })}
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
                    {...register("password", {
                      required: {
                        value: true,
                        message: "This field must not be empty",
                      },
                    })}
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
          <div className={`d-flex justify-content-end ${styles.Btn}`}>
            <NavLink to={"../../"}>
              <button type="button" className={`m5 btn btn-primary-reverse`}>
                Cancel
              </button>
            </NavLink>
            <button className={`m5 btn btn-primary`}>Log in</button>
          </div>
        </form>
        <NavLink to={"../register"}>
          <div
            className={`p20 my30 d-flex justify-content-center align-items-center ${styles.Register}`}
          >
            <h2>Not Registered DO IT NOW !!!</h2>
          </div>
        </NavLink>
      </div>
    </>
  );
}
