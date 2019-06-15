import { IUser as IUserBase } from "../../types/user";

export interface IUser extends IUserBase {
  id: number;
}

export interface ISession {
  token: string;
  user: number;
}
