import React from "react";

import './RightNav.sass';

const SideNavRight = props => {
    const {
        displayMenu,
        setDisplayMenu
    } = props;

    return (
        <div className={'app-left-nav'} onClick={() => {
            setDisplayMenu(!displayMenu)
        }}>
            <div className={'nav-item'}>
                This is nav items
            </div>
        </div>
    )
};

export default SideNavRight;