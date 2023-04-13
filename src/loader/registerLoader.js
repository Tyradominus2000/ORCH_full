import { redirect } from "react-router-dom";

export async function RegisterLoader() {
  const Logged = localStorage.getItem("Logged");
  if (Logged) {
    return redirect("/content/profil");
  } else {
    return true;
  }
}
