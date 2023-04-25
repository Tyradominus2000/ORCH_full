import styles from "./Content.module.scss";
import Header from "../../../components/Header/Header";
import { Outlet, useOutletContext } from "react-router-dom";
import { Suspense, useContext } from "react";
import { ApiContext } from "../../../context/ApiContext";

export default function Content() {
  const URL_API = useContext(ApiContext);
  const { DATA_Component } = useOutletContext();
  const { User } = useOutletContext();
  return (
    <>
      <Header DATA_Component={DATA_Component} User={User} />
      <div
        className={`d-flex flex-fill flex-row flex-warp justify-content-between align-items-center ${styles.Content}`}
      >
        <img
          className={`flex-fill ${styles.Pub} ml2-100`}
          src={URL_API + "/images/server/pub.png"}
          alt="Publicité"
        ></img>
        <Suspense fallback={<h1>Chargement ...</h1>}>
          <Outlet context={{ DATA_Component, User }} />
        </Suspense>
        <img
          className={`flex-fill ${styles.Pub} mr2-100`}
          src={URL_API + "/images/server/pub.png"}
          alt="Publicité"
        ></img>
      </div>
    </>
  );
}
