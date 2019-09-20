// require in dependencies
var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");

// calls the express constructor
var app = express();

// sets an initial port for heroku and/or local server
var PORT = process.env.PORT || 8080

// sets up the express app to handle data parsing (middleware)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// the server starts listening
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});



