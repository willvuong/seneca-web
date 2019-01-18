import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer';

class Employees extends Component {
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
            <MainContainer sidebar="Employees">
                <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>Name & Position</th>
                            <th>Address</th>
                            <th>Phone Num</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>

                        {this.state.employees.map((tempEmployees, index) => {
                            let hireDate = moment(tempEmployees.HireDate).format('LL');
                            
                            return (
                                <tr>
                                    <td key={index}>{tempEmployees.FirstName} {tempEmployees.LastName} - {tempEmployees.Position.PositionName} </td>
                                    <td key={index}>{tempEmployees.AddressStreet}, {tempEmployees.AddressCity} {tempEmployees.AddressState}, {tempEmployees.AddressZip}</td>
                                    <td key={index}>{tempEmployees.PhoneNum} ex: {tempEmployees.Extension}</td>
                                    <td key={index}>{hireDate}</td>
                                    <td key={index}>$ {tempEmployees.SalaryBonus}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Employees;