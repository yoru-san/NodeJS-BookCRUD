const express = require('express');
const  bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var MemoryStore = require('memorystore')(session)
const routes = require('./routers/routes');
const auth = require('./lib/auth');
const app = express();
const userDAO = require('./models/users')

var Users = require('./models/users')

app.set('view engine', 'ejs');

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

userDAO.import();


const authRouter = require('./routers/auth');
//const booksRouter = require('./Routers/books');

app.use('/auth', authRouter);
//app.use('/books', booksRouter);

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

