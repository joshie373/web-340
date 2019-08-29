/*
============================================
; Title:  hughes-4.3.js
; Author: Joshua Hughes
; Date:   28 August 2019
; Description: demonstrates HTTP status codes
;===========================================
*/

//============Establish and define dependencies===============
//Requires the Express module
var express = require("express");

//Requires http module
var http = require("http");

//sets the app keyword to a new express application
var app = express();

//============End Dependencies==================================

//handles 404
app.get("/not-found", function(request, response) {
    response.status(404);
    response.json({
        error: "Oops!. We can't find that page!"
    })
});

//handles 200
app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message: "All's good here."
    })
});

//handles 501
app.get("/not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "We didn't do that."
    })
});

//Starts the server on port 8080
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080.");
});
