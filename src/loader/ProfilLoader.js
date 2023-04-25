import { redirect } from "react-router-dom";
const { API_BackendURL } = require("../context/ApiURL");

export async function ProfilLoader() {
  const responseAuth = await fetch(API_BackendURL + "/Auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (await responseAuth.json() === false) {
    return redirect("/content/login");
  } else {
    return true;
  }
}
