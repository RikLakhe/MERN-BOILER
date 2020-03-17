import React from 'react'
import { Knight } from './Knight'
import Square from './Square'

const Board = () => {
    return (
        <>
            <Square black />
            <Knight />
            <Square />
        </>
    )
}

export default Board;