/*
============================================
; Title:  hughes-2.2.js
; Author: Joshua Hughes
; Date:   14 August 2019
; Description: demonstrates an express example
;===========================================
*/

//Requires the Express module
var express = require("express");

//Requires http module
var http = require("http");

//Calls the express function to start a new Express application
var app = express();


app.use(function(request,response){
    console.log("In comes a request to: "+request.url);
    response.end("Hello World");
});

//Starts the server on port 8080
http.createServer(app).listen(8080);