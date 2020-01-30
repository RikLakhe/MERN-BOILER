import React from "react";
import {Button, Icon, Form, Input} from "antd";

import "./Login.sass"

import LogoImage from "../../assets/lakhemern.png"

const FormItem = Form.Item;

const LoginForm = props => {
    const {
        isSignUp,
        setSignUp,
        login,
        form
    } = props;

    const {
        getFieldDecorator,
        validateFields,
    } = form;

    const loginSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            login(values);
        })
    };

    return (
        <div className={"login-form"}>
            <div className="logo">
                <img src={LogoImage} alt="Logo"/>
            </div>
            <hr/>
            <Form
                className="login"
                onSubmit={loginSubmit}
            >
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your Username'}],
                    })(
                        <Input
                            size="large"
                            prefix={<Icon type="user" style={{fontSize: 13}}/>}
                            placeholder="Username"
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password'}],
                    })(
                        <Input
                            size="large"
                            prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </FormItem>
                <Button type={'link'} onClick={() => setSignUp(!isSignUp)} className={'login-signup-link'}>SIGN UP <Icon
                    type="edit"/> </Button>
                <Button
                    className={'login-button'}
                    size={"large"}
                    htmlType={'submit'}
                    block
                >
                    LOGIN<Icon type="arrow-right"/>
                </Button>
            </Form>
        </div>
    )
};

export default Form.create()(LoginForm);