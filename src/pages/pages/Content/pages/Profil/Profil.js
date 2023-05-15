import { NavLink, useOutletContext } from "react-router-dom";
import { ApiContext } from "../../../../../context/ApiContext";
import styles from "./Profil.module.scss";
import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../../../../../context/FetchContext";

export default function Profil() {
  const USER_API = useContext(ApiContext);
  const { handleFetch } = useContext(FetchContext);
  const { User } = useOutletContext();
  const [imagesrc, setImageSrc] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [imageSubmit, setImageSubmit] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    if (User[0].Userimage === null) {
      setImageSrc(`${USER_API}/images/server/pp.jpg`);
    } else {
      const uint8Array = new Uint8Array(User[0].Userimage.data);
      const blob = new Blob([uint8Array]);
      const urlImage = URL.createObjectURL(blob);
      fetch(urlImage)
        .then((response) => response.text())
        .then((text) => {
          setImageSrc(text);
        })
        .catch((error) => console.log(error));
    }
  }, [User, USER_API]);

  useEffect(() => {
    setImageSubmit(document.getElementById("image-upload"));
    setImage(document.getElementById("output"));

    function getInfoUser() {
      if (User) {
        setUsername(User[0].Username);
        setEmail(User[0].Useremail);
      } else {
        setUsername("Default Username");
        setEmail("Default Email");
      }
    }
    getInfoUser();
  }, [User, email, username]);

  if (imageSubmit !== undefined) {
    imageSubmit.addEventListener("change", handleFilesImage, false);
    function handleFilesImage() {
      const fileList = this.files; /* now you can work with the file list */
      console.log("in handle video");
      const reader = new FileReader();

      reader.onload = async function (event) {
        const imageData = event.target.result;
        console.log("in reader image");
        image.src = imageData;
        await handleFetch("UploadPP", imageData);
        console.log({ imageData });
      };

      reader.readAsDataURL(fileList[0]);
    }
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
              <div
                className={`${styles.ImgContainer} d-flex justify-content-center align-items-center`}
              >
                <img className={``} src={imagesrc} alt="profile" id="output" />
              </div>
              <form id="image-form">
                <input
                  type="file"
                  id="image-upload"
                  name="image"
                  className="dnone"
                  accept=".png,.jpeg,.jpg"
                />
                <label htmlFor="image-upload">
                  <i
                    id="image-submit"
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
