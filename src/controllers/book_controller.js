const Book = require('../models/book.model');
const service = require("../services/book.service")

exports.index = (req, res) => {
    let books = service.findAllBooks(req.params.id);
    res.json(books);
}

exports.show = (req, res) => {
    let book = service.findOneBook(req.params.id);
    res.json(book);
}

exports.create = (req, res) => {
    let book = new Book;
    let bookCreated = service.addBook(book);
    res.json(bookCreated);
}

exports.update = (req, res) => {
    let bookUpdated = service.updateOneBook(req.params.book);
    res.json(bookUpdated);
}

exports.drop = (req, res) => {
    let deletedBook = service.deleteOneBook(req.params.id);
    res.json(deletedBook);
}