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

Book.prototype.listBook = function () {
  this.read = !this.read;
};

function addBookToLibrary() {
  // take params
  // create a book then store it in the array
  // id createBook
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}
