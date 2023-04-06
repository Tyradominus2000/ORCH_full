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
        <div className={`d-flex flex-column align-items-center`}>
          <div
            className={`d-flex justify-content-start align-items-center ${styles.Search}`}
          >
            <p className="ml10">Recherhe..</p>
          </div>
          <div className={`flex-fill d-flex flex-column justify-content-start ml10 mr10 ${styles.Spec}`}>
            <div>CPU</div>
            <div>GPU</div>
            <div>AUtre</div>
          </div>
        </div>
        <div className={`d-flex flex-column`}>
          <div className={`d-flex justify-content-center align-items-center ${styles.Price}`}>prix</div>
          <div>perf</div>
        </div>
      </div>
    </>
  );
}
