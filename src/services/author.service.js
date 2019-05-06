const Author = require('../models/author.model');

exports.findAuthorByName = (name) => {
    return Author.findOne({name: name});
}