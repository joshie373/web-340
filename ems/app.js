/*
============================================
; Title:  app.js
; Author: Joshua Hughes
; Date:   04 September 2019
; Description: EMS loyout project
;===========================================
*/

//============Establish and define dependencies===============
//Requires the Express module
var express = require("express");

//Requires http module
var http = require("http");

//sets the app keyword to a new express application
var app = express();

//requires use of path for view model
var path = require("path");

//requires morgan for logging
var logger = require("morgan");

//sets the logger to morgan
app.use(logger("short"));

//sets pug as the view Engine
app.set("view engine", "ejs");

//establishes directory for 'views'
app.set("views", path.resolve(__dirname,"views"));

app.use(express.static("images"));

//============End Dependencies==================================

//body of application

//handles home page
app.get("/",function(request,response){
    response.render("index",{
        title: "Home page"
    })
});


//starts application on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});