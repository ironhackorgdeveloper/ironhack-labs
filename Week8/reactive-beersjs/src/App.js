import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/home-card/Home';
import Navbar from './components/navbar/Navbar';
import AllBeers from './components/beer/AllBeers';
import RandomBeer from './components/beer/RandomBeer';
import NewBeer from './components/beer/NewBeer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/'><Navbar /></Link>
      <Switch>
        <Route exact patch="/" component={Home} />
        <Route exact path="/all-beers" component={AllBeers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
