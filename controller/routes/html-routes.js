// dependencies
var path = require("path");
var handlebars = require("express-handlebars");
var connection = require("../config/connection.js");
var burger = require("../../model/burger.js");

module.exports = function(app) {

    // initialize handlebars
    app.engine("handlebars", handlebars({
        defaultLayout: "main.handlebars"
    }));

    app.set("view engine", "handlebars");

    // route for home route
    app.get("/", function(request, response) {

        // get all past burgers from the database
        burger.selectAll(function(data) {
            var array = [];
            for (var i = 0; i < data.length; i++) {
                var info = {
                    id: data[i].id,
                    burger_name: data[i].burger_name,
                    devoured: data[i].devoured
                };
                array.push(info);
            }

            // loop through array of burgers and template out to handlebars
            response.render("icecreams", {
                burger: array
            });
        });
    });
}
