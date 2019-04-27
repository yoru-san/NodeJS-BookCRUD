const mongoose = require('mongoose');

const schema = mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    type: { type: String, required: true },
    publication_date: { type: Date }
});

const model = mongoose.model('Book', schema);
module.exports = model;