import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {setPost, setBackground} from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    setPost: post => dispatch(setPost(post)),
    setBackground: color => dispatch(setBackground(color)),
  };
};

const mapStateToProps = state => {
  return {
    selectedPost: state.post,
  };
}

const randomColor = require('randomcolor');

class Item extends Component{

  constructor(props){
    super(props)

    this.state = {
      post: props.post,
      backgroundColor: '',
    }

    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount(){
    switch(this.props.post.fields.category){

      case "Web":
        this.setState({backgroundColor: "rgba(248, 6, 6, 0.5)"});
        break;

      case "Games":
        this.setState({backgroundColor: "rgba(34, 138, 225, 0.5)"});
        break;

      case "About":
        this.setState({backgroundColor: "rgba(240, 240, 18, 0.5)"});
        break;

      case "Photo":
        this.setState({backgroundColor: "rgba(5, 217, 77, 0.5)"});
        break;

      case "App":
        this.setState({backgroundColor: "rgba(249, 246, 31, 0.5)"});
        break;

      default:
        this.setState({backgroundColor: "rgba(1, 1, 1, 0.5)"});
        break;
    }
  }

  eventHandler(event){
    this.props.setPost(this.state.post);
    this.props.setBackground(this.state.backgroundColor);
  }

  render(){
    return(
      <div className = "list-item" style={{background: this.state.backgroundColor}} onClick = {this.eventHandler}>
        <div className = "overlay">
          <img src = {this.state.post.fields.featuredImage.fields.file.url}/>
          <p>{this.state.post.fields.category}</p>
          <h3>{this.state.post.fields.title}</h3>
        </div>
      </div>
    )
  }
}

const connectedItem = connect(mapStateToProps, mapDispatchToProps)(Item);

export default connectedItem;
