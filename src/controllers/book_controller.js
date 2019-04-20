var Book = require('../models/book');
const fs = require('fs')


exports.index = (_, res) => {
    fs.readFile('data/books.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err)
            return
        }
        try {
            const book = JSON.parse(jsonString)
            console.log(jsonString);
            console.log(book);
            res.json(book);
        } catch (err) {
            console.log('Error parsing JSON string:', err)
        }
    })

}
exports.show = (req, res) => {

}

exports.create = (req, res) => {
    var book = new Book();
    const book_data = req.body;
    console.log(req);
    book.id = 4;
    book.title = book_data.title;
    book.author = book_data.author;
    book.summary = book_data.summary;
    book.type = book_data.type;
    book.publication_date = book_data.publication_date;

    const jsonString = JSON.stringify(book);
    fs.writeFile('data/new_books.json', jsonString, err => {
        var message;
        if (err) {
            message = "Error writing file: " +  err;
        } else {
            message = 'Successfully wrote file';
        }

        res.json(message);
    })

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}