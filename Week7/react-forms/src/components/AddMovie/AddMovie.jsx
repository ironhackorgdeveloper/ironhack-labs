import React, { Component } from 'react';
import './add-movie.css';

class AddMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      director: '',
      hasOscars: false,
      IMDBRating: ''
    }

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleDirectorInput = this.handleDirectorInput.bind(this);
    this.handleHasOscarCheck = this.handleHasOscarCheck.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTitleInput(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleDirectorInput(event) {
    this.setState({
      director: event.target.value
    });
  }

  handleHasOscarCheck(event) {
    this.setState({
      hasOscars: event.target.type ===  'checkbox' ? event.target.checked : event.target.value
    });
  }
  
  handleRating(event) {
    this.setState({
      IMDBRating: event.target.value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addTheMovie(this.state);   
    this.setState({
      title: '',
      director: '',
      hasOscars: false,
      IMDBRating: '' 
    })  
  }

  render() {
    return(
      <div className = "add-movie">
      <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleTitleInput(e)} />

          <label>Director:</label>
          <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleDirectorInput(e)} />

          <label>Oscar Awarded:</label>
          <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleHasOscarCheck(e)} />
          
          <label>IMDb Rating:</label>
          <input type="text" name="IMDbRating" value={this.state.IMDBRating} onChange={(e) => this.handleRating(e)} />
          
          <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default AddMovie;
