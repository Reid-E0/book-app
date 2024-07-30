//API
const bookList = [];
const bookResults = document.getElementById('bookBox');
const bookBtn = document.getElementById('bookSearchButton');
let bookNum = 0;

async function pullBook(book) {
  const rawRes = await fetch(
    `https://www.loc.gov/books/?digitized=true&q=${book}&fo=json&at=results`
  );
  if (!rawRes.ok) {
    throw new Error(`${rawRes.status}`);
  }
  let res = await rawRes.json();
  console.log(res);
  bookList.push(...res.results);
  bookList.forEach(() => {
    let newBook = document.createElement('div');
    newBook.classList.add('card', 'bg-light', 'mb-3');
    let bookImg = document.createElement('img');
    bookImg.classList.add('bookImg');
    let bookTitle = document.createElement('h3');
    bookTitle.classList.add('card-title', 'ms-3');
    let bookDescription = document.createElement('p');
    bookDescription.classList.add('card-text', 'mx-5');
    if (res.results[bookNum].image_url[0] == undefined) {
      bookImg.src = '../imgs/book-app-icon.png';
      bookImg.classList.add('resultsIcon');
    } else {
      bookImg.src = res.results[bookNum].image_url[0];
    }
    // bookImg.src = res.results[bookNum].image_url[0];
    bookTitle.innerHTML = `${res.results[bookNum].title} <br><small class="text-body-secondary">Call #:${res.results[bookNum].shelf_id}</small>`;
    bookDescription.innerHTML = `${res.results[bookNum].description} <a href="${res.results[bookNum].aka[0]}" target="_blank">Read More at LOC</a>`;
    newBook.append(bookImg, bookTitle, bookDescription);
    bookResults.appendChild(newBook);
    bookNum++;
  });
}
