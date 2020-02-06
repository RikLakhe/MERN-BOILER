import React from "react";

import Auth from "../../components/Auth";

import {loginService} from "../../services/authService"

const AuthContainer = props => {
    /**
     * Call Login service
     *
     * @param {object} formData
     *
     * @return response
     */
    const login = (formData) => {
        return loginService(formData)
    }

    return (
        <Auth
            login={login}
            {...props}
        />
    )
};

export default AuthContainer;