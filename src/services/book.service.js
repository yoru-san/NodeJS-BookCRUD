const mongoose = require('mongoose');
const Book = require('../models/book.model');

exports.addBook = (bookCreated) => {
    return bookCreated.save();
}

exports.findAllBooks = (id) => {
    return Book.find(id);
}

exports.findOneBook = (id) => {
    return Book.find(id);
}

exports.updateOneBook = (book) => {
    return Book.findOneAndUpdate({ _id: book.id }, book, { new: true });
}

exports.deleteOneBook = (id) => {
    return Book.deleteOne(id);
}