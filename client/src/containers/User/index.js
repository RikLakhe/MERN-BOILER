import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import UserContainer from "./UserContainer"
import NotFound from "../Exception/NotFoundContainer";

const index = ({match}) => (
    <Fragment>
        <Switch>
            <Route
                exact
                path={`${match.url}/list`}
                component={UserContainer}
            />
            <Route
                exact
                path={`${match.url}/edit/:id`}
                component={UserContainer}
            />
            <Route
                exact
                path={`${match.url}/pending`}
                component={UserContainer}
            />
            <Route component={NotFound} />
        </Switch>
    </Fragment>
);

export default index;