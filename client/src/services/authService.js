import {store} from '../utils/httpsUtil.js'

import history from "../utils/history";
import {cleanLocalStorage, saveLocalStorage} from "../utils/commonUtils";
import {MERN_PERMISSION, MERN_TOKEN} from "../constants/appConfig";

export const loginService = formData => {
    return store('v1/auth/login', formData)
        .then(response => {
            saveLocalStorage(MERN_TOKEN, response.data.token);
            saveLocalStorage(MERN_PERMISSION, response.data.permission);
            history.push("/");
        })
        .catch(error => {
            console.log('fail', error);
        })
};

export const logoutService = formData => {
    return store('v1/auth/logout', formData)
        .then(response => {
            cleanLocalStorage();
            history.push("/");
        })
        .catch(error => {
            console.log('fail', error);
        })
};