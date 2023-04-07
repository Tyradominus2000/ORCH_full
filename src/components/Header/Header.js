import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";

export default function Header({  }) {
  const URL_API = useContext(ApiContext)
  const Logged = localStorage.getItem("Logged");

  return (
    <>
      <div className={`d-flex flex-row  ${styles.Header}`}>
        <NavLink to={"../"}>
          <img
            className={`d-flex ${styles.logo}`}
            src={URL_API+"images/server/orchLogo.png"}
            alt="ORCH logo"
          />
        </NavLink>
        <div
          className={`d-flex flex-fill justify-content-between align-items-center`}
        >
          <div
            className={`d-flex flex-fill justify-content-evenly ml10 mr5-100`}
          >
            {Logged ? (
              <NavLink to={"profil"}>
                <button className={`btn btn-primary`}>Profils</button>
              </NavLink>
            ) : (
              <NavLink to={"login"}>
                <button className={`btn btn-primary`}>Profils</button>
              </NavLink>
            )}
            <NavLink to={"comparator"}>
              <button className={`btn btn-primary`}>Comparateur</button>
            </NavLink>
            <NavLink to={"builder"}>
              <button className={`btn btn-primary`}>Builder</button>
            </NavLink>
            <NavLink to={"leaderboard"}>
              <button className={`btn btn-primary`}>LeaderBoard</button>
            </NavLink>
          </div>
          <div className={`d-flex flex-nowrap m10`}>
            <form>
              <input type="text" placeholder="Search" />
              <i className={`fas fa-magnifying-glass ml10 mr10`}></i>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
