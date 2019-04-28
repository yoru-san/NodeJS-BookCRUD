const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true }
});

const model = mongoose.model('Author', schema);
module.exports = model;