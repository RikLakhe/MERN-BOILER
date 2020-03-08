import React from "react";
import { Icon } from 'antd'
import { Link } from "react-router-dom";

import './LeftNav.sass';
import LogoImage from "../../../assets/lakhemern.png"

import menuRoute from "../../../constants/menuRoute";
import { isAllowed, isAuthenticated } from "../../../utils/authUtils";
import { isEmpty } from "../../../utils/commonUtils";

const SideNavLeft = props => {
    const {
        displayMenu,
        handleMenuSelect
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
                                type="close" style={{ color: 'white' }}
                                onClick={() => {
                                    handleMenuSelect(false)
                                }} />
                        </div>
                        <hr />
                        <ul>
                            {
                                menuRoute &&
                                menuRoute.map(
                                    menuItem => {
                                        if (menuItem.permission) {
                                            if (isAllowed(menuItem.permission)) {
                                                return (
                                                    <li key={menuItem.menuKey}>
                                                        <Link to={menuItem.route} onClick={handleMenuSelect}>
                                                            <Icon
                                                                type={menuItem.icon}
                                                                className={'menu-route-icon'}
                                                            />
                                                            {menuItem.menuName}

                                                        </Link>
                                                    </li>
                                                )
                                            } else {
                                                return null;
                                            }
                                        } else {
                                            return (
                                                <li key={menuItem.menuKey}>
                                                    <Link to={menuItem.route} onClick={handleMenuSelect}>
                                                        <Icon
                                                            type={menuItem.icon}
                                                            className={'menu-route-icon'}
                                                        />
                                                        {menuItem.menuName}
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })
                            }
                            {
                                isAuthenticated() ?
                                    <li key={'logout'}>
                                        <Link to={"/logout"}>
                                            <Icon
                                                type={"logout"}
                                                className={'menu-route-icon'
                                                }
                                            />
                                            Logout
                                        </Link>
                                    </li>
                                    :
                                    <li key={'login'}>
                                        <Link to={"/login"}>
                                            <Icon
                                                type={"login"}
                                                className={'menu-route-icon'
                                                }
                                            />
                                            Login
                                        </Link>
                                    </li>
                            }
                        </ul>
                        <hr />
                    </div>
                    :
                    <div className="nav-item" onClick={() => {
                        handleMenuSelect(!displayMenu)
                    }}>
                        <Icon className={'nav-icon'} type="menu" style={{ color: 'white' }} />
                        MENU
                    </div>
            }

        </div>
    )
};

export default SideNavLeft;