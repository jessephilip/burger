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

    // updateOne expects params to be an object and location to be an object
    // params = {devoured: true}, locCol = id, locVal = 1
    updateOne: function(params, location, callback) {
        var queryString = "UPDATE burgers SET ";
        for (var key in params) {
            queryString += key + " = " + params[key];
        }

        // WHERE id = 2;
        for (var key in location) {
            queryString += " WHERE " + key + " = " + location[key] + ";";
        }
        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // clears the database of all orders
    deleteAll: function(callback) {
      connection.query("DELETE FROM burgers", function(err, result) {
        console.log(result);
      });
    }

}

module.exports = orm;
