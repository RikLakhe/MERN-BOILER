import React from "react";
import {Icon} from 'antd'
import './LeftNav.sass';

const SideNavLeft = props => {
    const {
        displayMenu,
        setDisplayMenu
    } = props;

    return (
        <div className={`app-left-nav ${displayMenu ? 'app-left-menu-active':'app-left-menu-inactive'}`} onClick={() => {
            setDisplayMenu(!displayMenu)
        }}>
            {
                displayMenu ?
                    <div className="nav-item-active">
                        <Icon className={'nav-icon'} type="menu" style={{color:'white'}}/>
                        <hr/>
                        MENU
                    </div>
                    :
                    <div className="nav-item">
                        <Icon className={'nav-icon'} type="menu" style={{color:'white'}}/>
                        MENU
                    </div>
            }

        </div>
    )
};

export default SideNavLeft;