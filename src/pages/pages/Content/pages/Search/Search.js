import {
  useSearchParams,
  useOutletContext,
  useLoaderData,
} from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import { API_BackendURL } from "../../../../../context/ApiURL";

export default function Search() {
  const [searchparam] = useSearchParams();
  const param = searchparam.get("search");
  const [search, setSearch] = useState("");
  const [displaysearch, setDisplaySearch] = useState("");
  const [result, setResult] = useState([]);
  const { DATA_Component } = useOutletContext();
  const [SearchComponent, setSearchComponent] = useState(useLoaderData());
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
  }, [param]);

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
          setSearchComponent("");
        }
      }
    }
    handleSearch();
  }, [DATA_Component, displaysearch, search, selectedValue]);

  function getComponentSpec(id, attribute) {
    for (const component of SearchComponent) {
      if (component.idComponent === id) {
        return component[attribute];
      }
    }
  }

  //Handle When the Select change
  const handleSelect = async (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value === "reset") {
      setSelectedValue("");
      setSearch("");
    }
    const response = await fetch(
      API_BackendURL + "/GetComponent/" + event.target.value.toUpperCase()
    );
    const responseBackEnd = await response.json();
    setSearchComponent(responseBackEnd);
    setSearch("");
    setDisplaySearch("");
  };
  //Handle the change in the input
  const handleChange = (event) => {
    setSearch(event.target.value);
    setDisplaySearch(event.target.value);
  };
  //Handle when the input is submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(API_BackendURL + "/GetComponent/" + search);
    const responseBackEnd = await response.json();
    setSearchComponent(responseBackEnd);
  };

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center mr10 ml10 ${styles.Search}`}
    >
      <div className={`d-flex`}>
        <form
          className={`d-flex flex-nowrap justify-conten-center align-items-center`}
          onSubmit={handleSubmit}
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
                    {r.ComponentType === "CPU" ? (
                      <>
                        <li>
                          <h1>{r.ComponentName}</h1>
                        </li>
                        <li>
                          <h2>General Information</h2>
                        </li>
                        <li>
                          Brand :{" "}
                          <>{getComponentSpec(r.idComponent, "CPUbrand")}</>
                        </li>
                        <li>
                          Release Date :{" "}
                          <>
                            {getComponentSpec(r.idComponent, "CPUreleaseDate")}
                          </>
                        </li>
                        <li>
                          Price :{" "}
                          <>{getComponentSpec(r.idComponent, "CPUprice")}</>
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
                          <>
                            {getComponentSpec(r.idComponent, "CPUlithograph")}
                          </>
                        </li>
                        <li>
                          Socket :{" "}
                          <>{getComponentSpec(r.idComponent, "CPUSockets")}</>
                        </li>
                        <li>
                          Number Of Core :{" "}
                          <>{getComponentSpec(r.idComponent, "CPUcoreCount")}</>
                        </li>
                        <li>
                          Number Of Thread :{" "}
                          <>
                            {getComponentSpec(r.idComponent, "CPUthreadCount")}
                          </>
                        </li>
                        <li>
                          TDP :{" "}
                          <>{getComponentSpec(r.idComponent, "CPUmaxTDP")}</>
                        </li>
                        <li>
                          Max Temp :{" "}
                          <>{getComponentSpec(r.idComponent, "CPUmaxTemp")}</>
                        </li>
                        <li>
                          <h2>Memory</h2>
                        </li>
                        <li>
                          Memory Type :{" "}
                          <>
                            {getComponentSpec(r.idComponent, "CPUtypeMemory")}
                          </>
                        </li>
                        <li>
                          Max Memory :{" "}
                          <>{getComponentSpec(r.idComponent, "CPUmaxMemory")}</>
                        </li>
                        <li>
                          Memory Channels :{" "}
                          <>
                            {getComponentSpec(
                              r.idComponent,
                              "CPUnumberMemoryChannel"
                            )}
                          </>
                        </li>
                        <li>
                          Memory Bandwidth :{" "}
                          <>
                            {getComponentSpec(
                              r.idComponent,
                              "CPUmaxMemoryBandwidth"
                            )}
                          </>
                        </li>
                        <li>
                          Support ECC :{" "}
                          <>
                            {getComponentSpec(
                              r.idComponent,
                              "CPUsupportECCMemory"
                            ) === 0 ? (
                              "No"
                            ) : (
                              <></>
                            )}
                          </>
                        </li>
                        <li>
                          <h2>Graphic</h2>
                        </li>
                        <li>
                          Graphic Name :{" "}
                          <>
                            {getComponentSpec(r.idComponent, "CPUitgdGraphic")}
                          </>
                        </li>
                        <li>
                          Graphic Freq :{" "}
                          <>
                            {getComponentSpec(
                              r.idComponent,
                              "CPUitgdGraphicFreq"
                            )}
                          </>
                        </li>
                        <li>
                          Graphic Max Freq :{" "}
                          <>
                            {getComponentSpec(
                              r.idComponent,
                              "CPUitgdGraphicMaxFreq"
                            )}
                          </>
                        </li>
                        <li>
                          Graphic Memory :{" "}
                          <>
                            {getComponentSpec(
                              r.idComponent,
                              "CPUitgdGraphicMaxMemory"
                            )}
                          </>
                        </li>
                        <li>
                          Support 4k :{" "}
                          <>
                            {getComponentSpec(
                              r.idComponent,
                              "CPUitgdGraphicSupport4K"
                            )}
                          </>
                        </li>
                      </>
                    ) : (
                      <></>
                    )}
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
