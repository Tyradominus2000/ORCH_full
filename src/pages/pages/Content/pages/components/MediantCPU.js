import styles from "./Styles.module.scss";

export default function MediantCPU({ component, component2 }) {
  return (
    <ul
      className={`d-flex flex-column justify-content-center align-items-center ${styles.MediantCPU}`}
    >
      <h2>Comparator</h2>
      <br />
      <br />
      <li>
        {component[0].CPUprice > component2[0].CPUprice
          ? ">"
          : component[0].CPUprice < component2[0].CPUprice
          ? "<"
          : "="}
      </li>
      <br />
      <hr />
      <li>
        <h2>Specification</h2>
      </li>
      <br />
      <br />
      <li>
        {component[0].CPUcoreCount > component2[0].CPUcoreCount
          ? ">"
          : component[0].CPUcoreCount < component2[0].CPUcoreCount
          ? "<"
          : "="}
      </li>
      <li>
        {component[0].CPUthreadCount > component2[0].CPUthreadCount
          ? ">"
          : component[0].CPUthreadCount < component2[0].CPUthreadCount
          ? "<"
          : "="}
      </li>
      <li>
        {component[0].CPUmaxTDP > component2[0].CPUmaxTDP
          ? ">"
          : component[0].CPUmaxTDP < component2[0].CPUmaxTDP
          ? "<"
          : "="}
      </li>
      <li>
        {component[0].CPUmaxTemp > component2[0].CPUmaxTemp
          ? ">"
          : component[0].CPUmaxTemp < component2[0].CPUmaxTemp
          ? "<"
          : "="}
      </li>
      <hr />
      <li>
        <h2>Memory</h2>
      </li>
      <li className={` ${styles.MemoryType}`} />

      <li>
        {component[0].CPUmaxMemory > component2[0].CPUmaxMemory
          ? ">"
          : component[0].CPUmaxMemory < component2[0].CPUmaxMemory
          ? "<"
          : "="}
      </li>
      <li>
        {component[0].CPUnumberMemoryChannel >
        component2[0].CPUnumberMemoryChannel
          ? ">"
          : component[0].CPUnumberMemoryChannel <
            component2[0].CPUnumberMemoryChannel
          ? "<"
          : "="}
      </li>
      <li>
        {component[0].CPUmaxMemoryBandwidth.replace("GB/s", "") >
        component2[0].CPUmaxMemoryBandwidth.replace("GB/s", "")
          ? ">"
          : component[0].CPUmaxMemoryBandwidth.replace("GB/s", "") <
            component2[0].CPUmaxMemoryBandwidth.replace("GB/s", "")
          ? "<"
          : "="}
      </li>
      <br />
      <hr />
      <li>
        <h2>Graphic</h2>
      </li>
      <br />
      <li>
        {component[0].CPUitgdGraphicFreq.replace("MHz", "") >
        component2[0].CPUitgdGraphicFreq.replace("MHz", "")
          ? ">"
          : component[0].CPUitgdGraphicFreq.replace("MHz", "") <
            component2[0].CPUitgdGraphicFreq.replace("MHz", "")
          ? "<"
          : "="}
      </li>
      <li>
        {component[0].CPUitgdGraphicMaxFreq &&
        component2[0].CPUitgdGraphicMaxFreq ? (
          component[0].CPUitgdGraphicMaxFreq.replace("MHz", "") >
          component2[0].CPUitgdGraphicMaxFreq.replace("MHz", "") ? (
            ">"
          ) : component[0].CPUitgdGraphicMaxFreq.replace("MHz", "") <
            component2[0].CPUitgdGraphicMaxFreq.replace("MHz", "") ? (
            "<"
          ) : (
            "="
          )
        ) : (
          <br />
        )}
      </li>
      <br />
      <br />
    </ul>
  );
}
