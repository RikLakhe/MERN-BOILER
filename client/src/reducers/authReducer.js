// Import custom components
import {
    AUTH_REQUEST,
    AUTH_REQUEST_SUCCESS,
    AUTH_REQUEST_FAILURE,
    AUTH_CLEAN_REQUEST
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
        case AUTH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case AUTH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case AUTH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
                payload: {},
            });

        case AUTH_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                loading: false,
                errors: {},
                pagination: {},
            });

        default:
            return state;
    }
};

export default authReducer;
