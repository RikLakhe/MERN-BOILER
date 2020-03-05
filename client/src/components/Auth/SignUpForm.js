import React from "react";
import {Button, Form, Icon, Input, Select} from "antd";

import "./SignUpForm.sass"

import history from "../../utils/history";
import {isEmpty} from "../../utils/commonUtils";
import MainMessage from "../Common/CustomMessage";
import {femaleIcon, maleIcon} from "../../constants/appConfig";

const FormItem = Form.Item;
const Option = Select.Option;

const SignUpForm = props => {
    const {
        signUp,
        form: {
            getFieldDecorator,
            validateFields,
            getFieldValue,
            resetFields,
        },
        authError,
    } = props;

    const formItemLayout = {
        labelCol: {ls: {span: 8}, md: {span: 8}, sm: {span: 10}, xs: {span: 6}},
        wrapperCol: {ls: {span: 16}, md: {span: 16}, sm: {span: 14}, xs: {span: 18}},
        labelAlign: 'left',
    };

    const handleConfirmPassword = (rules, value, callback) => {
        if (value === '' || null || undefined) {
            callback();
        } else {
            let testPassword = getFieldValue('password');
            if (testPassword === value) {
                callback();
            } else {
                callback('Password does not match')
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                signUp(values);
            }
        })
    };

    return (
        <div>
            {
                authError && !isEmpty(authError) && <MainMessage type={authError.type} message={authError.message}/>
            }

            <Form
                className="sign-up-form"
                onSubmit={handleSubmit}
                hideRequiredMark={true}
                colon={false}
            >
                <FormItem {...formItemLayout} label={'First Name'}>
                    {getFieldDecorator('fullName', {
                        rules: [{required: true, message: 'Please enter your name'}],
                    })(
                        <Input
                            size="large"
                            placeholder="Name"
                        />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label={'User Name'}>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please enter your user name'}],
                    })(
                        <Input
                            size="large"
                            placeholder="User Name"
                        />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label={'Email address'}>
                    {getFieldDecorator('email', {
                        rules: [{required: true, message: 'Please enter your email'}],
                    })(
                        <Input
                            size="large"
                            placeholder="Email address"
                        />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label={'Password'}>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please enter your password'}],
                    })(
                        <Input
                            size="large"
                            placeholder="Password"
                            onBlur={() => {
                                if (getFieldValue('confirmPassword')) {
                                    validateFields([`confirmPassword`], {force: true})
                                }
                            }}
                        />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label={'Confirm Password'}>
                    {getFieldDecorator('confirmPassword', {
                        rules: [
                            {required: true, message: 'Please enter your password again'},
                            {
                                validator: handleConfirmPassword
                            }
                        ],
                    })(
                        <Input
                            size="large"
                            placeholder="Confirm Password"
                        />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label={'Sex'}>
                    {getFieldDecorator('sex', {
                        rules: [{required: true, message: 'Please select your sex'}],
                    })(
                        <Select
                            size="large"
                            placeholder="Sex"
                        >
                            <Option key={'M'} value={'M'}>Male{' '}<img height={17} width={17} src={maleIcon}
                                                                        alt={'male'}/></Option>
                            <Option key={'F'} value={'F'}>Female{' '}<img height={20} width={20} src={femaleIcon}
                                                                          alt={'female'}/></Option>
                            <Option key={'O'} value={'O'}>Other</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label={'User Type'}>
                    {getFieldDecorator('permission', {
                        rules: [{required: true, message: 'Please select your account type'}],
                    })(
                        <Select
                            size="large"
                            placeholder="User Type"
                        >
                            <Option key={'ADMIN'} value={'ADMIN'}>ADMIN</Option>
                            <Option key={'PARTNER'} value={'PARTNER'}>PARTNER</Option>
                            <Option key={'CUSTOMER'} value={'CUSTOMER'}>CUSTOMER</Option>
                        </Select>
                    )}
                </FormItem>
                <Button
                    type={'link'}
                    onClick={() => {
                        resetFields();
                        history.push("/login")
                    }}
                    className={'sign-up-login-link'}
                >
                    <Icon type="arrow-left"/> Login
                </Button>
                <Button
                    className={'sign-up-button'}
                    size={"large"}
                    htmlType={'submit'}
                    block
                >
                    SIGN UP
                </Button>
            </Form>
        </div>
    )
};

export default Form.create()(SignUpForm);