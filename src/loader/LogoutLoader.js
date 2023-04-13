import { redirect } from "react-router-dom";

export function LogoutLoader() {
  const Logged = localStorage.getItem("Logged");
  if (Logged) {
    localStorage.removeItem("Logged");
    localStorage.removeItem("id");
    return redirect("/content/login");
  } else {
    return redirect("/content/profil");
  }
}
