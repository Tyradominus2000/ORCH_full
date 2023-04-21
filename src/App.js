import styles from "./App.module.scss";

import { Suspense, useContext } from "react";

import Footer from "./components/Footer/Footer";
import { ApiBackEndContext, ApiContext } from "./context/ApiContext";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App() {
  const BACKEND_API = useContext(ApiBackEndContext);
  const DATA_Component = useLoaderData();
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
      throw new Error(`Something when wrong with ${action}`);
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
          // alert("User added");
          // navigate("content/profil", { replace: true });
        } else {
          // alert("Error User already exist");
        }
        break;
      case "Signin":
        const VerifyUser = await FetchPost(action, JsonValue);
        console.log(VerifyUser);
        if (VerifyUser) {
          // alert("Logged in !!!");
          console.log("Login");
          // navigate("content/profil", { replace: true });
        } else {
          console.log("Not login");
          // alert("Error User don't exist");
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
          <Suspense fallback={<h1>Chargement ...</h1>}>
            <Outlet context={{ handleFetch, DATA_Component }} />
          </Suspense>
          <Footer />
        </div>
      ) : (
        <div className={`d-flex flex-column ${styles.appContainernoHeader}`}>
          <Suspense fallback={<h1>Chargement ...</h1>}>
            <Outlet context={{ handleFetch, DATA_Component }} />
          </Suspense>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
