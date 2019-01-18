/*********************************************************************************
* WEB322 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: William Vuong Student ID: 105165179 Date: Feb 11, 2018
*
* Online (Heroku) Link: https://sheltered-tundra-11804.herokuapp.com/
*
********************************************************************************/
var express = require("express");
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;

var dataService = require("./data-service.js");
var employee = require("./data/employees.json");
var deparments = require("./data/departments.json")

app.get("/", (req, res) => {
    app.use(express.static('public'));
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

app.get("/about", (req, res) => {
    app.use(express.static('public'));
    res.sendFile(path.join(__dirname,"/views/about.html"));
});

app.get("/employees", (req, res) => {
    dataService.getAllEmployees().then(() =>{
        app.use(express.static('public'));
        var em = JSON.stringify({employee});
        res.send(em);
    }).catch((err) => {
        res.json(err);
    })
});

app.get("/managers", (req, res) => { 
    dataService.getManagers().then(() => {
        app.use(express.static('public'));
        var s = "";
        for(var i = 0; i < employee.length; i++){
            if(JSON.stringify(employee[i].isManager) == "true"){
                s += JSON.stringify(employee[i]);
            }
        }
        res.send(s);
    }).catch((err) => {
        res.json(err);
    })
});

app.get("/departments", (req, res) => {
    dataService.getDepartments().then(() => {
        app.use(express.static('public'));
        var dep = JSON.stringify({deparments})
        res.send(dep);
    }).catch((err) => {
        res.json(err);
    })
})

app.get("/*", (req, res) => {
    res.redirect('https://medium.com/@CollectUI/404-page-design-inspiration-march-2017-f6d9f7efd054');
});

dataService.initialize().then(() => {
        app.listen(HTTP_PORT);
        console.log('Express http server listening on ' + HTTP_PORT);
    })
    .catch((err) => {
        console.log("Cannot connect to server: " + err);
    })