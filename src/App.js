import { useState } from "react";
import styles from "./App.module.scss";

import Content from "./pages/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [actualLocation, setActualLocation] = useState("HOME");
  const stateUserLogged = localStorage.getItem("Logged");
  console.log(actualLocation);
  if (stateUserLogged && actualLocation === "LOGIN") {
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

  async function FetchPost(action, JsonValue) {
    const response = await fetch(`http://localhost:8000/${action}`, {
      method: "POST",
      body: JsonValue,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  }

  async function handleFetch(action, value) {
    const JsonValue = JSON.stringify(value);
    switch (action) {
      case "AddUser":
        if (FetchPost(action, JsonValue)) {
          alert("User added");
        } else {
          alert("Error User already exist");
        }
        break;

      case "GetUser":
        if (FetchPost(action, value)) {
          alert("Logged in !!!");
          localStorage.setItem("Logged", true);
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
