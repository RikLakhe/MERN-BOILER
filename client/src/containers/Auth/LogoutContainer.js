import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Logout from "../../components/Auth/Logout";

import * as authService from "../../services/authService";

const LogoutContainer = props => {
    /**
     * Call Logout service
     *
     */
    const logout = () => {
        props.actions.logoutService()
    };

    return (
        <Logout
            logout={logout}
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);