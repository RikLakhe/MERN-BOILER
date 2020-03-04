import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../utils/history';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import httpsErrorsReducer from './httpsErrorsReducer';

const appReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    category: categoryReducer,
    httpsError: httpsErrorsReducer,
});

const rootReducer = (state, action) => {
    if (action?.type === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;