import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

class App extends Component {

  render() {
    
    const formatName = user => `${user.firstName} ${user.lastName}`;

    const displayAvatar = (user) => {
      if(user.avatarUrl){
        return <img src={user.avatarUrl} />
      } else {
        return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
      }
    }

    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl: 'https://i.pinimg.com/originals/94/ed/9c/94ed9cc0054652a2e15469d9d81a9126.jpg'
    };
    
    const element = (
      <h2>
        Hello, {formatName(user)}!
      </h2>
    );
 
    return (
      <div className="App">
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
        <h1> Hello Ironhackers! </h1>
        {element}
        {displayAvatar(user)}
      </div>
    );
  }
}

export default App;
