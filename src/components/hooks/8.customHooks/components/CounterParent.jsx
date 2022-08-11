import React from 'react'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'

const CounterParent = () => {
    return (
        <div>
            <CounterOne />
            <br />
            <CounterTwo />
        </div>
    )
}

export default CounterParent