import { redirect } from "react-router-dom";

export async function ContentLoader() {
  const location = window.location.pathname;
  if (location === "/content" || location === "/content/") {
    return redirect("/");
  } else {
    return true;
  }
}
