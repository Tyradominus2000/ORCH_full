import styles from "./Content.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export default function Content({ BtnClicked, location, handleFetch }) {
  const URL_API = useContext(ApiContext)
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
          src={URL_API+"/images/server/pub.png"}
          alt="Publicité"
        ></img>
        <Outlet />
        <img
          className={`flex-fill ${styles.Pub} mr2-100`}
          src={URL_API+"/images/server/pub.png"}
          alt="Publicité"
        ></img>
      </div>
    </>
  );
}
