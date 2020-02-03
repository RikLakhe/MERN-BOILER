import React, {Fragment} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom'

import PublicRoute from '../../routes/PublicRoute'

import {
    AsyncAppLayout,
    AsyncStaticAppLayout,
    AsyncAuth,
    AsyncHome
} from './AsyncComponents'

const App = () => (
    <Fragment>
        <Switch>
            <PublicRoute exact path="/" layout={(AsyncAppLayout)} component={withRouter(AsyncHome)}/>
            <PublicRoute exact path="/login" layout={(AsyncStaticAppLayout)} component={withRouter(AsyncAuth)}/>
            <PublicRoute exact path="/product" layout={(AsyncStaticAppLayout)} component={withRouter(AsyncAuth)}/>
            <PublicRoute exact path="/checkout" layout={(AsyncStaticAppLayout)} component={withRouter(AsyncAuth)}/>
            <PublicRoute exact path="/profile" layout={(AsyncStaticAppLayout)} component={withRouter(AsyncAuth)}/>
        </Switch>
    </Fragment>
);

export default withRouter(App);