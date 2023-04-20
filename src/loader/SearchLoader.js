export async function SearchLoader({request}) {
  // const queryString = window.location.search.replace("?search=", "");
  const queryParams = new URL(request.url).searchParams.get("search");
  switch (queryParams) {
    case "sort:cpu":
      const responseCPU = await fetch(`http://localhost:8000/GetComponent/CPU`);
      const resultCPU = await responseCPU.json();
      return resultCPU;
    case "sort:gpu":
      const responseGPU = await fetch(`http://localhost:8000/GetComponent/GPU`);
      const resultGPU = await responseGPU.json();
      return resultGPU;

    case "sort:mb":
      const responseMB = await fetch(`http://localhost:8000/GetComponent/MB`);
      const resultMB = await responseMB.json();
      return resultMB;
    default:
      console.log("Defaut");
  }

  return false;
}
