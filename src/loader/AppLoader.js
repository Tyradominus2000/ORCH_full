export async function AppLoader() {
  const response = await fetch("http://192.168.0.26:8000/GetComponent");
  const result = await response.json();
  return result;
}

