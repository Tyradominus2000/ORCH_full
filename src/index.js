import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApiBackEndContext, ApiContext } from "./context/ApiContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiBackEndContext.Provider value={"https://backend-zuaq.onrender.com"}>
      <ApiContext.Provider value={window.location.origin}>
        <RouterProvider router={router}></RouterProvider>
      </ApiContext.Provider>
    </ApiBackEndContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
