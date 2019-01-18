import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

class ProjectsPanel extends Component {
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
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map((tempProjects, index) => {
                                    let dayNumber = moment().diff([tempProjects.ProjectStartDate], 'days');
                                    return (
                                        <tr>
                                            <td key={index}>{tempProjects.ProjectName} </td>
                                            <td key={index}>Active {dayNumber} days </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        );
    }
}

export default ProjectsPanel;