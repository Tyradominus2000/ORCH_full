import { redirect } from "react-router-dom";

export async function ProfilLoader() {
  const obj = {};
  obj.id = localStorage.getItem("id");
  console.log(obj)
  const JsonValue = JSON.stringify(obj);
  const response = await fetch(`http://localhost:8000/GetUser`, {
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
}
