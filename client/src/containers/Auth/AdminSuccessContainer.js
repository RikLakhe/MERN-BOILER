import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import AdminSuccess from "../../components/Auth/AdminSuccess";

import * as authService from "../../services/authService";

const AdminSuccessContainer = props => {
    /**
     * Verify administrator login
     *
     * @param {string} token
     *
     * @return response
     */
    const verifyAdminService = (token) => {
        props.actions.verifyAdminService(token)
    };

    return (
        <AdminSuccess
            verifyAdminService={verifyAdminService}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminSuccessContainer);
