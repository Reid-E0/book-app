//API
const bookItem = [];
const bookBtn = document.getElementById('bookSearchButton');
async function pullBook(book) {
  const url = `https://www.loc.gov/search/?digitized=true&q=${book}&fo=json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  const data = await res.json();
  const bookImg = document.getElementById('bookImage');
  bookImg.src = data.results[0].image_url[0];
  const bookDescription = document.getElementById('bookResults');
  bookDescription.innerHTML = `<h3>${data.results[0].title}</h3><p>${data.results[0].description}</p>`;
  bookDescription.appendChild(bookImg);
}
