const mongoose = require('mongoose');

const url = "mongodb+srv://root:password$$@cluster0-v9lpe.mongodb.net/books-database?retryWrites=true";
mongoose.connect(url, {useNewUrlParser: true});