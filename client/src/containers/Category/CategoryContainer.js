import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Category from '../../components/Category'

import * as categoryAction from "../../actions/categoryAction"
import * as categoryService from "../../services/categoryService"

const CategoryContainer = props => {
    /**
     * add new category
     *
     * @param {object} formData
     *
     */
    const addCategory = formData => {
        return props.actions.addCategoryService(formData)
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

    /**
     * find single category
     *
     * @param {string} id
     *
     */
    const findCategoryByIdentifier = id => {
        props.actions.findCategoryByIdentifier(id)
    };

    /**
     * delete single category
     *
     * @param {string} id
     *
     */
    const deleteCategoryByIdentifier = id => {
        props.actions.deleteCategoryByIdentifier(id)
    };

    /**
     * find single category
     *
     */
    const cleanSingleCategory = () => {
        props.actions.singleCategoryCleanRequest()
    };

    /**
     * find single category
     *
     */
    const cleanCategory = () => {
        props.actions.categoryCleanRequest()
    };

    return (
        <Category
            cleanSingleCategory={cleanSingleCategory}
            cleanCategory={cleanCategory}
            addCategory={addCategory}
            listCategory={listCategory}
            findCategoryByIdentifier={findCategoryByIdentifier}
            deleteCategoryByIdentifier={deleteCategoryByIdentifier}
            {...props}
        />
    )
};

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    category: state.category.singlePayload,
    categoryError: state.category.singleErrors,
    categories: state.category.payload,
    categoriesPage: state.category.pagination,
    categoriesLoading: state.category.loading
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                categoryAction,
                categoryService,
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);