import React, {Suspense} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';

import App from './containers/App/App';
import history from './utils/history';
import configureStore from './store/configureStore';

import "./styles/_config.sass"
import "./styles/normalization.sass"
import {ConnectedRouter} from "connected-react-router";

const store = configureStore({}, history);
     const mountNode = document.getElementById("root");

render(
    <Suspense fallback={null}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router history={history}>
                    <App/>
                </Router>
            </ConnectedRouter>
        </Provider>
    </Suspense>, mountNode
);
