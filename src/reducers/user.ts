import {
  GET_ME_DATA_PENDING,
  GET_ME_DATA_SUCCESS,
  GET_ME_DATA_FAILED,
  UPDATE_ACCOUNT_PENDING,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILED,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTRATION_PENDING,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGOUT,
} from "../consts/user";

import { IUserReducer } from "../types/user";

const initialState: IUserReducer = {
  user: {
    id: -1,
    login: "",
    email: "",
    phone: "",
    firstName: "",
    secondName: "",
    thirdName: "",
  },
  loginAction: {
    status: "waiting",
  },
  registrationAction: {
    status: "waiting",
  },
  updateAccountAction: {
    status: "waiting",
  },
  getMeDataAction: {
    status: "waiting",
  },
};

export default (
  state: IUserReducer = initialState,
  { type, ...action }: any,
): IUserReducer => {
  switch (type) {
    case GET_ME_DATA_PENDING:
      return {
        ...state,
        getMeDataAction: { status: "pending" },
      };
    case GET_ME_DATA_SUCCESS:
      return {
        ...state,
        user: action.user,
        getMeDataAction: { status: "success" },
      };
    case GET_ME_DATA_FAILED:
      return {
        ...state,
        user: initialState.user,
        getMeDataAction: {
          status: "error",
          error: action.errors,
        },
      };

    case LOGIN_PENDING:
      return {
        ...state,
        loginAction: { status: "pending" },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loginAction: { status: "success" },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        user: initialState.user,
        loginAction: {
          status: "error",
          error: action.errors,
        },
      };

    case REGISTRATION_PENDING:
      return {
        ...state,
        registrationAction: { status: "pending" },
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.user,
        registrationAction: { status: "success" },
      };
    case REGISTRATION_FAILED:
      return {
        ...state,
        user: initialState.user,
        registrationAction: {
          status: "error",
          error: action.errors,
        },
      };

    case UPDATE_ACCOUNT_PENDING:
      return {
        ...state,
        updateAccountAction: { status: "pending" },
      };
    case UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        user: action.user,
        updateAccountAction: { status: "success" },
      };
    case UPDATE_ACCOUNT_FAILED:
      return {
        ...state,
        user: initialState.user,
        updateAccountAction: {
          status: "error",
          error: action.errors,
        },
      };

    case LOGOUT:
      return {
        ...state,
        user: initialState.user,
      };

    default:
      return state;
  }
};
