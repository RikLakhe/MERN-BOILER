// Import custom components
import {
    SINGLE_CATEGORY_ADD_REQUEST,
    SINGLE_CATEGORY_ADD_REQUEST_SUCCESS,
    SINGLE_CATEGORY_ADD_REQUEST_FAILURE,
    CATEGORY_FETCH_REQUEST,
    CATEGORY_FETCH_REQUEST_SUCCESS,
    CATEGORY_FETCH_REQUEST_FAILURE,
    SINGLE_CATEGORY_UPDATE_REQUEST,
    SINGLE_CATEGORY_UPDATE_REQUEST_SUCCESS,
    SINGLE_CATEGORY_UPDATE_REQUEST_FAILURE,
    SINGLE_CATEGORY_FETCH_REQUEST,
    SINGLE_CATEGORY_FETCH_REQUEST_SUCCESS,
    SINGLE_CATEGORY_FETCH_REQUEST_FAILURE,
    SINGLE_CATEGORY_CLEAN_REQUEST,
    CATEGORY_CLEAN_REQUEST
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
        case SINGLE_CATEGORY_ADD_REQUEST:
        case SINGLE_CATEGORY_FETCH_REQUEST:
        case SINGLE_CATEGORY_UPDATE_REQUEST:
            return Object.assign({}, state, {
                singleLoading: true,
            });

        case SINGLE_CATEGORY_ADD_REQUEST_SUCCESS:
        case SINGLE_CATEGORY_FETCH_REQUEST_SUCCESS:
        case SINGLE_CATEGORY_UPDATE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                singleLoading: false,
                singlePayload: action.data,
                singleErrors: {},
            });

        case SINGLE_CATEGORY_ADD_REQUEST_FAILURE:
        case SINGLE_CATEGORY_FETCH_REQUEST_FAILURE:
        case SINGLE_CATEGORY_UPDATE_REQUEST_FAILURE:
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

        case SINGLE_CATEGORY_CLEAN_REQUEST:
            return Object.assign({}, state, {
                singlePayload: [],
                singleLoading: false,
                singleErrors: {},
            });

        case  CATEGORY_CLEAN_REQUEST:
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

export default categoryReducer;
