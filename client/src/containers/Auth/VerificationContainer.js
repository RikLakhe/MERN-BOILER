import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Verification from "../../components/Auth/Verification";

import * as authService from "../../services/authService";

const VerificationContainer = props => {

    return (
        <Verification
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
