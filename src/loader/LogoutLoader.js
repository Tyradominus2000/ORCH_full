import { redirect } from "react-router-dom";

export function LogoutLoader() {
  const Logged = document.cookie;
  if (Logged) {
    return redirect("/content/login");
  } else {
    return redirect("/content/profil");
  }
}
