const Book = require('../models/book');
const fileReader = require('../modules/fileReader');

exports.index = (_, res) => {
    fileReader.findAllExistingBooks().then((books) => {
        res.json(books);
    }).catch((err) => {
        res.json("Error : Books not found -> " + err);
    });
}

exports.show = (req, res) => {
    fileReader.findAllExistingBooks().then((books) => {
        let id = +req.params.id;
        const book = books.find(x => x.id === id);
        if (book == undefined) {
            res.json("Error: book not found");
        } else {
            res.json(book);
        }
    }).catch((err) => {
        res.json("Error: Books not found -> " + err);
    })
}

exports.create = (req, res) => {
    fileReader.findAllExistingBooks().then((books) => {
        let lastid = Math.max.apply(Math, books.map((b) => { return b.id; }))

        const book_data = req.body;
        const book = new Book(++lastid, book_data.title, book_data.author, book_data.summary, book_data.type, book_data.publication_date);
        books.push(book);

        fileReader.writeBackAllBooks(books).then((mess) => {
            mess = mess + ", id : " + book.id;
            res.json(mess);
        });
    }).catch((err) => {
        console.log("Error reading file from disk:", err)
        return
    });
}

exports.update = (req, res) => {
    fileReader.findAllExistingBooks().then((books) => {
        const book_data = req.body;
        const id = +req.params.id;
        const new_book = new Book(id, book_data.title, book_data.author, book_data.summary, book_data.type, book_data.publication_date);

        const index = books.findIndex(x => x.id == id);
        books.splice(index, 1);
        books.push(new_book);

        fileReader.writeBackAllBooks(books).then((mess) => {
            res.json(mess);
        });
    }).catch((err) => {
        res.json("Error updating book : " + err);
    })
};

exports.delete = (req, res) => {
    fileReader.findAllExistingBooks().then((books) => {
        const id = +req.params.id;
        const index = books.findIndex(x => x.id == id);
        books.splice(index, 1);

        fileReader.writeBackAllBooks(books).then((mess) => {
            res.json(mess);
        });
    }).catch((err) => {
        res.json("Error deleting book : " + err);
    });
}