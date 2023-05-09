import { NavLink, useLoaderData } from "react-router-dom";
import styles from "./Report.module.scss";

export default function Report() {
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
        </div>
      </div>
      <div
        className={`d-flex justify-content-between ${styles.Container} my10`}
      >
        <input type="text" placeholder="Description of the Problem" />
      </div>
      <div className="d-flex justify-content-between">
        <input type="file" />
        <div>
          <NavLink to={`/content/product?id=${component[0].idComponent}`}>
            <button type="button" className="btn btn-primary-reverse">
              Cancel
            </button>
          </NavLink>
          <button className="ml10 btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
}
