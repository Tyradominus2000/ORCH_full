import { redirect } from "react-router-dom";
const { API_BackendURL } = require("../context/ApiURL");

export async function RegisterLoader() {
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
    const responseAuth = await fetch(API_BackendURL + "/Auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if ((await responseAuth.json()) !== false) {
      return redirect("/content/profil");
    } else {
      return true;
    }
  } else {
    return true;
  }
}
