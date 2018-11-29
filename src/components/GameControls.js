import React, { Component } from 'react';

class GameControls extends Component {
    render() {
        return <div className="game-controls">
            <span className="new-game" onClick={() => this.props.randomColors(6)}>
              {this.props.newGameText}
            </span>
            <span className="progress-text">
              {this.props.progressText}
            </span>
            <span className="level" onClick={() => this.props.gameDifficulty(3)}>
              Easy
            </span>
            &nbsp;
            <span className="level" onClick={() => this.props.gameDifficulty(6)}>
              Hard
            </span>
          </div>;
    }
}

export default GameControls;
