import React, { useEffect } from 'react'
import { Button } from 'antd'

import "./Verification.sass"

import { successIcon, failIcon } from '../../constants/appConfig'
import { isEmpty } from '../../utils/commonUtils'

const useVerification = props => {
    const {
        match: { params: { token } },
        authError,
        verifyResend
    } = props;

    useEffect(() => {
        const {
            match: { params: { token } },
            verify,
        } = props;

        verify(token)
    }, [])

    return authError && !isEmpty(authError) ? (
        <div className={"verification"}>
            <div className="logo" >
                <img src={failIcon} widht={80} height={80} alt="Logo" />
            </div>
            <div>
                <h3>Verification Failed !</h3>
                <p>
                    Do check your email address to verfiy your email address<br />
                            If your didnot recieve any kind of email please click on the <Button type={'link'} onClick={() => verifyResend(token)}>LINK</Button> to resend.
                    </p>
            </div>
        </div>
    ) : (
            <div className={"verification"}>
                <div className="logo" >
                    <img src={successIcon} widht={80} height={80} alt="Logo" />
                </div>
                <div>
                    <h3>Verification successful !</h3>
                    <p>
                        Thank you for verifying your email acount.<br />
                        <Button type={'link'} href={"/auth"}>LOGIN</Button> to resend.
                    </p>
                </div>
            </div>
        )

}

export default useVerification;