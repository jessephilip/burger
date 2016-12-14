// dependencies
var path = require ("path");

module.exports = function(app) {

  // route for home route
  app.get("/api/new", function(req, res) {
    res.sendFile(path.join(__dirname + "/../../view/index.html"));
  });
}
