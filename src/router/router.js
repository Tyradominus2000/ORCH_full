//Dependance
import { createBrowserRouter } from "react-router-dom";
//Element
import App from "../App";
import Home from "../pages/pages/Home/Home";
import Content from "../pages/pages/Content/Content";
import Login from "../pages/pages/Content/pages/Login/Login";
import Register from "../pages/pages/Content/pages/Register/Register";
import Profil from "../pages/pages/Content/pages/Profil/Profil";
import Comparator from "../pages/pages/Content/pages/Comparator/Comparator";
import Builder from "../pages/pages/Content/pages/Builder/Builder";
import Search from "../pages/pages/Content/pages/Search/Search";
import Logout from "../pages/pages/Content/pages/Profil/Logout/Logout";
import Reset from "../pages/pages/Content/pages/Reset/Reset";
import Change from "../pages/pages/Content/pages/Change/Change";
import Password from "../pages/pages/Content/pages/Password/Password";
import Error from "../pages/Error/Error";
import Report from "../pages/pages/Content/pages/Report/Report";
import Product from "../pages/pages/Content/pages/Product/Product";
//Loader
import { HomeLoader } from "../loader/HomeLoader";
import { LoginLoader } from "../loader/LoginLoader";
import { RegisterLoader } from "../loader/RegisterLoader";
import { ProfilLoader } from "../loader/ProfilLoader";
import { LogoutLoader } from "../loader/LogoutLoader";
import { AppLoader } from "../loader/AppLoader";
import { SearchLoader } from "../loader/SearchLoader";
import { ChangeLoader } from "../loader/ChangeLoader";
import { PasswordLoader } from "../loader/PasswordLoader";
import { ProductLoader } from "../loader/ProductLoader";
import { ContentLoader } from "../loader/ContentLoader";
import { ReportLoader } from "../loader/ReportLoader";
import { ComparatorLoader } from "../loader/ComparatorLoader";

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
        loader: ContentLoader,
        element: <Content />,
        children: [
          {
            path: "login",
            loader: LoginLoader,
            element: <Login />,
          },
          {
            path: "reset",
            element: <Reset />,
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
            path: "change",
            loader: ChangeLoader,
            element: <Change />,
          },
          {
            path: "password",
            loader: PasswordLoader,
            element: <Password />,
          },
          {
            path: "comparator/*",
            loader: ComparatorLoader,
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
          {
            path: "search/*",
            loader: SearchLoader,
            element: <Search />,
          },
          {
            path: "product/*",
            loader: ProductLoader,
            element: <Product />,
          },
          {
            path: "report/*",
            loader: ReportLoader,
            element: <Report />,
          },
        ],
      },
    ],
  },
]);
