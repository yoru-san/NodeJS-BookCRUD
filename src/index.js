var express = require('express');
var routes = require('./route.js');

var app = express();

var Users = require('./dao/users')

app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/backoffice/public'));
app.set('views', __dirname + '/backoffice/views');


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

