import React, { useEffect } from "react";

import CustomTable from "../Common/CustomTable";
import { isEmpty } from "../../utils/commonUtils";

const List = props => {
    const {
        users,
        usersError,
        usersLoading,
        usersPagination,
        listUsers
    } = props

    useEffect(() => {
        listUsers();
    }, []);

    const column = [
        {
            title: `Name`,
            dataIndex: 'fullName',
        }, {
            title: `User Name`,
            dataIndex: 'userName',
        }, {
            title: `User Type`,
            dataIndex: 'permission',
        }, {
            title: `Verified`,
            render: (record, index) => {
                if (record?.isUserVerified) {
                    return 'YES'
                } else {
                    return 'NO'
                }
            }
        }, {
            title: `Action`,
            render: (record, index) => {
                return <div className={'table-action'}>
                    {/* <button className={'table-edit'} onClick={() => handleCategoryEdit(record._id)}>Edit</button> */}
                    {/* <button className={'table-delete'} onClick={() => handleCategoryDelete(record._id)}>Delete</button> */}
                </div>
            }
        }];

    const handleUserTableChange = (pageData) => {
        listUsers({ pageData })
    };

    return (
        <div>
            <CustomTable
                column={column}
                dataSource={users instanceof Array ? users : []}
                pagination={!isEmpty(usersPagination) && usersPagination}
                handleTableChange={handleUserTableChange}
                loading={usersLoading}
            />
        </div>
    );
}

export default List;