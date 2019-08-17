/*
============================================
; Title:  hughes-2.3.js
; Author: Joshua Hughes
; Date:   16 August 2019
; Description: demonstrates an routing examples
;===========================================
*/

//Requires the Express module
var express = require("express");

//Requires http module
var http = require("http");

//Calls the express function to start a new Express application
var app = express();

//handler for home page
app.get("/",function(request,response){
    response.end("Welcome to the home page!");
})

//handler for about pge
app.get("/about",function(request,response){
    response.end("Welcome to the about page!");
})

//handler for contact page
app.get("/contact",function(request,response){
    response.end("Welcome to the contact page!");
})

//handles any page not defined with a handler
app.use(function(request,response){
    response.statusCode = 404;
    response.end("404!");
})

//Starts the server on port 8080
http.createServer(app).listen(8080);