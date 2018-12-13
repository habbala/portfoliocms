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
      colors: CATEGORY_COLORS,
    }

    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount(){

    switch(this.props.post.fields.category){

      case "Web":
        this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.WEB}, 0.65)`});
        break;

      case "Games":
      this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.GAMES}, 0.65)`});
      break;

      case "About":
      this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.ABOUT}, 0.65)`});
      break;

      case "Photo":
      this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.PHOTO}, 0.65)`});
      break;

      case "App":
      this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.APP}, 0.65)`});
      break;

      default:
      this.setState({backgroundColor: `rgba(${CATEGORY_COLORS.DEFAULT}, 0.65)`});
      break;
    }
  }

  eventHandler(event){
    this.props.setPost(this.state.post);
    this.props.setBackground(this.state.backgroundColor);
  }

//  <div className = "list-item" style={{backgroundImage: "url("+this.state.post.fields.featuredImage.fields.file.url+")"}}/>


  render(){
    let imageStyle={
      opacity: 1,
      borderColor: '#fff',
      borderWidth: '100px',
      backgroundImage: "url("+this.state.post.fields.featuredImage.fields.file.url+")",
      backgroundSize: '50%',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      transition: '1s',
    }

    let colorStyle={
      opacity: 1,
      backgroundColor: this.state.backgroundColor,
      transition: '1s',
      height: '100%',
      position: 'relative',
      top: '0%',
      overflow: 'hidden',
      paddingLeft: '5%',
    }

    return(
        <div className = "list-item-image" style = {imageStyle}  onClick = {this.eventHandler}>
          <div className = "list-item-color" style={colorStyle}>
            <p>{this.state.post.fields.category}</p>
            <h3>{this.state.post.fields.title}</h3>
          </div>
      </div>
    )
  }
}

const connectedItem = connect(mapStateToProps, mapDispatchToProps)(Item);

export default connectedItem;
