import styles from "./App.module.scss";

import { useContext, useState } from "react";

import Content from "./pages/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ApiContext } from "./context/ApiContext";

function App() {
  const [actualLocation, setActualLocation] = useState("HOME");
  const USER_API = useContext(ApiContext);
  const stateUserLogged = localStorage.getItem("Logged");
  console.log(actualLocation);
  //Make sure that a logged user can go to the Login and Register content
  if (stateUserLogged && actualLocation === "LOGIN") {
    setActualLocation("PROFIL");
  }
  if (stateUserLogged && actualLocation === "REGISTER") {
    setActualLocation("PROFIL");
  }
  //Function that get when an header button is click and change the variable actualLocation
  //This variable is send to Header and content to change their aspect if needed
  function BtnLocationClicked(value) {
    console.log({ value });
    switch (value) {
      case "HOME":
        if (actualLocation !== value) {
          setActualLocation(value);
        }
        break;
      case "PROFIL":
        if (actualLocation !== value) {
          setActualLocation(value);
        }
        break;
      case "LOGIN":
        if (actualLocation !== value) {
          setActualLocation(value);
        }
        break;
      case "REGISTER":
        if (actualLocation !== value) {
          setActualLocation(value);
        }
        break;
      case "COMPARATOR":
        if (actualLocation !== value) {
          setActualLocation(value);
        }
        break;
      case "BUILDER":
        if (actualLocation !== value) {
          setActualLocation(value);
        }
        break;
      case "LEADERBOARD":
        if (actualLocation !== value) {
          setActualLocation(value);
        }
        break;
      case "LOGOUT":
        localStorage.removeItem("Logged");
        setActualLocation("LOGIN");
        break;
      default:
        console.log("error");
        return "error";
    }
  }
  //Function that handle all the backend call
  async function FetchPost(action, JsonValue) {
    const response = await fetch(`${USER_API}/${action}`, {
      method: "POST",
      body: JsonValue,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseFromBackEnd = await response.json();
    console.log({ responseFromBackEnd });

    return responseFromBackEnd;
  }
  //Function interm
  async function handleFetch(action, value) {
    const JsonValue = JSON.stringify(value);
    switch (action) {
      case "AddUser":
        if (await FetchPost(action, JsonValue)) {
          alert("User added");
          setActualLocation("PROFIL");
        } else {
          alert("Error User already exist");
        }
        break;

      case "GetUser":
        if (await FetchPost(action, JsonValue)) {
          alert("Logged in !!!");
          localStorage.setItem("Logged", true);
          setActualLocation("PROFIL");
        } else {
          alert("Error User don't exist");
        }
        break;

      default:
        console.log("error");
    }
  }

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      {actualLocation !== "HOME" ? (
        <Header BtnClicked={BtnLocationClicked} location={actualLocation} />
      ) : (
        <></>
      )}
      <Content
        BtnClicked={BtnLocationClicked}
        location={actualLocation}
        handleFetch={handleFetch}
      />
      <Footer />
    </div>
  );
}

export default App;
