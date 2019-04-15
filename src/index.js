var express = require('express');
var routes = require('./route.js');

var app = express();

app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/backoffice/public'));
app.set('views', __dirname + '/backoffice/views');


routes.init(app);

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

