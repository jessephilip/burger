var connection = require("./connection.js");

var orm = {
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";

        // run mysql query
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // insertOne expects params to be an object
    insertOne: function(params, callback) {
        var queryString = "INSERT INTO burgers ";
        var keys = [];
        var values = [];
        for (var key in params) {
            keys.push(key);
            if (key == "devoured") values.push(params[key]);
            else values.push('"' + params[key] + '"');
        }
        queryString += "(" + keys + ") VALUES (" + values + ");";
        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            callback(res);
        })
    },

    // updateOne expects params to be an object locCol to be a string, and locVal to be a value
    updateOne: function(params, locCol, locVal, callback) {
        var queryString = "UPDATE burgers SET ";
        for (var key in params) {
            queryString += key + "=" + '"' + params[key] + '"' + ", ";
        }

        queryString += " WHERE " + locCol + " = " + locVal + ";";
    console.log(queryString);

    connection.query(queryString, function(err, res) {
        if (err) throw err;
        callback(res);
    });
}

}

module.exports = orm;
