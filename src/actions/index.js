import {SET_POSTS} from "../constants/action-types";

export const setPosts = postArr => ({
  type : SET_POSTS,
  posts: postArr
});
