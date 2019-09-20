// require in dependencies
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

// calls the express constructor
var app = express();

module.exports = function(app) {

app.get("/survey" , function(req, res){
    res.sendFile(path.join(__dirname, "/../public/survey.html"))
});

app.get("/" , function(req, res){
    res.sendFile(path.join(__dirname, "/../public/home.html"))
});
}