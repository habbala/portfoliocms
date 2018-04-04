import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'
import Left from '../../components/left-side'
import Right from '../../components/right-side'
import postList from '../../mock/posts.js'
import { initClient } from '../../services/contentfulClient'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount(){
    client.getEntries({'content_type': 'portfolioProject'}).then(function(response){
      this.state.setState(response => {return {posts: response}})
    })
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
