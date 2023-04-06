import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error/Error";
import Content from "../pages/Content";
import Login from "../pages/pages/Login/Login";
import Comparator from "../pages/pages/Comparator/Comparator";
import Profil from "../pages/pages/Profil/Profil";
import Register from "../pages/pages/Register/Register";
import Home from "../pages/pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path : "/",
        element: <Home />,
      },
      {
        path: "/content",
        element: <Content />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "profil",
            element: <Profil />,
          },
          {
            path: "comparator",
            element: <Comparator />,
          },
          {
            path: "builder",
            element: <></>,
          },
          {
            path: "leaderboard",
            element: <></>,
          },
        ],
      },
    ],
  },
]);
