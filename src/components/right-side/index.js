import React, { Component } from 'react';
import './index.css';

export default class RightSide extends Component{
  render(){
    return(
      <div className="right-container">
        {this.props.posts.map((post)=>{
          return(
            <div>
              <h2>{post.title}</h2>
            </div>
          );
        })}
      </div>
    )
  }
}
