import styles from "./App.module.scss";
import ReactGA from "react-ga4";
import { Suspense, useEffect, useRef } from "react";

import Footer from "./components/Footer/Footer";

import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import FetchProvider from "./components/FetchProvider/FetchProvider";

function App() {
  const DATA = useLoaderData();
  const location = useLocation();
  const DATA_Component = DATA.Component;
  const User = DATA.User;

  ReactGA.initialize("G-9ERCN2TPHH");

  // GA on location change
  useEffect(() => {
    console.log("Change location");
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: "ORCH",
    });
  }, [location]);

  //GA every click
  useEffect(() => {
    window.onclick = () => {
      console.log(`You clicked Inside the box!`);
      ReactGA.event({ category: "General", action: "click" });
    };
  }, []);

  return (
    <>
      <FetchProvider>
        {location.pathname.length > 1 ? (
          <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Suspense fallback={<h1>Chargement ...</h1>}>
              <Outlet context={{ DATA_Component, User }} />
            </Suspense>
            <Footer />
          </div>
        ) : (
          <div className={`d-flex flex-column ${styles.appContainernoHeader}`}>
            <Suspense fallback={<h1>Chargement ...</h1>}>
              <Outlet context={{ DATA_Component, User }} />
            </Suspense>
            <Footer />
          </div>
        )}
      </FetchProvider>
    </>
  );
}

export default App;
