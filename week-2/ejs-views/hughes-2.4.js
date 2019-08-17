/*
============================================
; Title:  hughes-2.4.js
; Author: Joshua Hughes
; Date:   16 August 2019
; Description: demonstrates use of EJS view engine
;===========================================
*/

//============Establish and define dependencies===============
//Requires the Express module
var express = require("express");

//Requires http module
var http = require("http");

//sets the app keyword to a new express application
var app = express();

var path = require("path");

//sets EJS as the view Engine
app.set("view engine", "ejs");

//establishes directory for 'views'
app.set("views", path.resolve(__dirname,"views"));

//============End Dependencies==================================

//body of application

app.get("/",function(request,response){
    response.render("index",{
        firstName: "Joshua",
        lastName: "Hughes",
        address: "1234 W. Test Street \nMesa, AZ 85202"
    });
});

//Starts the server on port 8080
http.createServer(app).listen(8080,function(){
    console.log("EJS_Views app started on port 8080.");
});
