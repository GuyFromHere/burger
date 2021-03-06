const express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
}); 
