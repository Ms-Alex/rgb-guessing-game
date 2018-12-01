import React, { Component } from 'react';

class GameHeader extends Component {
    render() {
        return <div id="game-header">
            <h1>
              The Cool 
              <br />
              <span class="pickedColor">{this.props.colorGuess}</span> 
              <br />
              Guessing Game
            </h1>
          </div>;
    }
}

export default GameHeader;
