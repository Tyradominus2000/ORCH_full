import styles from "./Profil.module.scss";
import { useEffect, useState } from "react";

export default function Profil({ handleClick, handleFetch }) {
  const idUser = localStorage.getItem("id");
  let infoUser;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  async function getInfoUser() {
    infoUser = await handleFetch("GetUser", idUser);
    setUsername(infoUser[0].name);
    setEmail(infoUser[0].email);
  }
  getInfoUser();
  let form;
  useEffect(() => {
    form = document.getElementById("image-form");
  }, [handleChange]);

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
              <img className={``} src="./images/server/pp.jpg" alt="profile" />
              <form
                id="image-form"
                action="your-upload-script.php"
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
                <label for="image-upload">
                  <i
                    className={`d-flex justify-content-center fa-sharp fa-solid fa-pen ${styles.editContainer}`}
                    type="submit"
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
      </div>
    </>
  );
}
