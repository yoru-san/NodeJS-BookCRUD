const mongoose = require('mongoose');

const url = "mongodb+srv://<root>:<root>@cluster0-v9lpe.mongodb.net/test?retryWrites=true";
mongoose.connect(url, {useNewUrlParser: true});