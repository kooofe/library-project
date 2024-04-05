const myLibrary = [];
const dialog = document.querySelector("dialog");
const container = document.querySelector(".main-container");

function Book(title, author, pages, read_status = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
}

Book.prototype.toggleRead = function() {
    this.read_status = !this.read_status;
};

function add_books_to_library(book) {
    let item = document.createElement("div");
    item.classList.add("book-item");

    let title = document.createElement('div');
    title.classList.add('book-info-item');
    title.textContent = book.title;

    let author = document.createElement('div');
    author.classList.add('book-info-item');
    author.textContent = book.author;

    let pages = document.createElement('div');
    pages.classList.add('book-info-item');
    pages.textContent = `${book.pages} pages`;

    let actions = document.createElement('div');
    actions.classList.add('book-actions');

    let readButton = document.createElement('button');
    readButton.type = 'button';
    readButton.textContent = book.read_status ? 'Read' : 'Unread';
    readButton.addEventListener('click', () => {
        book.toggleRead();
        readButton.textContent = book.read_status ? 'Read' : 'Unread';
    });

    let deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        const index = myLibrary.indexOf(book);
        if (index !== -1) {
            myLibrary.splice(index, 1);
            container.removeChild(item);
        }
    });

    actions.append(readButton, deleteButton);
    item.append(title, author, pages, actions);
    container.append(item);
}

const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const addBookForm = document.querySelector("form");

function handleBookSubmission(event) {
    event.preventDefault();

    const newBookData = new FormData(this);
    const {title, author, totalPages} = Object.fromEntries(newBookData);
    const newBook = new Book(title, author, +totalPages);

    myLibrary.push(newBook);
    add_books_to_library(newBook);
    dialog.close();
    event.target.reset();
}

addBookForm.addEventListener("submit", handleBookSubmission);

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

// Initial books
let book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "320");
let book2 = new Book("1984", "George Orwell", "328");
let book3 = new Book("The Lord of the Rings", "J.R.R. Tolkien", "1178");
let book4 = new Book("And Then There Were None", "Agatha Christie", "272");
let book5 = new Book("The Da Vinci Code", "Dan Brown", "489");

myLibrary.push(book1, book2, book3, book4, book5);
myLibrary.forEach(add_books_to_library);
