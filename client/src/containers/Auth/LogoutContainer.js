import React from "react";

import Logout from "../../components/Auth/Logout";

import {logoutService} from "../../services/authService"

const AuthContainer = props => {
    /**
     * Call Logout service
     *
     */
    const logout = () => {
        return logoutService()
    }

    return (
        <Logout
            logout={logout}
            {...props}
        />
    )
};

export default AuthContainer;