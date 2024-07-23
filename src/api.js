//API
async function pullBook(book) {
  const url = `https://www.loc.gov/search/?digitized=true&q=${book}&fo=json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  const data = await res.json();

  console.log(data.results);
}
