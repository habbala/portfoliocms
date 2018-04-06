import React, { Component } from 'react';
import Wrapper from '../../components/wrapper';
import Header from '../../components/header';
import Left from '../../components/left-side';
import Right from '../../components/right-side';
import {connect} from 'react-redux';
import {setPosts} from '../../actions';

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'q5d90ddpmtuz',
  accessToken: '8e5c9cbf2509af385100ca4224368f3296c167ff7dccb291a5f058819c4df1f3',
  host: 'cdn.contentful.com'
});

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setPosts: posts => dispatch(setPosts(posts))
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
        console.log('setpostlist1'+response.items);
        console.log('setpostlist2'+this.props.posts);
      })
      .catch(function(error){
        console.log('error' + error);
    });
  };

  render(){
    console.log('render' + this.props);
    const postViews = this.props.length > 0 ? (
      <Wrapper>
        <Header/>
        <Left posts = {this.state.posts}/>
        <Right posts = {this.state.posts}/>
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
