/*********************************************************************************
*  WEB422 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: William Vuong Student ID: 105165179 Date: September 14, 2018
*
*
********************************************************************************/ 
$(function() {
    $("#teams-menu").on("click", function() {
        event.preventDefault();
        $.ajax({
            url: "https://nameless-earth-78519.herokuapp.com/teams",
            type: "GET",
            contentType: "application/json"
        }).done(function (teamsData) {
            $("#data").empty(); /* clearing the class = "well" with it's id */
            $("#data").append("<h3>Teams</h3>");
            $("#data").append(JSON.stringify(teamsData));
        }).fail(function (err) {
            console.log("Fail");
        })
    })
  });

  $(function() {
    $("#employees-menu").on("click", function() {
        event.preventDefault();
        $.ajax({
            url: "https://nameless-earth-78519.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        }).done(function (employeesData) {
            $("#data").empty();
            $("#data").append("<h3>Employees</h3>");
            $("#data").append(JSON.stringify(employeesData));
        }).fail(function (err) {
            console.log("Fail");
        })
    })
  });

  $(function() {
    $("#projects-menu").on("click", function() {
        event.preventDefault();
        $.ajax({
            url: "https://nameless-earth-78519.herokuapp.com/projects",
            type: "GET",
            contentType: "application/json"
        }).done(function (projectsData) {
            $("#data").empty();
            $("#data").append("<h3>Projects</h3>");
            $("#data").append(JSON.stringify(projectsData));
        }).fail(function (err) {
            console.log("Fail");
        })
    })
  });
  
  $(function() {
    $("#positions-menu").on("click", function() {
        event.preventDefault();
        $.ajax({
            url: "https://nameless-earth-78519.herokuapp.com/positions",
            type: "GET",
            contentType: "application/json"
        }).done(function (positionsData) {
            $("#data").empty();
            $("#data").append("<h3>Positions</h3>");
            $("#data").append(JSON.stringify(positionsData));
        }).fail(function (err) {
            console.log("Fail");
        })
    })
  });