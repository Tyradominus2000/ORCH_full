import styles from "./App.module.scss";

import { useContext } from "react";

import Footer from "./components/Footer/Footer";
import { ApiBackEndContext, ApiContext } from "./context/ApiContext";
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom";

function App() {
  // const USER_API = useContext(ApiContext);
  const BACKEND_API = useContext(ApiBackEndContext);
  // const stateUserLogged = localStorage.getItem("Logged");
  const DATA_Compenent = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

  //Function that handle all the backend call using the methode POST
  async function FetchPost(action, JsonValue) {
    const response = await fetch(`${BACKEND_API}/${action}`, {
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
          navigate("content/profil", {replace: true})
        } else {
          alert("Error User already exist");
        }
        break;
      case "VerifyUser":
        const VerifyUser = await FetchPost(action, JsonValue);
        console.log(VerifyUser);
        if (VerifyUser.logged) {
          alert("Logged in !!!");
          navigate("content/profil", {replace: true})
          localStorage.setItem("Logged", true);
          localStorage.setItem("id", VerifyUser.id);
        } else if (VerifyUser.mdp) {
          alert("Invalid password");
        } else {
          alert("Error User don't exist");
        }
        break;
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

  return (
    <>
      {location.pathname.length > 1 ? (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
          <Outlet context={{ handleFetch, DATA_Compenent }} />
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
