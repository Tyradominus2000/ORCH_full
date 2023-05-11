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
    console.log(JsonValue);
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
    const obj = { value };
    const Jsonobj = JSON.stringify(obj);
    const JsonValue = JSON.stringify(value);
    console.log({ JsonValue });
    console.log({ Jsonobj });
    //Call Fetch
    switch (action) {
      case "AddUser":
        if (await FetchPost(action, JsonValue)) {
          navigate("content/login", { replace: true });
        } else {
          return false;
        }
        break;
      case "Signin":
        const VerifyUser = await FetchPost(action, JsonValue, true);
        console.log(VerifyUser);
        if (VerifyUser !== false) {
          navigate("content/profil", { replace: true });
          window.location.reload();
        } else {
          return false;
        }
        break;
      case "UploadPP":
        const UploadPP = await FetchPost(action, Jsonobj, true);
        return UploadPP;
      case "SendReport":
        const SendReport = await FetchPost(action, JsonValue);
        return SendReport;
      case "GetUserEmail":
        const GetUserEmail = await FetchPost(action, JsonValue);
        console.log(GetUserEmail);
        return GetUserEmail;
      case "Reset":
        const ResetPassword = await FetchPost(action, JsonValue);
        console.log(ResetPassword);
        return ResetPassword;
      case "GetUser":
        const GetUser = await FetchPost(action, Jsonobj);
        console.log(GetUser);
        return GetUser;
      case "UpdateUser":
        const UpdateUser = await FetchPost(action, JsonValue, true);
        if (UpdateUser === true) {
          navigate("content/profil", { replace: true });
        }
        return UpdateUser;
      case "UpdatePassword":
        const UpdatePassword = await FetchPost(action, JsonValue, true);
        if (UpdatePassword === true) {
          navigate("content/profil", { replace: true });
        }
        return UpdatePassword;
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
