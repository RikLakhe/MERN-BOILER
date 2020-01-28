import React from "react";

import './footer.sass';

const Footer = props => {
    const {
        displayMenu
    } = props;

    return (
        <div className={`app-footer ${displayMenu ? 'app-footer-menu-active':'app-footer-menu-inactive'}`}>
            ©{" "}2020, RIKLAKHE. All Rights Reserved.
        </div>
    )
};

export default Footer;