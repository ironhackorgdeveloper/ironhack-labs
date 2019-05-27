
import React, { Component } from 'react';
import './movies-list.css';
import Card from './../card/Card';
import AddMovie from '../AddMovie/AddMovie'

class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
        { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
        { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
      ],
      showOscarAwarded: false
    }
    this.deleteMovieHandler = this.deleteMovieHandler.bind(this);
    this.toggleMovies = this.toggleMovies.bind(this);
    this.AddMovieHandler = this.AddMovieHandler.bind(this);
  }

  toggleMovies() {
    this.setState({ showOscarAwarded: !this.state.showOscarAwarded });
  }

  deleteMovieHandler(movieIndex) {
    const moviesCopy = [...this.state.movies];
    moviesCopy.splice(movieIndex, 1);
    this.setState({
        movies: moviesCopy
    })
  }

  AddMovieHandler(theMovie){
    const moviesCopy = [...this.state.movies];
    moviesCopy.push(theMovie);
    this.setState({
      movies: moviesCopy
    })
  }

  render() {
    const { showOscarAwarded } = this.state;

    this.filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars === showOscarAwarded);

    return (
      <div className='movies-list'>

        <button onClick={() => this.toggleMovies() }>
          {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
        </button>
        <AddMovie addTheMovie={this.AddMovieHandler} />
        {
          this.filteredMovies.map((oneMovie, index) => {
            return <Card key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
          })
        }            
      </div>
    );
  }
}

export default MoviesList;