import React from "react";

import './header.sass';
import appConfig from "../../../constants/appConfig";

const Header = props => {
    const {
        displayMenu
    } = props;

    return (
        <div className={`app-header ${displayMenu ? 'app-header-menu-active':'app-header-menu-inactive'}`}>
            {appConfig.projectName}
        </div>
    )
};

export default Header;