import React from "react";
import {Icon} from "antd";

import './RightNav.sass';

const SideNavRight = props => {
    const {
        displayMenu,
    } = props;

    return (
        <div className={'app-right-nav'}>
            <div className="nav-item">
                <Icon className={'nav-icon'} type="up" />
                <Icon className={'nav-icon'} type="down" />
            </div>
        </div>
    )
};

export default SideNavRight;