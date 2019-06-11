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
        login: '',
        email: '',
        phone: '',
        firstName: '',
        secondName: '',
        thirdName: '',
    },
    loginAction: null,
    registrationAction: null,
    updateAccountAction: null,
};

export default ( state: IUserReducer = initialState, { type, ...action }: any ): IUserReducer => {
    switch( type ) {
        case LOGOUT:
            return {
                ...state,
                user: initialState.user,
            };
    
        default:
            return state;
    }
}