// requiring packages
var bodyparser 	= require("body-parser");
var path 	= require("path");
var mysql   = require('mysql');
var express = require("express");
//invoke express and make it equal to an object named app
var app = express();
var port = 3010;


app.get("/", function(req,res){
	res.sendFile(path.join(__dirname,"/public/assets/index.html"));
});

app.get("/survey", function(req,res){
	res.sendFile(path.join(__dirname,"/public/assets/survey.html"));
});

//connect to database
//create a route that will query database (connection.query) (sql command will be select all* from friends)
//take the info from the database and then take friends.score. Create empty vairable called total difference. take total score of users input compared to what we have in the database.
//post to the database













app.listen(port, function(){
	console.log("our servers are waiting on port 3000")
});
