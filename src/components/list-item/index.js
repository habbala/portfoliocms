import React, { Component } from 'react';
import './index.css';

export default class Post extends Component{

  constructor(props){
    super(props)

    this.state = {
      post: props.post,
    }
  }

  render(){
    return(
      <div>
        <h3>{this.state.post.fields.title}</h3>
        <img src = {this.state.post.fields.featuredImage}/>
      </div>
    )
  }
}
