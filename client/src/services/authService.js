import { store, fetch } from '../utils/httpsUtil.js'
import history from "../utils/history";
import { cleanLocalStorage, saveLocalStorage } from "../utils/commonUtils";
import { MERN_PERMISSION, MERN_TOKEN } from "../constants/appConfig";
import {
    authRequest,
    authRequestSuccess,
    authRequestFailure,
} from '../actions/authAction'

export const loginService = formData => {

    return dispatch => {
        dispatch(authRequest());

        return store('v1/auth/login', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    saveLocalStorage(MERN_TOKEN, response.token);
                    saveLocalStorage(MERN_PERMISSION, response.permission);
                    dispatch(authRequestSuccess(response.token));
                    history.push("/");
                }
            })
            .catch(error => dispatch(authRequestFailure(error.data)));
    }
};

export const logoutService = () => {

    return dispatch => {
        dispatch(authRequest());

        return store('v1/auth/logout')
            .then(response => {
                dispatch(authRequestSuccess(response));
                cleanLocalStorage();
                history.push("/");
            })
            .catch(error => dispatch(authRequestFailure(error.data)));
    }
};

export const signUpService = formData => {
    return dispatch => {
        dispatch(authRequest());

        return store('v1/auth/sign-up', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(authRequestSuccess(response));
                    history.push("/auth/sign-up/success");
                }
            })
            .catch(error => dispatch(authRequestFailure(error.data)));
    }
};

export const verifyService = token => {
    return dispatch => {
        dispatch(authRequest());

        return fetch(`v1/auth/verify?TOKEN=${token}`)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(authRequestSuccess(response));
                    history.push("/auth/sign-up/success");
                }
            })
            .catch(error => dispatch(authRequestFailure(error.data)));
    }
};

export const verifyResendService = token => {
    return dispatch => {
        dispatch(authRequest());

        return fetch(`v1/auth/resend?TOKEN=${token}`)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(authRequestSuccess(response));
                    history.push("/auth/sign-up/success");
                }
            })
            .catch(error => dispatch(authRequestFailure(error.data)));
    }
};
