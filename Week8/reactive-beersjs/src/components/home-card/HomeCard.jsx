import React from 'react';
import './home-card.css';

const HomeCard = (props) => {
  return(
    <div className="home-card">
      <figure><img src={props.imgUrl} alt={props.title}/></figure>
      <div className="title">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default HomeCard;
