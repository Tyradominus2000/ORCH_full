export async function AppLoader() {
  const response = await fetch("https://backend-zuaq.onrender.com/GetComponent");
  const result = await response.json();
  return result;
}

