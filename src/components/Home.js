export default function Home({ handleClick }) {
  return (
    <>
      <button
        onClick={() => handleClick("PROFIL")}
        className={`btn btn-primary`}
      >
        Go to Profil
      </button>
    </>
  );
}
