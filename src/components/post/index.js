import React, { Component } from 'react';
import './index.css';

export default class Post extends Component{

  render(){
    return(
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.description}</p>
      </div>
    )
  }
}
