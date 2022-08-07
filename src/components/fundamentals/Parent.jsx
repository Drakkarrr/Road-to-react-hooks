import React from 'react'
import Child from './Child'

const Parent = () => {
    const greetParent = () => {
        alert('Hello from parent')
    }
    return (
        <Child greetHandler={greetParent} />
    )
}

export default Parent