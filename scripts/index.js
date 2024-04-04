const myLibrary = [];

function Book(author, title, sales, read_status) {
    this.author = author;
    this.title = title;
    this.sales = sales;
    this.readed_status = read_status;
}

function addBookToLibrary() {
  // do stuff here
}

let book1 = new Book("J.K. Rowling", "Harry Potter and the Philosopher's Stone", ">500 million", true);
let book2 = new Book("George Orwell", "1984", ">50 million", false);
let book3 = new Book("J.R.R. Tolkien", "The Lord of the Rings", ">150 million", true);
let book4 = new Book("Agatha Christie", "And Then There Were None", ">100 million", false);
let book5 = new Book("Dan Brown", "The Da Vinci Code", ">80 million", false);


myLibrary.push(book1,book2,book3,book4,book5)
console.log(myLibrary)

