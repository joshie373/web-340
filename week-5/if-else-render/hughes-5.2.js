/*
============================================
; Title:  hughes-5.2.js
; Author: Joshua Hughes
; Date:   03 September 2019
; Description: demonstrates EJS if-else rendering
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

//sets EJS as the view Engine
app.set("view engine", "ejs");

//establishes directory for 'views'
app.set("views", path.resolve(__dirname,"views"));

//============End Dependencies==================================

//body of application

//names array
var n =[
    "Joshua",
    "John",
    "Jacob",
    "Jingleheimer-Schmidt"
];

//express renderer
app.get("/",function(request, response){
    response.render("index",{
        names: n
    })
});

//Starts the server on port 8080
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080.");
});
