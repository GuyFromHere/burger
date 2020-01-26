const connection = require('./connections');

var orm = {
    selectAll: (cb) => {
        connection.query("SELECT * FROM burgers; ", (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (whatToInsert, cb) => {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false);", [whatToInsert], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (newState, whatToUpdate, cb) => {
        // convert booleans to int for mysql and set new state
        if (newState == 'false') {
            newState = 1;
        } else {
            newState = 0;
        }
        connection.query(
            "UPDATE burgers SET devoured = ? WHERE id = ?;",
            [newState, whatToUpdate],
            function (err, result) {
                if (err) throw err;
                cb(result);
            }
        );
    }
};

module.exports = orm;