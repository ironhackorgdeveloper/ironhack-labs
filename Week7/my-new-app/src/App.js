import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import { link } from 'fs';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {
        firstName: "Ana",
        lastName: "Hello",
        avatarUrl:
          "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
      },
      clickCount: 0,
      backColor: "yellow"
    }
    this.numbers = ['Hello', 'World', 'There', 'is', 1, 'React'];

    this.clickHandler = this.clickHandler.bind(this);
    
    this.numbersLis = this.numbersLis.bind(this);
  };

  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  clickHandler() {
    const newCount = this.state.clickCount + 1;

      this.setState({
        clickCount: newCount,
    });
  };

  numbersLis() {
    const elems = this.numbers.map((el) => {
      return <li>{el}</li> 
    });
    return elems;
  }

  render(){
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}>Click me</button>
        <ul>{this.numbersLis()}</ul>
      </div>
    );
  }
}

export default App;
