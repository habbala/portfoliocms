import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
import {setPost} from '../../actions';

const mapStateToProps = state => {
  return {
    post: state.post,
  };
}

class Post extends Component{

  render(){
    if(this.props.post !== ""){
      return(
        <div>
          <h2>{this.props.post.fields.title}</h2>
          <img className = "post-img" src = {this.props.post.fields.featuredImage.fields.file.url} alt=""/>
          {/*
            slideshow
          */}
          <p>{this.props.post.fields.description}</p>
        </div>
      );
    } else {
      return(
        <div>empty</div>
      );
    }
  }
}

const connectedPost = connect(mapStateToProps, null)(Post);
export default connectedPost;
