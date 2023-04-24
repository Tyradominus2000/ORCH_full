import { redirect } from "react-router-dom";

export async function RegisterLoader() {
  const Logged = document.cookie.token;
  if (Logged) {
    return redirect("/content/profil");
  } else {
    return true;
  }
}
