var Book = require('../models/book');
const fs = require('fs');
const readFilePromise = require('fs-readfile-promise');
const writeFilePromise = require('fs-writefile-promise');


var inMemory_books = [];

function findAllExistingBooks() {
    return readFilePromise('data/books.json', 'utf-8').then((jsonString) => {
        try {
            console.log(jsonString);
            var old_books = JSON.parse(jsonString)
            old_books.forEach(b => {
                inMemory_books.push(new Book(b.id, b.title, b.author, b.summary, b.type, b.publication_date));
            });
        } catch (err) {
            console.log('Error parsing JSON string:', err)
        }
    });
}

function writeBackAllBooks(books_array) {

    var json_books = [];
    for (let i = 0; i < books_array.length; i++) {
        json_books.push(JSON.stringify(books_array[i]));
    }
    var data = json_books.join(',');
    data = "[" + data + "]";

    return writeFilePromise('data/books.json', data).then((file) => {
        return 'Successfully wrote file' + file;
    }).catch((err) => {
        return "Error writing file: " + err;
    });
}

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
    findAllExistingBooks().then(() => {
        var id = +req.params.id;
        console.log("id");
        console.log(id);
        console.log(inMemory_books);
        var book = inMemory_books.find(x => x.id === id);
        console.log("book");
        console.log(book);
        res.json(book);
    })
}

exports.create = (req, res) => {
    findAllExistingBooks().then(() => {
        var book = new Book();
        const book_data = req.body;
        book.id = book_data.id;
        book.title = book_data.title;
        book.author = book_data.author;
        book.summary = book_data.summary;
        book.type = book_data.type;
        book.publication_date = book_data.publication_date;

        inMemory_books.push(book);

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

        writeBackAllBooks(inMemory_books).then((mess) => {
            res.json(mess);
        });
    })
}

exports.delete = (req, res) => {
    findAllExistingBooks().then(() => {
        var id = +req.params.id;
        const index = inMemory_books.findIndex(x => x.id == id);
        inMemory_books.splice(index, 1);
    }).then(() => {
        writeBackAllBooks(inMemory_books).then((mess) => {
            res.json(mess);
        });
    });
}