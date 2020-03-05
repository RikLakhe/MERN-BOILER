import React, {Fragment} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom'

import PublicRoute from '../../routes/PublicRoute'
import PrivateRoute from '../../routes/PrivateRoute'

import {
    AsyncAppLayout,
    AsyncStaticAppLayout,
    AsyncNotFound,
    AsyncForbidden,
    AsyncInternalServer,
    AsyncLogin,
    AsyncLogout,
    AsyncSignUp,
    AsyncHome,
    AsyncCategory
} from './AsyncComponents'

const App = () => (
    <Fragment>
        <Switch>
            <PublicRoute exact path="/" layout={(AsyncAppLayout)} component={(AsyncHome)}/>
            <PublicRoute exact path="/login" layout={(AsyncStaticAppLayout)} component={(AsyncLogin)}/>
            <PublicRoute exact path="/logout" layout={(AsyncStaticAppLayout)} component={(AsyncLogout)}/>
            <PublicRoute exact path="/sign-up" layout={(AsyncStaticAppLayout)} component={(AsyncSignUp)}/>

            <PrivateRoute exact path="/category" layout={(AsyncAppLayout)} component={(AsyncCategory)}/>

            <PublicRoute exact path="/product" layout={(AsyncStaticAppLayout)} component={(AsyncLogin)}/>
            <PublicRoute exact path="/checkout" layout={(AsyncStaticAppLayout)} component={(AsyncLogin)}/>
            <PublicRoute exact path="/profile" layout={(AsyncStaticAppLayout)} component={(AsyncLogin)}/>

            <PublicRoute path={"/403"} layout={(AsyncStaticAppLayout)} component={(AsyncForbidden)}/>
            <PublicRoute path={"/500"} layout={(AsyncStaticAppLayout)} component={(AsyncInternalServer)}/>
            <PublicRoute layout={(AsyncStaticAppLayout)} component={(AsyncNotFound)}/>
        </Switch>
    </Fragment>
);

export default withRouter(App);