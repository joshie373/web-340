/*
============================================
; Title:  hughes-3.4.js
; Author: Joshua Hughes
; Date:   22 August 2019
; Description: demonstrates use of advanced routing, morgan logging, and EJS views
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

//tells the application to use morgan as the logger
app.use(logger("short"));

//============End Dependencies==================================

//body of application

//home handler
app.get("/",function(request,response){
    response.render("index",{
        message: "home page",
        title: "Home"
    })
});

//about handler
app.get("/about", function(request,response){
    response.render("about",{
        message: "about page",
        title: "About"
    })
});

//contact handler
app.get("/contact",function(request,response){
    response.render("contact",{
        message: "contact page",
        title: "Contact"
    })
});

//products handler
app.get("/products",function(request,response){
    response.render("products",{
        message: "products page",
        title: "Products"
    })
});

//Starts the server on port 8080
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080.");
});


