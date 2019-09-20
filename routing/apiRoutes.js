// require in dependencies
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

// calls the express constructor
var app = express();

var friendsArray = require('../app/data/friends');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json({
            friendsArray
        })
    });

    // compare the answers from current user to other users and find a match
    app.post("/api/friends", function (req, res) {
        var you = req.body;
        var newFriend = -1;
        var newFriendScore = 100;
        var currentFriendScore = 0;

        for (i = 0; i < friendsArray.length; i++) {

            for (s = 0; s < you.scores.length; s++) {

                currentFriendScore = currentFriendScore + Math.abs(friendsArray[i].scores[s] - you.scores[s]);

                if (currentFriendScore <= newFriendScore) {
                    newFriend = i;
                    newFriendScore = currentFriendScore;
                }
                currentFriendScore = 0;
            }
        }
        friendsArray.push(you);
        newFriendDetails = friendsArray[newFriend];
        res.json(newFriendDetails);
        console.log(newFriendDetails);
    });
};