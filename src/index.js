const express = require('express');
const  bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var MemoryStore = require('memorystore')(session);
const auth = require('./modules/auth');
const app = express();
const UserController = require('./controllers/user_controller');
const fileReader = require('./modules/fileReader');
const mongoose = require('mongoose');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
  secret: 'TP1',
  resave: true,
  saveUninitialized: false,
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
}));

app.use(auth.initialize);
app.use(auth.session);
app.use(auth.setUser);

UserController.import();

const url = "mongodb+srv://<root>:<root>@cluster0-v9lpe.mongodb.net/test?retryWrites=true";
mongoose.connect(url, {useNewUrlParser: true});

const authRouter = require('./routers/auth_router');
const booksRouter = require('./routers/books_router');

app.use('/auth', authRouter);
app.use('/books', booksRouter);

fileReader.initModule();

app.get('*', function(_, res) {
  res.status(404).send('Requested route not found');
});

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

