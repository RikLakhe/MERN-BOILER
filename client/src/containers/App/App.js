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
    AsyncAuth,
    AsyncHome,
    AsyncCategory,
    AsyncUser,
    AsyncProduct
} from './AsyncComponents'

const App = () => (
    <Fragment>
        <Switch>
            <PublicRoute exact path="/" layout={(AsyncAppLayout)} component={(AsyncHome)}/>

            <PublicRoute path="/auth" layout={(AsyncStaticAppLayout)} component={(AsyncAuth)}/>

            <PrivateRoute exact path="/category" layout={(AsyncAppLayout)} component={(AsyncCategory)}/>
            <PrivateRoute path="/users" layout={(AsyncAppLayout)} component={(AsyncUser)}/>
            <PrivateRoute path="/products" layout={(AsyncAppLayout)} component={(AsyncProduct)}/>


            <PublicRoute path={"/403"} layout={(AsyncStaticAppLayout)} component={(AsyncForbidden)}/>
            <PublicRoute path={"/500"} layout={(AsyncStaticAppLayout)} component={(AsyncInternalServer)}/>
            <PublicRoute layout={(AsyncStaticAppLayout)} component={(AsyncNotFound)}/>
        </Switch>
    </Fragment>
);

export default withRouter(App);