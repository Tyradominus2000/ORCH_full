import { redirect } from "react-router-dom";

export async function registerLoader() {
  const Logged = localStorage.getItem("Logged");
  if (Logged) {
    return redirect("/content/profil");
  }
}
