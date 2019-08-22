/*
============================================
; Title:  hughes-3.2.js
; Author: Joshua Hughes
; Date:   22 August 2019
; Description: demonstrates use of morgan logging
;===========================================
*/

//============Establish and define dependencies===============
//Requires the Express module
var express = require("express");

//Requires http module
var http = require("http");

//sets logger as using morgan
var logger = require("morgan");

//sets the app keyword to a new express application
var app = express();

//requires use of path for view model
var path = require("path");

//sets EJS as the view Engine
app.set("view engine", "ejs");

//establishes directory for 'views'
app.set("views", path.resolve(__dirname,"views"));

//============End Dependencies==================================

//body of application

//tells the application to use morgan as the logger
app.use(logger("short"));


app.get("/",function(request,response){
    response.render("index",{
        message: "Welcome to Joshua Hughes' Morgan Logging Example"
    })
});


//Starts the server on port 8080
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080.");
});
