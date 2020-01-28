import React, {useState} from "react";

import "./layout.sass";

import Header from "./Header";
import Main from "./Main";
import SideNavLeft from "./SideNavLeft";
import SideNavRight from "./SideNavRight";
import Footer from "./Footer";

const AppLayout = props => {
    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <div className="container-fluid wrapper">
            <Header displayMenu={displayMenu}/>
            <div className={'app-body'}>
                <SideNavLeft displayMenu={displayMenu} setDisplayMenu={setDisplayMenu}/>
                <Main displayMenu={displayMenu}/>
                <SideNavRight displayMenu={displayMenu} setDisplayMenu={setDisplayMenu}/>
            </div>
            <Footer displayMenu={displayMenu}/>
        </div>)
};

export default AppLayout;