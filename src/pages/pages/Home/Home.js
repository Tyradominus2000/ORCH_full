import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../context/ApiContext";
import { article } from "../../../assets/data/article";

export default function Home({ handleClick }) {
  const URL_API = useContext(ApiContext);
  const Logged = localStorage.getItem("Logged");
  const articles = article;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [blur, setBlur] = useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handBlur = () => {
    setBlur(false);
  };

  useEffect(() => {
    console.log(search);
    if (search !== "") {
      const filteredArticles = articles.filter((articles) =>
        articles.title.toLowerCase().startsWith(search.toLowerCase())
      );
      setResult(filteredArticles);
    } else {
      setResult([]);
    }
    setBlur(true);
    console.log(result);
  }, [search, articles]);

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
            <div className={`${styles.Form} d-flex justify-content-evenly`}>
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleChange}
                  onBlur={handBlur}
                />
                <button type="submit" className={`fas fa-magnifying-glass ml10 mr10 btn-none`}></button>
              </form>
            </div>
            {blur && result.length > 0 && (
              <div className={`${styles.ListContainer}`}>
                <ul>
                  {result.map((r, i) => (
                    <li className="ml10" key={i}>
                      {r.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={`d-flex justify-content-evenly my20 ${styles.BtnContainer}`}
          >
            {Logged ? (
              <NavLink to={"content/profil"}>
                <button type="button" className={`btn btn-primary-home mr20 ml20`}>
                  PROFIL
                </button>
              </NavLink>
            ) : (
              <NavLink to={"content/login"}>
                <button type="button" className={`btn btn-primary-home mr20 ml20`}>
                  PROFIL
                </button>
              </NavLink>
            )}
            <NavLink to={"content/comparator"}>
              <button type="button" className={`btn btn-primary-home mr20 ml20`}>
                COMPARATOR
              </button>
            </NavLink>
            <NavLink to={"content/builder"}>
              <button type="button" className={`btn btn-primary-home mr20 ml20`}>
                BUILDER
              </button>
            </NavLink>
            <NavLink to={"content/leaderboard"}>
              <button type="button" className={`btn btn-primary-home mr20 ml20`}>
                LEADERBOARD
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
