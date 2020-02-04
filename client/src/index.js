import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from "react-router-dom";

import App from './containers/App/App';

import history from './utils/history'

import "./styles/_config.sass"
import "./styles/normalization.sass"

ReactDOM.render(
    <Router history={history}>
        <App/>
    </Router>,
    document.getElementById('root'));
