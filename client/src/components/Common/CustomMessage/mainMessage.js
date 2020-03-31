import React from "react";

import {error,warning,info} from "./customUtils"

import "./CustomMessage.sass"

const useMainMessage = props =>{
    const {
        type,
        message
    }= props;

    return (
        <div className={`custom-message custom-message-${type}`}>
            <img
                height={'20em'}
                width={'20em'}
                src={ type === 'error' ? (error) :
                    type === 'warning' ? (warning) :
                    type === 'info' ? (info) : (error)
                }
                alt={'type'}
            />
            {message}
        </div>
    )
};

export default useMainMessage;