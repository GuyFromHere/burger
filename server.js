const express = require('express');
var exphbs = require('express-handlebars');

// Create an instance of the express app.
var app = express();

var PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
}); 
