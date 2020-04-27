import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import AddFormContainer from "./AddFormContainer"
import EditFormContainer from "./EditFormContainer"
import ListContainer from "./ListContainer"
import NotFound from "../Exception/NotFoundContainer";

const Product = ({ match }) => (
    <Fragment>
        <Switch>
            <Route
                exact
                path={`${match.url}`}
                component={ListContainer}
            />
            <Route
                exact
                path={`${match.url}/add`}
                component={AddFormContainer}
            />
            <Route
                exact
                path={`${match.url}/edit/:id`}
                component={EditFormContainer}
            />
            <Route component={NotFound} />
        </Switch>
    </Fragment>
);

export default Product;