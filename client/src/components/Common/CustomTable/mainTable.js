import React from "react";

import "./CustomTable.sass"

const mainTable = props => {
    const {
        column,
        dataSource
    } = props;

    return (
        <table className={'custom-table'}>
            <thead>
            {column && column.map((data, index) => {
                return (
                    <th key={index}>{data.title}</th>
                )
            })}
            </thead>
            <tbody>
            {
                dataSource && dataSource.map((data, index) => {
                    return (
                        <tr key={index}>
                            {
                                data && Object.values(data).map((dataIn, indexIn) => {
                                    let here = column[indexIn]['dataIndex'];
                                    return (
                                        <td key={indexIn}>{data[here]}</td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={column.length} className={'pagination'}>pagination</td>
                </tr>
            </tfoot>
        </table>
    )
};

export default mainTable;