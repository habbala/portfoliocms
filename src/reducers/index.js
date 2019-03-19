import {SET_POSTS, SET_POST, SET_BACKGROUND} from '../constants/action-types.js';
import {CATEGORY_COLORS} from '../constants/colors.js';

const initialState = {
  posts: [],
  post: '',
  backgroundColor: `rgba(${CATEGORY_COLORS.DEFAULT}, 0.0)`,
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

    case SET_BACKGROUND:
      return {...state, backgroundColor: action.color };
      break;

    default:
      return state;
  }
};

export default rootReducer;
