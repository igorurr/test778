import { push } from "connected-react-router";

import {
  GET_ME_DATA_PENDING,
  GET_ME_DATA_SUCCESS,
  GET_ME_DATA_FAILED,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
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

import { IUser, IUserEditForm } from "../types/user";
import { IError } from "../types/common";

import { get, patch, post } from "../helpers/url";
import storrage from "../helpers/localStorrage";
import { leftBarClose } from "./app";
import routes from "../containers/App/routes";

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

  if (!token) {
    dispatch(getMeDataFailed("отсутствует токен"));
    return;
  }

  dispatch(getMeDataPending());

  get(`${config.apiBase}user/`, {}, { token })
    .then(({ user }: any) => {
      dispatch(getMeDataSuccess(user));
    })
    .catch((errors: IError) => {
      storrage.remove("token");
      dispatch(getMeDataFailed(errors));
    });
};

const getUserPending = () => ({
  type: GET_USER_PENDING,
});
const getUserSuccess = (user: IUser) => ({
  type: GET_USER_SUCCESS,
  user,
});
const getUserFailed = (errors: IError) => ({
  type: GET_USER_FAILED,
  errors,
});
export const getUserData = (id: number) => (dispatch: any) => {
  const token = storrage.read("token") || "";

  if (!token) {
    dispatch(getUserFailed("отсутствует токен"));
    return;
  }

  dispatch(getUserPending());

  get(`${config.apiBase}user/${id}`, {}, { token })
    .then(({ user }: any) => {
      dispatch(getUserSuccess(user));
    })
    .catch((errors: IError) => {
      dispatch(getUserFailed(errors));
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
      dispatch(leftBarClose());
      dispatch(push(routes.userMy.link()));
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
export const updateAccount = (data: IUserEditForm) => (dispatch: any) => {
  const token = storrage.read("token") || "";

  if (!token) {
    dispatch(updateAccountFailed("отсутствует токен"));
    return;
  }

  dispatch(updateAccountPending());

  patch(`${config.apiBase}user`, data, { token })
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
      dispatch(leftBarClose());
      dispatch(push(routes.userMy.link()));
    })
    .catch((errors: IError) => {
      dispatch(registrationFailed(errors));
    });
};
