import styles from "./Comparator.module.scss";

export default function Comparator({ handleClick, handleFetch }) {
  return (
    <>
      <div
        className={`d-flex flex-column flex-fill ${styles.Comparator} align-items-center`}
      >
        <div className={`d-flex align-items-center`}>
          <div
            className={`d-flex justify-content-start align-items-center ${styles.ComparatorSelec}`}
          >
            <p className="ml10">Comparateur 1...</p>
          </div>
          <img
            className={`mr20 ml20 ${styles.ImgComparator}`}
            src="./images/server/compare.png"
            alt="compare"
          />
          <div
            className={`d-flex justify-content-start align-items-center ${styles.ComparatorSelec}`}
          >
            <p className="ml10">Comparateur 2...</p>
          </div>
        </div>
        <div className={`d-flex justify-content-between ${styles.Spec}`}>
          <div className={`flex-fill d-flex flex-column justify-content-start ml10 mr10 ${styles.InnerSpec}`}>
            <h2>Spec1</h2>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
            <p>blo</p>
          </div>
          <div className={`${styles.InnerSpec} ${styles.Mediant}`}>mediant</div>
          <div className={`flex-fill d-flex justify-content-start ml10 mr10 ${styles.InnerSpec}`}>
            <h3>Spec2</h3>
          </div>
        </div>
      </div>
    </>
  );
}
