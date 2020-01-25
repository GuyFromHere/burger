const connection = require('./connections');

var ORM = {
    selectAll: function () {
        connection.query(`SELECT * FROM burgers;`, (err, result) => {
            if (err) throw err;
            // do something with result
            console.log(result);
        })
    },
    insertOne: function (whatToInsert) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);";
        console.log(queryString);
        connection.query(queryString, [whatToInsert], function (err, result) {
            if (err) throw err;
            // do something 
            console.log('Insert successful');
        });
    },
    updateOne: function (whatToUpdate) {
        var queryString =
            "UPDATE burgers SET devoured = true WHERE burger_name = ?;";
        connection.query(
            queryString,
            [whatToUpdate],
            function (err, result) {
                if (err) throw err;
                console.log("You updated burger " + whatToUpdate);
            }
        );
    }
};

/* ORM.insertOne('Turkey Burger')
ORM.updateOne('Hamburger');
ORM.selectAll(); */

module.exports = ORM;