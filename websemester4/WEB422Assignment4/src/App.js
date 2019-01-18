/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: William Vuong Student ID: 105165179 Date: November 2, 2018
*
********************************************************************************/
import React, { Component } from 'react';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees'
import NotFound from './NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          
          <Route exact path='/' render={() => (
            <Overview />
          )}/>
          <Route exact path='/projects' render={() => (
            <Projects />
          )}/>
          <Route exact path='/teams' render={() => (
            <Teams />
          )}/>
          <Route exact path='/employees' render={() => (
            <Employees />
          )}/>
          <Route render={() => (
            <NotFound />
          )}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;