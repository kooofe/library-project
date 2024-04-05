const myLibrary = [];

function Book(title, author, pages, read_status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
}

function addBookToLibrary() {
    // do stuff here
}

let book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "320");
let book2 = new Book("1984", "George Orwell", "328");
let book3 = new Book("The Lord of the Rings", "J.R.R. Tolkien", "1178");
let book4 = new Book("And Then There Were None", "Agatha Christie", "272");
let book5 = new Book("The Da Vinci Code", "Dan Brown", "489");

myLibrary.push(book1, book2, book3, book4, book5)
console.log(myLibrary)

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

const container = document.querySelector(".main-container");
myLibrary.forEach(add_books_to_library)

function add_books_to_library(value){
    let item = document.createElement("div");
    item.classList.toggle("book-item");

    let title = document.createElement('div');
    title.classList.add('book-info-item');
    title.textContent = value.title;

    let author = document.createElement('div');
    author.classList.add('book-info-item');
    author.textContent = value.author;

    let pages = document.createElement('div');
    pages.classList.add('book-info-item');
    pages.textContent = `${value.pages} pages`;

    let actions = document.createElement('div');
    actions.classList.add('book-actions');

    let readButton = document.createElement('button');
    readButton.type = 'submit';
    readButton.textContent = 'Read';

    let deleteButton = document.createElement('button');
    deleteButton.type = 'submit';
    deleteButton.textContent = 'Delete';

    actions.append(readButton, deleteButton);

    item.append(title, author, pages, actions);

    container.append(item);
}