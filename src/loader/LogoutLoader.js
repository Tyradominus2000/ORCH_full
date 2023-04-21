import { redirect } from "react-router-dom";

export function LogoutLoader() {
  if (true) {
    localStorage.removeItem("Logged");
    localStorage.removeItem("id");
    return redirect("/content/login");
  } else {
    return redirect("/content/profil");
  }
}
