/*******************************************************************************

 *                     WEB222 – Assignment 2

 * I declare that this assignment is my own work in accordance with Seneca

 * Academic Policy.  No part of this assignment has been copied manually or

 * electronically from any other source (including web sites) or distributed to

 * other students.

 *

 * Name: William Vuong Student ID: 105165179 Date: October 7, 2017

 *

 ******************************************************************************/
// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
console.log("*** Task 1 ***\n\n");
var lastCourse = courses.pop();
console.log("Course "+lastCourse.code+" was deleted from the array (courses)");
console.log("Adding new course objects into the array (courses)\n\n");
console.log("Courses objects in the array (courses):");
var newCourse1 = {code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'https://scs.senecac.on.ca/~ibc233/'};
var newCourse2 = {code: 'OOP244', name: 'Introduction to Object Oreiented Programming', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/'};
var newCourse3 = {code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'https://scs.senecac.on.ca/~web222/'};
var newCourse4 = {code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://scs.senecac.on.ca/~dbs201/'};
courses.push(newCourse1, newCourse2, newCourse3, newCourse4);
for (var i = 0; i < courses.length; i++){
    console.log(""+courses[i].code+", "+courses[i].name+", "+courses[i].code+", "+courses[i].url+"");
}

// task 2
console.log("\n\n*** Task 2 ***\n\n")
var student1 = { 
    name: "John Smith", 
    dob: new Date(1999, 9, 10),
    sid: "010456101",
    program: "CPA", 
    gpa: 4,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var student2 = { 
    name: "Jim Carrey", 
    dob: new Date(1992, 1, 17),
    sid: "012345678",
    program: "CPD", 
    gpa: 3.5,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var student3 = { 
    name: "Justin Bieber", 
    dob: new Date(1994, 3, 1),
    sid: "0987654321",
    program: "CAN", 
    gpa: 3,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var student4 = { 
    name: "Justin Trudeau", 
    dob: new Date(1992, 1, 12),
    sid: "123456789",
    program: "CAN", 
    gpa: 3,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var students = [];
students.push(student1, student2, student3, student4);
console.log("Student objects in the array (students):");
for (var i in students){
    console.log(""+i+": Student info for "+students[i].name+": born on "+students[i].dob.getMonth()+"/"+students[i].dob.getDate()+"/"+students[i].dob.getFullYear()+", student id "+students[i].sid+", program "+students[i].program+" current GPA "+students[i].gpa+"");
}