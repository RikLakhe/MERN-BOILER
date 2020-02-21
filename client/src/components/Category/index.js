import React from 'react'

import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";

const index = props => {
    return (
        <div>
            <CategoryForm {...props}/>
            <CategoryList {...props}/>
        </div>
    )
};

export default index;