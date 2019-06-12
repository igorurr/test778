import {
  GET_ME_DATA_PENDING,
  GET_ME_DATA_SUCCESS,
  GET_ME_DATA_FAILED,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  UPDATE_ACCOUNT_PENDING,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILED,
  REGISTRATION_PENDING,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGOUT,
} from "../consts/user";

import config from "../config";

import { IUser } from "../types/user";
import { IError } from "../types/common";

import { get, path, post } from "../helpers/url";
import storrage from "../helpers/localStorrage";

const logoutAction = () => ({
  type: LOGOUT,
});
export const logout = () => (dispatch: any) => {
  storrage.remove("token");
  dispatch(logoutAction());
};

const getMeDataPending = () => ({
  type: GET_ME_DATA_PENDING,
});
const getMeDataSuccess = (user: IUser) => ({
  type: GET_ME_DATA_SUCCESS,
  user,
});
const getMeDataFailed = (errors: IError) => ({
  type: GET_ME_DATA_FAILED,
  errors,
});
export const getMeData = () => (dispatch: any) => {
  const token = storrage.read("token") || "";

  if (!token) dispatch(getMeDataFailed("отсутствует токен"));

  dispatch(getMeDataPending());

  get(`${config.apiBase}user/`, { token })
    .then(({ user }: any) => {
      dispatch(getMeDataSuccess(user));
    })
    .catch((errors: IError) => {
      dispatch(getMeDataFailed(errors));
    });
};

const loginPending = () => ({
  type: LOGIN_PENDING,
});
const loginSuccess = (user: IUser) => ({
  type: LOGIN_SUCCESS,
  user,
});
const loginFailed = (errors: IError) => ({
  type: LOGIN_FAILED,
  errors,
});
export const login = (login: string, password: string) => (dispatch: any) => {
  dispatch(loginPending());

  post(`${config.apiBase}user/session`, { login, password })
    .then(({ user, token }: any) => {
      storrage.write("token", token);
      dispatch(loginSuccess(user));
    })
    .catch((errors: IError) => {
      dispatch(loginFailed(errors));
    });
};

const updateAccountPending = () => ({
  type: UPDATE_ACCOUNT_PENDING,
});
const updateAccountSuccess = (user: IUser) => ({
  type: UPDATE_ACCOUNT_SUCCESS,
  user,
});
const updateAccountFailed = (errors: IError) => ({
  type: UPDATE_ACCOUNT_FAILED,
  errors,
});
export const updateAccount = (data: IUser) => (dispatch: any) => {
  const token = storrage.read("token") || "";

  if (!token) dispatch(updateAccountFailed("отсутствует токен"));

  dispatch(updateAccountPending());

  path(`${config.apiBase}user`, data, { token })
    .then(({ user }: any) => {
      dispatch(updateAccountSuccess(user));
    })
    .catch((errors: IError) => {
      dispatch(updateAccountFailed(errors));
    });
};

const registrationPending = () => ({
  type: REGISTRATION_PENDING,
});
const registrationSuccess = (user: IUser) => ({
  type: REGISTRATION_SUCCESS,
  user,
});
const registrationFailed = (errors: IError) => ({
  type: REGISTRATION_FAILED,
  errors,
});
export const registration = (data: IUser) => (dispatch: any) => {
  dispatch(registrationPending());

  post(`${config.apiBase}user`, data)
    .then(({ user, token }: any) => {
      storrage.write("token", token);
      dispatch(registrationSuccess(user));
    })
    .catch((errors: IError) => {
      dispatch(registrationFailed(errors));
    });
};
