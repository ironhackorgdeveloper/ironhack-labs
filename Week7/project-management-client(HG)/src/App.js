import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar/NavBar';
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import TaskDetails from './components/tasks/TaskDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} />
      </Switch>
    </div>
  );
}

export default App;
