import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SignUpSuccess from "../../components/Auth/SignUpSuccess";

import * as authService from "../../services/authService";

const SignUpSuccessContainer = props => {

    return (
        <SignUpSuccess
            {...props}
        />
    )
};

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    auth: state.auth.payload,
    authError: state.auth.errors,
    authLoading: state.auth.loading
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSuccessContainer);
