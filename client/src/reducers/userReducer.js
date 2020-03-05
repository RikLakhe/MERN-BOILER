import {
    USER_FETCH_REQUEST,
    USER_FETCH_REQUEST_SUCCESS,
    USER_FETCH_REQUEST_FAILURE,
} from "./../constants/actionTypes";

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
    pagination: {},
    singlePayload: [],
    singleLoading: false,
    singleErrors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const authReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case USER_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case USER_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case USER_FETCH_REQUEST_FAILURE:
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