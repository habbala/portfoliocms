import {SET_POSTS, SET_POST} from '../constants/action-types.js';

const initialState = {
  posts: [],
  post: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_POSTS:
      if(action.posts.length >= 0){
        return {...state, posts: action.posts };
      } else {
        return state;
      }
      break;

    case SET_POST:
      return {...state, post: action.post };
      break;

    default:
      return state;
  }
};

export default rootReducer;
