const Book = require('../models/book');
const fileReader = require('../modules/fileReader');

exports.index = (_, res) => {
    fileReader.findAllExistingBooks().then((books) => {
        res.status(200).send(books);
    }).catch((err) => {
        let error = "Error : Books not found -> " + err;
        res.status(400).send(error);
    });
}

exports.show = (req, res) => {
    fileReader.findAllExistingBooks().then((books) => {
        let id = +req.params.id;
        const book = books.find(x => x.id === id);
        if (book == undefined) {
            let error = "Error : Book not found";
            res.status(400).send(error);
        } else {
            res.status(200).send(book);
        }
    }).catch((err) => {
        let error = "Error : Books not found -> " + err;
        res.status(400).send(error);
    });
}

exports.create = (req, res) => {
    fileReader.findAllExistingBooks().then((books) => {
        let lastid = Math.max.apply(Math, books.map((b) => { return b.id; }))

        const book_data = req.body;
        const book = new Book(++lastid, book_data.title, book_data.author, book_data.summary, book_data.type, book_data.publication_date);
        books.push(book);

        fileReader.writeBackAllBooks(books).then((mess) => {
            mess = mess + ", id : " + book.id;
            res.status(201).send(mess);
        });
    }).catch((err) => {
        let error = "Error reading file from disk: " + err;
        res.status(500).send(error);
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
            res.status(200).send(mess);
        });
    }).catch((err) => {
        let error = "Error updating book : " + err;
        res.status(500).send(error);
    });
};

exports.delete = (req, res) => {
    fileReader.findAllExistingBooks().then((books) => {
        const id = +req.params.id;
        const index = books.findIndex(x => x.id == id);
        books.splice(index, 1);

        fileReader.writeBackAllBooks(books).then((mess) => {
            res.status(200).send(mess);
        });
    }).catch((err) => {
        let error = "Error deleting book : " + err;
        res.status(500).send(error);
    });
}