import React, { Component } from 'react';
import GameHeader from './components/GameHeader';
import GameControls from './components/GameControls';
import GameSquares from './components/GameSquares';
import './App.css';
import $ from 'jquery';

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
    if(num !== this.state.difficulty && this.state.newGameText === "New Colors"){
      this.setState({
        difficulty: num
      }, () => this.randomColors(this.state.difficulty));
    }
  }

  randomColors = () => {
    let newColors = [];
    for(let i = 0; i < this.state.difficulty; i++){
      newColors.push(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
    }
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

  changeGameHeaderColor = (color) => {
    if(this.state.newGameText === "Play Again?") {
      $("#game-header").css("background-color", `${color}`);
    } else if (this.state.newGameText === "New Colors") {
      $("#game-header").css("background-color", "#c64cff");
    }
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

  toggleClassSelected = () => {
    if(this.state.difficulty === 6){
      $("#hardBtn").addClass("selected");
      $("#easyBtn").removeClass("selected");
    } else {
      $("#easyBtn").addClass("selected");
      $("#hardBtn").removeClass("selected");
    }
  }

  render() {

    return <div className="App">

        <GameHeader colorGuess={this.state.colorGuess} newGameText={this.state.newGameText} changeGameHeaderColor={this.changeGameHeaderColor} />
        <GameControls randomColors={this.randomColors} progressText={this.state.progressText} gameDifficulty={this.gameDifficulty} newGameText={this.state.newGameText} />
        <GameSquares colorsArr={this.state.colorsArr} checkClickedColor={this.checkClickedColor} />

        {this.changeGameHeaderColor(this.state.colorGuess)}
        {this.toggleClassSelected()}

      </div>;
  }
}

export default App;
