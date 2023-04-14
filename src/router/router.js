import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/pages/Home/Home";
import Content from "../pages/Content";
import Login from "../pages/pages/Login/Login";
import Register from "../pages/pages/Register/Register";
import Profil from "../pages/pages/Profil/Profil";
import Comparator from "../pages/pages/Comparator/Comparator";
import Builder from "../pages/pages/Builder/Builder";
import Logout from "../pages/pages/Logout/Logout";
import Error from "../pages/Error/Error";
import { HomeLoader } from "../loader/HomeLoader";
import { LoginLoader } from "../loader/LoginLoader";
import { RegisterLoader } from "../loader/RegisterLoader";
import { ProfilLoader } from "../loader/ProfilLoader";
import { LogoutLoader } from "../loader/LogoutLoader";
import { AppLoader } from "../loader/AppLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: AppLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: HomeLoader,
        element: <Home />,
      },
      {
        path: "/content",
        element: <Content />,
        children: [
          {
            path: "login",
            loader: LoginLoader,
            element: <Login />,
          },
          {
            path: "register",
            loader: RegisterLoader,
            element: <Register />,
          },
          {
            path: "profil",
            loader: ProfilLoader,
            element: <Profil />,
            children: [
              {
                path: "logout",
                loader: LogoutLoader,
                element: <Logout />,
              },
            ],
          },
          {
            path: "comparator",
            element: <Comparator />,
          },
          {
            path: "builder",
            element: <Builder />,
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
