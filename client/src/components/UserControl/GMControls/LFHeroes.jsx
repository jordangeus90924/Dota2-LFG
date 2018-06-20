import React, { Component } from 'react';
import {Button, FormGroup} from 'react-bootstrap';

class LFHeroes extends Component {
  onClickLFHeroes = () => {
    this.props.onClick();
  }
  
  render() {
    return (
        <Button bsStyle="danger" onClick={this.onClickLFHeroes} className="LFHeroesButton">{this.props.LFHeroesText}</Button>
    );
  }
}

export default LFHeroes;