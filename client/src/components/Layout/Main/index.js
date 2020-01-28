import React from "react";

import './Main.sass'

const Main = props => {
    const {
        displayMenu
    }= props;

    return (
        <div className={`app-main`}>
            <div className={`main-container ${displayMenu ? 'main-container-menu-active' : 'main-container-menu-inactive'}`}>
                Main
                asdf
                as
                f
                saf
                sa
                f
                sa
                df
                saf
                sa
                df
                as
                f
                asdf
                sa
                f
                sa
                f
                <div className="edd">
                    asdfasdfsadfsaf
                </div>
            </div>
        </div>
    )
};

export default Main;