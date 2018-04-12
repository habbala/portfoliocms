import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {setPost} from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    setPost: post => dispatch(setPost(post))
  };
};

const mapStateToProps = state => {
  return {
    selectedPost: state.post,
  };
}

class Item extends Component{

  constructor(props){
    super(props)

    this.state = {
      post: props.post,
    }

    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(event){
    this.props.setPost(this.state.post);
  }

  render(){
    console.log(this.state.post.fields.featuredImage);
    return(
      <div className = "list-item" onClick = {this.eventHandler}>
        <h3>{this.state.post.fields.title}</h3>
        <img src = {this.state.post.fields.featuredImage.fields.file.url}/>
      </div>
    )
  }
}

const connectedItem = connect(mapStateToProps, mapDispatchToProps)(Item);

export default connectedItem;
