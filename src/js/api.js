//API set up
let bookList = [];
const bookResults = document.getElementById('bookBox');
const bookBtn = document.getElementById('bookSearchButton');
let bookNum = 0;
let bookSearchResults = document.getElementById('bookBox');
//API
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
    //create elements for cards and add classes
    let newBook = document.createElement('div');
    newBook.classList.add('card', 'bg-light', 'mb-3');
    let bookImg = document.createElement('img');
    bookImg.classList.add('bookImg');
    let bookTitle = document.createElement('h3');
    bookTitle.classList.add('card-title', 'ms-3');
    let bookDescription = document.createElement('p');
    bookDescription.classList.add('card-text', 'mx-5');
    //check if LOC has img, if not add placeholder
    if (res.results[bookNum].image_url[0] == undefined) {
      bookImg.src = './imgs/book-app-icon.png';
      bookImg.classList.add('resultsIcon');
    } else {
      bookImg.src = res.results[bookNum].image_url[0];
    }
    bookTitle.innerHTML = `${res.results[bookNum].title} <br><small class="text-body-secondary">Call #:${res.results[bookNum].shelf_id}</small>`;
    bookDescription.innerHTML = `${res.results[bookNum].description} <a href="${res.results[bookNum].aka[0]}" target="_blank">Read More at LOC</a>`;
    //build the card
    newBook.append(bookImg, bookTitle, bookDescription);
    //add card to list
    bookResults.appendChild(newBook);
    //increment to move to next result
    bookNum++;
  });
}
//Form submit
document.querySelector('#book-search-form').addEventListener('submit', (e) => {
  //block submit function
  e.preventDefault();
  //retrieve values
  let book = document.querySelector('#search-title').value;
  //check if results are present, if so, remove
  if (bookSearchResults.firstChild != null) {
    while (bookSearchResults.firstChild) {
      bookSearchResults.removeChild(bookSearchResults.firstChild);
    }
    bookList = [];
    bookNum = 0;
  }

  //check for book
  if (book === '') {
    alert('What are you looking for?');
  } else {
    pullBook(book);
    document.querySelector('#search-title').value = '';
  }
});
