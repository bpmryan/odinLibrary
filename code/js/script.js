const myLibrary = [];

// constructors
function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the contructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

/**
 * take params
 * create a book then store it in the array
 * id createBook
 */
function addBookToLibrary() {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

const shelf = document.getElementById("shelf");

/**
 * Pipes in HTML for each book put into array
 * creates a div for each book in the array
 */
function displayBooks() {
  shelf.innerHTML = "";
  myLibrary.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("book", book.read ? "read" : "unread"); // reads form to see if the book has been read yet
    div.dataset.bookId = book.id;

    const h2 = document.createElement("h2");
    h2.textContent = book.title;

    const h3 = document.createElement("h3");
    h3.textContent = book.author;

    const p = document.createElement("p");
    p.textContent = `${book.pages} pages`;

    
  })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
})
