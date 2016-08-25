import React, { Component } from 'react';
import Axios from 'axios';

import logo from './logo.svg';
import './App.css';

import Movie from './components/movie';

class App extends Component {
  componentDidMount() {
    let title = 'star wars',
        url = `http://www.omdbapi.com/?s=${title}`;

    // fetch(url)
    //   .then((response) => response.json())
    //   .then(function(json) {
    //     this.setState({movies: json})
    //   });

    Axios.get(url)
      .then(function (response) {
        debugger;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Movie/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
