import React from "react";

import './header.sass';

const Header = props => {
    const {
        displayMenu
    } = props;

    return (
        <div className={`app-header ${displayMenu ? 'app-header-menu-active':'app-header-menu-inactive'}`}>
            MERN-BOILER
        </div>
    )
};

export default Header;