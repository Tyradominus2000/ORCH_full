const { API_BackendURL } = require("../context/ApiURL");

export async function ProductLoader({ request }) {
  const queryParams = new URL(request.url).searchParams.get("id");

  const responseDefault = await fetch(
    `${API_BackendURL}/compo/GetComponent/byId${queryParams}`
  );
  const resultDefault = await responseDefault.json();
  return resultDefault;
}
