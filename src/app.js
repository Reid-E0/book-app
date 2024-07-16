//Book Class creates books
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI Class
class UI {
  static displayBooks() {
    const books = Storage.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }
  static deleteBook(x) {
    if (x.classList.contains('delete')) {
      x.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    //remove after 3 sec
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}
//Storage Class
class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Storage.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
//Diplay Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Add Books
document.querySelector('#book-form').addEventListener('submit', (e) => {
  //block submit function
  e.preventDefault();
  //retrieve values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  //validate submission
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill all form fields', 'danger');
  } else {
    //instatiate book class
    const book = new Book(title, author, isbn);
    //Add to List
    UI.addBookToList(book);
    //save to local storage
    Storage.addBook(book);
    //success msg
    UI.showAlert('Book Added', 'success');
    //reset form
    UI.clearFields();
  }
});
//Delete
document.querySelector('#book-list').addEventListener('click', (e) => {
  //Remove book from UI and Storage
  UI.deleteBook(e.target);
  Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);
  //removed msg
  UI.showAlert('Book Removed', 'danger');
});
//API

async function pullBook(book) {
  const url = `https://www.loc.gov/books/?q=${book}&fo=json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  const data = await res.json();
  console.log(data.results[0].item.title);
  console.log(data.results[0].item.contributors[0]);
  console.log(data.results[0].item.summary[0]);
}
