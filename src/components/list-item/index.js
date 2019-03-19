import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {setPost, setBackground} from '../../actions';
import {CATEGORY_COLORS} from '../../constants/colors'

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
      opacity: 0.65,
    }

    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount(){

    switch(this.props.post.fields.category){

      case "Web":
        this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.WEB}, 1)`});
        break;

      case "Games":
        this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.GAMES}, 1)`});
        break;

      case "About":
        this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.ABOUT}, 1)`});
        break;

      case "Photo":
        this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.PHOTO}, 1)`});
        break;

      case "App":
        this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.APP}, 1)`});
        break;

      default:
        this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.DEFAULT}, 1)`});
        break;
    }
  }

  eventHandler(event){
    this.props.setPost(this.state.post);
    this.props.setBackground(this.state.backgroundColor);
  }

  render(){
    let imageStyle={
      backgroundImage: "url("+this.state.post.fields.featuredImage.fields.file.url+")",
      backgroundColor: this.state.backgroundColor,
      borderColor: this.state.backgroundColor,
    }

    let titleStyle={
      backgroundColor: this.state.backgroundColor,
    }

    return(
      <div className = "list-item-container" style = {imageStyle}  onClick = {this.eventHandler}>
        <div className="title-container" style={titleStyle}>
          <h3>{this.state.post.fields.title}</h3>
        </div>
      </div>
    )
  }
}

const connectedItem = connect(mapStateToProps, mapDispatchToProps)(Item);

export default connectedItem;
