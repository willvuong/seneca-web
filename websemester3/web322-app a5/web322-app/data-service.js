const Sequelize = require('sequelize');

var sequelize = new Sequelize('dan9lf2nt15j2n', 'iqdegotygezebm', '09535371adef920b1d1326bb71de8b9df15bde1da5142147c425faf4e3f45274', {
    host: 'ec2-54-83-58-222.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: true
    }
});

var Employee = sequelize.define('Employee', {
    employeeNum: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    SSN: Sequelize.STRING,
    addressStreet: Sequelize.STRING,
    addressCity: Sequelize.STRING,
    addressState: Sequelize.STRING,
    addressPostal: Sequelize.STRING,
    maritalStatus: Sequelize.STRING,
    isManager: Sequelize.BOOLEAN,
    employeeManagerNum: Sequelize.INTEGER,
    status: Sequelize.STRING,
    department: Sequelize.INTEGER,
    hireDate: Sequelize.STRING
});

var Department = sequelize.define('Department', {
    departmentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departmentName: Sequelize.STRING
});

module.exports.initialize = function () {
    return new Promise(function (resolve, reject) {
        sequelize.sync().then(function () {
            resolve("Operation was a succeess");
        }).catch(function (error) {
            reject("Unable to sync the database");
        });
    });
}

module.exports.getAllEmployees = function () {
    return new Promise(function (resolve, reject) {
        Employee.findAll().then(function (employee) {
            resolve(employee);
        }).catch(function (error) {
            console.log(error);
            reject("No result returned");
        });
    });
}

module.exports.getEmployeesByStatus = function (tempStatus) {
    return new Promise(function (resolve, reject) {
        Employee.findAll({
            where: {
                status: tempStatus
            }
        }).then(function (employee) {
            resolve(employee);
        }).catch(function (error) {
            reject("No result returned");
        });
    });
}

module.exports.getEmployeesByDepartment = function (tempDepartment) {
    return new Promise(function (resolve, reject) {
        Employee.findAll({
            where: {
                department: tempDepartment
            }
        }).then(function (employee) {
            resolve(employee);
        }).catch(function (error) {
            reject("No result returned");
        });
    });
}

module.exports.getEmployeesByManager = function (tempManager) {
    return new Promise(function (resolve, reject) {
        Employee.findAll({
            where: {
                employeeManagerNum: tempManager
            }
        }).then(function (employee) {
            resolve(employee);
        }).catch(function (error) {
            reject("No result returned");
        });
    });
}

module.exports.getEmployeeByNum = function (tempNum) {
    return new Promise(function (resolve, reject) {
        Employee.findAll({
            where: {
                employeeNum: tempNum
            }
        }).then(function (employee) {
            resolve(employee[0]);
        }).catch(function (error) {
            reject("No result returned");
        });
    });
}

module.exports.getDepartments = function () {
    return new Promise(function (resolve, reject) {
        Department.findAll().then(function (department) {
            resolve(department);
        }).catch(function (error) {
            reject("No result returned");
        });
    });
}

module.exports.addEmployee = function (employeeData) {
    return new Promise(function (resolve, reject) {
        employeeData.isManager = (employeeData.isManager) ? true : false;
        for (var obj in employeeData) {
            if (employeeData[obj] == "") {
                employeeData[obj] = null;
            }
        }

        Employee.create({
            firstName: employeeData.firstName,
            last_name: employeeData.last_name,
            email: employeeData.email,
            SSN: employeeData.SSN,
            addressStreet: employeeData.addressStreet,
            addressCity: employeeData.addressCity,
            addressState: employeeData.addressState,
            addressPostal: employeeData.addressPostal,
            maritalStatus: employeeData.maritalStatus,
            isManager: employeeData.isManager,
            employeeManagerNum: employeeData.employeeManagerNum,
            status: employeeData.status,
            department: employeeData.department,
            hireDate: employeeData.hireDate
        }).then(function (employee) {
            resolve(employee);
        }).catch(function (error) {
            console.log(error);
            reject("Unable to create employee");
        });
    });
}

module.exports.getManagers = function () {
    return new Promise(function (resolve, reject) {
        Employee.findAll({
            where: {
                isManager: true
            }
        }).then(function (employee) {
            resolve(employee);
        }).catch(function (error) {
            reject("No result returned");
        });
    });
}

module.exports.updateEmployee = function (employeeData) {
    return new Promise(function (resolve, reject) {
        employeeData.isManager = (employeeData.isManager) ? true : false;
        for (var obj in employeeData) {
            if (employeeData[obj] == "") {
                employeeData[obj] = null;
            }
        }
        Employee.update({
            firstName: employeeData.firstName,
            last_name: employeeData.last_name,
            email: employeeData.email,
            SSN: employeeData.SSN,
            addressStreet: employeeData.addressStreet,
            addressCity: employeeData.addressCity,
            addressState: employeeData.addressState,
            addressPostal: employeeData.addressPostal,
            maritalStatus: employeeData.maritalStatus,
            isManager: employeeData.isManager,
            employeeManagerNum: employeeData.employeeManagerNum,
            status: employeeData.status,
            department: employeeData.department,
            hireDate: employeeData.hireDate
        }, { where: { employeeNum: employeeData.employeeNum } }).then(() => {
            resolve("Operation was a success");
        }).catch((error) => {
            reject("Unable to create employee");
        });
    });
}

module.exports.addDepartment = function (departmentData) {
    return new Promise(function (resolve, reject) {
        for (var obj in departmentData) {
            if (departmentData[obj] == "") {
                departmentData[obj] = null;
            }
        }
        Department.create({
            departmentId: departmentData.departmentId,
            departmentName: departmentData.departmentName
        }).then(() => {
            resolve("success");
        }).catch(() => {
            reject("unable to create department");
        });
    });
}

module.exports.updateDepartment = function (departmentData) {
    return new Promise(function (resolve, reject) {
        for (var obj in departmentData) {
            if (departmentData[obj] == "") {
                departmentData[obj] = null;
            }
        }        
        Department.update({
            departmentName: departmentData.departmentName
        }, {
                where: { departmentId: departmentData.departmentId }
            }).then(() => {
                resolve("Operation was a success");
            }).catch(() => {
                reject("unable to update department");
            });
    });
}

module.exports.getDepartmentById = function (Id) {
    return new Promise(function (resolve, reject) {
        Department.findAll({
            where: {
                departmentId: Id
            }
        }).then((department) => {
            resolve(department[0]);
        }).catch(() => {
            reject("No result returned");
        });
    });
}

module.exports.deleteEmployeeByNum = function (empNum) {
    return new Promise (function (resolve, reject) {
        Employee.destroy({
            where: {employeeNum: empNum}
        }).then(() => {
            resolve("Employee number "+empNum+" has been deleted");
        }).catch((err) => {
            reject(err);
        });
    });
}