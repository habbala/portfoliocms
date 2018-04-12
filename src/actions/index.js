import {SET_POSTS, SET_POST, SET_BACKGROUND} from "../constants/action-types";

export const setPosts = (postArr) => ({
  type : SET_POSTS,
  posts: postArr,
});

export const setPost = (newPost) => ({
  type : SET_POST,
  post: newPost,
});

export const setBackground = (newColor) => ({
  type : SET_BACKGROUND,
  color: newColor,
});
