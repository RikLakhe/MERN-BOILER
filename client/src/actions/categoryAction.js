// Import actionType constants
import {
    SINGLE_CATEGORY_ADD_REQUEST,
    SINGLE_CATEGORY_ADD_REQUEST_SUCCESS,
    SINGLE_CATEGORY_ADD_REQUEST_FAILURE,
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_REQUEST_SUCCESS,
    CATEGORY_FETCH_REQUEST_FAILURE,
    SINGLE_CATEGORY_FETCH_REQUEST,
    SINGLE_CATEGORY_FETCH_REQUEST_SUCCESS,
    SINGLE_CATEGORY_FETCH_REQUEST_FAILURE,
    SINGLE_CATEGORY_UPDATE_REQUEST,
    SINGLE_CATEGORY_UPDATE_REQUEST_SUCCESS,
    SINGLE_CATEGORY_UPDATE_REQUEST_FAILURE,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_REQUEST_FAILURE,
    CATEGORY_DELETE_REQUEST_SUCCESS,
    CATEGORY_CLEAN_REQUEST,
    SINGLE_CATEGORY_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const categoryAddRequest = () => {
    return {
        type: SINGLE_CATEGORY_ADD_REQUEST
    }
};

export const categoryAddRequestSuccess = data => {
    return {
        type: SINGLE_CATEGORY_ADD_REQUEST_SUCCESS,
        data,
    }
};

export const categoryAddRequestFailure = error => {
    return {
        type: SINGLE_CATEGORY_ADD_REQUEST_FAILURE,
        error,
    }
};

export const categoryFetchRequest = () => {
    return {
        type: CATEGORY_FETCH_REQUEST
    }
};

export const categoryFetchRequestSuccess = data => {
    return {
        type: CATEGORY_FETCH_REQUEST_SUCCESS,
        data,
    }
};

export const categoryFetchRequestFailure = error => {
    return {
        type: CATEGORY_FETCH_REQUEST_FAILURE,
        error,
    }
};

export const categoryUpdateRequest = () => {
    return {
        type: SINGLE_CATEGORY_UPDATE_REQUEST
    }
};

export const categoryUpdateRequestSuccess = data => {
    return {
        type: SINGLE_CATEGORY_UPDATE_REQUEST_SUCCESS,
        data,
    }
};

export const categoryUpdateRequestFailure = error => {
    return {
        type: SINGLE_CATEGORY_UPDATE_REQUEST_FAILURE,
        error,
    }
};

export const categoryDeleteRequest = () => {
    return {
        type: CATEGORY_DELETE_REQUEST
    }
};

export const categoryDeleteRequestSuccess = data => {
    return {
        type: CATEGORY_DELETE_REQUEST_SUCCESS,
        data,
    }
};

export const categoryDeleteRequestFailure = error => {
    return {
        type: CATEGORY_DELETE_REQUEST_FAILURE,
        error,
    }
};

export const singleCategoryFetchRequest = () => {
    return {
        type: SINGLE_CATEGORY_FETCH_REQUEST
    }
};

export const singleCategoryFetchRequestSuccess = data => {
    return {
        type: SINGLE_CATEGORY_FETCH_REQUEST_SUCCESS,
        data,
    }
};

export const singleCategoryFetchRequestFailure = error => {
    return {
        type: SINGLE_CATEGORY_FETCH_REQUEST_FAILURE,
        error,
    }
};

export const singleCategoryCleanRequest = () => {
    return {
        type: SINGLE_CATEGORY_CLEAN_REQUEST,
    }
};

export const categoryCleanRequest = () => {
    return {
        type: CATEGORY_CLEAN_REQUEST,
    }
};