import React, { Component } from 'react';

class GameControls extends Component {
    render() {
        return (
            <div className="game-controls">

                <p className="new-game" onClick={() => this.props.randomColors(6)}>{this.props.newGameText}</p>
                <p className="progress-text">{this.props.progressText}</p>
                <p className="level" onClick={() => this.props.gameDifficulty(3)}>Easy</p>
                <p className="level" onClick={() => this.props.gameDifficulty(6)}>Hard</p>
                
            </div>
        );
    }
}

export default GameControls;
