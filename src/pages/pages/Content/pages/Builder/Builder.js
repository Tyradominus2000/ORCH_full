import { useEffect } from "react";
import styles from "./Builder.module.scss";

export default function Comparator({ handleClick, handleFetch }) {
  useEffect(() => {
    // const parent = document.querySelector("");
    // const child = document.querySelector("");
    // child.style.height = parent.scrollHeight + "px";
  }, []);

  return (
    <>
      <div className={`d-flex justify-content-evenly flex-fill`}>
        <div className={`d-flex flex-column align-items-center ml20`}>
          <div
            className={`d-flex justify-content-start align-items-center ${styles.Search}`}
          >
            <form>
              <input className={`${styles.InnerSearch}`} type="text" placeholder="Search" />
            </form>
          </div>
          <div
            className={`flex-fill d-flex flex-column justify-content-start ml10 mr10 ${styles.Compo}`}
          >
            <div
              className={`d-flex justify-content-start align-items-center ${styles.InnerCompo}`}
            >
              <h2 className="ml10">CPU</h2>
            </div>
            <div
              className={`d-flex justify-content-start align-items-center ${styles.InnerCompo}`}
            >
              <h2 className="ml10">GPU</h2>
            </div>
            <div
              className={`d-flex justify-content-start align-items-center ${styles.InnerCompo}`}
            >
              <h2 className="ml10">MotherBoard</h2>
            </div>
          </div>
        </div>
        <div className={`d-flex flex-column justify-content-center align-items-center ${styles.Stat}`}>
          <div
            className={`d-flex justify-content-center align-items-center ${styles.Price}`}
          >
            prix
          </div>
          <div className={`${styles.Perf}`}><p className="ml10">Stat</p></div>
        </div>
      </div>
    </>
  );
}
