import React, { Component } from 'react';
import './index.css';

export default class Post extends Component{

  render(){
    return(
      <div>
      console.log(this.props);
        <h2>{this.props.post.fields.title}</h2>
        <p>{this.props.post.fields.description}</p>
      </div>
    )
  }
}
