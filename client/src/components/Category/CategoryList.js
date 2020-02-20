import React from "react";

import CustomTable from '../Common/CustomTable'

const dataSource = [
    {
        id3: 'appp3',
        id: 'appp1',
        id2: 'appp2',
        id4: 'appp4',
    },
    {
        id2: 'lolololo2',
        id: 'lolololo1',
        id4: 'lolololo4',
        id3: 'lolololo3',
    },
    {
        id: 'totlllooo1',
        id4: 'totlllooo2',
        id3: 'totlllooo3',
        id2: 'totlllooo4',
    }
];

const column = [
    {
        title: 'header 11',
        dataIndex: 'id',
    },
    {
        title: 'header 12',
        dataIndex: 'id2',
    },
    {
        title: 'header 13',
        dataIndex: 'id3',
    },
    {
        title: 'header 14',
        dataIndex: 'id4',
    },
    {
        title: 'actions',
        render: (record,index)=>{
            return <button onClick={()=> console.log('clicked on',record)}>test</button>
        }
    }
]

const pagination = {
    pageNumber : 2,
    pageSize: 5,
    totalRecords: 30,
}

const CategoryList = props =>{
    return (
        <div>
            <CustomTable
                column={column}
                dataSource={dataSource}
                pagination={pagination}
            />
        </div>
    )
};

export default CategoryList;