import { redirect } from "react-router-dom";

export async function ProfilLoader() {
  const Logged = document.cookie.token;
  if (!Logged) {
    return redirect("/content/login");
  } else {
    return true;
  }
}
