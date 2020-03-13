import React from 'react'
import { Button } from 'antd'

import "./SignUpSuccess.sass"

import { successIcon } from '../../constants/appConfig'

const verification = props => {
    return (
        <div className={"signup-success"}>
            <div className="logo" >
                <img src={successIcon} widht={80} height={80} alt="Logo" />
            </div>
            <div>
                <h3>Sign up was successful !</h3>
                <p>
                    Login with provided username and password<br />
                    Please click on the <Button type={'link'} href={"#/auth"}>LINK</Button> to login.
                </p>
            </div>
        </div>
    )
}

export default verification;