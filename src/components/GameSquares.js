import React, { Component } from 'react';
import UUID from 'uuid';

class GameSquares extends Component {
    differentSquares = () => {
        return this.props.colorsArr.map((color, i) => (
          <div key={UUID()} className="square" style={{backgroundColor: `${color}`}} onClick={() => this.props.checkClickedColor(color, i)} />
        ));
    }

    render() {
        return (
            <div className="game-squares">

                {this.differentSquares()}

            </div>
        );
    }
}

export default GameSquares;
