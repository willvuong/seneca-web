import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EmployeesPanel extends Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get("https://nameless-earth-78519.herokuapp.com/employees").then((res) => {
            this.setState({
                employees: res.data
            });
        }).catch((err) => {
            console.log("Error")
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Employees</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.employees.map((tempEmployees, index) => {
                                    return (
                                        <tr>
                                            <td key={index}>{tempEmployees.FirstName} {tempEmployees.LastName} </td>
                                            <td key={index}>{tempEmployees.Position.PositionName}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                </div>
            </div>
        );
    }
}

export default EmployeesPanel;