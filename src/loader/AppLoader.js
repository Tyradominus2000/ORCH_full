const { API_URL } = require("./api_url");

export async function AppLoader() {
  const response = await fetch(API_URL + "/GetComponent");
  const result = await response.json();
  console.log("AppLoader");
  return result;
}
