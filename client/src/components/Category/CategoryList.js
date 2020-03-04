import React, {useEffect} from "react";

import "./CategoryList.sass"

import CustomTable from './../Common/CustomTable'
import {isEmpty} from "../../utils/commonUtils";

const CategoryList = props => {
    const {
        categories,
        categoriesPage,
        categoriesLoading,
        listCategory,
        findCategoryByIdentifier,
        deleteCategoryByIdentifier,
        cleanSingleCategory,
    } = props;

    useEffect(() => {
        listCategory()
    }, []);

    const column = [
        {
            title: `Category Code`,
            dataIndex: 'categoryCode',
        }, {
            title: `Category Name`,
            dataIndex: 'categoryName',
        }, {
            title: `Active`,
            render: (record, index) => {
                if (record?.isCategoryActive) {
                    return 'YES'
                } else {
                    return 'NO'
                }
            }
        }, {
            title: `Action`,
            render: (record, index) => {
                return <div className={'table-action'}>
                    <button className={'table-edit'} onClick={() => handleCategoryEdit(record._id)}>Edit</button>
                    <button className={'table-delete'} onClick={() => handleCategoryDelete(record._id)}>Delete</button>
                </div>
            }
        }];

    const handleCategoryTableChange = (pageData) => {
        listCategory({pageData})
    };

    const handleCategoryDelete = (id) => {
        deleteCategoryByIdentifier(id);
        cleanSingleCategory();
        listCategory()
    };

    const handleCategoryEdit = (id) => {
        findCategoryByIdentifier(id)
    };

    return (
        <div>
            <CustomTable
                column={column}
                dataSource={categories instanceof Array ? categories : []}
                pagination={!isEmpty(categoriesPage) && categoriesPage}
                handleTableChange={handleCategoryTableChange}
                loading={categoriesLoading}
            />

        </div>
    )
};

export default CategoryList;