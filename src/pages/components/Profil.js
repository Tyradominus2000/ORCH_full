import styles from "./Profil.module.scss";

export default function Profil({ handleClick }) {
  return (
    <>
      <div
        className={`${styles.Profil} d-flex flex-column justify-content-center`}
      >
        <div className="d-flex justify-content-between">
          <div
            className={`${styles.ProfilInfo} d-flex flex-fill justify-content-start`}
          >
            <img src="./images/pp.jpg" alt="profile" />
            <div className={`m5`}>
              <ul>
                <li>Username</li>
                <hr />
                <li>Email</li>
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
