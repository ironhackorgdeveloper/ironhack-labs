import React, { Component } from 'react';
import NavBar from './NavBar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <FormField type="text" name="name" label="Name" placeholder="Jon Snow" />
        <FormField type="text" name="email" label="Email" placeholder="jonsnow@winterfell.com" />
        <FormField type="password" name="password" label="password" placeholder="*********" />
        <CoolButton isRounded isSuccess name="Signup" type="submit" />
      </div>
    );
  };
};

export default Signup;
