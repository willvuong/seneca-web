/*********************************************************************************
* WEB322 – Assignment 03
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: William Vuong Student ID: 105165179 Date: Feb 25, 2018
*
* Online (Heroku) Link: https://sheltered-tundra-11804.herokuapp.com/
*
********************************************************************************/
var express = require("express");
//a3
var multer = require("multer");
var bodyParser = require("body-parser");
const fs = require("fs");
//end a3
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;

//a3
const storage = multer.diskStorage ({
    destination: "./public/images/uploaded",
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
        }
});

const upload = multer({ storage: storage });

app.post("/images/add", upload.single("imageFile"), (req, res) => {
    /*app.use(express.static('public'));
    app.use(upload.single("imageFile"));
    res.send(path.join(__dirname, "/images"));*/
    res.redirect("/images");
});

app.get("/images", (req,res) => {
    fs.readdir(__dirname + '/public/' + 'images/' + 'uploaded/', (err, items) => {
        //console.log(items);
        res.json({images: items});
    });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/employees/add", (req, res) => {
    //employeeData = data.addEmployee(req.body);
    dataService.addEmployee(req.body).then((data) => {
        app.use(express.static('public'));
        //res.redirect("/employees");
        res.send(data);
    }).catch((err) => {
        res.json(err);
    })
});

//end a3

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
    //a3
    if (req.query.status) {
        dataService.getEmployeesByStatus(req.query.status).then((data) => {
            app.use(express.static('public'));
            gebs = JSON.stringify({data});
            res.send(gebs);
        })
    } else if (req.query.department) {
        dataService.getEmployeesByDepartment(req.query.deparment).then((data) => {
            app.use(express.static('public'));
            gebd = JSON.stringify({data});
            res.send(gebd);
        }) 
    } else if (req.query.manager) {
        dataService.getEmployeesByManager(req.query.manager).then((data) => {
            app.use(express.static('public'));
            gebm = JSON.stringify({data});
            res.send(gebm);
        })
    //end a3
    } else {
        dataService.getAllEmployees().then(() =>{
            app.use(express.static('public'));
            var em = JSON.stringify({employee});
            res.send(em);
        }).catch((err) => {
            res.json(err);
        })
    }
});

app.get("/employee/:value", (req, res) => { 
    dataService.getEmployeeByNum(req.params.value).then((data) => {
         gebn = JSON.stringify({data});
            res.send(gebn);
     })
    
})

app.get("/managers", (req, res) => { 
    /*dataService.getManagers().then(() => {
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
    })*/
    dataService.getManagers().then((data) => {
        app.use(express.static('public'));
        gm = JSON.stringify({data});
        res.send(gm);
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

//a3
app.get("/employees/add", (req, res) => {
    app.use(express.static('public'));
    res.sendFile(path.join(__dirname,"/views/addEmployee.html"));
});

app.get("/images/add", (req, res) => {
    app.use(express.static('public'));
    res.sendFile(path.join(__dirname,"/views/addImage.html"));
});
//end a3

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