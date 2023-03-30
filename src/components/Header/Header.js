import styles from "./Header.module.scss";

export default function Header({ BtnClicked, location }) {
  const Logged = localStorage.getItem("Logged");

  function handleClick(value) {
    console.log({ location });
    console.log({ value });
    BtnClicked(value);
    console.log({ location });
  }

  return (
    <>
      <div className={`d-flex flex-row  ${styles.Header}`}>
        <img
          onClick={() => handleClick("HOME")}
          className={styles.logo}
          src="images/orchLogo.Png"
          alt="ORCH logo"
        />
        <div
          className={`d-flex flex-fill justify-content-between align-items-center`}
        >
          <div
            className={`d-flex flex-fill justify-content-evenly ml10 mr5-100`}
          >
            {location !== "PROFIL" ? (
              location !== "LOGIN" ? (
                location !== "REGISTER" ? (
                  <button
                    //to add condition if user is connected or not in the function
                    onClick={() => {
                      if (Logged === true) {
                        handleClick("PROFIL");
                      } else {
                        handleClick("LOGIN");
                      }
                    }}
                    className={`btn btn-primary`}
                  >
                    Profils
                  </button>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
            {location !== "COMPARATOR" ? (
              <button
                onClick={() => handleClick("COMPARATOR")}
                className={`btn btn-primary`}
              >
                Comparateur
              </button>
            ) : (
              <></>
            )}
            {location !== "BUILDER" ? (
              <button
                onClick={() => handleClick("BUILDER")}
                className={`btn btn-primary`}
              >
                Builder
              </button>
            ) : (
              <></>
            )}
            {location !== "LEADERBOARD" ? (
              <button
                onClick={() => handleClick("LEADERBOARD")}
                className={`btn btn-primary`}
              >
                LeaderBoard
              </button>
            ) : (
              <></>
            )}
          </div>
          <div className={`d-flex flex-nowrap m10`}>
            <form>
              <input type="text" placeholder="Search" />
              <i className={`fas fa-magnifying-glass ml10 mr10`}></i>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
