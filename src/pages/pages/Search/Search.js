import { useSearchParams } from "react-router-dom";

export default function Search() {
  const param = useSearchParams();

  return (
    <div>
      <h1>Search</h1>
      {param ? (
        <>
          <p>{param}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
