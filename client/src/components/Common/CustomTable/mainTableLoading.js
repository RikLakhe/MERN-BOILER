import React from "react";

import "./CustomTableLoading.sass";

const TableLoading = props => {
    return <tr><td colSpan="100%"><div className={'loading-table'}><div /><div /><div /></div></td></tr>
};

export default TableLoading;