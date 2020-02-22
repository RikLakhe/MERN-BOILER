import React, {useEffect} from "react";


const CategoryList = props =>{
    const {listCategory} = props;

    useEffect(()=>{
        listCategory()
    },[]);

    return (
        <div>
        </div>
    )
};

export default CategoryList;