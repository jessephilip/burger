// dependencies
var path = require ("path");
var burger = require ("../../model/burger.js");

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

    burger.updateOne(req.body, function(data) {
      res.redirect("/");
    });
  });
}
