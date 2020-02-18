import React from 'react'

import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";

const index = props => {
    return (
        <div>
            <CategoryForm />
            <CategoryList />
        </div>
    )
};

export default index;