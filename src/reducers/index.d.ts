import { IAppReducer } from "../types/app";
import { IBlogReducer } from "../types/blog";
import { IUserReducer } from "../types/user";

export default interface IReduxState {
  app: IAppReducer;
  blog: IBlogReducer;
  user: IUserReducer;
}
