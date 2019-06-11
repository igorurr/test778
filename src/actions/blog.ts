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

import { IPost, IPostId } from "../types/blog";
import { IError } from "../types/common";

import config from "../config";

import { get, path, post } from "../helpers/url";
import storrage from "../helpers/localStorrage";

const createPostPending = () => ({
    type: CREATE_POST_PENDING
});
const createPostSuccess = () => ({
    type: CREATE_POST_SUCCESS,
});
const createPostFailed = ( errors: IError ) => ({
    type: CREATE_POST_FAILED,
    errors
});
export const createPost = ( data: IPost ) => (dispatch: any) => {
    dispatch(createPostPending());

    post( `${config.apiBase}blog/post`, JSON.stringify(data), { token: storrage.read('token') } )
        .then( () => {
            dispatch(createPostSuccess());
        } )
        .catch( ( errors: IError ) => {
            dispatch(createPostFailed(errors));
        } );

}

const updatePostPending = () => ({
    type: UPDATE_POST_PENDING
});
const updatePostSuccess = () => ({
    type: UPDATE_POST_SUCCESS,
});
const updatePostFailed = ( errors: IError ) => ({
    type: UPDATE_POST_FAILED,
    errors
});
export const updatePost = ( data: IPost ) => (dispatch: any) => {
    dispatch(updatePostPending());

    path( `${config.apiBase}blog/post`, JSON.stringify(data), { token: storrage.read('token') } )
        .then( () => {
            dispatch(updatePostSuccess());
        } )
        .catch( ( errors: IError ) => {
            dispatch(updatePostFailed(errors));
        } );

}

const getPostsPending = () => ({
    type: GET_POSTS_PENDING
});
const getPostsSuccess = (posts: IPost[]) => ({
    type: GET_POSTS_SUCCESS,
    posts
});
const getPostsFailed = ( errors: IError ) => ({
    type: GET_POSTS_FAILED,
    errors
});
export const getPosts = ( lastId: number, count: number ) => (dispatch: any) => {
    dispatch(getPostsPending());

    get( `${config.apiBase}blog/posts`, {lastId, count} )
        .then( ( { posts }: any ) => {
            dispatch(getPostsSuccess( posts ));
        } )
        .catch( ( errors: IError ) => {
            dispatch(getPostsFailed(errors));
        } );
}

const getPostPending = () => ({
    type: GET_POST_PENDING
});
const getPostSuccess = (post: IPost) => ({
    type: GET_POST_SUCCESS,
    post
});
const getPostFailed = ( errors: IError ) => ({
    type: GET_POST_FAILED,
    errors
});
export const getPost = ( id: IPostId ) => (dispatch: any) => {
    dispatch(getPostPending());

    get( `${config.apiBase}blog/post/${id}` )
        .then( ({post}: any) => {
            dispatch(getPostSuccess(post));
        } )
        .catch( ( errors: IError ) => {
            dispatch(getPostFailed(errors));
        } );
}
