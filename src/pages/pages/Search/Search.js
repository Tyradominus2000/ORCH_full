import {
  useSearchParams,
  useOutletContext,
  useLoaderData,
} from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Search.module.scss";

export default function Search() {
  const [searchparam] = useSearchParams();
  const param = searchparam.get("search");
  const [search, setSearch] = useState("");
  const [displaysearch, setDisplaySearch] = useState("");
  const [result, setResult] = useState([]);
  const { DATA_Component } = useOutletContext();
  const SearchComponent = useLoaderData();
  const [selectedValue, setSelectedValue] = useState("");
  //First use effect only execute at the first render
  useEffect(() => {
    function handleParam() {
      if (param) {
        setSearch(param);
        if (!param.includes("sort:")) {
          setDisplaySearch(param);
        } else {
          setSelectedValue(param.replace("sort:", ""));
        }
      }
    }
    handleParam();
  }, []);
  //Handle all the change to search (probably need to make it a function and make it own file)
  useEffect(() => {
    function handleSearch() {
      if (selectedValue === "") {
        if (search !== "" && !search.includes("sort:")) {
          const filteredArticles = DATA_Component.filter((Data_C) =>
            Data_C.ComponentName.toLowerCase()
              .replace("™", "")
              .startsWith(search.toLowerCase())
          );
          setResult(filteredArticles);
        } else if (search.includes("sort:")) {
          const component = search.replace("sort:", "");
          const filteredArticles = DATA_Component.filter(
            (Data_C) =>
              Data_C.ComponentType.toUpperCase() === component.toUpperCase()
          );
          setResult(filteredArticles);
        } else {
          setResult([]);
        }
      } else {
        const filteredArticles = DATA_Component.filter(
          (Data_C) =>
            Data_C.ComponentType.toUpperCase() === selectedValue.toUpperCase()
        );
        if (displaysearch !== "") {
          const filteredArticlesSearch = filteredArticles.filter((Data_C) =>
            Data_C.ComponentName.toLowerCase()
              .replace("™", "")
              .startsWith(search.toLowerCase())
          );
          setResult(filteredArticlesSearch);
        } else {
          setResult(filteredArticles);
        }
      }
    }
    handleSearch();
  }, [search, selectedValue]);

  function getComponentSpec(id, attribute) {
    for (const component of SearchComponent) {
      if (component.idComponent === id) {
        return component[attribute];
      }
    }
  }

  function handleSelect(event) {
    setSelectedValue(event.target.value);
    if (event.target.value === "reset") {
      setSelectedValue("");
      setSearch("");
    }
  }
  const handleChange = (event) => {
    setSearch(event.target.value);
    setDisplaySearch(event.target.value);
  };

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center mr10 ml10`}
    >
      <div className={`d-flex`}>
        <form
          className={`d-flex flex-nowrap justify-conten-center align-items-center`}
        >
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={displaysearch}
          />
        </form>
        <div>
          <select id="myDropdown" value={selectedValue} onChange={handleSelect}>
            <option value="" disabled>
              -- Please choose an option --
            </option>
            <option value="cpu">CPU</option>
            <option value="gpu">GPU</option>
            <option value="mb">MotherBoard</option>
            <option value="reset">Reset</option>
          </select>
        </div>
      </div>
      <div
        className={`${styles.ListContainer} d-flex flex-fill justify-content-center my30`}
      >
        <ul className={`${styles.List} flex-fill d-flex flex-column`}>
          {result.length ? (
            result.map((r, i) => (
              <li
                className={`ml10 my10 d-flex align-items-centers ${styles.InnerList}`}
                key={r.idComponent}
              >
                <img
                  src={r.ComponentImage}
                  alt={`image of ` + r.ComponentName}
                />
                <p className="ml10">{r.ComponentName}</p>
                <div className={`${styles.ListSpec}`}>
                  <ul>
                    <li>
                      <h1>{r.ComponentName}</h1>
                    </li>
                    {/* Spec Principal */}
                    <li>
                      <h2>General Information</h2>
                    </li>
                    <li>
                      Brand : <>{getComponentSpec(r.idComponent, "CPUbrand")}</>
                    </li>
                    <li>
                      Release Date :{" "}
                      <>{getComponentSpec(r.idComponent, "CPUreleaseDate")}</>
                    </li>
                    <li>
                      Price : <>{getComponentSpec(r.idComponent, "CPUprice")}</>
                    </li>
                    <li>
                      CodeName :{" "}
                      <>{getComponentSpec(r.idComponent, "CPUcodeName")}</>
                    </li>
                    <li>
                      <h2>Specification</h2>
                    </li>
                    <li>
                      Lithography :{" "}
                      <>{getComponentSpec(r.idComponent, "CPUlithograph")}</>
                    </li>
                    <li>
                      Number Of Core :{" "}
                      <>{getComponentSpec(r.idComponent, "CPUcoreCount")}</>
                    </li>
                    <li>
                      Number Of Thread :
                      <>{getComponentSpec(r.idComponent, "CPUthreadCount")}</>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </li>
            ))
          ) : (
            <li className="d-flex justify-content-center align-items-center flex-fill">
              <p className={`${styles.Noresult}`}>Pas de résulat</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
