import React, { useState } from "react";

import "./layout.sass";

import Header from "./Header";
import Main from "./Main";
import MainStatic from "./Main/MainStatic";
import SideNavLeft from "./SideNavLeft";
import SideNavRight from "./SideNavRight";
import Footer from "./Footer";

const AppLayout = props => {
    const [displayMenu, setDisplayMenu] = useState(false);

    const {
        staticPage
    } = props;

    const handleMenuSelect = () => {
        setDisplayMenu(!displayMenu)
    }

    return (
        <div className="container-fluid wrapper">
            <Header displayMenu={displayMenu} />
            {
                staticPage ?
                    <div className={'app-body'}>
                        <MainStatic>
                            {props.children}
                        </MainStatic>
                    </div>
                    :
                    <div className={'app-body'}>
                        <SideNavLeft displayMenu={displayMenu} handleMenuSelect={handleMenuSelect} />
                        <Main displayMenu={displayMenu}>
                            {props.children}
                        </Main>
                        <SideNavRight displayMenu={displayMenu} handleMenuSelect={handleMenuSelect} />
                    </div>
            }
            <Footer displayMenu={displayMenu} />
        </div>)
};

export default AppLayout;