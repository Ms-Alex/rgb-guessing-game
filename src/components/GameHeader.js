import React, { Component } from 'react';

class GameHeader extends Component {
    render() {
        return (
            <div className="game-header">
                <h1>Cool RGB Guessing Game</h1>

                <h2>{this.props.colorGuess.toUpperCase()}</h2>
            </div>
        );
    }
}

export default GameHeader;
