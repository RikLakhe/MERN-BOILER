import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Auth from "../../components/Auth";

import * as authService from "../../services/authService";

const AuthContainer = props => {
    /**
     * Call Login service
     *
     * @param {object} formData
     *
     * @return response
     */
    const login = (formData) => {
        props.actions.loginService(formData)
    };

    return (
        <Auth
            login={login}
            {...props}
        />
    )
};

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({

});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                authService,
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
