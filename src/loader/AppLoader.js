const { API_BackendURL } = require("../context/ApiURL");

export async function AppLoader() {
  const response = await fetch(API_BackendURL + "/compo/GetComponent");
  const responseAuth = await fetch(API_BackendURL + "/users/Auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const resultAuth = await responseAuth.json();
  const result = await response.json();

  const obj = { Component: result, User: resultAuth };

  return obj;
}
