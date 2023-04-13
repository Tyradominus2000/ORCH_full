import styles from "./Content.module.scss";
import Header from "../components/Header/Header";
import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export default function Content() {
  const URL_API = useContext(ApiContext);
  const { handleFetch } = useOutletContext();

  return (
    <>
      <Header />
      <div
        className={`d-flex flex-fill flex-row flex-warp justify-content-between align-items-center ${styles.Content}`}
      >
        <img
          className={`flex-fill ${styles.Pub} ml2-100`}
          src={URL_API + "/images/server/pub.png"}
          alt="Publicité"
        ></img>
        <Outlet context={{ handleFetch }} />
        <img
          className={`flex-fill ${styles.Pub} mr2-100`}
          src={URL_API + "/images/server/pub.png"}
          alt="Publicité"
        ></img>
      </div>
    </>
  );
}
