import {store} from '../utils/httpsUtil.js'

export const loginService = formData => {
    return store('v1/auth/',formData)
        .then(response => {
            console.log('success', response.data)
        })
        .catch(error => {
            console.log('fail', error)
        })
}