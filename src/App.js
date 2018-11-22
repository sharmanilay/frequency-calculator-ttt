import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation/navbar.js'
import MainDiv from './main-div.js'
import Logo from './logo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <MainDiv />
      </div>
    );
  }
}

export default App;
