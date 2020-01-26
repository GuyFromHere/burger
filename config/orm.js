const connection = require('./connections');

var orm = {
    selectAll: (cb) => {
        connection.query("SELECT * FROM burgers; ", (err, result) => {
            if (err) throw err;
            // do something with result
            cb(result);
        });
    },
    insertOne: (whatToInsert, cb) => {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false);", [whatToInsert], (err, result) => {
            if (err) throw err;
            // do something 
            cb(result);
        });
    },
    updateOne: (whatToUpdate, cb) => {
        connection.query(
            "UPDATE burgers SET devoured = true WHERE burger_name = ?;",
            [whatToUpdate],
            function (err, result) {
                if (err) throw err;
                console.log("You updated burger " + whatToUpdate);
                cb(result);
            }
        );
    }
};


module.exports = orm;