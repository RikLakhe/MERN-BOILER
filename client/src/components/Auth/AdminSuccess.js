import React, {useEffect} from "react";

import "./AdminSuccess.sass"

const AdminSuccess = props =>{
    const {
        match: { params: { token } },
        verifyAdminService,
    }= props;

    useEffect(()=>{
        console.log('admin',token)
        verifyAdminService(token)
    },[])

    return (
        <div>Success</div>
    )
};

export default AdminSuccess;