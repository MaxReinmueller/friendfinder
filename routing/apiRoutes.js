// require in dependencies
var express = require('express');
var path = require('path');

// calls the express constructor
var app = express();

app.get("/api/friends", function(req, res){
    return res.json({ profiles })
});
