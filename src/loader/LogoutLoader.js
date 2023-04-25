import { redirect } from "react-router-dom";
import { API_BackendURL } from "../context/ApiURL";

export async function LogoutLoader() {
  const response = await fetch(API_BackendURL + "/Logout", {
    method: "DELETE",
    credentials: "include",
  });
  console.log(response);
  if (response.ok) {
    // window.location.reload();
    return redirect("/content/login");
  } else {
    throw new Error("Fail to Logout");
  }
}
