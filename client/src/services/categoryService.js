import {store} from '../utils/httpsUtil.js'
import {
    categoryAddRequest,
    categoryAddRequestSuccess,
    categoryAddRequestFailure,
    categoryFetchRequest,
    categoryFetchRequestSuccess,
    categoryFetchRequestFailure
} from '../actions/categoryAction'
import {loginRequest, loginRequestFailure, loginRequestSuccess} from "../actions/authAction";
import {saveLocalStorage} from "../utils/commonUtils";
import {MERN_PERMISSION, MERN_TOKEN} from "../constants/appConfig";
import history from "../utils/history";

export const addCategoryService = formData => {
    // return store('v1/category/', formData)
    //     .then(response => {
    //         console.log('here', response);
    //     })
    //     .catch(error => {
    //         console.log('fail', error);
    //     })

    return dispatch => {
        dispatch(categoryAddRequest());

        return store('v1/category/', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(categoryAddRequestSuccess(response.token));
                    history.push("/");
                }
            })
            .catch(error => dispatch(categoryAddRequestFailure(error)));
    }
};

export const listCategoryService = formData => {
    // return store('v1/category/list', formData)
    //     .then(response => {
    //         console.log('here', response);
    //     })
    //     .catch(error => {
    //         console.log('fail', error);
    //     })

    return dispatch => {
        dispatch(categoryFetchRequest());

        return store('v1/category/list', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(categoryFetchRequestSuccess(response));
                    // history.push("/");
                }
            })
            .catch(error => dispatch(categoryFetchRequestFailure(error.response)));
    }
};