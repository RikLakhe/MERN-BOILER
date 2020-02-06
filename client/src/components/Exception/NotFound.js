import React from "react";
import {Link, withRouter} from 'react-router-dom';
import {Button} from 'antd';

import Sick from "../../assets/exception.png";
import './exception.sass';

const NotFound = () => {
    return (
        <div className="page-err">
            <div>
                <div className="err-container text-center">
                    <div className="err-code-container">
                        <img src={Sick} alt={'ERROR'}/>
                        <div className="err-code">
                            {' '}
                            <h1>403</h1>{' '}
                        </div>
                    </div>
                    <h2>Sorry, page not found.</h2>
                    <Link to={'/'}>
                        <Button block>Go Back to Dashboard</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NotFound);
