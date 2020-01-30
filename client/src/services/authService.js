import {fetch} from '../utils/httpsUtil.js'

export const loginService = formData => {
    return fetch('v1/auth/')
        .then(response => {
            console.log('success', response.data)
        })
        .catch(error => {
            console.log('fail', error)
        })
}