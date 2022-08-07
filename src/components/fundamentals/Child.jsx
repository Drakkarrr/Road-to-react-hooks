import React from 'react'

const Child = ({ greetHandler }) => {
    return (
        <button onClick={greetHandler}>I am Child</button>
    )
}

export default Child