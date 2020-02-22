// Import actionType constants
import {
    CATEGORY_ADD_REQUEST,
    CATEGORY_ADD_REQUEST_SUCCESS,
    CATEGORY_ADD_REQUEST_FAILURE,
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_REQUEST_SUCCESS,
    CATEGORY_FETCH_REQUEST_FAILURE
} from '../constants/actionTypes';

export const categoryAddRequest = () =>{
    return {
        type: CATEGORY_ADD_REQUEST
    }
};

export const categoryAddRequestSuccess = data =>{
    return {
        type: CATEGORY_ADD_REQUEST_SUCCESS,
        data,
    }
};

export const categoryAddRequestFailure = error =>{
    return {
        type: CATEGORY_ADD_REQUEST_FAILURE,
        error,
    }
};

export const categoryFetchRequest = () =>{
    return {
        type: CATEGORY_FETCH_REQUEST
    }
};

export const categoryFetchRequestSuccess = data =>{
    return {
        type: CATEGORY_FETCH_REQUEST_SUCCESS,
        data,
    }
};

export const categoryFetchRequestFailure = error =>{
    return {
        type: CATEGORY_FETCH_REQUEST_FAILURE,
        error,
    }
};