const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

export async function fetchCakes(params = {}) {
  const url = new URL((BASE_URL + "/cakes").replace(/\/$/, ""));
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, v);
  });
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to load cakes");
  return res.json();
}

export async function fetchCake(slug) {
  const url = (BASE_URL + "/cakes/" + slug).replace(/\/$/, "");
  const res = await fetch(url);
  if (!res.ok) throw new Error("Cake not found");
  return res.json();
}
