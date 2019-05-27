import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar/NavBar';
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import Signup from './components/auth/Signup';
import AuthService from './components/auth/auth-service';
import Login from './components/auth/Login';

class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
  
  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <NavBar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <Switch> 
            <Route exact path="/projects" component={ProjectList}/>
            <Route exact path="/projects/:id" render={(props) => <ProjectDetails {...props} loggedInUser={this.state.loggedInUser} />  } />   
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavBar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <Switch> 
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path='/' render={() => <Login getUser={this.getTheUser}/>}/>
          </Switch>
        </div>
      );
    }
  }
}

export default App;
