import { redirect } from "react-router-dom";
const { API_BackendURL } = require("../context/ApiURL");

export async function LoginLoader() {
  const responseAuth = await fetch(API_BackendURL + "/Auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (await responseAuth.json() !== false) {
    return redirect("/content/profil");
  } else {
    return true;
  }
}
