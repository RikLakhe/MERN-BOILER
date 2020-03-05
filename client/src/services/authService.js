import {store} from '../utils/httpsUtil.js'
import history from "../utils/history";
import {cleanLocalStorage, saveLocalStorage} from "../utils/commonUtils";
import {MERN_PERMISSION, MERN_TOKEN} from "../constants/appConfig";
import {
    loginRequest,
    loginRequestSuccess,
    loginRequestFailure,
    logoutRequest,
    logoutRequestFailure,
    logoutRequestSuccess
} from '../actions/authAction'

export const loginService = formData => {

    return dispatch => {
        dispatch(loginRequest());

        return store('v1/auth/login', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    saveLocalStorage(MERN_TOKEN, response.token);
                    saveLocalStorage(MERN_PERMISSION, response.permission);
                    dispatch(loginRequestSuccess(response.token));
                    history.push("/");
                }
            })
            .catch(error => dispatch(loginRequestFailure(error.data)));
    }
};

export const logoutService = () => {

    return dispatch => {
        dispatch(logoutRequest());

        return store('v1/auth/logout')
            .then(response => {
                dispatch(logoutRequestSuccess(response));
                cleanLocalStorage();
                history.push("/");
            })
            .catch(error => dispatch(logoutRequestFailure(error.data)));
    }
};

export const signUpService = formData => {
    return dispatch => {
        dispatch(loginRequest());

        return store('v1/auth/sign-up', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(loginRequestSuccess(response));
                    history.push("/login");
                }
            })
            .catch(error => dispatch(loginRequestFailure(error.data)));
    }
};
