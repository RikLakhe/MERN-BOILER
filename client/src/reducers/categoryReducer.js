// Import custom components
import {
    CATEGORY_ADD_REQUEST,
    CATEGORY_ADD_REQUEST_SUCCESS,
    CATEGORY_ADD_REQUEST_FAILURE,
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_REQUEST_SUCCESS,
    CATEGORY_FETCH_REQUEST_FAILURE
} from '../constants/actionTypes';

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
const categoryReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case CATEGORY_ADD_REQUEST:
            return Object.assign({}, state, {
                singleLoading: true,
            });

        case CATEGORY_ADD_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                singleLoading: false,
                singlePayload: action.data,
                singleErrors: {},
            });

        case CATEGORY_ADD_REQUEST_FAILURE:
            return Object.assign({}, state, {
                singleLoading: false,
                singleErrors: action.error,
            });

        case CATEGORY_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case CATEGORY_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data.data,
                pagination: action.data.pagination,
                errors: {},
            });

        case CATEGORY_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });
        default:
            return state;
    }
};

export default categoryReducer;
