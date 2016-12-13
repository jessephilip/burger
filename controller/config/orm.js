var connection = require("./connection.js");

var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";

        // run mysql query
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // insertOne expects params to be an array of objects
    insertOne: function (params, callback) {
        var queryString = "INSERT INTO burgers ";
        var keys = [];
        var values = [];
        for (var i = 0; i < params.length; i++) {
            for (var key in params[i]) {
                keys.push(key);
                values.push(params[i][key]);
            }
        }
        queryString += "(" + keys + ") VALUES (" + values + ");";
        console.log(queryString);

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            callback(res);
        })
    },

    // updateOne expects params to be an array of objects, locCol to be a string, and locVal to be a value
    updateOne: function (params, locCol, locVal, callback) {
        var queryString = "UPDATE burgers SET ";
        for (var i = 0; i < params.length; i++) {
            for (var key in params[i]) {
                if (i === (params.length - 1)) queryString += key + "=" + '"' + params[i][key] + '"';
                else queryString += key + "=" + '"' + params[i][key] + '"' + ", ";
            }
        }

        queryString += " WHERE " + locCol + " = " + locVal + ";";
        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    }

}

orm.updateOne([{name: "Jesse"}, {hamburger: "cheese burger"}, {go: "hello"}], "id", 2);

module.exports = orm;

