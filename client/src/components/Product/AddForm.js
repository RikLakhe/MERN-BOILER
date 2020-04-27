import React from "react"

import {Form, Input} from "antd"
import {withRouter} from "react-router";

const FormItem = Form.Item

const AddForm = props => {
    const {form: {getFieldDecorator}} = props

    return (
        <Form>
            <FormItem label={"Name"}>{getFieldDecorator('name',{})(<Input />)}</FormItem>
        </Form>
    )
}

export default Form.create()(AddForm);