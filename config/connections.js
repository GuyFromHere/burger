const mysql = require("mysql");

/* const connection = mysql.createConnection({
    host: "localhost",
    user: "dbUser",
    password: "How do you like my password?",
    database: "burgers_db",
    multipleStatements: true
});
 */

const connection = mysql.createConnection({
    host: "us-cdbr-iron-east-04.cleardb.net",
    user: "b14a96e9bf350e",
    password: "d2692974",
    database: "heroku_9e29eacc6b8a972",
    multipleStatements: true
});

connection.connect(err => {
    if (err) throw err;
});

module.exports = connection;
