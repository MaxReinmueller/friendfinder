// require in dependencies
var express = require('express');
// native node package
var path = require('path');

// calls the express constructor
var app = express();

// express get request; app.get(path, callback[callback..])
exports = app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey"));
});

