import React, { Component } from 'react';
import './index.css';
import Post from '../post'
import {setPost} from '../../actions';
import {connect} from 'react-redux';
import MyChatbot from '../chatbot';

const mapStateToProps = state => {
  return {
    post: state.post,
    backgroundColor: state.backgroundColor,
  };
}

class LeftSide extends Component{

  render(){
    return(
      <div className="left-container" style={{background: this.props.backgroundColor}}>
        <Post/>
        <MyChatbot/>
      </div>
    )
  }
}

const connectedLeftSide = connect(mapStateToProps, null)(LeftSide);

export default connectedLeftSide;
