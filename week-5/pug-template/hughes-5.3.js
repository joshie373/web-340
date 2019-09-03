/*
============================================
; Title:  hughes-5.3.js
; Author: Joshua Hughes
; Date:   03 September 2019
; Description: demonstrates Pug rendering view
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

//requires use of pug for viewer
var pug = require("pug");

//sets pug as the view Engine
app.set("view engine", "pug");

//establishes directory for 'views'
app.set("views", path.resolve(__dirname,"views"));

//============End Dependencies==================================

//body of application

app.get("/",function(request,response){
   response.render("index",{
       message: "This page is created using a Pug based template! Welcome aboard!"
   }) 
});

//Starts the server on port 8080
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080.");
});
