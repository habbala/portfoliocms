import React, { Component } from 'react';
import './index.css';

export default class Post extends Component{
  render(){
    console.log(this.props);

    return(
      <div>
        <h2>{this.props.post}</h2>
        <p>{this.props.post}</p>
      </div>
    )
  }
}
