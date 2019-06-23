import { IRequestLoader } from "./common";
import { IUser } from "./user";
import moment from "moment";

export type ICreatePostAction = IRequestLoader;

export type IUpdatePostAction = IRequestLoader;

export type IGetPostsAction = IRequestLoader;

export type IGetPostAction = IRequestLoader;

export type IPostId = number;

export interface IPost {
  id: IPostId;
  title: string;
  date: moment.Moment;
  smallContent: string;
  fullContent: string;
  user: IUser;
}

export interface IPostsContent {
  posts: IPost[];
  lastPost: IPostId;
  nextIsset: boolean;
}

export interface IBlogReducer {
  postsContent: IPostsContent;
  postContent: IPost | null;
  createPostAction: ICreatePostAction | null;
  updatePostAction: IUpdatePostAction | null;
  getPostsAction: IGetPostsAction | null;
  getPostAction: IGetPostAction | null;
}
