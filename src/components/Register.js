import styles from "./Register.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function Register({ submit, handleClick }) {
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

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();


  return (
    <>
      <div className="m10">
        <form
          className={`d-flex flex-column`}
          onSubmit={handleSubmit(submit)}
        >
          <div className={`${styles.Register}`}>
            <div>
              <h2 className={`my20`}>Register</h2>
            </div>
            <div className={`d-flex flex-column`}>
              <label className="mb5" htmlFor="username">
                Username :
              </label>
              <input
                className={`my20 p20 ${styles.Username}`}
                type="text"
                id="username"
                placeholder="Username"
                {...register("username", {
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
              {errors?.username && <p>{errors.username.message}</p>}
              <label className="mb5" htmlFor="email">
                Email :
              </label>
              <input
                className={`my20 p20 ${styles.Email}`}
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {
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
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "This field must not be empty",
                      },
                      validate: {
                        value: (value) =>
                          value === getValues("password") ||
                          "Password are not the same",
                      },
                    })}
                  />
                </div>
                {errors?.confirmPassword && (
                  <p>{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-end ${styles.Btn}`}>
            <button
              onClick={() => handleClick("LOGIN")}
              className={`m5 btn btn-primary-reverse`}
            >
              Cancel
            </button>
            <button className={`m5 btn btn-primary`}>Register</button>
          </div>
        </form>
      </div>
    </>
  );
}
