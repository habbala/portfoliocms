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

class Item extends Component{

  constructor(props){
    super(props)

    this.state = {
      post: props.post,
      backgroundColor: '',
      color: '#403F4C',
    }

    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount(){
    switch(this.props.post.fields.category){

      case "Web":
        this.setState({backgroundColor: "rgba(255, 114, 109, 0.8)"});
        break;

      case "Games":
        this.setState({backgroundColor: "rgba(82, 166, 211, 0.8)"});
        break;

      case "About":
        this.setState({backgroundColor: "rgba(64, 63, 76, 0.8)", color: "#52A6D3"});
        break;

      case "Photo":
        this.setState({backgroundColor: "rgba(164, 201, 159, 0.8)"});
        break;

      case "App":
        this.setState({backgroundColor: "rgba(247, 240, 165, 0.8)"});
        break;

      default:
        this.setState({backgroundColor: "rgba(1, 1, 1, 0.8)"});
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
        <img src = {this.state.post.fields.featuredImage.fields.file.url} alt=""/>
          <p style={{color: this.state.color}}>{this.state.post.fields.category}</p>
          <h3 style={{color: this.state.color}}>{this.state.post.fields.title}</h3>
        </div>
      </div>
    )
  }
}

const connectedItem = connect(mapStateToProps, mapDispatchToProps)(Item);

export default connectedItem;
