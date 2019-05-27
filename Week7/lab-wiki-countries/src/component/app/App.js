import React, { Component } from 'react';
import CountryDetail from '../countryDetail/CountryDetail'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const styles = {
  maxHeight: '80vh',
  overflow: 'scroll', 
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      countriesList: [],
    }
  }
  
  componentDidMount() {
    axios.get('http://206.189.7.127/countries/')
      .then((response) => {
        this.setState({
          countriesList: response.data
        })
      });
  }

  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <Link className="navbar-brand" to="/">WikiCountries</Link>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5" style={styles}>
                <div className="list-group">
                {
                  this.state.countriesList.map(country => <Link key={country.cca3} className="list-group-item list-group-item-action" to={`/${country.cca3}`}><span>{country.flag} {" " + country.name.common}</span></Link>)
                }
                </div>
              </div>
              <Switch>
                <Route path='/:id' render={(props) => <CountryDetail {...props} countriesList={this.state.countriesList} />} />
              </Switch>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
