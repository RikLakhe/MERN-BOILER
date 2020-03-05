import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import SignUpForm from "../../components/Auth/SignUpForm";

import * as authService from "../../services/authService";

const SignUpContainer = props => {
    /**
     * Sign up
     *
     * @param {object} formData
     *
     * @return response
     */
    const signUp = (formData) => {
        props.actions.signUpService(formData)
    };

    return (
        <SignUpForm
            signUp={signUp}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
