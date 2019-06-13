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
import { postPreprocess } from "./helpers";

const initialState: IBlogReducer = {
  postsContent: {
    posts: [],
    lastPost: -1,
    nextIsset: true,
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
        createPostAction: { status: "pending" },
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        createPostAction: { status: "success" },
      };
    case CREATE_POST_FAILED:
      return {
        ...state,
        createPostAction: {
          status: "error",
          error: action.errors,
        },
      };

    case UPDATE_POST_PENDING:
      return {
        ...state,
        updatePostAction: { status: "pending" },
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        updatePostAction: { status: "success" },
      };
    case UPDATE_POST_FAILED:
      return {
        ...state,
        updatePostAction: {
          status: "error",
          error: action.errors,
        },
      };

    case GET_POSTS_PENDING:
      return {
        ...state,
        getPostsAction: { status: "pending" },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postsContent: {
          posts: [
            ...state.postsContent.posts,
            ...action.posts.map(postPreprocess),
          ],
          lastPost: action.last,
          nextIsset: action.nextIsset,
        },
        getPostsAction: { status: "success" },
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        getPostsAction: {
          status: "error",
          error: action.errors,
        },
      };

    case GET_POST_PENDING:
      return {
        ...state,
        getPostAction: { status: "pending" },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        postContent: postPreprocess(action.post),
        getPostAction: { status: "success" },
      };
    case GET_POST_FAILED:
      return {
        ...state,
        getPostAction: {
          status: "error",
          error: action.errors,
        },
      };

    default:
      return state;
  }
};
