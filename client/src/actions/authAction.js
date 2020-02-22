// Import actionType constants
import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_SUCCESS,
    LOGOUT_REQUEST_FAILURE
} from '../constants/actionTypes';

export const loginRequest = () =>{
    return {
        type: LOGIN_REQUEST
    }
};

export const loginRequestSuccess = data =>{
    return {
        type: LOGIN_REQUEST_SUCCESS,
        data,
    }
};

export const loginRequestFailure = error =>{
    return {
        type: LOGIN_REQUEST_FAILURE,
        error,
    }
};

export const logoutRequest = () =>{
    return {
        type: LOGOUT_REQUEST
    }
};

export const logoutRequestSuccess = data =>{
    return {
        type: LOGOUT_REQUEST_SUCCESS,
        data,
    }
};

export const logoutRequestFailure = error =>{
    return {
        type: LOGOUT_REQUEST_FAILURE,
        error,
    }
};