const { API_BackendURL } = require("../context/ApiURL");

export async function SearchLoader({ request }) {
  // const queryString = window.location.search.replace("?search=", "");
  const queryParams = new URL(request.url).searchParams.get("search");
  switch (queryParams) {
    case "sort:cpu":
      const responseCPU = await fetch(`${API_BackendURL}/GetComponent/CPU`);
      const resultCPU = await responseCPU.json();
      return resultCPU;
    case "sort:gpu":
      const responseGPU = await fetch(`${API_BackendURL}/GetComponent/GPU`);
      const resultGPU = await responseGPU.json();
      return resultGPU;
    case "sort:mb":
      const responseMB = await fetch(`${API_BackendURL}/GetComponent/MB`);
      const resultMB = await responseMB.json();
      return resultMB;
    default:
      console.log("Defaut");
      const responseDefault = await fetch(
        `${API_BackendURL}/GetComponent/${queryParams}`
      );
      const resultDefault = await responseDefault.json();
      console.log(resultDefault);
      return resultDefault;
  }
}
