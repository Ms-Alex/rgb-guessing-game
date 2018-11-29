import React, { Component } from 'react';
import GameHeader from './components/GameHeader';
import GameControls from './components/GameControls';
import GameSquares from './components/GameSquares';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <GameHeader />
          <GameControls />
          <GameSquares />

      </div>
    );
  }
}

export default App;
