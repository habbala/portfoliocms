import React, { Component } from 'react'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'
import Left from '../../components/left-side'
import Right from '../../components/right-side'

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
      posts: null,
    }

    console.log(this.state.posts);
  }

  componentDidMount(){
    this.setPostList()
  }

  setPostList(){
    client.getEntries({'content_type' : 'portfolioProject'})
      .then((response) => {
        this.setState({
          posts: response.items
        })
      })
      .catch(function(error){
        console.log('error' + error);
    });
  }

  render() {

    const postViews = this.state.posts != null ? (
      <Wrapper>
        <Header/>
        <Left posts = {this.state.posts}/>
        <Right posts = {this.state.posts}/>
      </Wrapper>
    ) : (
      <Wrapper>
        <Header/>
      </Wrapper>
    )

    return(
      <div>
        {postViews}
      </div>
    )
  }
}
