const Book = require('../models/book.model');

exports.addBook = (bookCreated) => {
    bookCreated.author.save();
    return bookCreated.save();
}

exports.findAllBooks = () => {
    return Book.find().populate('author');
}

exports.findOneBook = (id) => {
    return Book.findById(id).populate('author');
}

exports.findBooksByTitle = (title) => {
    return Book.find({ title: title }).populate('author');
}

exports.findBooksByAuthor = (authorId) => {
    return Book.find({ author: authorId }).populate('author');
}

exports.updateOneBook = (book) => {
    return Book.findByIdAndUpdate(book._id, book, { "new": true });
}

exports.deleteOneBook = (id) => {
    return Book.findOneAndDelete({ _id: id });
}