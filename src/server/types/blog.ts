import moment from "moment";

import { IPostId } from "../../types/blog";

export interface IPost {
  id: IPostId;
  title: string;
  date: number;
  smallContent: string;
  fullContent: string;
  user: number;
}
