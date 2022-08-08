import React from 'react'

const ClickHandler = () => {
    const clickHandler = () => {
        console.log('Clicked')
    }
    return (
        <button onClick={clickHandler}>Click Me</button>
    )
}

export default ClickHandler