import React from 'react'

const Square = ({ black }) => {
    const fill = black ? 'black' : 'white';
    return <div style={{ backgroundColor: fill }} />
}

export default Square;