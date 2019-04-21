var Book = require('../models/book');
const fs = require('fs');
const readFilePromise = require('fs-readfile-promise');


var inMemory_books = [];

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
    var id = req.params;
    console.log(id);
    var book = inMemory_books.find(x => x.id === id);
    res.json(book);
}

exports.create = (req, res) => {

    readFilePromise('data/books.json', 'utf-8').then((jsonString) => {
        try {
            return JSON.parse(jsonString)
        } catch (err) {
            console.log('Error parsing JSON string:', err)
        }
    }).then((old_book) => {
        var book = new Book();
        const book_data = req.body;
        book.id = book_data.id;
        book.title = book_data.title;
        book.author = book_data.author;
        book.summary = book_data.summary;
        book.type = book_data.type;
        book.publication_date = book_data.publication_date;

        inMemory_books.push(old_book, book);

        var json_books = [];
        for (let i = 0; i < inMemory_books.length; i++) {
            json_books.push(JSON.stringify(inMemory_books[i]));
        }

        var data = json_books.join(',');
        data = "[" + data + "]";

        fs.writeFile('data/new_books.json', data, err => {
            var message;
            if (err) {
                message = "Error writing file: " + err;
            } else {
                message = 'Successfully wrote file';
            }

            res.json(message);
        })
    }).catch((err) => {
        console.log("Error reading file from disk:", err)
        return
    });
}


exports.update = (req, res) => {
    fs.readFile('data/new_books.json', (err, customer) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }

        fs.writeFile('data/new_books.json', JSON.stringify(customer), (err) => {
            if (err) console.log('Error writing file:', err)
        })
    })
}

exports.delete = (req, res) => {

}