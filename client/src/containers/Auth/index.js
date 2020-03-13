import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginContainer from "./LoginContainer"
import LogoutContainer from "./LogoutContainer"
import SignUpContainer from "./SignUpContainer"
import SignUpSuccess from "./SignUpSuccess"
import VerificationContainer from "./VerificationContainer"
import NotFound from "../Exception/NotFoundContainer";

const index = ({ match }) => (
    <Fragment>
        <Switch>
            <Route
                exact
                path={`${match.url}`}
                component={LoginContainer}
            />
            <Route
                exact
                path={`${match.url}/logout`}
                component={LogoutContainer}
            />
            <Route
                exact
                path={`${match.url}/sign-up/`}
                component={SignUpContainer}
            />
            <Route
                exact
                path={`${match.url}/sign-up/success`}
                component={SignUpSuccess}
            />
            <Route
                exact
                path={`${match.url}/verify/:token`}
                component={VerificationContainer}
            />
            <Route component={NotFound} />
        </Switch>
    </Fragment>
);

export default index;