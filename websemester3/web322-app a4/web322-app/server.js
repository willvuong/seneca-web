/*********************************************************************************
* WEB322 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: William Vuong Student ID: 105165179 Date: Mar 18, 2018
*
* Online (Heroku) Link: https://sheltered-tundra-11804.herokuapp.com/
*
********************************************************************************/
var express = require("express");
var multer = require("multer");
var bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const fs = require("fs");
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;

app.engine('.hbs', exphbs({ 
    extname: '.hbs', 
    defaultLayout: 'main',
    helpers: {
        navLink: function(url, options){
            return '<li' +
            ((url == app.locals.activeRoute) ? ' class="active" ' : '') + 
         '  ><a href="' + url + '">' + options.fn(this) + '</a></li>';
        },
        equal: function (lvalue, rvalue, options) {
            if (arguments.length < 3)
            throw new Error("Handlebars Helper equal needs 2 parameters");
            if (lvalue != rvalue) {
            return options.inverse(this);
            } else {
            return options.fn(this);
            }
        }
    }
}));

app.set('view engine', '.hbs');

app.use(function(req,res,next){
    let route = req.baseUrl + req.path;
    app.locals.activeRoute = (route == "/") ? "/" : route.replace(/\/$/, "");
    next();
});


   
const storage = multer.diskStorage ({
    destination: "./public/images/uploaded",
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
        }
});

const upload = multer({ storage: storage });

app.post("/images/add", upload.single("imageFile"), (req, res) => {
    res.redirect("/images");
});

app.get("/images", (req,res) => {
    fs.readdir(__dirname + '/public/' + 'images/' + 'uploaded/', (err, items) => {
        res.render("images", {items});
    });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/employee/update", (req, res) => {
    console.log(req.body);

    dataService.updateEmployee(req.body).then(() => {
        res.redirect("/employees");
    }) 
});

app.post("/employees/add", (req, res) => {
    dataService.addEmployee(req.body).then((data) => {
        app.use(express.static('public'));
        res.send(data);
    }).catch((err) => {
        res.json(err);
    })
});

var dataService = require("./data-service.js");
var employee = require("./data/employees.json");
var deparments = require("./data/departments.json")

app.get("/", (req, res) => {
    app.use(express.static('public'));
    res.render(path.join(__dirname,"/views/home.hbs"));
});

app.get("/about", (req, res) => {
    app.use(express.static('public'));
    res.render(path.join(__dirname,"/views/about.hbs"));
});

app.get("/employees", (req, res) => {
    if (req.query.status) {
        dataService.getEmployeesByStatus(req.query.status).then((data) => {
            app.use(express.static('public'));
            res.render("employees", {employees: data});
            
        })
    } else if (req.query.department) {
        dataService.getEmployeesByDepartment(req.query.department).then((data) => {
            app.use(express.static('public'));
            res.render("employees", {employees: data});
        }) 
    } else if (req.query.manager) {
        dataService.getEmployeesByManager(req.query.manager).then((data) => {
            app.use(express.static('public'));            
            res.render("employees", {employees: data});
        })
    } else {
        dataService.getAllEmployees().then((data) =>{
            app.use(express.static('public'))
            res.render("employees", {employees: data});
        }).catch((err) => {
            res.render({message: "no results"});
        })
    }
});

app.get("/employee/:value", (req, res) => { 
    dataService.getEmployeeByNum(req.params.value).then((data) => {
        res.render("employee", { employee: data });
     }).catch((err) => {
        res.render("employee",{message:"no results"});
     })
    
})

app.get("/departments", (req, res) => {
    dataService.getDepartments().then((data) => {
        app.use(express.static('public'));
        res.render("departments", {departments: data});
    }).catch((err) => {
        res.json(err);
    })
})

app.get("/employees/add", (req, res) => {
    app.use(express.static('public'));
    res.render(path.join(__dirname,"/views/addEmployee.hbs"));
});

app.get("/images/add", (req, res) => {
    app.use(express.static('public'));
    res.render(path.join(__dirname,"/views/addImage.hbs"));
});

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