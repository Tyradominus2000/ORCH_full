import { redirect } from "react-router-dom";

export async function LoginLoader() {
  const Logged = document.cookie;
  console.log("cookie : " + Logged);
  if (Logged) {
    return redirect("/content/profil");
  } else {
    return true;
  }
}
