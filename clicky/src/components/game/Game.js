import React, { Component } from 'react';
import './game.css';
import Card from '../card';
import cardData from './Dogs';




class Game extends Component {
  render() {
      const flex = {
          display: 'flex',
          flexWrap: 'wrap'
      }
    return (
        <div>
            <h1>The Game!</h1>
        <div style={flex}>
            {cardData.map( (item) => 
                <Card img={item.image}></Card>
            )}
        </div>
        </div>
    );
  }
}

export default Game;