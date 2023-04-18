import { useSearchParams } from "react-router-dom";

export async function SearchLoader() {
  const [searchparam] = useSearchParams();
  const param = searchparam.get("search");

  switch (param) {
    default:
      console.log("Defaut");
  }

  const response = await fetch(`http://localhost:8000/GetComponentSearch`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  return true;
}
