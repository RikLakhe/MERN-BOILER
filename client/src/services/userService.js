import { store, fetch, update, destroy } from '../utils/httpsUtil.js'
import {
    fetchUserRequest,
    fetchUserRequestSuccess,
    fetchUserRequestFailure
} from '../actions/userAction';

export const listUserService = formData => {

    return dispatch => {
        dispatch(fetchUserRequest());

        return store('v1/user/list', formData)
            .then(response => {
                if (response.status === 'SUCCESS') {
                    dispatch(fetchUserRequestSuccess(response));
                }
            })
            .catch(error => dispatch(fetchUserRequestFailure(error.data)));
    }
};
