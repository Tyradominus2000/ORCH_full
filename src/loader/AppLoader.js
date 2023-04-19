export async function AppLoader() {
  const response = await fetch("http://82.65.172.140:8000/GetComponent");
  const result = await response.json();
  return result;
}

