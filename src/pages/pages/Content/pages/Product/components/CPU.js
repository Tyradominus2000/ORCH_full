import styles from "../Product.module.scss";

export default function CPU({ component }) {
  return (
    <>
      <li>
        <h2>General Information</h2>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Brand :{" "}
        <>
          {component[0].CPUbrand === ""
            ? "Not Specified "
            : component[0].CPUbrand}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Release Date :{" "}
        <>
          {component[0].CPUreleaseDate === ""
            ? "Not Specified"
            : component[0].CPUreleaseDate}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Price :{" "}
        <>
          {component[0].CPUprice === 0
            ? "Not Specified"
            : component[0].CPUprice}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        CodeName :{" "}
        <>
          {component[0].CPUcodeName === ""
            ? "Not Specified"
            : component[0].CPUcodeName}
        </>
      </li>
      <hr />
      <li>
        <h2>Specification</h2>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Lithography :{" "}
        <>
          {component[0].CPUlithograph === ""
            ? "Not Specified"
            : component[0].CPUlithograph}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Socket :{" "}
        <>
          {component[0].CPUSockets === ""
            ? "Not Specified"
            : component[0].CPUSockets}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Number Of Core :{" "}
        <>
          {component[0].CPUcoreCount === 0
            ? "Not Specified"
            : component[0].CPUcoreCount}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Number Of Thread :{" "}
        <>
          {component[0].CPUthreadCount === 0
            ? "Not Specified"
            : component[0].CPUthreadCount}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        TDP :{" "}
        <>
          {component[0].CPUmaxTDP === 0
            ? "Not Specified"
            : component[0].CPUmaxTDP}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Max Temp (C°):{" "}
        <>
          {component[0].CPUmaxTemp === 0
            ? "Not Specified"
            : component[0].CPUmaxTemp}
        </>
      </li>
      <hr />
      <li>
        <h2>Memory</h2>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Memory Type :{" "}
        <>
          {component[0].CPUtypeMemory === ""
            ? "Not Specified"
            : component[0].CPUtypeMemory}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Max Memory :{" "}
        <>
          {component[0].CPUmaxMemory === ""
            ? "Not Specified"
            : component[0].CPUmaxMemory}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Memory Channels :{" "}
        <>
          {component[0].CPUnumberMemoryChannel === 0
            ? "Not Specified"
            : component[0].CPUnumberMemoryChannel}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Memory Bandwidth :{" "}
        <>
          {component[0].CPUmaxMemoryBandwidth === ""
            ? "Not Specified"
            : component[0].CPUmaxMemoryBandwidth}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Support ECC :{" "}
        <>{component[0].CPUsupportECCMemory === 0 ? "No" : <></>}</>
      </li>
      <hr />
      <li>
        <h2>Graphic</h2>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Graphic Name :{" "}
        <>
          {component[0].CPUitgdGraphic === ""
            ? "Not Specified"
            : component[0].CPUitgdGraphic}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Graphic Freq :{" "}
        <>
          {component[0].CPUitgdGraphicFreq === ""
            ? "Not Specified"
            : component[0].CPUitgdGraphicFreq}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Graphic Max Freq :{" "}
        <>
          {component[0].CPUitgdGraphicMaxFreq === 0
            ? "Not Specified"
            : component[0].CPUitgdGraphicMaxFreq}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Graphic Memory :{" "}
        <>
          {component[0].CPUitgdGraphicMaxMemory === 0
            ? "Not Specified"
            : component[0].CPUitgdGraphicMaxMemory}
        </>
      </li>
      <li className={`d-flex ${styles.InnerList}`}>
        Support 4k :{" "}
        <>
          {component[0].CPUitgdGraphicSupport4K === 0
            ? "Not Specified"
            : component[0].CPUitgdGraphicSupport4K}
        </>
      </li>
    </>
  );
}
