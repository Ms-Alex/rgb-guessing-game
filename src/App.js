import React, { Component } from 'react';
import GameHeader from './components/GameHeader';
import GameControls from './components/GameControls';
import GameSquares from './components/GameSquares';
import './App.css';

class App extends Component {
  state = {
    colorsArr: [],
    colorGuess: "",
    progressText: ""
  }

  componentDidMount(){
    this.randomColors(6);
  }

  randomColors = (size) => {
    let newColors = new Array(size)
      .fill(1)
      .map(
        e => `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)})`
      );
    let newColorGuess = newColors[Math.floor(Math.random() * (size-1))]
    this.setState({
      colorsArr: newColors, 
      colorGuess: newColorGuess
    })
  }

  checkClickedColor = (color) => {

  }

  render() {
    console.log("colors Arr: ", this.state.colorsArr);
    console.log("color Guess: ", this.state.colorGuess);

    return (
      <div className="App">

          <GameHeader colorGuess={this.state.colorGuess} />
          <GameControls randomColors={this.randomColors} progressText={this.state.progressText} />
          <GameSquares colorsArr={this.state.colorsArr} />

      </div>
    );
  }
}

export default App;
