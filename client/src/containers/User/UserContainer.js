import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import List from "../../components/User/List";

import * as userService from "../../services/userService";

const UserContainer = props => {
    /**
     * List users
     *
     * @param {object} formData
     *
     * @return response
     */
    const listUsers = (formData) => {
        props.actions.listUserService(formData)
    };

    return (
        <List
            listUsers={listUsers}
            {...props}
        />
    )
};

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    users: state.user.payload,
    usersPagination: state.user.pagination,
    usersError: state.user.errors,
    usersLoading: state.user.loading
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                userService,
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
