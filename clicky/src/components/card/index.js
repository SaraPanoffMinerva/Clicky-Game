import React, { Component } from 'react';
import './index.css';


class Card extends Component {
    // constructor(props) {
    //     super(props)
    // }
  render() {
      const img = {
          height: '200px',
          width: '200px',
      }
    return (
      <div style={img}>
          <img style={img} src={this.props.img} alt={'snazzy pic'}/>
      </div>
    );
  }
}

export default Card;