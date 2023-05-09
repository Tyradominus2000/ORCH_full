import { NavLink, useOutletContext } from "react-router-dom";
import { ApiContext } from "../../../../../context/ApiContext";
import styles from "./Profil.module.scss";
import { useContext, useEffect, useState } from "react";

export default function Profil() {
  const USER_API = useContext(ApiContext);
  const { User } = useOutletContext();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    function getInfoUser() {
      if (User) {
        console.log({ User });
        setUsername(User[0].Username);
        setEmail(User[0].Useremail);
        console.log(username);
        console.log(email);
      } else {
        setUsername("Default Username");
        setEmail("Default Email");
        console.log(username);
        console.log(email);
      }
    }
    getInfoUser();
  }, [User, email, username]);

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
                id="output"
              />
              <form id="image-form">
                <input
                  type="file"
                  id="image-upload"
                  name="image"
                  className="dnone"
                />
                <label htmlFor="image-upload">
                  <i
                    type="submit"
                    className={`d-flex justify-content-center fa-sharp fa-solid fa-pen ${styles.editContainer}`}
                  ></i>
                </label>
              </form>
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
          <div className="d-flex flex-column">
            <div
              className={`d-flex justify-content-end align-items-start mb10`}
            >
              <NavLink to={"logout"}>
                <button className={`btn btn-error`}>Log out</button>
              </NavLink>
            </div>
            <div
              className={`d-flex justify-content-end align-items-start mb10`}
            >
              <NavLink to={"/content/change"}>
                <button className={`btn btn-primary-reverse`}>
                  Change Info
                </button>
              </NavLink>
            </div>
            <div className={`d-flex justify-content-end align-items-start`}>
              <NavLink to={"/content/password"}>
                <button className={`btn btn-primary`}>Change Password</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={`${styles.ProfilContent} my10`}>
          <p>Content Profiles</p>
        </div>
      </div>
    </>
  );
}
