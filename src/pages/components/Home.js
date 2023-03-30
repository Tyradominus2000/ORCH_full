import styles from "./Home.module.scss";

export default function Home({ handleClick }) {
  const Logged = localStorage.getItem("Logged");

  return (
    <>
      <div>
        <img
          className={styles.logo}
          src="images/orchLogo.Png"
          alt="ORCH logo"
        />
        <div>
          <form>
            <input type="text" placeholder="Search" />
            <i className={`fas fa-magnifying-glass ml10 mr10`}></i>
          </form>
        </div>
        <div>
          <button
            onClick={() => {
              if (Logged === true) {
                handleClick("PROFIL");
              } else {
                handleClick("LOGIN");
              }
            }}
            className={`btn btn-primary`}
          >
            PROFIL
          </button>
          <button
            onClick={() => handleClick("COMPARATOR")}
            className={`btn btn-primary`}
          >
            COMPARATOR
          </button>
          <button
            onClick={() => handleClick("BUILDER")}
            className={`btn btn-primary`}
          >
            BUILDER
          </button>
          <button
            onClick={() => handleClick("LEADERBOARD")}
            className={`btn btn-primary`}
          >
            LEADERBOARD
          </button>
        </div>
      </div>
    </>
  );
}
