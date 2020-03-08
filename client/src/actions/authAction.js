// Import actionType constants
import {
    AUTH_REQUEST,
    AUTH_REQUEST_SUCCESS,
    AUTH_REQUEST_FAILURE,
    AUTH_CLEAN_REQUEST
} from '../constants/actionTypes';

export const authRequest = () => {
    return {
        type: AUTH_REQUEST
    }
};

export const authRequestSuccess = data => {
    return {
        type: AUTH_REQUEST_SUCCESS,
        data,
    }
};

export const authRequestFailure = error => {
    return {
        type: AUTH_REQUEST_FAILURE,
        error,
    }
};

export const authCleanRequest = () => {
    return {
        type: AUTH_CLEAN_REQUEST
    }
};