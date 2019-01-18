/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: William Vuong Student ID: 105165179 Date: September 28, 2018
*
*
********************************************************************************/
$(function() {
    let employeesModel = [];

    initializeEmployeesModel();
    $("#employee-search").keyup(function() {
        let filteredEmployeesModel = getFilteredEmployeesModel($('#employee-search').val());
        refreshEmployeeRows(filteredEmployeesModel);
    });
    
    function initializeEmployeesModel() {
        $.ajax({
            url: "https://nameless-earth-78519.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        }).done(function (employeesData) {
            employeesModel = employeesData;
            refreshEmployeeRows(employeesModel);
        }).fail(function (err) {
            showGenericModal('Error', 'Unable to get Employees');
        })
    }

    function showGenericModal(title, message) {
        $(".modal-title").html(title);
        $(".modal-body").html(message);
        $("#genericModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    }

    function refreshEmployeeRows(employees) {
        let employeesTemplate = _.template(
            '<% _.forEach(employees, function(tempEmployee) { %>' + 
            '<div class="row body-row" data-id="<%- tempEmployee._id %>">' +
            '<div class="col-xs-4 body-column"><%- tempEmployee.FirstName %></div>' +
            '<div class="col-xs-4 body-column"><%- tempEmployee.LastName %></div>' +
            '<div class="col-xs-4 body-column"><%- tempEmployee.Position.PositionName %></div>' +
            '</div>' +
            '<% }); %>' 
        );

        let employeesTemplateInvoke = employeesTemplate({'employees': employees});
        let tempEmployeesTable = $('#employees-table');
        tempEmployeesTable.empty();
        tempEmployeesTable.append(employeesTemplateInvoke);
        
        $(".body-row").on("click", function() {
            let idEmployee = getEmployeeModelById($(this).attr("data-id"));
            let mHireDate = moment(idEmployee.HireDate);
            let mHireDate1 = mHireDate.utc();
            let mHireDate2 = mHireDate1.format('LL');
            let employeeTemplate = _.template(
                //'<% _.forEach(employee, function(tempEmployee) { %>' +
                '<strong>Address:</strong> <%- tempEmployee.AddressStreet %> <%- tempEmployee.AddressCity %>, <%- tempEmployee.AddressState %> <%- tempEmployee.AddressZip %>' +
                '<br>' +
                '<strong>Phone Number:</strong> <%- tempEmployee.PhoneNum %>' + 
                ' ext: ' +
                '<%- tempEmployee.Extension %>' +
                '<br>' +
                '<strong>Hire Date: </strong>' + mHireDate2 
                //'<% }); %>'
            );
            let employeeTemplateCall = employeeTemplate({'tempEmployee': idEmployee});
            //console.log(idEmployee);
            showGenericModal(idEmployee.FirstName + ' ' + idEmployee.LastName, employeeTemplateCall);
        });
    }

    function getFilteredEmployeesModel(filterString) {
        let employeesFilter = _.filter(employeesModel, function(tempEmployee) {
            //return tempEmployeesModel.FirstName == filterString || tempEmployeesModel.LastName == filterString || tempEmployeesModel.Poistions.PositionName == filterString;
            return _.includes(tempEmployee.FirstName.toLowerCase(), filterString.toLowerCase()) || 
            _.includes(tempEmployee.LastName.toLowerCase(), filterString.toLowerCase()) || 
            _.includes(tempEmployee.Position.PositionName.toLowerCase(), filterString.toLowerCase());
        })
        return employeesFilter;
    }

    function getEmployeeModelById(id) {
        let findIndexEmployee = _.find(employeesModel, function(tempEmployee) {
            return tempEmployee._id == id;
        })
        
        if (findIndexEmployee) {
            return _.cloneDeep(findIndexEmployee)
        } else {
            return null;
        }
    }
});




/*********************************************************************************
*  WEB422 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: William Vuong Student ID: 105165179 Date: September 14, 2018
*
*
*******************************************************************************
$(function() {
    $("#teams-menu").on("click", function() {
        event.preventDefault();
        $.ajax({
            url: "https://nameless-earth-78519.herokuapp.com/teams",
            type: "GET",
            contentType: "application/json"
        }).done(function (teamsData) {
            $("#data").empty(); 
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
  });*/
