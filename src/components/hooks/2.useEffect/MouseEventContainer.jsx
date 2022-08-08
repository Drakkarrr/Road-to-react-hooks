import React, { useState } from 'react'
import { MouseEvent } from './MouseEvent'

const MouseEventContainer = () => {
    const [display, setDisplay] = useState(true)
    return (
        <>
            <button onClick={() => setDisplay(!display)}>Toogle Display</button>
            {display && <MouseEvent />}
        </>
    )
}

export default MouseEventContainer