import React, {useEffect} from "react";

import CustomTable from './../Common/CustomTable'
import {isEmpty} from "../../utils/commonUtils";

const CategoryList = props => {
    const {listCategory, categories, categoriesPage} = props;

    useEffect(() => {
        listCategory()
    }, []);

    const column = [
        {
            title: `Commission Code`,
            dataIndex: 'categoryCode',
        }, {
            title: `Commission Name`,
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
                return <div><button onClick={() => console.log('clicked on', record)}>Edit</button><button onClick={() => console.log('clicked on', record)}>Delete</button></div>
            }
        }];

    const handleCategoryTableChange = (pageData) => {
        listCategory({pageData})
    };

    return (
        <div>
            <CustomTable
                column={column}
                dataSource={categories instanceof Array ? categories : []}
                pagination={!isEmpty(categoriesPage) && categoriesPage}
                handleTableChange={handleCategoryTableChange}
            />

        </div>
    )
};

export default CategoryList;