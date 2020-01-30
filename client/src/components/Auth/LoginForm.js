import React from "react";
import {Button, Icon} from "antd";

import "./Login.sass"

import LogoImage from "../../assets/lakhemern.png"

const LoginForm = props => {
    const {
        isSignUp,
        setSignUp,
        login,
    } = props;

    return (
        <div className={"login-form"}>
            <div className="logo">
                <img src={LogoImage} alt="Logo"/>
            </div>
            <hr/>
            <Button type={'link'} onClick={() => setSignUp(!isSignUp)} style={{float: 'right'}}>SIGN UP <Icon
                type="edit"/> </Button>
            <Button size={"large"} className={'login-button'} onClick={() => {
                login({hhhh: 'hhhh'});
                // setSignUp(!isSignUp);
            }} block>LOGIN<Icon
                type="arrow-right"/> </Button>
        </div>
    )
};

export default LoginForm;