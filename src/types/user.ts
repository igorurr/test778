import { IRequestLoader } from "./common";

export interface IUser {
  id: number;
  login: string;
  password?: string;
  email: string;
  phone: string;
  firstName: string;
  secondName: string;
  thirdName: string;
}

export type ILoginAction = IRequestLoader;

export type IRegistrationAction = IRequestLoader;

export type IUpdateAccountAction = IRequestLoader;

export type IGetMeDataction = IRequestLoader;

export interface IUserReducer {
  user: IUser;
  loginAction: ILoginAction;
  registrationAction: IRegistrationAction;
  updateAccountAction: IUpdateAccountAction;
  getMeDataAction: IGetMeDataction;
}

export interface ISession {
  token: string;
  user: number;
}