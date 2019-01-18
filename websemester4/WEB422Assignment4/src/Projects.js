import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get("https://nameless-earth-78519.herokuapp.com/projects").then((res) => {
            this.setState({
                projects: res.data
            });
        }).catch((err) => {
            console.log("Error")
        });
    }

    render() {
        return (
            <MainContainer sidebar="Projects">
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>

                        {this.state.projects.map((tempProjects, index) => {
                            let startDate = moment(tempProjects.ProjectStartDate).format('LL');
                            let endDate = moment(tempProjects.ProjectEndDate).format('LL');

                            return (
                                <tr>
                                    <td key={index}>{tempProjects.ProjectName} </td>
                                    <td key={index}>{tempProjects.ProjectDescription}</td>
                                    <td key={index}>{startDate}</td>
                                    <td key={index}>{(tempProjects.ProjectEndDate == null ? 'n/a' : endDate)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Projects;