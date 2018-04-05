import React, { Component } from 'react';
import './index.css';

export default class Post extends Component{

  render(){

    return(
      <div>
        <h2>{this.props.post.fields.title}</h2>
        <img src = {this.props.post.fields.featuredImage}/>
        <p>{this.props.post.fields.description}</p>
      </div>
    )
  }
}
