import React from 'react'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'


const ComponentParent = () => {
    return (
        <div>
            <ComponentOne />
            <ComponentTwo />
        </div>
    )
}

export default ComponentParent