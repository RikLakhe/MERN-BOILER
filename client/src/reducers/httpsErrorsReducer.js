// Import custom components
import { HTTP_404_ERROR, HTTP_500_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = {
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const httpErrorsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case HTTP_404_ERROR:
        case HTTP_500_ERROR:
            return Object.assign({}, state, {
                loading: true,
                errors: action.error,
            });

        default:
            return state;
    }
};

export default httpErrorsReducer;
