import axios from 'axios';

import {API_URL, MERN_TOKEN} from '../constants/appConfig'
import {loadLocalStorage, saveLocalStorage, cleanLocalStorage} from "./commonUtils";
import {encrypt, decrypt} from "./cryptoUtil"

import history from "../utils/history";

const http = () => {
    // Create axios for http request GET, POST, PUT AND DELETE
    const api = axios.create({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'XSRF-TOKEN': loadLocalStorage(MERN_TOKEN),
        },
        responseType: 'json',
        credentials: process.env.NODE_ENV === 'production' ? "include" : "",
        withCredentials: process.env.NODE_ENV === 'production'
    });

    // Add a request interceptor
    api.interceptors.response.use(
        response => {
            if (response && response.headers && response.headers['xsrf-token']) {
                saveLocalStorage(MERN_TOKEN, response.headers['xsrf-token']);
                if (response && response.data && response.data.data) {
                    return decrypt(response.data.data);
                } else {
                    return undefined;
                }
            }

        },
        error => {
            if (error.response.status === 401) {
                cleanLocalStorage();
                history.push('/login')
            }else if(error.response.status === 403){
                history.push('/403')
            }else if(error.response.status === 500){
                history.push('/500')
            }
            return Promise.reject(decrypt(error.response.data.data));
        }
    );

    return api;
};

export const fetch = (endpoint, params) => {
    return http()
        .get(`${API_URL}/${endpoint}/${params}`);
};

export const store = (endpoint, data) => {
    return http()
        .post(`${API_URL}/${endpoint}`, encrypt(data));
};

export const update = (endpoint, data) => {
    return http()
        .put(`${API_URL}/${endpoint}`, encrypt(data));
};

export const destroy = (endpoint, id) => {
    return http()
        .delete(`${API_URL}/${endpoint}/${id}`);
};