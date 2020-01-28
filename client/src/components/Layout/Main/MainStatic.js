import React from "react";

import './Main.sass'

const MainStatic = props => {
    return (
        <div className={`app-main`}>
            <div className={`main-container-static`}>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default MainStatic;