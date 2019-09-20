// require in dependencies
var express = require('express');
var path = require('path');

// calls the express constructor
var app = express();

var friendsArray = require('../app/data/friends');

module.exports = function(app) {
app.get("/api/friends", function(req, res){
    return res.json({ friendsArray })
});
}