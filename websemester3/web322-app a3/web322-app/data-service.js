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

//a3
module.exports.addEmployee = function(employeeData) {
    if(employeeData.isManager == undefined) {
        employeeData.isManager = false;
    } else{
        employeeData.isManager = true;
    }
    return new Promise((resolve, reject) => {
        employeeData.employeeNum = employees.length + 1;
        employees.push(employeeData);
        resolve(employees);
    }).catch((err) => {
        res.json(err);
    })
}

module.exports.getEmployeesByStatus = function(status) {
    return new Promise ((resolve, reject) => {
        var tempEmployees = [];
        if(employees.length > 0) {
            for (var i = 0; i < employees.length; i++){
                if(employees[i].status == status){
                    tempEmployees.push(employees[i]);
                }
            }
            resolve(tempEmployees);
        } else {
            reject("no results returned")
        }
    })
}

module.exports.getEmployeesByDepartment = function(department) {
    return new Promise ((resolve, reject) => {
        var tempEmployees = [];
        if(employees.length > 0) {
            for (var i = 0; i < employees.length; i++){
                if(employees[i].department == department){
                    tempEmployees.push(employees[i]);
                }
            }
            resolve(tempEmployees);
        } else {
            reject("no results returned")
        }
    })
}

module.exports.getEmployeesByManager = function(manager) {
    return new Promise ((resolve, reject) => {
        var tempEmployees = [];
        if(employees.length > 0) {
            for (var i = 0; i < employees.length; i++){
                if(employees[i].employeeManagerNum == manager){
                    tempEmployees.push(employees[i]);
                }
            }
            resolve(tempEmployees);
        } else {
            reject("no results returned")
        }
    })
}

module.exports.getEmployeeByNum = function(num) {
    return new Promise ((resolve, reject) => {
        var tempEmployee;
        if(employees.length > 0) {
            for (var i = 0; i < employees.length; i++){
                if(employees[i].employeeNum == num){
                    tempEmployee = employees[i];
                }
            }
            resolve(tempEmployee);
        } else {
            reject("no results returned")
        }
    })
}
//end a3