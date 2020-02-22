import React, {useEffect} from "react";

import Loader from "../Layout/Loading/Loader";

const Logout = props => {
    const {
        logout
    } = props;

    useEffect(() => {
        logout();
    }, []);

    return (
        <div>
            <Loader/>
        </div>
    )
};

export default Logout;