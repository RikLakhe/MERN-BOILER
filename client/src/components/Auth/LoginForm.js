import React from "react";
import {Button, Icon, Form, Input} from "antd";

import "./LoginForm.sass"

import LogoImage from "../../assets/lakhemern.png"
import {isEmpty} from "../../utils/commonUtils";
import MainMessage from "../Common/CustomMessage";
import history from "../../utils/history";

const FormItem = Form.Item;

const LoginForm = props => {
    const {
        login,
        form: {
            getFieldDecorator,
            validateFields,
            resetFields,
        },
        authError,
    } = props;

    const loginSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                login(values)
            }
        })
    };

    return (
        <div className={"login-form"}>
            <div className="logo">
                <img src={LogoImage} alt="Logo"/>
            </div>
            <hr/>

            {
                authError && !isEmpty(authError) && <MainMessage type={authError.type} message={authError.message}/>
            }

            <Form
                className="login"
                onSubmit={loginSubmit}
            >
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please enter your Username'}],
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
                        rules: [{required: true, message: 'Please enter your Password'}],
                    })(
                        <Input
                            size="large"
                            prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </FormItem>
                <Button
                    type={'link'}
                    onClick={() => {
                        resetFields();
                        history.push("/sign-up")
                    }}
                    className={'login-signup-link'}
                >
                    SIGN UP <Icon type="edit"/>
                </Button>
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