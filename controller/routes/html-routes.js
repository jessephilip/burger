// dependencies
var path = require("path");
var handlebars = require("express-handlebars");
var connection = require("../config/connection.js")

module.exports = function(app) {

    // initialize handlebars
    app.engine("handlebars", handlebars({
        defaultLayout: "main.handlebars"
    }));

    app.set("view engine", "handlebars");

    // route for home route
    app.get("/", function(request, response) {

      connection.query("SELECT * FROM burgers", function(err, res) {
        if (err) throw err;
        console.log(res);
        response.render("icecreams", {array: ["hello", "something", "what"]});
      });

    });
}
