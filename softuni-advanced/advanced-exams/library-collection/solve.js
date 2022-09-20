class LibraryCollection {
    constructor (capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }    
    addBook (bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.'); 
        }  else {
            this.books.push({ bookName, bookAuthor, payed: false });
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    };
    payBook(bookName) {
        const book = this.books
        .find(x => x.bookName === bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        };
        if (book.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            book.payed = true;
            return `${book.bookName} has been successfully paid.`
        }
    };
    removeBook(bookName) {
        const book = this.books
        .find(x => x.bookName === bookName);
        if (!book) {
            throw Error("The book, you're looking for, is not found.");
        }
        if (!book.payed) {
            throw Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            const bookIndex = this.books.indexOf(book);
            this.books.splice(bookIndex, 1);
            return `${bookName} remove from the collection.`
        }
    };
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let res = '';
            const sortBooks = this.books
            .sort((a, b) => a.bookName.localeCompare(b.bookName));
            res += `The book collection has ${this.capacity - this.books.length } empty spots left.\n`
            sortBooks.map((book) => {
                let payed = book.payed ? 'Has Paid' : 'Not Paid';
                res += `${book.bookName} == ${book.bookAuthor} - ${payed}.\n`;
            });
            return `${res.trim()}`;
        } else {
            const book = this.books
            .find(x => x.bookAuthor === bookAuthor);
            if (book) {
                let res = '';
                let payed = book.payed ? 'Has Paid' : 'Not Paid';
                res += `${book.bookName} == ${book.bookAuthor} - ${payed}.\n`;
                return `${res.trim()}`;
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
    };
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


