import React, { Component } from 'react';
import Wrapper from '../../components/wrapper';
import Header from '../../components/header';
import Left from '../../components/left-side';
import Right from '../../components/right-side';
import {connect} from 'react-redux';
import {setPosts, setPost} from '../../actions';

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'q5d90ddpmtuz',
  accessToken: '8e5c9cbf2509af385100ca4224368f3296c167ff7dccb291a5f058819c4df1f3',
  host: 'cdn.contentful.com'
});

const mapStateToProps = state => {
  return {
    posts: state.posts,
    post: state.post,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setPosts: posts => dispatch(setPosts(posts)),
    setPost: post => dispatch(setPost(post))
  };
};

class HomeScreen extends Component {

  componentDidMount(){
    this.setPostList();
  };

  setPostList(){
    client.getEntries({'content_type' : 'portfolioProject'})
      .then((response) => {
        this.props.setPosts(response.items);
        this.props.setPost(response.items[0]);
      })
      .catch(function(error){
        console.log('error' + error);
    });
  };

  render(){

    const postViews = this.props.posts.length > 0 ? (
      <Wrapper>
        <Header/>
        <Left/>
        <Right posts = {this.props.posts}/>
      </Wrapper>
    ) : (
      <Wrapper>
        <Header/>
      </Wrapper>
    );

    return(
      <div>
        {postViews}
      </div>
    );
  }
}

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default connectedHome;
