import React, { Component } from 'react';
import './index.css';
import Post from '../post'

export default class LeftSide extends Component{

  render(){
    return(
      <div className="left-container">
        <Post post={this.props.post}/>
      </div>
    )
  }
}
