import { NavLink, useOutletContext, useLoaderData } from "react-router-dom";
import { ApiBackEndContext, ApiContext } from "../../../context/ApiContext";
import styles from "./Profil.module.scss";
import { useContext, useEffect, useState } from "react";

export default function Profil() {
  const BACKEND_API = useContext(ApiBackEndContext);
  const USER_API = useContext(ApiContext);
  let infoUser = useLoaderData();
  let form;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  function getInfoUser() {
    console.log({ infoUser });
    setUsername(infoUser[0].Username);
    setEmail(infoUser[0].Useremail);
    console.log(username);
    console.log(email);
  }
  useEffect(() => {
    form = document.getElementById("image-form");
  }, [handleChange]);
  useEffect(() => {
    getInfoUser();
  }, []);
  function handleChange() {
    form.submit();
  }

  return (
    <>
      <div
        className={`${styles.Profil} d-flex flex-column justify-content-center`}
      >
        <div className="d-flex justify-content-between">
          <div
            className={`${styles.ProfilInfo} d-flex flex-fill justify-content-start`}
          >
            <div>
              <img
                className={``}
                src={`${USER_API}/images/server/pp.jpg`}
                alt="profile"
              />
              {/* <form
                id="image-form"
                action={`${BACKEND_API}/UploadPP`}
                method="post"
                enctype="multipart/form-data"
              >
                <input
                  type="file"
                  id="image-upload"
                  onChange={() => handleChange()}
                  name="image"
                  className="dnone"
                />
                <label htmlFor="image-upload">
                  <i
                    className={`d-flex justify-content-center fa-sharp fa-solid fa-pen ${styles.editContainer}`}
                    type="submit"
                  ></i>
                </label>
              </form> */}
            </div>
            <div className={`m5`}>
              <ul>
                <li>{username}</li>
                <hr />
                <li>{email}</li>
                <hr />
              </ul>
            </div>
          </div>
          <div className={`d-flex justify-content-end align-items-start`}>
            <NavLink to={"logout"}>
              <button className={`btn btn-error`}>Log out</button>
            </NavLink>
          </div>
        </div>
        <div className={`${styles.ProfilContent} my10`}>
          <p>Content Profiles</p>
        </div>
      </div>
    </>
  );
}
