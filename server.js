// dependencies
var express = require ("express");
var methodOverride = require ("method-override");
var bodyParser = require ("body-parser");

// initialize app
var app = express();

// link to static files
app.use(express.static("./views"));

// link to routes
require("./controller/routes/api-routes.js")(app);
require("./controller/routes/html-routes.js")(app);

// set up PORT
var PORT = process.env.PORT || 8080;

// set up server for listening
app.listen(PORT, function() {
  console.log("Listening on http://localhost:" + PORT);
});
