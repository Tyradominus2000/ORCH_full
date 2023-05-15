const { API_BackendURL } = require("../context/ApiURL");

export async function ComparatorLoader({ request }) {
  const queryParams = new URL(request.url).searchParams.get("id");
  console.log(queryParams);
  if (queryParams) {
    const response = await fetch(
      `${API_BackendURL}/compo/GetComponent/byId${queryParams}`
    );
    const responseFromComponent = await response.json();
    return responseFromComponent;
  } else {
    return false;
  }
}
