import { useNavigate } from "react-router-dom";
import { FetchContext } from "../../context/FetchContext";
import { useContext } from "react";
import { ApiBackEndContext } from "../../context/ApiContext";

export default function FetchProvider({ children }) {
  const navigate = useNavigate();
  const BACKEND_API = useContext(ApiBackEndContext);

  //Function that handle all the backend call using the methode POST
  async function FetchPost(action, JsonValue, credential) {
    let response;
    if (!credential) {
      response = await fetch(`${BACKEND_API}/${action}`, {
        method: "POST",
        body: JsonValue,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      response = await fetch(`${BACKEND_API}/${action}`, {
        method: "POST",
        body: JsonValue,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    }
    if (response.ok) {
      const responseFromBackEnd = await response.json();
      console.log({ responseFromBackEnd });
      return responseFromBackEnd;
    } else {
      throw new Error(`Something when wrong with ${action}`);
    }
  }

  //Function intermediate between the child and the FetchPost
  async function handleFetch(action, value) {
    console.log({ value });
    //Stringify the value/object
    const JsonValue = JSON.stringify(value);
    console.log({ JsonValue });
    //Call Fetch
    switch (action) {
      case "AddUser":
        if (await FetchPost(action, JsonValue)) {
          navigate("content/login", { replace: true });
        } else {
          return null;
        }
        break;
      case "Signin":
        const VerifyUser = await FetchPost(action, JsonValue, true);
        console.log(VerifyUser);
        if (VerifyUser) {
          navigate("content/profil", { replace: true });
          window.location.reload();
        } else {
          return null;
        }
        break;
      case "UploadPP":
        const UploadPP = await FetchPost(action, JsonValue);
        console.log(UploadPP);
        break;
      case "GetUserEmail":
        const GetUserEmail = await FetchPost(action, JsonValue);
        console.log(GetUserEmail);
        return GetUserEmail;
      default:
        console.log("error");
    }
  }

  return (
    <FetchContext.Provider value={{ FetchPost, handleFetch }}>
      {children}
    </FetchContext.Provider>
  );
}
