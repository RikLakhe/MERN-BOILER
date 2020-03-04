import {store, fetch, destroy} from '../utils/httpsUtil.js'
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
    categoryDeleteRequest,
    categoryDeleteRequestSuccess,
    categoryDeleteRequestFailure
} from '../actions/categoryAction'

import history from "../utils/history";

export const addCategoryService = formData => {

    return dispatch => {
        dispatch(categoryAddRequest());

        return store('v1/category/', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(categoryAddRequestSuccess(response.token));
                }
            })
            .catch(error => dispatch(categoryAddRequestFailure(error.message)));
    }
};

export const listCategoryService = (formData) => {

    return dispatch => {
        dispatch(categoryFetchRequest());

        return store('v1/category/list', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(categoryFetchRequestSuccess(response));

                    // history.push("/");
                }
            })
            .catch(error => dispatch(categoryFetchRequestFailure(error.message)));
    }
};

export const findCategoryByIdentifier = id => {

    return dispatch => {
        dispatch(singleCategoryFetchRequest());

        return fetch('v1/category', id)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(singleCategoryFetchRequestSuccess(response.data));

                    // history.push("/");
                }
            })
            .catch(error => dispatch(singleCategoryFetchRequestFailure(error.message)));
    }
};

export const deleteCategoryByIdentifier = id => {

    return dispatch => {
        dispatch(categoryDeleteRequest());

        return destroy('v1/category', id)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(categoryDeleteRequestSuccess(response.data));

                    // history.push("/");
                }
            })
            .catch(error => dispatch(categoryDeleteRequestFailure(error.message)));
    }
}