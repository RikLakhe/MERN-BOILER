import React, {useEffect} from 'react'

import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import {isEmpty} from "../../utils/commonUtils";
import MainMessage from "../Common/CustomMessage";

const useIndex = props => {
    const {categoryError, cleanCategory,cleanSingleCategory} = props;

    useEffect(()=>{
        cleanCategory();
        cleanSingleCategory();

        return () =>{
            cleanCategory();
            cleanSingleCategory();
        }
    },[]);

    return (
        <div>
            {
                categoryError && !isEmpty(categoryError) && <MainMessage type={categoryError.type} message={categoryError.message} />
            }
            <CategoryForm {...props}/>
            <CategoryList {...props}/>
        </div>
    )
};

export default useIndex;