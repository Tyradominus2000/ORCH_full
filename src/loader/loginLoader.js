import { redirect } from "react-router-dom";

export async function loginLoader() {
  const Logged = localStorage.getItem("Logged");
  if (Logged) {
    return redirect("/content/profil");
  }
}
