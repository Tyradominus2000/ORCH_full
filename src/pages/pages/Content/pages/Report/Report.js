import { NavLink, useLoaderData } from "react-router-dom";
import styles from "./Report.module.scss";
import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../../../../../context/FetchContext";

export default function Report() {
  const param = window.location.search;
  const { handleFetch } = useContext(FetchContext);

  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [submitvalue, setSubmitValue] = useState({ comment: text, file: file });

  const component = useLoaderData();

  const fetch = async (value) => {
    setFile(null);
    setText("");
    if (await handleFetch("SendReport", value)) {
      window.location.replace("/content/product" + param);
    } else {
      setError("Failed to send file");
    }
  };

  useEffect(() => {
    console.log(submitvalue);
    if (submitvalue.comment !== "") {
      fetch(submitvalue);
    }
     // eslint-disable-next-line
  }, [submitvalue]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (text === "") {
      setError("Field must not be empty");
    } else {
      if (file !== null) {
        //Get the File
        const reader = new FileReader();
        reader.onload = async function (event) {
          const file = event.target.result;
          setSubmitValue({ comment: text, file: file });
        };
        reader.readAsDataURL(file);
      } else {
        setSubmitValue({ comment: text });
      }
    }
  };
  return (
    <div className="d-flex flex-fill flex-column ml10 mr10 align-items-center">
      <div
        className={`d-flex flex-fill justify-content-center align-items-center ${styles.Title} my10`}
      >
        <div className="d-flex align-items-center justify-content-center">
          <img src={`${component[0].img}`} alt="product" />
          <button className="btn btn-primary ml10 mr10">
            {component[0].name}
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div
          className={`d-flex justify-content-between ${styles.Container} my10`}
        >
          <textarea
            type="text"
            placeholder="Description of the Problem"
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>{error ? <p className="form-error-light">{error}</p> : <></>}</div>
        <div
          className={`d-flex justify-content-between ${styles.BtnContainer}`}
        >
          <input
            type="file"
            accept=".zip"
            id="file"
            onChange={(event) => setFile(event.target.files[0])}
          />
          <div>
            <NavLink to={`/content/product?id=${component[0].idComponent}`}>
              <button type="button" className="btn btn-primary-reverse ml10">
                Cancel
              </button>
            </NavLink>
            <button type="submit" className="ml10 btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
