var books_controller = require('./controllers/book_controller');
var client_controller = require('./controllers/client_controller');


exports.init = (app) => {

    app.get('/api/login', (req, res) => {
        client_controller.connect(req, res);
    });

    app.get('/api/logout', (req, res) => {
        client_controller.disconnect(req, res);
    });

    app.get('/api/books', (req, res) => {
        books_controller.index(req, res);
    });

    app.get('/api/book/:id', (req, res) => {
        books_controller.show(req, res);
    });

    app.post('/api/books', (req, res) => {
        books_controller.create(req, res);
    });

    app.patch('/api/book/:id', (req, res) => {
        books_controller.update(req, res);
    });

    app.delete('/api/books', (req, res) => {
        books_controller.delete(req, res);
    });
}