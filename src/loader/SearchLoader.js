const { API_BackendURL } = require("../context/ApiURL");

export async function SearchLoader({ request }) {
  const queryParams = new URL(request.url).searchParams.get("search");
  switch (queryParams) {
    case "sort:cpu":
      const responseCPU = await fetch(`${API_BackendURL}/compo/GetComponent/CPU`);
      const resultCPU = await responseCPU.json();
      return resultCPU;
    case "sort:gpu":
      const responseGPU = await fetch(`${API_BackendURL}/compo/GetComponent/GPU`);
      const resultGPU = await responseGPU.json();
      return resultGPU;
    case "sort:mb":
      const responseMB = await fetch(`${API_BackendURL}/compo/GetComponent/MB`);
      const resultMB = await responseMB.json();
      return resultMB;
    default:
      const responseDefault = await fetch(
        `${API_BackendURL}/compo/GetComponent/${queryParams}`
      );
      const resultDefault = await responseDefault.json();
      return resultDefault;
  }
}
