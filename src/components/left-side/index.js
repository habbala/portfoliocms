import React, { Component } from 'react';
import './index.css';
import Post from '../post'
import {setPost} from '../../actions';
import {connect} from 'react-redux';
import ChatBot from 'react-simple-chatbot';

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
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}, nice to meet you!',
              end: true,
            },
          ]}
        />
      </div>
    )
  }
}

const connectedLeftSide = connect(mapStateToProps, null)(LeftSide);

export default connectedLeftSide;
