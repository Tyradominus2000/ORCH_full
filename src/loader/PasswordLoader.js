import { redirect } from "react-router-dom";
import { API_BackendURL } from "../context/ApiURL";

export async function PasswordLoader() {
  const token = getCookie("token");
  function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie[cookieName];
  }
  if (token) {
    const responseAuth = await fetch(API_BackendURL + "/users/Auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if ((await responseAuth.json()) === false) {
      return redirect("/content/login");
    } else {
      return true;
    }
  } else {
    return redirect("/content/login");
  }
}