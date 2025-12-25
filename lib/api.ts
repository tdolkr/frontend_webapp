

//Calling the function known as api to fetch the path and the request
export async function api(path: string, options: RequestInit = {}) {
  //Response body
  const res = await fetch(`${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  });
  //Getting the data to check response
  const data = await res.json().catch(() => ({}));
  //Using the try and catch method to get the error
  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data;
}
