/*********************************************************************************
* WEB422 – Assignment 03
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: William Vuong Student ID: 105165179 Date: October 12, 2018
*
********************************************************************************/ 
var viewModel = {
    teams: ko.observable([]),
    employees: ko.observable([]),
    projects: ko.observable([])
};

function showGenericModal(title, message) {
    $(".modal-title").html(title);
    $(".modal-body").html(message);
    $("#genericModal").modal({
        backdrop: 'static',
        keyboard: false
    });
}

function initializeTeams() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: "https://nameless-earth-78519.herokuapp.com/teams-raw",
            type: "GET",
            contentType: "application/json"
        }).done(function (teamsData) {
            viewModel.teams = ko.mapping.fromJS(teamsData);
            resolve(teamsData);
        }).fail(function (error) {
            reject("Error loading the team data.");
        })
    });
}

function initializeEmployees() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: "https://nameless-earth-78519.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        }).done(function (employeesData) {
            viewModel.employees = ko.mapping.fromJS(employeesData);
            resolve(employeesData)
        }).fail(function (error) {
            reject("Error loading the employee data");
        })
    })
}

function initializeProjects() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: "https://nameless-earth-78519.herokuapp.com/projects",
            type: "GET",
            contentType: "application/json"
        }).done(function (projectsData) {
            viewModel.projects = ko.mapping.fromJS(projectsData);
            resolve(projectsData)
        }).fail(function (error) {
            reject("Error loading the project data");
        })
    })
}

function saveTeam() {
    let currentTeam = this;
    $.ajax({
        url: "https://nameless-earth-78519.herokuapp.com/team/ + currentTeam._id()",
        type: "PUT",
        data: JSON.stringify({
            Projects: currentTeam.Projects(),
            Employees: currentTeam.Employees(),
            TeamLead: currentTeam.TeamLead()
        }),
        contentType: "application.json"
    }).done(function (teamInformationUpdated) {
        showGenericModal("Success", currentTeam.TeamName() + "Updated Successfully")
    }).fail(function (error) {
        showGenericModal("Error", "Error updated the team information")
    })
    
}

$(function() {
    initializeTeams()
    .then(initializeEmployees)
    .then(initializeProjects)
    .then(function() {
        ko.applyBindings(viewModel);
        $(".multiple").multipleSelect({filter:true});
        $(".single").multipleSelect({single:true, filter:true});
    }).catch(function(rejectedPromise) {
        showGenericModal("Error", rejectedPromise);
    })
})

