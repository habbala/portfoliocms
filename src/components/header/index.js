import React, { Component } from 'react';
import './index.css';
import Wobble from 'react-reveal/Wobble';

export default class Header extends Component{
  render(){
    return(
      <div className="header-container">
        <Wobble>
          <h1>JESPER BLOMQVIST PORTFOLIO (UNDER CONSTRUCTION)</h1>
        </Wobble>
      </div>
    )
  }
}
