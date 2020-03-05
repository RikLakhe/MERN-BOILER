import {
    USER_FETCH_REQUEST,
    USER_FETCH_REQUEST_SUCCESS,
    USER_FETCH_REQUEST_FAILURE,
} from "./../constants/actionTypes";

export const fetchUserRequest = () =>{
    return {
        type: USER_FETCH_REQUEST
    }
};

export const fetchUserRequestSuccess = data =>{
    return {
        type: USER_FETCH_REQUEST_SUCCESS,
        data,
    }
};

export const fetchUserRequestFailure = error =>{
    return {
        type: USER_FETCH_REQUEST_FAILURE,
        error,
    }
};