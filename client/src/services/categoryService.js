import {store} from '../utils/httpsUtil.js'

export const addCategoryService = formData => {
    return store('v1/category/', formData)
        .then(response => {
            console.log('here', response);
        })
        .catch(error => {
            console.log('fail', error);
        })
};