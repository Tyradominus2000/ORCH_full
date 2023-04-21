const { API_URL } = require("./api_url");

export async function SearchLoader({ request }) {
  // const queryString = window.location.search.replace("?search=", "");
  const queryParams = new URL(request.url).searchParams.get("search");
  switch (queryParams) {
    case "sort:cpu":
      const responseCPU = await fetch(`${API_URL}/CPU`);
      const resultCPU = await responseCPU.json();
      return resultCPU;
    case "sort:gpu":
      const responseGPU = await fetch(`${API_URL}/GPU`);
      const resultGPU = await responseGPU.json();
      return resultGPU;
    case "sort:mb":
      const responseMB = await fetch(`${API_URL}/MB`);
      const resultMB = await responseMB.json();
      return resultMB;
    default:
      console.log("Defaut");
      const responseDefault = await fetch(`${API_URL}/${queryParams}`);
      const resultDefault = await responseDefault.json();
      console.log(resultDefault);
      return resultDefault;
  }
}
