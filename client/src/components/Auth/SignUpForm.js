import React from "react";
import {Button, Icon} from "antd";

const SignUpForm = props => {
    const {
        isSignUp,
        setSignUp
    } = props;

    return (
        <div>
            Sign Up Form
            <Button size={"large"} onClick={() => setSignUp(!isSignUp)} block><Icon type="arrow-left"/>LOGIN INSTEAD</Button>
        </div>
    )
};

export default SignUpForm;