import React from 'react'
import {Form, Button, Input, Checkbox, Row, Col, Switch} from "antd";

import "./Form.sass"

const FormItem = Form.Item;

const AddForm = props => {
    const {
        form,
        addCategory
    } = props;

    const {
        getFieldDecorator,
        validateFields
    } = form;

    const formItemLayout = {
        labelCol:
            {
                xs: {span: 8},
                sm: {span: 8},
                md: {span: 8},
                lg: {span: 8}
            },
        wrapperCol:
            {
                xs: {span: 15},
                sm: {span: 15},
                md: {span: 15},
                lg: {span: 15}
            },
        labelAlign: 'right',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                addCategory(values);
            }
        })
    }

    return (
        <div className={'add-form'}>
            <Form
                onSubmit={handleSubmit}
                className="commission-add-form"
                layout="horizontal"
                colon={false}
            >
                <Row gutter={24}>
                    <Col sm={24} md={4} lg={4}>
                        <FormItem
                            {...formItemLayout}
                            label={"Code"}
                        >
                            {
                                getFieldDecorator('categoryCode', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "Code is required",
                                        },
                                    ],
                                })(
                                    <Input type="text"/>
                                )
                            }
                        </FormItem>
                    </Col>
                    <Col sm={24} md={8} lg={8}>
                        <FormItem
                            {...formItemLayout}
                            label={"Name"}
                        >
                            {
                                getFieldDecorator('categoryName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "Name is required",
                                        },
                                    ],
                                })(
                                    <Input type="text"/>
                                )
                            }
                        </FormItem>
                    </Col>
                    <Col sm={24} md={4} lg={4}>
                        <FormItem
                            {...formItemLayout}
                            label={"Status"}
                        >
                            {
                                getFieldDecorator('isCategoryActive', {
                                    valuePropName: 'checked',
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                    </Col>
                    <Col className={'add-form-button'} sm={4} md={4} lg={4}>
                        <Button htmlType={"submit"} block>Add</Button>
                    </Col>
                    <Col className={'add-form-button'} sm={4} md={2} lg={2}>
                        <Button type={'danger'} htmlType={"submit"} block>Delete</Button>
                    </Col>
                    <Col className={'add-form-button'} sm={4} md={2} lg={2}>
                        <Button type={'ghost'} htmlType={"submit"} block>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
};

export default Form.create()(AddForm);