import React from "react";

import './header.sass';
import {API_URL} from "../../../constants/appConfig";

const Header = props => {
    const {
        displayMenu
    } = props;

    console.log('here',API_URL);

    return (
        <div className={`app-header ${displayMenu ? 'app-header-menu-active':'app-header-menu-inactive'}`}>
            MERN-BOILER
        </div>
    )
};

export default Header;