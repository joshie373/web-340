/*
============================================
; Title:  hughes-6.3.js
; Author: Joshua Hughes
; Date:   12 September 2019
; Description: demonstrates mongoose connection
;===========================================
*/

//============Establish and define dependencies===============
//Requires the Express module
var express = require("express");

//sets the app keyword to a new express application
var app = express();

//Requires http module
var http = require("http");

//sets logger as using morgan
var logger = require("morgan");

//uses Mongoose as the db
var mongoose = require("mongoose");

//sets mongo connection
var mongoDB = "mongodb+srv://21216666:Kenneth37@buwebdev-cluster-1-z8vdl.mongodb.net/test?retryWrites=true&w=majority";

//tells the application to use morgan as the logger
app.use(logger("dev"));

//============End Dependencies==================================

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

//Starts the server on port 8080
http.createServer(app).listen(5000,function(){
    console.log("Application started on port 5000.");
});
