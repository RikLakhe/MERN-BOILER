// Import custom components
import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_SUCCESS,
    LOGOUT_REQUEST_FAILURE
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
    pagination: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const authReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOGIN_REQUEST_SUCCESS:
        case LOGOUT_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case LOGIN_REQUEST_FAILURE:
        case LOGOUT_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
                payload: {},
            });
        default:
            return state;
    }
};

export default authReducer;
