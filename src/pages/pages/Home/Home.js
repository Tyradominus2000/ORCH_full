import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";
import { useEffect } from "react";

export default function Home({ handleClick }) {
  const Logged = localStorage.getItem("Logged");

  return (
    <>
      <div
        className={`d-flex flex-column justify-content-center align-items-center`}
      >
        <img
          className={`${styles.logo} mb50`}
          src="images/server/orchlogohome.png"
          alt="ORCH logo"
        />

        <div className={`${styles.form} d-flex justify-content-evenly`}>
          <form>
            <input type="text" placeholder="Search" />
            <i className={`fas fa-magnifying-glass ml10 mr10`}></i>
          </form>
        </div>
        <div className={`d-flex justify-content-evenly my20`}>
          {Logged ? (
            <NavLink to={"content/profil"}>
              <button className={`btn btn-primary-home mr20 ml20`}>Profils</button>
            </NavLink>
          ) : (
            <NavLink to={"content/login"}>
              <button className={`btn btn-primary-home mr20 ml20`}>Profils</button>
            </NavLink>
          )}
          <NavLink to={"content/comparator"}>
            <button className={`btn btn-primary-home mr20 ml20`}>
              COMPARATOR
            </button>
          </NavLink>
          <NavLink to={"content/builder"}>
            <button className={`btn btn-primary-home mr20 ml20`}>
              BUILDER
            </button>
          </NavLink>
          <NavLink to={"content/leaderboard"}>
            <button className={`btn btn-primary-home mr20 ml20`}>
              LEADERBOARD
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
