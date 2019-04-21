const express = require('express');
const router = express.Router();
const books_controller = require('../controllers/book_controller');

router.get('/', (req, res) => {
    books_controller.index(req, res);
});

router.get('/:id', (req, res) => {
    books_controller.show(req, res);
});

router.post('/', (req, res) => {
    books_controller.create(req, res);
});

router.put(':id', (req, res) => {
    books_controller.update(req, res);
});

router.delete('/:id', (req, res, next) => {
    if (req.user) return next();
    return res.status(401).send('Unauthorized').end();
}, (req, res) => {
    books_controller.delete(req, res);
});

module.exports = router;