import styles from "./Content.module.scss";
import Home from "./Home";
import Profil from "./Profil";
import Login from "./Login";
import Register from "./Register.js";

export default function Content({ BtnClicked, location, handleFetch }) {
  function submit(values) {
    console.log(values);
    // if (action === "ADD") {
    //   handleFetch("AddUser", values);
    // } else if (action === "GET") {
    //   handleFetch("GetUser", values);
    // } else {
    //   throw errors;
    // }
  }

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
          src="./images/pub.png"
          alt="Publicité"
        ></img>
        {location === "HOME" ? <Home handleClick={handleClick} /> : <></>}
        {location === "PROFIL" ? <Profil handleClick={handleClick} /> : <></>}
        {location === "LOGIN" ? (
          <Login submit={submit} handleClick={handleClick} />
        ) : (
          <></>
        )}
        {location === "REGISTER" ? (
          <Register submit={submit} handleClick={handleClick} />
        ) : (
          <></>
        )}
        <img
          className={`flex-fill ${styles.Pub} mr2-100`}
          src="./images/pub.png"
          alt="Publicité"
        ></img>
      </div>
    </>
  );
}
