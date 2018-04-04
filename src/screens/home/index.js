import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'
import Left from '../../components/left-side'
import Right from '../../components/right-side'
import postList from '../../mock/posts.js'

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'q5d90ddpmtuz',
  accessToken: '8e5c9cbf2509af385100ca4224368f3296c167ff7dccb291a5f058819c4df1f3',
  host: 'cdn.contentful.com'
})

export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount(){
    client.getEntries()
      .then((response) => {
        this.setState({
          posts: response.items
        })
        console.log(this.state.posts)
      })
      .catch(function(error){
        console.log(error);
    });
  }

  render() {

    return (
      <Wrapper>
        <Header/>
        <Left post = {this.state.posts[0]}/>
        <Right posts = {this.state.posts}/>
      </Wrapper>
    );
  }
}
