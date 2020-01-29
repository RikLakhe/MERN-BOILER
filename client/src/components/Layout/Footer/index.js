import React from "react";

import './footer.sass';
import appConfig from "../../../constants/appConfig";

const Footer = props => {
    const {
        displayMenu
    } = props;

    return (
        <div className={`app-footer ${displayMenu ? 'app-footer-menu-active':'app-footer-menu-inactive'}`}>
            <a href={appConfig.projectLinked}>©{" "}{appConfig.projectDate}, {appConfig.projectOwn}. All Rights Reserved.</a>
        </div>
    )
};

export default Footer;