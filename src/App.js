import styles from "./App.module.scss";

import { useContext, useEffect, useState } from "react";

import Content from "./pages/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ApiContext } from "./context/ApiContext";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const USER_API = useContext(ApiContext);
  const stateUserLogged = localStorage.getItem("Logged");
  const location = useLocation();
  useEffect(() => {
    console.log(location)
  }, [location]);



  function BtnLocationClicked(value) {
    // console.log({ value });
    // switch (value) {
    //   case "HOME":
    //     if (actualLocation !== value) {
    //       setActualLocation(value);
    //     }
    //     break;
    //   case "PROFIL":
    //     if (actualLocation !== value) {
    //       setActualLocation(value);
    //     }
    //     break;
    //   case "LOGIN":
    //     if (actualLocation !== value) {
    //       setActualLocation(value);
    //     }
    //     break;
    //   case "REGISTER":
    //     if (actualLocation !== value) {
    //       setActualLocation(value);
    //     }
    //     break;
    //   case "COMPARATOR":
    //     if (actualLocation !== value) {
    //       setActualLocation(value);
    //     }
    //     break;
    //   case "BUILDER":
    //     if (actualLocation !== value) {
    //       setActualLocation(value);
    //     }
    //     break;
    //   case "LEADERBOARD":
    //     if (actualLocation !== value) {
    //       setActualLocation(value);
    //     }
    //     break;
    //   case "LOGOUT":
    //     localStorage.removeItem("Logged");
    //     localStorage.removeItem("id");
    //     setActualLocation("LOGIN");
    //     break;
    //   default:
    //     console.log("error");
    //     return "error";
    // }
  }

  //Function that handle all the backend call using the methode POST
  async function FetchPost(action, JsonValue) {
    // const response = await fetch(`${USER_API}/${action}`, {
    //   method: "POST",
    //   body: JsonValue,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const responseFromBackEnd = await response.json();
    // console.log({ responseFromBackEnd });

    // return responseFromBackEnd;
  }
  //Function intermediate between the child and the FetchPost
  async function handleFetch(action, value) {
    // //Creat on obj if value isn't one
    // const obj = {};
    // obj.id = value;
    // console.log({ value });
    // //Stringify the value/object
    // const JsonValue = JSON.stringify(value);
    // const JsonObj = JSON.stringify(obj);
    // console.log({ JsonValue });
    // //Call Fetch
    // switch (action) {
    //   case "AddUser":
    //     if (await FetchPost(action, JsonValue)) {
    //       alert("User added");
    //       setActualLocation("PROFIL");
    //     } else {
    //       alert("Error User already exist");
    //     }
    //     break;

    //   case "VerifyUser":
    //     const VerifyUser = await FetchPost(action, JsonValue);
    //     console.log(VerifyUser);
    //     if (VerifyUser.logged) {
    //       alert("Logged in !!!");
    //       localStorage.setItem("Logged", true);
    //       localStorage.setItem("id", VerifyUser.id);
    //       setActualLocation("PROFIL");
    //     } else {
    //       alert("Error User don't exist");
    //     }
    //     break;

    //   case "GetUser":
    //     const GetUser = await FetchPost(action, JsonObj);
    //     console.log(GetUser);
    //     return GetUser;
    //   case "UploadPP":
    //     const UploadPP = await FetchPost(action, JsonValue);
    //     console.log(UploadPP);
    //     break;
    //   case "GetUserEmail":
    //     const GetUserEmail = await FetchPost(action, JsonValue);
    //     console.log(GetUserEmail);
    //     return GetUserEmail;
    //   default:
    //     console.log("error");
    // }
  }
  console.log('Domain:', window.location.origin);
  return (
    <>
      {location.pathname.length > 1 ? (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
          <Outlet />
          <Footer />
        </div>
      ) : (
        <div
          className={`d-flex flex-column ${styles.appContainernoHeader}`}
        >
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
