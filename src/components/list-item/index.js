import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {setPost, setBackground} from '../../actions';
import Image from 'react-ideal-image';

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
        this.setState({backgroundColor: "rgba(255, 114, 109, 1)"});
        break;

      case "Games":
        this.setState({backgroundColor: "rgba(82, 166, 211, 1)"});
        break;

      case "About":
        this.setState({backgroundColor: "rgba(64, 63, 76, 1)"});
        break;

      case "Photo":
        this.setState({backgroundColor: "rgba(164, 201, 159, 1)"});
        break;

      case "App":
        this.setState({backgroundColor: "rgba(247, 240, 165, 1)"});
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
