import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/ApiContext";

export default function Header({ DATA_Component, User }) {
  const Logged = User;
  const URL_API = useContext(ApiContext);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [blur, setBlur] = useState(true);
  const location = useLocation();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handBlurOff = () => {
    setTimeout(() => {
      setBlur(false);
      setSearch("");
    }, 100);
  };
  const handBlurOn = () => {
    setBlur(true);
  };

  useEffect(() => {
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
    // console.log(result);
  }, [search, DATA_Component]);

  return (
    <>
      <div className={`d-flex flex-row ${styles.Header}`}>
        <NavLink to={"../"}>
          <img
            className={`d-flex ${styles.logo}`}
            src={URL_API + "/images/server/orchLogo.png"}
            alt="ORCH logo"
          />
        </NavLink>
        <div
          className={`d-flex flex-fill justify-content-between align-items-center`}
        >
          <div className={`d-flex flex-fill m10 mr5-100`}>
            {Logged ? (
              <NavLink to={"profil"}>
                <button
                  onClick={handBlurOff}
                  type="button"
                  className={`btn btn-primary m10`}
                >
                  Profils
                </button>
              </NavLink>
            ) : (
              <NavLink to={"login"}>
                <button
                  onClick={handBlurOff}
                  type="button"
                  className={`btn btn-primary m10`}
                >
                  Login
                </button>
              </NavLink>
            )}
            <NavLink to={"comparator"}>
              <button
                onClick={handBlurOff}
                type="button"
                className={`btn btn-primary m10`}
              >
                Comparateur
              </button>
            </NavLink>
            <NavLink to={"builder"}>
              <button
                onClick={handBlurOff}
                type="button"
                className={`btn btn-primary m10`}
              >
                Builder
              </button>
            </NavLink>
            <NavLink to={"leaderboard"}>
              <button
                onClick={handBlurOff}
                type="button"
                className={`btn btn-primary m10`}
              >
                LeaderBoard
              </button>
            </NavLink>
          </div>
          {location.pathname === "/content/search" ? (
            <></>
          ) : (
            <div className={`d-flex m10 ${styles.Container}`}>
              <form
                className={`d-flex flex-nowrap justify-conten-center align-items-center`}
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleChange}
                  onBlur={handBlurOff}
                  onFocus={handBlurOn}
                />
                <NavLink to={`/content/search?search=${search.toLowerCase()}`}>
                  <button
                    type="submit"
                    className={`fas fa-magnifying-glass ml10 mr10 btn-none`}
                    onClick={handBlurOff}
                  ></button>
                </NavLink>
                {blur && result.length > 0 && (
                  <div className={`${styles.ListContainer}`}>
                    <ul className={`${styles.List}`}>
                      {result.map((r, i) => (
                        <li key={i} className="ml10 my10 d-flex flex-nowrap">
                          <Link
                            onClick={handBlurOff}
                            className="d-flex flex-fill"
                            to={`/content/product?id=${r.idComponent}`}
                          >
                            <p className="ml10">{r.ComponentName}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
