/*
============================================
; Title:  hughes-4.2.js
; Author: Joshua Hughes
; Date:   28 August 2019
; Description: demonstrates use of JSOn APIs
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

app.get("/product/:id",function(request,response){
    var id = parseInt(request.params.id,10);
    response.json({
        name: "Toothbrush",
        price: "13.85",
        productId: id
    });
});


//Starts the server on port 8080
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080.");
});
