import styles from "./Product.module.scss";
import { useLoaderData } from "react-router-dom";

export default function Product() {
  const component = useLoaderData();
  console.log(component);
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
          <button className="btn btn-primary">Compare</button>
        </div>
        <div>
          <span className={`${styles.Warning}`}>&#9888;</span>
        </div>
      </div>
      <div className={`d-flex justify-content-between ${styles.Spec}`}>
        <div
          className={`spec flex-fill d-flex flex-column justify-content-start ml10 mr10 ${styles.InnerSpec}`}
        >
          <ul>
            <li>Brand : {component[0].CPUbrand}</li>
            <li>Release Date : {component[0].CPUreleaseDate}</li>
            <li>Price : {component[0].CPUprice}</li>
            <li>Lithography : {component[0].CPUlithograph}</li>
            <li>Core : {component[0].CPUcoreCount}</li>
            <li>Thread : {component[0].CPUthreadCount}</li>
            <li>Clock Speed : {component[0].CPUclockSpeed} gHz</li>
            <li>Max Clock Speed : {component[0].CPUmaxClockSpeed} gHz</li>
            <li>Cache : {component[0].CPUcache}</li>
            <li>Bus : {component[0].CPUbus}</li>
            <li>TDP : {component[0].CPUmaxTDP}</li>
            <li>Max Memory : {component[0].CPUmaxMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
            <li>Memory Type : {component[0].CPUtypeMemory}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
