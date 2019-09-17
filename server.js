// require in dependencies
var express = require('express');

// calls the express constructor
var app = express();

// sets an initial port for heroku and/or local server
var PORT = process.env.PORT || 8080

// sets up the express app to handle data parsing (middleware)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// requires the server to point to a series of route files
require("./routing/apiRoutes");
require("./routing/htmlRoutes");

// the server starts listening
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});