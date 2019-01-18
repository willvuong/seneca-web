const fs = require("fs");
var employees = [];
var departments = [];

module.exports.initialize = function() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/employees.json', (error, data) => {
            if (error) {
                reject(error);
            } else {
                employees = JSON.parse(data);
                if (employees.length == 0) {
                    reject("unable to read file");
                } else{
                    resolve();
                }
            }
        fs.readFile('./data/departments.json', (error, data) => {
            if (error) {
                reject(error);
            } else {
                departments = JSON.parse(data);
                if (departments.length == 0) {
                    reject("unable to read file");
                } else{
                    resolve();
                }
            }
        });
        });   
    })
}

module.exports.getAllEmployees = function() {
    return new Promise((resolve, reject) => {
        if(employees.length > 0){
            resolve(employees);
        } else{
            reject("no results returned");
        }
    })
}

module.exports.getManagers = function() {
    return new Promise ((resolve, reject) => {
        var managers = [];
        if(employees.length > 0) {
            for (var i = 0; i < employees.length; i++){
                if(employees[i].isManager == true){
                    managers.push(employees[i]);
                }
            }
            resolve(managers);
        } else {
            reject("no results returned")
        }
    })
}

module.exports.getDepartments = function() {
    return new Promise((resolve, reject) => {
        if(departments.length > 0){
            resolve(departments);
        } else{
            reject("no results returned");
        }
    })
}