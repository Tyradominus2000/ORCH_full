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
