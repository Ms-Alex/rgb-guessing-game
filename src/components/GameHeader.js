import React, { Component } from 'react';

class GameHeader extends Component {
    render() {
        return <div id="game-header">
            <h1>
              The Cool <span>{this.props.colorGuess.toUpperCase()}</span> Guessing Game
            </h1>
          </div>;
    }
}

export default GameHeader;
