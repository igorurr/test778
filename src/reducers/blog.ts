import {
  CREATE_POST_PENDING,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  UPDATE_POST_PENDING,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILED,
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_POST_PENDING,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
} from "../consts/blog";

import { IBlogReducer } from "../types/blog";

const initialState: IBlogReducer = {
  postsContent: {
    posts: [],
    lastPost: -1,
  },
  postContent: null,
  createPostAction: null,
  updatePostAction: null,
  getPostsAction: null,
  getPostAction: null,
};

export default (
  state: IBlogReducer = initialState,
  { type, ...action }: any,
): IBlogReducer => {
  switch (type) {
    case CREATE_POST_PENDING:
      return {
        ...state,
      };

    default:
      return state;
  }
};
