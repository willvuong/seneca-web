import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './MainContainer';

class Teams extends Component {
    constructor() {
        super();
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get("https://nameless-earth-78519.herokuapp.com/teams").then((res) => {
            this.setState({
                teams: res.data
            });
        }).catch((err) => {
            console.log("Error")
        });
    }

    render() {
        return (
            <MainContainer sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>

                        {this.state.teams.map((tempTeams, index) => {
                            return (
                                <tr>
                                    <td key={index}>{tempTeams.TeamName} </td>
                                    <td key={index}>{tempTeams.Projects.map((tempProjects, index) => {
                                        return (
                                            <li key={index}>{tempProjects.ProjectName}</li>
                                        )
                                    })}</td>
                                    <td key={index}>{tempTeams.Employees.length}</td>
                                    <td key={index}>{tempTeams.TeamLead.FirstName} {tempTeams.TeamLead.LastName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Teams;