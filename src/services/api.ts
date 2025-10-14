const API_URL = import.meta.env.VITE_API_URL;

async function loadCountries() {
  const url = `${API_URL}/api/countries`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error('Error al obtener datos');
  const data = await resp.json();
  return data;
}

async function scrapeCountries() {
  const url = `${API_URL}/scrape`;
  const resp = await fetch(url, { method: 'POST' });
  if (!resp.ok) throw new Error('Error al hacer scraping');
  const data = await resp.json();
  return data;
}

async function clearCountries() {
  const url = `${API_URL}/clear`;
  const resp = await fetch(url, { method: 'DELETE' });
  if (!resp.ok) throw new Error('Error al eliminar datos');
  const data = await resp.json();
  return data;
}

export { loadCountries, scrapeCountries, clearCountries };
