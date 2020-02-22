import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import {routerMiddleware} from "connected-react-router";

// Middleware
import loggerMiddleware from "./logger";

import createRootReducer from '../reducers';

const configureStoreDev = (initialState = {}, history) => {
    const middlewares = [reduxImmutableStateInvariant(), loggerMiddleware, thunk, routerMiddleware(history)];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    return createStore(
        createRootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );
};

export default configureStoreDev;