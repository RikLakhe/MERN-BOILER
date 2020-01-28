import React, {useState} from "react";

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

    return (
        <div className="container-fluid wrapper">
            <Header displayMenu={displayMenu}/>
            {
                staticPage ?
                    <div className={'app-body'}>
                        <MainStatic>
                            {props.children}
                        </MainStatic>
                    </div>
                    :
                    <div className={'app-body'}>
                        <SideNavLeft displayMenu={displayMenu} setDisplayMenu={setDisplayMenu}/>
                        <Main displayMenu={displayMenu}>
                            {props.children}
                        </Main>
                        <SideNavRight displayMenu={displayMenu} setDisplayMenu={setDisplayMenu}/>
                    </div>
            }
            <Footer displayMenu={displayMenu}/>
        </div>)
};

export default AppLayout;