var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routers/routes');

var app = express();

var Users = require('./models/users')

app.set('view engine', 'ejs');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    Users.find(username, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

routes.init(app);

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

