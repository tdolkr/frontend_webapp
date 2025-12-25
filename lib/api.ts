const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function api(path: string, options: RequestInit = {}) {
  const url = /^https?:\/\//i.test(path) ? path : `${BASE_URL}${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    const message =
      typeof data?.message === "string"
        ? data.message
        : `Request failed (${response.status})`;
    throw new Error(message);
  }

  return response.json().catch(() => ({}));
}
