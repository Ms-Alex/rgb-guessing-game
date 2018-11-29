import React, { Component } from 'react';
import GameHeader from './components/GameHeader';
import GameControls from './components/GameControls';
import GameSquares from './components/GameSquares';
import './App.css';

class App extends Component {
  state = {
    difficulty: 6,
    colorsArr: [],
    colorGuess: "",
    progressText: "",
    newGameText: "New Colors"
  }

  componentDidMount(){
    this.randomColors(this.state.difficulty);
  }

  gameDifficulty = (num) => {
    if(num !== this.state.difficulty){
      this.setState({
        difficulty: num
      }, () => this.randomColors(this.state.difficulty));
    }
  }

  randomColors = () => {

    let newColors = new Array(this.state.difficulty)
      .fill(1).map(
        e => `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)})`
      );
    let newColorGuess = newColors[Math.floor(Math.random() * (this.state.difficulty-1))];
    this.setState({
      colorsArr: newColors, 
      colorGuess: newColorGuess
    }, () => this.winCheck() );
  }

  sameColor = (color) => {
    let sameColorArr = new Array(this.state.difficulty).fill(color)
    this.setState({
      colorsArr: sameColorArr
    });
  }

  winCheck = () => {
    if (this.state.newGameText !== "New Colors") this.setState({ newGameText: "New Colors", progressText: "" })
  }

  changeWrongColor = (index) => {
    let newArr = [...this.state.colorsArr];
    newArr[index] = "rgb(35, 35, 35)";
    this.setState({
      colorsArr: newArr
    });
  }

  checkClickedColor = (color, index) => {
    // set progressText 
    if(color === this.state.colorGuess){
      this.sameColor(color);
      this.setState({
        newGameText: "Play Again?",
        progressText: "Correct!"
      });
    } else {
      this.changeWrongColor(index);
      this.setState({
        progressText: "Try Again"
      });
    }
  }

  render() {
    console.log("colors Arr: ", this.state.colorsArr);
    console.log("color Guess: ", this.state.colorGuess);
    console.log("colorArr size: ", this.state.difficulty);

    return (
      <div className="App">

          <GameHeader colorGuess={this.state.colorGuess} />
          <GameControls randomColors={this.randomColors} progressText={this.state.progressText} gameDifficulty={this.gameDifficulty} newGameText={this.state.newGameText} />
          <GameSquares colorsArr={this.state.colorsArr} checkClickedColor={this.checkClickedColor} />

      </div>
    );
  }
}

export default App;
