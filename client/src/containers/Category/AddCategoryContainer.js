import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AddForm from '../../components/Category/AddForm'

import * as categoryService from "../../services/categoryService"

const AddCategoryContainer = props => {
    /**
     * add new category
     *
     * @param {object} formData
     *
     */
    const addCategory = formData => {
        props.actions.addCategoryService(formData)
    };

    /**
     * add new category
     *
     * @param {object} formData
     *
     */
    const listCategory = formData => {
        props.actions.listCategoryService(formData)
    };

    return (
        <AddForm
            addCategory={addCategory}
            listCategory={listCategory}
            {...props}
        />
    )
};

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({

});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                categoryService,
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryContainer);