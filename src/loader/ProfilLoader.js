import { redirect } from "react-router-dom";

export async function ProfilLoader() {
  const obj = {};
  obj.id = localStorage.getItem("id");
  console.log(obj);
  if (obj.id) {
    const JsonValue = JSON.stringify(obj);
    const response = await fetch(`http://82.65.172.140:8000/GetUser`, {
      method: "POST",
      body: JsonValue,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      return redirect("/");
    }
  } else {
    return redirect("/content/login");
  }
}
