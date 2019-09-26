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

//requires helmet
var helmet = require("helmet");


//sets ejs as the view Engine
app.set("view engine", "ejs");

//establishes directory for 'views'
app.set("views", path.resolve(__dirname,"views"));

//allows for the use of the images relative path
app.use(express.static("images"));

//sets the logger to morgan
app.use(logger("short"));

//adds helmet for xss filter
app.use(helmet.xssFilter());

// ================milestone 3 =============
//uses Mongoose as the db
var mongoose = require("mongoose");

//defines Schema
var Schema = mongoose.Schema;

//imports employee model
var Employee = require("./models/employees");

//sets mongo connection
var mongoDB = "mongodb+srv://21216666:Kenneth37@buwebdev-cluster-1-z8vdl.mongodb.net/test?retryWrites=true&w=majority";

// ============end milestone 3 =============

//============End Dependencies==================================

//body of application

//handles home page
app.get("/",function(request,response){
    response.render("index",{
        title: "Home page", 
        message: "XSS Prevention Example"
    })
});

//mongo connection
mongoose.connect(mongoDB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection Error: "));
db.once("open",function(){
    console.log("Application connected to mLab MongoDB instance");
});

//new Employee from model
var employee = new Employee({
    firstName: "Joshua",
    lastName: "Hughes"
});

//starts application on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});