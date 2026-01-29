const myLibrary = [];

function Book(title, author, pages) {
    // constructor
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the contructor");
    }
    /**
     * Contains information about book:
     * title
     * author
     * pages
     */
    this.title = title;
    this.author = author;
    this.pages = pages;

    // not sure if needed (test)
    this.listBook = function() {
        console.log(this.title)
    };
}

function addBookToLibrary() {
    // take params
    // create a book then store it in the array
    // id createBook

}