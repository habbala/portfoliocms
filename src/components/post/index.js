import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';

const mapStateToProps = state => {
  return {
    post: state.post,
  };
}

class Post extends Component{

  constructor(props) {
		super(props);
    this.state = {
        imgIndex: 0,
        images: ['',],
    };

    this.nextImage = this.nextImage.bind(this);
  }

  nextImage(){
    if(this.state.imgIndex === this.props.post.fields.images.length-1){
      this.setState({
        imgIndex: 0
      });
    } else {
      this.setState({
        imgIndex: 1
      });
    }
  }

  render(){
    if(this.props.post !== ""){
      if(this.props.post !== this.state.post){

        return(
          <div>
            <h2>{this.props.post.fields.title}</h2>

            {this.props.post.fields.images.map((image) => {
              return(
                <img className='post-img' src = {image.fields.file.url} alt=""/>
              );
            })}
  
            <p>{this.props.post.fields.description}</p>
          </div>
        );
      }
    }

    return(
      <div>empty</div>
    );
  }
}

const connectedPost = connect(mapStateToProps, null)(Post);
export default connectedPost;
