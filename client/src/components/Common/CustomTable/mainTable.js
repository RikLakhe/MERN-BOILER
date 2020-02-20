import React from "react";
import {Icon} from 'antd'

import "./CustomTable.sass"

const mainTable = props => {
        const {
            column,
            dataSource,
            pagination
        } = props;

        // column && column.map((columnData, columnIndex) => {
        //     data && Object.values(data).map((columnDataIn, columnIndexIn) => {
        //         console.log('here', index, column[columnIndex]['dataIndex'] ? column[columnIndex]['dataIndex'] : column[columnIndex]?.render())
        //         dataSource && dataSource.map((dataSourceData, dataSourceIndex) => {
        //             data && Object.values(data).map((dataIn, indexIn) => {
        //
        //         })
        //     })
        // });

    console.log('ggg',pagination)

        // dataSource && dataSource.map((dataSourceData, dataSourceIndex) => {
        //     column && column.map((columnData, columnIndex) => {
        //         let here = column[columnIndex]['dataIndex'];
        //         console.log('walaaaa', here);
        //         if (here) {
        //             if (dataSourceData[here]) {
        //                 console.log('here', here, dataSourceData[here]);
        //
        //             } else {
        //                 console.log('here else', here, null);
        //
        //             }
        //         } else {
        //             console.log('here2', here, column[columnIndex]);
        //             // console.log('here2',column[columnIndex]?.render());
        //         }
        //     })
        // });

        const handlePrevious = () => {
            console.log('ggggg pre')
        }

        const handleNext = () => {
            console.log('ggggg next')
        }

        return (
            <div className={'custom-table'}>
                <table className={'custom-table'}>
                    <thead>
                    {column && column.map((data, index) => {
                        return (
                            <th key={index}>{data.title}</th>
                        )
                    })}
                    </thead>
                    <tbody>
                    {/*{*/}
                    {/*    dataSource && dataSource.map((data, index) => {*/}
                    {/*        return (*/}
                    {/*            <tr key={index}>*/}
                    {/*                {*/}
                    {/*                    data && Object.values(data).map((dataIn, indexIn) => {*/}
                    {/*                        let here = column[indexIn]['dataIndex'];*/}
                    {/*                        return (*/}
                    {/*                            <td key={indexIn}>{data[here]}</td>*/}
                    {/*                        )*/}
                    {/*                    })*/}
                    {/*                }*/}
                    {/*            </tr>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                    {
                        dataSource && dataSource.map((dataSourceData, dataSourceIndex) => {
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
                        })
                    }
                    </tbody>
                </table>
                {
                    pagination &&
                    <div className="table-pagination">
                        <svg viewBox="64 64 896 896" className="custom-table-pagination-icon" data-icon="left" width="1.2em"
                             height="1.2em" fill="currentColor" aria-hidden="true" onClick={() => handlePrevious()}>
                            <path
                                d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"/>
                        </svg>
                        1 2 3 4 5
                        <svg viewBox="64 64 896 896" className="custom-table-pagination-icon" data-icon="right" width="1.2em"
                             height="1.2em" fill="currentColor" aria-hidden="true" onClick={() => handleNext()}>
                            <path
                                d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"/>
                        </svg>

                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                }
            </div>

        )
    }
;

export default mainTable;