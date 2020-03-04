import React from 'react'
import {Form, Button, Input, Checkbox, Row, Col, Switch} from "antd";

import "./Form.sass"
import {CODE_REGEX} from "../../constants/appConfig";

const FormItem = Form.Item;

const CategoryForm = props => {
    const {
        form: {
            getFieldDecorator,
            validateFields,
            resetFields
        },
        category,
        addCategory,
        listCategory,
        cleanSingleCategory,
    } = props;

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
                values.categoryCode = values.categoryCode.toUpperCase();
                addCategory(values).then(data => {
                    resetFields();
                    listCategory()
                })
            }
        })
    };

    const handleCancel = (e) => {
        e.preventDefault();
        resetFields();
        cleanSingleCategory();
    };

    return (
        <div className={'add-form'}>
            <Form
                onSubmit={handleSubmit}
                onReset={handleCancel}
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
                                    initialValue: category?.categoryCode ? category?.categoryCode : undefined,
                                    rules: [
                                        {
                                            required: true,
                                            message: "Code is required",
                                        },
                                        {
                                            pattern: new RegExp(CODE_REGEX),
                                            message: "Invalid",
                                        },
                                    ],
                                })(
                                    <Input type="text" maxLength={3}/>
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
                                    initialValue: category?.categoryName ? category?.categoryName : undefined,
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
                                    initialValue: category?.isCategoryActive ? category?.isCategoryActive : undefined,
                                    valuePropName: 'checked',
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                    </Col>
                    <Col className={'add-form-button'} sm={4} md={4} lg={4}>
                        {
                            category?._id ?
                                <Button block>Update</Button> :
                                <Button htmlType={"submit"} block>Add</Button>
                        }
                    </Col>
                    <Col className={'add-form-button'} sm={4} md={4} lg={4}>
                        <Button type={'ghost'} htmlType={"reset"} block>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
};

export default Form.create()(CategoryForm);