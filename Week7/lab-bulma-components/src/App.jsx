import React, { Component } from 'react';
import NavBar from './NavBar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Signup from './Signup';

class App extends Component {
  render(){
    return (
      <div>
        {/* <header id="header">
          <NavBar />
        </header>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class" name="Button 1" />
        <CoolButton isSmall isSuccess name="Button 2" /> */}
        <Signup />
      </div>
    )
  }
}

export default App;
