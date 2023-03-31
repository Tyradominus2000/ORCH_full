import styles from "./Profil.module.scss";
import { useEffect, useState } from "react";

export default function Profil({ handleClick, handleFetch }) {
  const idUser = localStorage.getItem("id");
  let infoUser;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  async function getInfoUser() {
    infoUser = await handleFetch("GetUser", idUser);
    console.log({ infoUser });
    console.log(infoUser[0]);
    console.log(infoUser[0].id);
    setUsername(infoUser[0].name);
    setEmail(infoUser[0].email);
  }
  getInfoUser();
  console.log("render");
  return (
    <>
      <div
        className={`${styles.Profil} d-flex flex-column justify-content-center`}
      >
        <div className="d-flex justify-content-between">
          <div
            className={`${styles.ProfilInfo} d-flex flex-fill justify-content-start`}
          >
            <img src="./images/server/pp.jpg" alt="profile" />
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
            <button
              onClick={() => handleClick("LOGOUT")}
              className={`btn btn-error`}
            >
              Log out
            </button>
          </div>
        </div>
        <div className={`${styles.ProfilContent} my10`}>
          <p>Content Profiles</p>
        </div>
        {/* <button
          onClick={() => handleClick("LOGIN")}
          className={`btn btn-primary`}
        >
          Go to login my Dude
        </button> */}
      </div>
    </>
  );
}
