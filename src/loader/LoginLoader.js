import { redirect } from "react-router-dom";

export async function LoginLoader() {
  if (true) {
    return redirect("/content/profil");
  } else {
    return true;
  }
}
