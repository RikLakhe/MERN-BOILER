import React from "react";

import AddForm from '../../components/Category/AddForm'

import {addCategoryService} from "../../services/categoryService"

const AddCategoryContainer = props => {
    /**
     * add new category
     *
     * @param {object} formData
     *
     */
    const addCategory = formData => {
        return addCategoryService(formData)
    }

    return (
        <AddForm
            addCategory={addCategory}
            {...props}
        />
    )
};

export default AddCategoryContainer;