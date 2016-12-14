var mysql = require ("mysql");
var password = require ("../../keys.js");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : password,
  database : 'burgers_db'
});

// connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected to database as id " + connection.threadId);
});

module.exports = connection;
