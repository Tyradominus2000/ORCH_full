export default function Home({ handleClick }) {
  const Logged = localStorage.getItem("Logged");


  return (
    <>
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
        Go to Profil
      </button>
    </>
  );
}
