import {SET_POSTS} from '../constants/action-types.js';

const initialState = {
  posts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_POSTS:
      if(action.posts.length > 0){
        console.log('setpost' + action.posts);
        return Object.assign(state.posts, action.posts);
      } else {
        return state;
      }
      break;

    default:
      return state;
  }
};

export default rootReducer;
