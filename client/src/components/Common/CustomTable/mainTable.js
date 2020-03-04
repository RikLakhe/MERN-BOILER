import React, {useEffect, useState} from "react";
import {Icon} from 'antd'

import "./CustomTable.sass"
import TableLoading from "./mainTableLoading";

const useMainTable = props => {
        const {
            column,
            dataSource,
            pagination,
            handleTableChange,
            loading,
        } = props;

        const [page, setPage] = useState(1);
        const [pageSize, setPageSize] = useState(5);
        const [pageArray, setPageArray] = useState([]);

        useEffect(() => {
            if (pagination && pagination.pageNumber && pagination.pageSize) {
                setPage(pagination.pageNumber);
                setPageSize(pagination.pageSize);
                if (pageSize === 'ALL') {
                    setPageArray(Array())
                } else {
                    if (pagination.totalRecords % pagination.pageSize > 0) {
                        setPageArray(Array(Math.floor(pagination.totalRecords / pagination.pageSize + 1)))
                    } else {
                        setPageArray(Array(Math.floor(pagination.totalRecords / pagination.pageSize)))
                    }
                }
            }else{
                setPageArray([])
            }
        }, [pagination]);

        const handlePrevious = () => {
            setPage(page - 1);
            handleTableChange({pageNumber: page - 1, pageSize: pageSize})
        };

        const handleNext = () => {
            setPage(page + 1);
            handleTableChange({pageNumber: page + 1, pageSize: pageSize})
        };

        const handleSizeChange = (option) => {
            setPageSize(option);
            handleTableChange({pageNumber: page, pageSize: option})
        };

        const handlePageChange = (pageChoice) => {
            setPageSize(pageChoice);
            handleTableChange({pageNumber: pageChoice, pageSize: pageSize})
        };

        return (
            <div className={'custom-table'}>
                <table className={'custom-table'}>
                    <thead>
                    {column && column.map((data, index) => (
                            <th key={index}>{data.title}</th>
                        )
                    )}
                    </thead>
                    <tbody>
                    {
                        loading ?
                            <TableLoading/>
                            :
                            (dataSource && dataSource.length > 0) ? dataSource.map((dataSourceData, dataSourceIndex) => {
                                return (
                                    <tr key={dataSourceIndex}>
                                        {
                                            column && column.map((columnData, columnIndex) => {
                                                let here = column[columnIndex]['dataIndex'];
                                                if (here) {
                                                    if (dataSourceData[here]) {
                                                        return <td key={columnIndex}>{dataSourceData[here]}</td>
                                                    } else {
                                                        return <td key={columnIndex}>-</td>
                                                    }
                                                } else {
                                                    return <td
                                                        key={columnIndex}>{column[columnIndex]?.render(dataSourceData, dataSourceIndex)}</td>
                                                }
                                            })
                                        }
                                    </tr>
                                )
                            }) : <tr>
                                <td colSpan="100%" className={'custom-table-noData'}>No data to display.</td>
                            </tr>

                    }
                    </tbody>
                </table>
                <div className="table-pagination">
                    {
                        pageArray && pageArray.length > 0 &&
                        <div>
                            {page !== 1 &&
                            <button className={`custom-table-pagination-icon`} onClick={handlePrevious}>
                                <svg viewBox="64 64 896 896" data-icon="left"
                                     width="1.6em"
                                     height="1.6em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"/>
                                </svg>
                            </button>}
                            {
                                Array
                                    .from(pageArray)
                                    .map((d, i) => (
                                        <button
                                            className={`custom-table-pagination-pages ${i + 1 === page ? "custom-table-pagination-pages-selected" : ""}`}
                                            disabled={i + 1 === page}
                                            onClick={() => handlePageChange(i + 1)}>
                                            {i + 1}
                                        </button>))
                            }
                            {page !== (pageArray.length) &&
                            <button className="custom-table-pagination-icon" onClick={handleNext}>
                                <svg viewBox="64 64 896 896" data-icon="right"
                                     width="1.6em"
                                     height="1.6em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"/>
                                </svg>
                            </button>}
                        </div>
                    }
                    {
                        pagination &&
                        <select className="custom-table-pagination-select" defaultValue={pagination.pageSize}
                                onChange={(e) => handleSizeChange(e.target.value)}>
                            {
                                pagination?.pageSizeOption.map((pageSizeOptionData, pageSizeOptionIndex) => <option
                                    key={pageSizeOptionData} value={pageSizeOptionData}>{pageSizeOptionData}</option>)
                            }
                        </select>
                    }
                </div>
            </div>

        )
    }
;

export default useMainTable;