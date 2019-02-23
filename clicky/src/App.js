import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar';
import Game from './components/game/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Game></Game>
      </div>
    );
  }
}

export default App;
