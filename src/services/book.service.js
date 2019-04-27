const Book = require('../models/book.model');

exports.addBook = (bookCreated) => {
    return bookCreated.save();
}

exports.findAllBooks = () => {
    return Book.find();
}

exports.findOneBook = (id) => {
    return Book.findById(id);
}

exports.updateOneBook = (book) => {
    return Book.findByIdAndUpdate(book._id, book, { "new": true });
}

exports.deleteOneBook = (id) => {
    return Book.findOneAndDelete({ id: id });
}