import styles from "./Register.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register({ handleClick, handleFetch }) {
  const yupSchema = yup.object({
    username: yup.string().required("This field must not be empty"),
    email: yup
      .string()
      .email("Use a valid email")
      .required("This field must not be empty")
      .test("isYes", "User already exist", async (value) => {
        const response = handleFetch("GetUserEmail", yup.ref(value));
        return response;
      }),
    password: yup
      .string()
      .required("This field must not be empty")
      .min(3, "At least 3 charachter"),
    confirmPassword: yup
      .string()
      .required("You have to confirm your password")
      .oneOf([yup.ref("password"), null], "Password must be the same"),
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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
  });

  function submit(values) {
    handleFetch("AddUser", values);
    console.log(values);
  }

  return (
    <>
      <div className="m10">
        <form className={`d-flex flex-column`} onSubmit={handleSubmit(submit)}>
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
                placeholder="Email"
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
                  <p>{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-end ${styles.Btn}`}>
            <button
              type="button"
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
