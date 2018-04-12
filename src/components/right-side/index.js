import React, { Component } from 'react';
import './index.css';
import ListItem from '../list-item'

export default class RightSide extends Component{

  postList(){
    return(
      this.props.posts.map((post) => {
        return(<ListItem post = {post}/>);
      })
    )
  }

  render(){
    return(
      <div className = "right-container" >
        {this.postList()}
      </div>
    )
  }
}
