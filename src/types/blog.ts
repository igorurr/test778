import { IRequestLoader } from "./common";

export type ICreatePostAction = IRequestLoader;

export type IUpdatePostAction = IRequestLoader;

export type IGetPostsAction = IRequestLoader;

export type IGetPostAction = IRequestLoader;

export type IPostId = number;

export interface IPost {
  id: IPostId;
  smallContent: string;
  fullContent: string;
  user: number;
}

export interface IPostsContent {
  posts: IPost[];
  lastPost: IPostId;
}

export interface IPostContent extends IPost {}

export interface IBlogReducer {
  postsContent: IPostsContent;
  postContent: IPostContent | null;
  createPostAction: ICreatePostAction | null;
  updatePostAction: IUpdatePostAction | null;
  getPostsAction: IGetPostsAction | null;
  getPostAction: IGetPostAction | null;
}
