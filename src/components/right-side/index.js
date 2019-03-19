import React, { Component } from 'react';
import './index.css';
import {CATEGORY_COLORS} from '../../constants/colors'
import ListComponent from '../list-component';

export default class RightSide extends Component{

  constructor(props){
    super(props);

    this.state = {
      postCategories: {
        app: [],
        web: [],
        games: [],
        photo: [],
        about: [],
        other: [],
        shuffle: [],
      },
      currentCategory: [],
      menu: false,
    }
    this.changeCategory = this.changeCategory.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  componentWillMount(){
    let newPosts= {
      app: [],
      web: [],
      games: [],
      photo: [],
      about: [],
      other: [],
      shuffle: [],
    }

    this.props.posts.map((post) => {
      newPosts.shuffle.push(post);

      switch(post.fields.category){
        case "Web":
          newPosts.web.push(post);
          break;
        case "Games":
          newPosts.games.push(post);
          break;
  
        case "About":
          newPosts.about.push(post);
          break;
  
        case "Photo":
          newPosts.photo.push(post);
          break;
  
        case "App":
          newPosts.app.push(post);
          break;

        default:
          newPosts.other.push(post);
          break;
      }
    })
    this.state.postCategories.photo.sort();
    this.setState({postCategories: newPosts}); 
    this.setState({currentCategory: newPosts.shuffle});
    this.compareBy.bind(this);
    this.sortBy.bind(this); 
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    console.log("now sorting");
    let arrayCopy = [...this.state.currentCategory];
    arrayCopy.sort(this.compareBy(key));
    this.setState({postCategories: arrayCopy});
  }

  openMenu(){
    if(this.state.menu){
      this.setState({menu: false});
    } else {
      this.setState({menu: true});
    }
  }

  // postListShuffle(){
  //   return(
  //     this.props.posts.map((post) => {
  //       return(<ListItem post = {post}/>);
  //     })
  //   )
  // }

  changeCategory(postArr){
    // let postArr = this.state.postCategories.web;
    let color = CATEGORY_COLORS.WEB;

    this.setState({currentCategory: postArr});

    this.setState({currentCategoryColor: color});
  }

  render(){
    console.log(this.state);
    let menuPos = '';
    if(this.state.menu){
      menuPos = ({left: 0});
    } else {
      menuPos = ({left: '10vh'});
    }

    return(
      <div className = "right-container" style={menuPos} onClick={this.openMenu.bind(this)}>
        <div className="category-tabs-container">
        <div className="category-label-container" style={{backgroundColor: `rgba(${CATEGORY_COLORS.PHOTO}, 1)`}} onClick={this.sortBy.bind(this,'fields')}>
            <p>PHOTO</p>
          </div>

          <div className="category-label-container" style={{backgroundColor: `rgba(${CATEGORY_COLORS.GAMES}, 1)`}}>
            <p>GAMES</p>
          </div>

          <div className="category-label-container" style={{backgroundColor: `rgba(${CATEGORY_COLORS.APP}, 1)`}}>
            <p>APPS</p>
          </div>

          <div className="category-label-container" style={{backgroundColor: `rgba(${CATEGORY_COLORS.WEB}, 1)`}}>
            <p>WEB</p>
          </div>
        </div>

        <ListComponent posts={this.state.currentCategory}/>

      </div>
    )
  }
}