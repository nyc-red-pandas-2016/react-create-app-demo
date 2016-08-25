import React, { Component } from 'react';
import MovieItem from './movie_item';

export default class Movie extends Component {
  render() {
    return (
      <div>
        <h1>I am a movie</h1>
        <MovieItem/>
        <DirectorReviews/>
      </div>
    );
  }
}



class DirectorReviews extends Component {
  render() {
    return (
      <p>I am the director reviews</p>
    );
  }
}