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

// server grabs html file when it is called by the url
app.get("/survey" , function(req, res){
    res.sendFile(path.join(__dirname, "public/survey.html"))
});

app.get("/" , function(req, res){
    res.sendFile(path.join(__dirname, "public/home.html"))
});


// should be pulling from the apiRoutes file
app.get("/api/friends", function(req, res){
    res.sendFile(path.join(__dirname, "friends.js"))
    return res.json({ profiles })
});

// var profiles2 = [
//     {
//         name: "Ahmed",
//         photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
//         scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
//     }, {
//         name: "Jacob Deming",
//         photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
//         scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
//     }, {
//         name: "Jeremiah Scanlon",
//         photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
//         scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
//     }, {
//         name: "Louis T. Delia",
//         photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
//         scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
//     }];

// app.get("/api/friends", function(req, res){
//     return res.json(profiles2)
// });

// the server starts listening
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});



