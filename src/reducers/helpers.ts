import { IPost as IPostStore } from "../types/blog";
import moment from "moment";

export const postPreprocess = (post: any): IPostStore => ({
  ...post,
  date: moment(post.date),
});
