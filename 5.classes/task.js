class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";

    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

class Library {
    constructor(name = "", books = []) {
        this.name = name;
        this.books = books;
    }

    findBookBy = function (type, value) {
        let book = this.books.find(item => item[type] == value);
        if (book !== undefined) {
            return book;
        } else {
            return null;
        }
    }
    giveBookByName = function (bookName) {
        const findBookIndex = this.books.findIndex(item => item.name === bookName);

        if (findBookIndex === -1) {
            return null;
        }
        return this.books.splice(findBookIndex, 1)[0];
    }
}

Library.prototype.addBook = function (book) {
    if (book.state > 30) {
        this.books.push(book);
    }
}
