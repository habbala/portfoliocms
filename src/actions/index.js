import {SET_POSTS, SET_POST} from "../constants/action-types";

export const setPosts = (postArr) => ({
  type : SET_POSTS,
  posts: postArr,
});

export const setPost = (newPost) => ({
  type : SET_POST,
  post: newPost,
});
