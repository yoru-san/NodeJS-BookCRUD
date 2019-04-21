const fs = require('fs');
const readFilePromise = require('fs-readfile-promise');
const writeFilePromise = require('fs-writefile-promise');

var Book = require('../models/book');

var findAllExistingBooks = function () {
    return readFilePromise('data/books.json', 'utf-8').then((jsonString) => {
        try {
            return JSON.parse(jsonString);
        } catch (err) {
            console.log(err);
            return err;
        }
    });
}

var writeBackAllBooks = function (books_array) {
    return writeFilePromise('data/books.json', JSON.stringify(books_array)).then((file) => {
        return 'Successfully wrote file ' + file;
    }).catch((err) => {
        return "Error writing file: " + err;
    });
}

exports.findAllExistingBooks = findAllExistingBooks;
exports.writeBackAllBooks = writeBackAllBooks;