import styles from "./App.module.scss";

import { useContext, useEffect } from "react";

import Footer from "./components/Footer/Footer";
import { ApiContext } from "./context/ApiContext";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const USER_API = useContext(ApiContext);
  const stateUserLogged = localStorage.getItem("Logged");
  const location = useLocation();
  useEffect(() => {
    // console.log(location);
  }, [location]);

  //Function that handle all the backend call using the methode POST
  async function FetchPost(action, JsonValue) {
    const response = await fetch(`http://localhost:8000/${action}`, {
      method: "POST",
      body: JsonValue,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const responseFromBackEnd = await response.json();
      console.log({ responseFromBackEnd });
      return responseFromBackEnd;
    } else {
      return false;
    }
  }
  //Function intermediate between the child and the FetchPost
  async function handleFetch(action, value) {
    //Creat on obj if value isn't one
    const obj = {};
    obj.id = value;
    console.log({ value });
    //Stringify the value/object
    const JsonValue = JSON.stringify(value);
    const JsonObj = JSON.stringify(obj);
    console.log({ JsonValue });
    //Call Fetch
    switch (action) {
      case "AddUser":
        if (await FetchPost(action, JsonValue)) {
          alert("User added");
        } else {
          alert("Error User already exist");
        }
        break;
      case "VerifyUser":
        const VerifyUser = await FetchPost(action, JsonValue);
        console.log(VerifyUser);
        if (VerifyUser.logged) {
          alert("Logged in !!!");
          localStorage.setItem("Logged", true);
          localStorage.setItem("id", VerifyUser.id);
        } else if (VerifyUser.mdp) {
          alert("Invalid password");
        } else {
          alert("Error User don't exist");
        }
        break;
      case "GetUser":
        const GetUser = await FetchPost(action, JsonObj);
        console.log(GetUser);
        return GetUser;
      case "UploadPP":
        const UploadPP = await FetchPost(action, JsonValue);
        console.log(UploadPP);
        break;
      case "GetUserEmail":
        const GetUserEmail = await FetchPost(action, JsonValue);
        console.log(GetUserEmail);
        return GetUserEmail;
      default:
        console.log("error");
    }
  }
  console.log("Domain:", window.location.origin);
  return (
    <>
      {location.pathname.length > 1 ? (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
          <Outlet context={{ handleFetch }} />
          <Footer />
        </div>
      ) : (
        <div className={`d-flex flex-column ${styles.appContainernoHeader}`}>
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
