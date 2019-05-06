const mongoose = require('mongoose');
const ObjectId = require('mongoose').Schema.Types.ObjectId;

const schema = mongoose.Schema({
    author: { type: ObjectId, ref: 'Author', required: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    type: { type: String, required: true },
    publication_date: { type: Date }
});

const model = mongoose.model('Book', schema);
module.exports = model;