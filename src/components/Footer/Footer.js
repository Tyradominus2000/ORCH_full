import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.Footer}`}>
      <h3>Copyright © ORCH 2023</h3>
    </div>
  );
}
