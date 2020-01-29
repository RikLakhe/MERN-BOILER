import React from "react";
import {Icon} from 'antd'
import {Link} from "react-router-dom";

import './LeftNav.sass';
import LogoImage from "../../../assets/lakhemern.png"

import menuRoute from "../../../constants/menuRoute";

const SideNavLeft = props => {
    const {
        displayMenu,
        setDisplayMenu
    } = props;

    return (
        <div className={`app-left-nav ${displayMenu ? 'app-left-menu-active' : 'app-left-menu-inactive'}`}>
            {
                displayMenu ?
                    <div className="nav-item-active">
                        <div className="menu-icon">
                            <img src={LogoImage} alt="Logo" />
                            <Icon
                                className={'nav-icon'}
                                type="close" style={{color: 'white'}}
                                onClick={() => {
                                    setDisplayMenu(!displayMenu)
                                }}/>
                        </div>
                        <hr/>
                        <ul>
                            {
                                menuRoute &&
                                menuRoute.map(
                                    menuItem => {
                                        return (
                                            <li key={menuItem.menuKey}><Link to={menuItem.route}><Icon type={menuItem.icon} className={'menu-route-icon'}/>{menuItem.menuName}</Link></li>
                                        )
                                    })
                            }
                        </ul>
                        <hr/>
                    </div>
                    :
                    <div className="nav-item" onClick={() => {
                        setDisplayMenu(!displayMenu)
                    }}>
                        <Icon className={'nav-icon'} type="menu" style={{color: 'white'}}/>
                        MENU
                    </div>
            }

        </div>
    )
};

export default SideNavLeft;