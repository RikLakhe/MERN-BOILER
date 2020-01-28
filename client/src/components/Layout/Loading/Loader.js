import React from 'react';
import {Spin} from 'antd';

const Loader = ({center = false}) => {
    if (center) {
        return (
            <div style={{paddingTop: 100, textAlign: 'center'}}>
                <Spin size="large"/>
            </div>
        )
    }
    return (
        <Spin size="large"/>
    )

};

export default Loader;
