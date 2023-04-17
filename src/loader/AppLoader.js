export async function AppLoader() {
  const response = await fetch("http://localhost:8000/GetComponent");
  const result = await response.json();
  return result;
}

