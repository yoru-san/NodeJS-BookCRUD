const mongoose = require('mongoose');
const ObjectId = require('mongoose').Schema.Types.ObjectId;

const schema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    location: {type: ???, required: true}, //Pas fini
    isDigital: { type: Boolean, default: false }
});

const model = mongoose.model('Library', schema);
module.exports = model;