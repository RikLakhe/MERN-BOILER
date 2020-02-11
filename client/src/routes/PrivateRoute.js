import React from "react";
import {Route, Redirect} from "react-router-dom"
import {isAuthenticated} from "../utils/authUtils";

const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            if (!isAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return (
                    <Redirect
                        to={{
                            pathname: '/logout',
                            state: {from: props.location},
                        }}
                    />
                );
            }
            return (
                <Layout>
                    <Component {...props} />
                </Layout>
            );
        }}
    />
);

export default PrivateRoute;