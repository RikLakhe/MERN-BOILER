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
                    Do check your email address to verfiy your email address<br />
                    If your didnot recieve any kind of email please click on the <Button type={'link'}>LINK</Button> to resend.
                </p>
            </div>
        </div>
    )
}

export default verification;