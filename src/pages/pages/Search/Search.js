import { useSearchParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Search.module.scss";

export default function Search() {
  const [searchparam] = useSearchParams();
  const param = searchparam.get("search");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const { DATA_Component } = useOutletContext();
  const [selectedValue, setSelectedValue] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    if (param) {
      setSearch(param);
    }
    console.log(param);
  }, []);
  useEffect(() => {
    console.log(search);
    if (search !== "") {
      const filteredArticles = DATA_Component.filter((Data_C) =>
        Data_C.ComponentName.toLowerCase()
          .replace("™", "")
          .startsWith(search.toLowerCase())
      );
      setResult(filteredArticles);
    } else {
      setResult([]);
    }
  }, [search]);

  function handleSelect(event) {
    setSelectedValue(event.target.value);
  }
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  function handleMouseEnter(index) {
    setHoveredItem(index);
  }
  function handleMouseLeave() {
    setHoveredItem(null);
  }

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
            value={search}
          />
        </form>
        <div>
          <select id="myDropdown" value={selectedValue} onChange={handleSelect}>
            <option value="" disabled>
              -- Please choose an option --
            </option>
            <option value="filter1">Option 1</option>
            <option value="filter2">Option 2</option>
            <option value="filter3">Option 3</option>
          </select>
        </div>
      </div>
      <div
        className={`${styles.ListContainer} d-flex flex-fill justify-content-center my30`}
      >
        <ul className={`${styles.List} flex-fill d-flex flex-column`}>
          {result.length ? (
            result.map((r, i) => (
              <>
                <li
                  className={`ml10 my10 d-flex align-items-centers ${styles.InnerList}`}
                  key={i}
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
                    </ul>
                  </div>
                </li>
              </>
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
