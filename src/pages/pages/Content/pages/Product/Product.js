import styles from "./Product.module.scss";
import { Link, useLoaderData } from "react-router-dom";
import CPU from "../components/CPU";

export default function Product() {
  const component = useLoaderData();
  return (
    <div className="f-flex flex-fill flex-column ml10 mr10">
      <div
        className={`d-flex justify-content-between align-items-center ${styles.Title} my10`}
      >
        <div className="d-flex align-items-center justify-content-center">
          <img src={`${component[0].img}`} alt="product" />
          <button className="btn btn-primary ml10 mr10">
            {component[0].name}
          </button>
          <Link to={`/content/comparator?id=${component[0].idComponent}`}>
            <button className="btn btn-primary">Compare</button>
          </Link>
        </div>
        <Link to={`/content/report?id=${component[0].idComponent}`}>
          <div>
            <span className={`${styles.Warning}`}>&#9888;</span>
          </div>
        </Link>
      </div>
      <div className={`d-flex justify-content-between my10 ${styles.Spec}`}>
        <div
          className={`spec flex-fill d-flex flex-column justify-content-start ml10 mr10 ${styles.InnerSpec}`}
        >
          <ul className="mb10">
            <CPU component={component} />
          </ul>
        </div>
      </div>
    </div>
  );
}
