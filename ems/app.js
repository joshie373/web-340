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

//adds body parser for csrf
var bodyParser = require("body-parser");

//adds cookie parser for csrf
var cookieParser = require("cookie-parser");

//adds csrf
var csrf = require("csurf");




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


// setup csrf protection
var csrfProtection = csrf({cookie: true});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('CSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});


// ================milestone 3 =============
//uses Mongoose as the db
var mongoose = require("mongoose");

//defines Schema
var Schema = mongoose.Schema;

//imports employee model
var Employee = require("./models/employees");

//sets mongo connection
var mongoDB = "mongodb+srv://21216666:Kenneth37@buwebdev-cluster-1-z8vdl.mongodb.net/ems?retryWrites=true&w=majority";

// ============end milestone 3 =============

//============End Dependencies==================================

//body of application

//handles home page
app.get("/", function(request, response) {
    response.render("index", {
        title: "Home"
    });
});

//handles new page
app.get("/new", function(request, response) {
    response.render("New", {
        title: "New",
        message: "New Employee Entry Page", 
        errorMessage : ""
    });
});

//handles list page
app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;
       response.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});

app.post("/process", function(request, response) {
    //console.log(request.body.txtName);
    if((!request.body.txtFirstName) || (!request.body.txtLastName)){
        //response.status(400).send("Entries must have a first and last name");
        response.render("New", {
            title: "New",
            message: "New Employee Entry Page",
            errorMessage: "Entries must have a first and last name"
        });
        return;
    }

    //get request's form data
    var employeeName = request.body.txtFirstName + " " +request.body.txtLastName;
    console.log(employeeName);

    //create an employee model
    //new Employee from model
    var employee = new Employee({
        firstName: request.body.txtFirstName,
        lastName: request.body.txtLastName
    });

    //save
    employee.save(function(error){
        if(error) throw error;
        console.log(employeeName + " saved successfully!");
    });
    response.redirect("/list");
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


//starts application on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});