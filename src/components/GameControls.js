import React, { Component } from 'react';

class GameControls extends Component {
    render() {
        return (
            <div className="game-controls">

                <p>New Colors or Play Again</p>
                <p>{this.props.progressText}</p>
                <p className="level" onClick={() => this.props.randomColors(3)}>Easy</p>
                <p className="level" onClick={() => this.props.randomColors(6)}>Hard</p>
                
            </div>
        );
    }
}

export default GameControls;
