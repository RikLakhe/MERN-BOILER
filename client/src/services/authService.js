import {store} from '../utils/httpsUtil.js'

import history from "../utils/history";
import {cleanLocalStorage, saveLocalStorage} from "../utils/commonUtils";
import {MERN_PERMISSION, MERN_TOKEN} from "../constants/appConfig";

export const loginService = formData => {
    return store('v1/auth/login', formData)
        .then(response => {
            saveLocalStorage(MERN_TOKEN, response.token);
            saveLocalStorage(MERN_PERMISSION, response.permission);
            history.push("/");
        })
        .catch(error => {
            console.log('fail', error);
        })
};

export const logoutService = () => {
    return store('v1/auth/logout')
        .then(response => {
            cleanLocalStorage();
            history.push("/");
        })
        .catch(error => {
            console.log('fail', error);
        })
};