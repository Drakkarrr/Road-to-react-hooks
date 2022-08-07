import React from 'react'

const ClickHandler = () => {
    const clickHandler = () => {
        console.log('clicked')
    }
    return (
        <button onClick={clickHandler}>Click Me</button>
    )
}

export default ClickHandler