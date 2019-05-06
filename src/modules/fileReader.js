const readFilePromise = require('fs-readfile-promise');
const writeFilePromise = require('fs-writefile-promise');

global.inMemory_books = [];

exports.initModule = async () => {
    var books = await findAllExistingBooksFromDisk();
    global.inMemory_books = books;
}

exports.findAllExistingBooks = () => {
    return new Promise((resolve) => {
        resolve(global.inMemory_books);
    });
}

const findAllExistingBooksFromDisk = async () => {
    const jsonString = await readFilePromise('data/books.json', 'utf-8');
    try {
        return JSON.parse(jsonString);
    }
    catch (err) {
        return err;
    }
}

exports.writeBackAllBooks = (books_array) => {
    return writeFilePromise('data/books.json', JSON.stringify(books_array)).then((file) => {
        return 'Successfully wrote file ' + file;
    }).catch((err) => {
        return "Error writing file: " + err;
    });
}

exports.findAllExistingUsers = async () => {
    const jsonString = await readFilePromise('data/users.json', 'utf-8');
    try {
        return JSON.parse(jsonString);
    }
    catch (err) {
        return err;
    }
}

