import React from 'react'
import UseContext from './UseContext'
import CreateContext from './CreateContext'

const ChildContext = () => {
    return (
        <>
            <UseContext />
            <CreateContext />
        </>
    )
}

export default ChildContext