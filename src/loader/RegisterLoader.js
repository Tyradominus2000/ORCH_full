import { redirect } from "react-router-dom";

export async function RegisterLoader() {
  if (true) {
    return redirect("/content/profil");
  } else {
    return true;
  }
}
