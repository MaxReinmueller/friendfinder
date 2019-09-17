// require in dependencies
var express = require("express");
var path = require("path")

// calls the express constructor
var app = express();

// sets an initial port for heroku and/or local server
var PORT = process.env.PORT || 8080

// sets up the express app to handle data parsing (middleware)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// requires the server to point to a series of route files

app.get("/survey" , function(req, res){
    res.sendFile(path.join(__dirname, "public/survey.html"))
})

app.get("/", function(req, res){
    res.send("hello world");
})

// the server starts listening
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});