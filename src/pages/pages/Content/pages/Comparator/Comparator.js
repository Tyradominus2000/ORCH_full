import { useContext, useEffect, useState } from "react";
import styles from "./Comparator.module.scss";
import { ApiContext } from "../../../../../context/ApiContext";
import { useLoaderData, useOutletContext } from "react-router-dom";
import CPU from "../components/CPU";
import { API_BackendURL } from "../../../../../context/ApiURL";
import MediantCPU from "../components/MediantCPU";

export default function Comparator() {
  const componentLoader = useLoaderData();
  const URL_API = useContext(ApiContext);
  //Search useState
  const { DATA_Component } = useOutletContext();
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  //Result useState
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);
  // //Component useState
  const [component, setComponent] = useState("");
  const [component2, setComponent2] = useState("");

  const [blur, setBlur] = useState(true);
  const [blur2, setBlur2] = useState(true);

  const handBlurOff = () => {
    setTimeout(() => {
      setBlur(false);
      setSearch("");
    }, 100);
  };
  const handBlurOn = () => {
    setBlur(true);
  };

  const handBlurOff2 = () => {
    setTimeout(() => {
      setBlur2(false);
      setSearch2("");
    }, 100);
  };
  const handBlurOn2 = () => {
    setBlur(true);
  };

  useEffect(() => {
    setComponent(componentLoader);
    console.log(component);
  }, [componentLoader]);

  useEffect(() => {
    const parent = document.querySelector(".spec");
    const child = document.querySelector(".mediant");
    child.style.height = parent.scrollHeight + "px";

    const searchInput = document.getElementById("search_1");
    const searchInput2 = document.getElementById("search_2");

    //Set the result for the first search
    if (search !== "") {
      searchInput.classList.remove("dnone");
      const filtered = DATA_Component.filter((Data_C) =>
        Data_C.ComponentName.toLowerCase()
          .replace("™", "")
          .startsWith(search.toLowerCase())
      );
      console.log(filtered);
      setResult(filtered);
    } else {
      searchInput.classList.add("dnone");
    }
    //Set the result for the second search
    if (search2 !== "") {
      searchInput2.classList.remove("dnone");
      const filtered2 = DATA_Component.filter((Data_C) =>
        Data_C.ComponentName.toLowerCase()
          .replace("™", "")
          .startsWith(search2.toLowerCase())
      );
      setResult2(filtered2);
    } else {
      searchInput2.classList.add("dnone");
    }
  }, [DATA_Component, search, search2]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleChange2 = (event) => {
    setSearch2(event.target.value);
  };

  async function handleClick(id, set) {
    const response = await fetch(
      `${API_BackendURL}/compo/GetComponent/byId${id}`
    );
    if (response.ok) {
      const responseFromComponent = await response.json();
      if (set === 1) {
        setComponent(responseFromComponent);
      } else {
        setComponent2(responseFromComponent);
      }
    }
  }

  return (
    <div
      className={`d-flex flex-column flex-fill ${styles.Comparator} align-items-center`}
    >
      <div
        className={`d-flex align-items-center justify-content-center ${styles.ContainerTitle}`}
      >
        <div className={`d-flex flex-column flex-fill`}>
          <div
            className={`d-flex flex-fill justify-content-start align-items-center ${styles.ComparatorSelec}`}
          >
            <input
              type="text"
              placeholder="Product 1"
              onChange={handleChange}
              onBlur={handBlurOff}
              onFocus={handBlurOn}
            />
            {component ? (
              <img
                src={component[0].img}
                alt={component[0].name}
                className="ml10"
              />
            ) : (
              <></>
            )}
          </div>
          <div className={`${styles.Container}`}>
            <div
              className={`${styles.ListContainer} d-flex flex-fill justify-content-center my30`}
              id="search_1"
            >
              <ul className={`${styles.List} flex-fill d-flex flex-column`}>
                {blur ? (
                  result.length ? (
                    result.map((r, i) => (
                      <li
                        className={`ml10 my10 d-flex align-items-centers ${styles.InnerList}`}
                        key={r.idComponent}
                        onClick={() => handleClick(r.idComponent, 1)}
                      >
                        <p className="ml10">{r.ComponentName}</p>
                      </li>
                    ))
                  ) : (
                    <li className="d-flex justify-content-center align-items-center flex-fill">
                      <p className={`${styles.Noresult}`}>Pas de résulat</p>
                    </li>
                  )
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="m10">
          <img
            className={`mr20 ml20 ${styles.ImgComparator}`}
            src={URL_API + "/images/server/compare.png"}
            alt="compare"
            id="compare"
          />
        </div>
        <div className="d-flex flex-column flex-fil">
          <div
            className={`d-flex justify-content-start align-items-center flex-fill ${styles.ComparatorSelec}`}
          >
            <input
              type="text"
              placeholder="Product 2"
              onChange={handleChange2}
              onBlur={handBlurOff2}
              onFocus={handBlurOn2}
            />
            {component2 ? (
              <img
                src={component2[0].img}
                alt={component2[0].name}
                className="ml10"
              />
            ) : (
              <></>
            )}
          </div>
          <div className={`${styles.Container}`}>
            <div
              className={`${styles.ListContainer} d-flex flex-fill justify-content-center my30`}
              id="search_2"
            >
              <ul className={`${styles.List} flex-fill d-flex flex-column`}>
                {blur2 ? (
                  result2.length ? (
                    result2.map((r, i) => (
                      <li
                        className={`ml10 my10 d-flex align-items-centers ${styles.InnerList}`}
                        key={r.idComponent}
                        onClick={() => handleClick(r.idComponent, 2)}
                      >
                        <p className="ml10">{r.ComponentName}</p>
                      </li>
                    ))
                  ) : (
                    <li className="d-flex justify-content-center align-items-center flex-fill">
                      <p className={`${styles.noResult}`}>Pas de résulat</p>
                    </li>
                  )
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`d-flex justify-content-around ${styles.Spec}`}>
        <div
          className={`spec flex-fill d-flex flex-column justify-content-start ml10 mr10 ${styles.InnerSpec}`}
        >
          <ul>
            {component ? (
              <CPU component={component} />
            ) : (
              <>No Component Selected</>
            )}
          </ul>
        </div>
        <div className={`mediant ${styles.Mediant}`}>
          {component && component2 ? (
            <MediantCPU component={component} component2={component2} />
          ) : (
            <>Select an other composant</>
          )}
        </div>
        <div
          className={`mediant flex-fill d-flex justify-content-start ml10 mr10 ${styles.InnerSpec}`}
        >
          <ul>
            {component2 ? (
              <CPU component={component2} />
            ) : (
              <>No Component Selected</>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
