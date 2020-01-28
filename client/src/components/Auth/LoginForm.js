import React from "react";
import {Button,Icon} from "antd";

const LoginForm = props =>{
    const {
        isSignUp,
        setSignUp
    } = props;

    return(
        <div>
            Login Form
            <Button size={"large"} onClick={()=>setSignUp(!isSignUp)} block>SIGN UP <Icon type="edit" /> </Button>
        </div>
    )
};

export default LoginForm;