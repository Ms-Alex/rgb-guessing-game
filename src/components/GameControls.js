import React, { Component } from 'react';

class GameControls extends Component {
    render() {
        return <div className="game-controls">
            <button className="new-game" onClick={() => this.props.randomColors(6)}>
              {this.props.newGameText}
            </button>
            <span className="progress-text">
              {this.props.progressText}
            </span>
            <button id="easyBtn" className="level" onClick={() => this.props.gameDifficulty(3)}>
              Easy
            </button>
            &nbsp;
            <button id="hardBtn" className="level" onClick={() => this.props.gameDifficulty(6)}>
              Hard
            </button>
          </div>;
    }
}

export default GameControls;
