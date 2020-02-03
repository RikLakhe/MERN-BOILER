import axios from 'axios';

import {API_URL, MERN_TOKEN} from '../constants/appConfig'
import {loadLocalStorage, saveLocalStorage} from "./commonUtils";

const http = () => {
    // Create axios for http request GET, POST, PUT AND DELETE
    const api = axios.create({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'XSRF-TOKEN': loadLocalStorage(MERN_TOKEN),
        },
        responseType: 'json',
        // credentials: "include",
        // withCredentials: true
    });

    // Add a request interceptor
    api.interceptors.response.use(
        response => {
            if (response.headers && response.headers['xsrf-token']) {
                saveLocalStorage(MERN_TOKEN, response.headers['xsrf-token']);
            }
            return response;
        },
        error => {
            console.log('Error', error)
            return Promise.reject(error);
        }
    );

    return api;
};

export const fetch = (endpoint, params) => {
    return http()
        .get(`${API_URL}/${endpoint}`);
};

export const store = (endpoint, data) => {
    return http()
        .post(`${API_URL}/${endpoint}`, data);
};

export const update = (endpoint, data) => {
    return http()
        .put(`${API_URL}/${endpoint}`, data);
};

export const destroy = (endpoint, id) => {
    return http()
        .delete(`${API_URL}/${endpoint}/${id}`);
};