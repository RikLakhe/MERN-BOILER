import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Verification from "../../components/Auth/Verification";

import * as authService from "../../services/authService";

const VerificationContainer = props => {
    /**
        * Verify
        *
        * @param {string} token
        *
        */
    const verify = (token) => {
        props.actions.verifyService(token)
    };

    /**
        * Verify
        *
        * @param {string} token
        *
        */
    const verifyResend = (token) => {
        props.actions.verifyResendService(token)
    };

    return (
        <Verification
            verify={verify}
            verifyResend={verifyResend}
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

export default connect(mapStateToProps, mapDispatchToProps)(VerificationContainer);
