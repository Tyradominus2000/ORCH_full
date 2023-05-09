import styles from "./App.module.scss";

import { Suspense } from "react";

import Footer from "./components/Footer/Footer";

import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import FetchProvider from "./components/FetchProvider/FetchProvider";

function App() {
  const DATA = useLoaderData();
  const location = useLocation();
  const DATA_Component = DATA.Component;
  const User = DATA.User;
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
