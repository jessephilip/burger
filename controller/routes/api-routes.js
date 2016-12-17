// dependencies
var path = require("path");
var burger = require("../../model/burger.js");

module.exports = function(app) {

    // route for home route
    app.post("/api/create", function(req, res) {
        console.log("post", req.body);

        burger.insertOne(req.body, function(data) {
            res.redirect("/");
        });
    });

    // route for home route
    app.post("/api/update", function(req, res) {
        console.log("update", req.body);
        var location = req.body.id;
        var params = req.body.devoured;

        burger.updateOne(params, location, function(data) {
            res.redirect("/");
        });
    });

    app.post("/api/clear", function(req, res) {
        burger.deleteAll(function(data) {
            console.log(data);
        });
    });
}
