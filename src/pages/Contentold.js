import styles from "./Content.module.scss";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Comparator from "./pages/Comparator";

export default function Content({ BtnClicked, location, handleFetch }) {
  //Function that handleClick and Send it to the Parent function BtnClicked in App.js
  function handleClick(value) {
    console.log(value);
    BtnClicked(value);
  }

  return (
    <>
      <div
        className={`d-flex flex-fill flex-row flex-warp justify-content-between align-items-center ${styles.Content}`}
      >
        <img
          className={`flex-fill ${styles.Pub} ml2-100`}
          src="./images/server/pub.png"
          alt="Publicité"
        ></img>
        {location === "HOME" ? <Home handleClick={handleClick} /> : <></>}
        {location === "PROFIL" ? (
          <Profil handleClick={handleClick} handleFetch={handleFetch} />
        ) : (
          <></>
        )}
        {location === "LOGIN" ? (
          <Login handleClick={handleClick} handleFetch={handleFetch} />
        ) : (
          <></>
        )}
        {location === "REGISTER" ? (
          <Register handleClick={handleClick} handleFetch={handleFetch} />
        ) : (
          <></>
        )}
        {location === "COMPARATOR" ? (
          <Comparator handleClick={handleClick} handleFetch={handleFetch} />
        ) : (
          <></>
        )}
        <img
          className={`flex-fill ${styles.Pub} mr2-100`}
          src="./images/server/pub.png"
          alt="Publicité"
        ></img>
      </div>
    </>
  );
}