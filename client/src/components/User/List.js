import React, {useEffect} from "react";

const List = props => {
    const {
        users,
        usersError,
        usersLoading,
        listUsers
    } = props

    useEffect(() => {
        listUsers();
    }, []);

    return (
        <div>This is user</div>
    );
}

export default List;