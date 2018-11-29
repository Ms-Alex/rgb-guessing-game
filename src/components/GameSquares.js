import React, { Component } from 'react';
import UUID from 'uuid';

class GameSquares extends Component {
    differentSquares = () => {
        return this.props.colorsArr.map(color => (
          <div key={UUID()} className="square" style={{backgroundColor: `${color}`}} />
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
