import React, { Component } from 'react';
import './index.css';
import ListItem from '../list-item'

export default class ListComponent extends Component{
  
  render(){
    return(
      <div className="list-container">

        {this.props.posts.map((post) => {
          return(<ListItem post = {post} key={post}/>);
        })}

    </div>
    )
  }
}
