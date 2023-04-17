import styles from "./Home.module.scss";
import { NavLink, useOutletContext } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../context/ApiContext";

export default function Home() {
  const { DATA_Component } = useOutletContext();
  const URL_API = useContext(ApiContext);
  const Logged = localStorage.getItem("Logged");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [blur, setBlur] = useState(false);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handBlurOff = () => {
    setBlur(false);
  };
  const handBlurOn = () => {
    setBlur(true);
  };

  useEffect(() => {
    console.log(search);
    if (
      search !== "" &&
      !(search.startsWith("sort:") || search.includes("sort:"))
    ) {
      const filteredArticles = DATA_Component.filter((Data_C) =>
        Data_C.ComponentName.toLowerCase()
          .replace("™", "")
          .startsWith(search.toLowerCase())
      );
      setResult(filteredArticles);
    } else if (search.startsWith("sort:") || search.includes("sort:")) {
      const filteredArticles = DATA_Component.filter(
        (Data_C) =>
          Data_C.ComponentType.toUpperCase() ===
          search.replace("sort:", "").toUpperCase()
      );
      setResult(filteredArticles);
    } else {
      setResult([]);
    }
    setBlur(true);
    // console.log({ result });
  }, [search, DATA_Component]);

  return (
    <>
      <div
        className={`d-flex flex-column justify-content-center align-items-center`}
      >
        <img
          className={`${styles.Logo} mb50`}
          src={URL_API + "/images/server/orchlogohome.png"}
          alt="ORCH logo"
        />
        <div className={`${styles.Container}`}>
          <div
            className={`d-flex ${styles.FormContainer} flex-column align-items-center justify-content-center`}
          >
            <div className={`d-flex justify-content-start`}>
              <div className={`${styles.Form} d-flex justify-content-evenly`}>
                <form>
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                    onBlur={handBlurOff}
                    onFocus={handBlurOn}
                  />
                  <NavLink to={`/content/search?${search}`}>
                    <button
                      type="submit"
                      className={`fas fa-magnifying-glass ml10 mr10 btn-none`}
                    ></button>
                  </NavLink>
                </form>
              </div>
              {blur && result.length > 0 && (
                <div className={`${styles.ListContainer} d-flex flex-fill`}>
                  <ul className={`${styles.List} flex-fill d-flex flex-column`}>
                    {result.map((r, i) => (
                      <li
                        className="ml10 my10 d-flex align-items-centers"
                        key={i}
                      >
                        <img
                          src={r.ComponentImage}
                          alt={`image of ` + r.ComponentName}
                        />
                        <p className="ml10">{r.ComponentName}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div
            className={`d-flex justify-content-evenly my20 ${styles.BtnContainer}`}
          >
            {Logged ? (
              <NavLink to={"content/profil"}>
                <button
                  type="button"
                  className={`btn btn-primary-home mr20 ml20`}
                >
                  PROFIL
                </button>
              </NavLink>
            ) : (
              <NavLink to={"content/login"}>
                <button
                  type="button"
                  className={`btn btn-primary-home mr20 ml20`}
                >
                  PROFIL
                </button>
              </NavLink>
            )}
            <NavLink to={"content/comparator"}>
              <button
                type="button"
                className={`btn btn-primary-home mr20 ml20`}
              >
                COMPARATOR
              </button>
            </NavLink>
            <NavLink to={"content/builder"}>
              <button
                type="button"
                className={`btn btn-primary-home mr20 ml20`}
              >
                BUILDER
              </button>
            </NavLink>
            <NavLink to={"content/leaderboard"}>
              <button
                type="button"
                className={`btn btn-primary-home mr20 ml20`}
              >
                LEADERBOARD
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
