const Book = require('../models/book.model');
const service = require("../services/book.service")

exports.index = (_, res) => {
    service.findAllBooks().then((books) => {
        res.json(books);
    });
}

exports.show = (req, res) => {
    service.findOneBook(req.params.id).then((book) => {
        res.json(book);
    });
}

exports.showByTitle = (req, res) => {
    service.findBooksByTitle(req.params.id).then((book) => {
        res.json(book);
    });
}
exports.showByAuthor = (req, res) => {
    service.findBooksByAuthor(req.params.id).then((book) => {
        res.json(book);
    });
}

exports.create = (req, res) => {
    let book = new Book();
    book.title = req.body.title;
    book.author = req.body.author;
    book.summary = req.body.summary;
    book.type = req.body.type;
    book.publication_date = req.body.publication_date;

    service.addBook(book).then((bookCreated) => {
        res.json(bookCreated);
    });
}

exports.update = (req, res) => {
    var book = new Book();
    book._id = req.body._id;
    book.title = req.body.title;
    book.author = req.body.author;
    book.summary = req.body.summary;
    book.type = req.body.type;
    book.publication_date = req.body.publication_date;

    service.updateOneBook(book).then((bookUpdated) => {
        res.json(bookUpdated);
    });
}

exports.delete = (req, res) => {
    service.deleteOneBook(req.params.id).then(() => {
        res.json("Book deleted");
    });
}