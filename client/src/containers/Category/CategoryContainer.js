import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Category from '../../components/Category'

import * as categoryService from "../../services/categoryService"

const CategoryContainer = props => {
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
        <Category
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
    category: state.category.singlePayload,
    categories : state.category.payload,
    categoriesPage : state.category.pagination
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);