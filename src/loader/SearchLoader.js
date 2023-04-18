import { useSearchParams } from "react-router-dom";

export async function SearchLoader() {
  const [searchparam] = useSearchParams();
  const param = searchparam.get("search");

  const response = await fetch(`http://localhost:8000/GetComponent`);
  const result = await response.json();
}
