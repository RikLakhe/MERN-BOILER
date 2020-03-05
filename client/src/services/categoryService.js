import {store, fetch,update, destroy} from '../utils/httpsUtil.js'
import {
    categoryAddRequest,
    categoryAddRequestSuccess,
    categoryAddRequestFailure,
    categoryFetchRequest,
    categoryFetchRequestSuccess,
    categoryFetchRequestFailure,
    singleCategoryFetchRequest,
    singleCategoryFetchRequestSuccess,
    singleCategoryFetchRequestFailure,
    categoryUpdateRequest,
    categoryUpdateRequestSuccess,
    categoryUpdateRequestFailure,
    categoryDeleteRequest,
    categoryDeleteRequestSuccess,
    categoryDeleteRequestFailure
} from '../actions/categoryAction'

import history from "../utils/history";

export const addCategoryService = (formData={}) => {

    return dispatch => {
        dispatch(categoryAddRequest());

        return store('v1/category/', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(categoryAddRequestSuccess(response.token));
                }
            })
            .catch(error => dispatch(categoryAddRequestFailure(error.data)));
    }
};

export const listCategoryService = (formData) => {

    return dispatch => {
        dispatch(categoryFetchRequest());

        return store('v1/category/list', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(categoryFetchRequestSuccess(response));
                }
            })
            .catch(error => dispatch(categoryFetchRequestFailure(error.data)));
    }
};

export const findCategoryByIdentifier = id => {

    return dispatch => {
        dispatch(singleCategoryFetchRequest());

        return fetch('v1/category', id)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(singleCategoryFetchRequestSuccess(response.data));
                }
            })
            .catch(error => dispatch(singleCategoryFetchRequestFailure(error.message)));
    }
};

export const updateCategory = (formData={}) => {

    return dispatch => {
        dispatch(categoryUpdateRequest());

        return update(`v1/category/${formData._id}`, formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(categoryUpdateRequestSuccess(response.data));
                }
            })
            .catch(error => dispatch(categoryUpdateRequestFailure(error.data)));
    }
};

export const deleteCategoryByIdentifier = id => {

    return dispatch => {
        dispatch(categoryDeleteRequest());

        return destroy('v1/category', id)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(categoryDeleteRequestSuccess(response.data));
                }
            })
            .catch(error => dispatch(categoryDeleteRequestFailure(error.data)));
    }
};