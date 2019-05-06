const express = require('express');
const router = express.Router();
const library_controller = require('../controllers/library_controller');

router.get('/', (req, res) => {
    library_controller.index(req, res);
});

router.get('/findNear/', (req, res) => {
    library_controller.findNear(req, res);
});

router.get('/:id', (req, res) => {
    library_controller.show(req, res);
});

router.post('/', (req, res) => {
    library_controller.create(req, res);
});

router.put('/:id', (req, res) => {
    library_controller.update(req, res);
});

router.delete('/:id', (req, res, next) => {
    if (req.user) return next();
    return res.status(401).send('Unauthorized').end();
}, (req, res) => {
    library_controller.delete(req, res);
});

module.exports = router;