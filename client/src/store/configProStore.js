import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import {routerMiddleware} from "connected-react-router";

// Middleware

import createRootReducer from '../reducers';

const configureStoreProd = (initialState = {}, history) => {
    const middlewares = [thunk, routerMiddleware(history)];
    return createStore(createRootReducer, initialState, compose(applyMiddleware(...middlewares)));
};

export default configureStoreProd;