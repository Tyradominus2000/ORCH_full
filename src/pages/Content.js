import styles from "./Content.module.scss";
import Home from "./pages/Home/Home";
import Profil from "./pages/Profil/Profil";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Comparator from "./pages/Comparator/Comparator";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Content({ BtnClicked, location, handleFetch }) {
  //Function that handleClick and Send it to the Parent function BtnClicked in App.js
  function handleClick(value) {
    console.log(value);
    BtnClicked(value);
  }

  return (
    <>
      <Header />
      <div
        className={`d-flex flex-fill flex-row flex-warp justify-content-between align-items-center ${styles.Content}`}
      >
        <img
          className={`flex-fill ${styles.Pub} ml2-100`}
          src="http://localhost:3000/images/server/pub.png"
          alt="Publicité"
        ></img>
        <Outlet />
        <img
          className={`flex-fill ${styles.Pub} mr2-100`}
          src="http://localhost:3000/images/server/pub.png"
          alt="Publicité"
        ></img>
      </div>
    </>
  );
}
